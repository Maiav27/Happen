
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'
import axios from 'axios';

const Page11 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag11, setPag11] = useState(FormStore.IE[0] ? FormStore.IE[0] : '')
  
    function salvarRadio(){
      FormStore.IE[0]  = pag11;
      SetFormStore(FormStore);

      axios.post('http://localhost:8080/respostas',
      {
         pontuacao : pag11,
      }
      ).then(salvaAprendiz => 
          console.log(salvaAprendiz)
      );
    } 
 return(
    <div id="question-11">
    <h2>Questão 11</h2>
    <h3>Conheço o conceito de mundo MUVUCA e como ele é aplicado as empresas. </h3>
    <input id="question-2-answer-a" type="radio" name="favelang" checked={pag11 === 1}  onChange={()=>setPag11(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag11 === 0.75}  onChange={()=>setPag11(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag11 === 0.25}  onChange={()=>setPag11(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag11 === 0}  onChange={()=>setPag11(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page12'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page10'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page11