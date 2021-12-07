
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'
import axios from 'axios';

const Page12 = () => {
  const FormStore = useStoreState(state => state);

  const SetFormStore = useStoreActions(state => state.setForm);
  const [pag12, setPag12] = useState(FormStore.IE[1] ? FormStore.IE[1] : '')

  function salvarRadio(){
    FormStore.IE[1]  = pag12;
    SetFormStore(FormStore);

    axios.post('http://localhost:8080/respostas',
    {
       pontuacao : pag12,
    }
    ).then(salvaAprendiz => 
        console.log(salvaAprendiz)
    );
  } 
 return(
    <div id="question-12">
            <h2>Inteligência Emocional</h2>
            <h3>Entendo que o autoconhecimento é a base para o desenvolvimento da 
              inteligência emocional. </h3>
              <input id="question-2-answer-a" type="radio" name="favelang" checked={pag12 === 1}  onChange={()=>setPag12(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag12 === 0.75}  onChange={()=>setPag12(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag12 === 0.25}  onChange={()=>setPag12(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag12 === 0}  onChange={()=>setPag12(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page13'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page11'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page12