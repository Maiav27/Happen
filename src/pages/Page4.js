import {Link} from 'react-router-dom'
 //import  page2 from './page2'
 import {useStoreActions, useStoreState } from 'easy-peasy';
 import React, {useState} from 'react'
 import axios from 'axios';

const Page4 = () => {

    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag4, setPag4] = useState(FormStore.LID[3] ? FormStore.LID[3] : '' )
  
    function salvarRadio(){
      FormStore.LID[3] = pag4
      SetFormStore(FormStore);

      axios.post('http://localhost:8080/respostas',
      {
         pontuacao : pag4,
      }
      ).then(salvaAprendiz => 
          console.log(salvaAprendiz)
      );
    } 
    console.log(FormStore)
 return(
    <div id="question-4">
    <h2>Liderança</h2>
    <h3>A equipe precisa se adaptar ao estilo de liderança do líder</h3>
    <input id="question-2-answer-a" type="radio" name="favelang" checked={pag4 === 1}  onChange={()=>setPag4(1)}/> Concordo totalmente<br/>
    <input id="question-2-answer-b" type="radio" name="favelang" checked={pag4 === 0.75}  onChange={()=>setPag4(0.75)}/> Concordo parcialmente<br/>
    <input id="question-2-answer-c" type="radio" name="favelang" checked={pag4 === 0.25}  onChange={()=>setPag4(0.25)}/> Discordo parcialmente<br/>
    <input id="question-2-answer-d" type="radio" name="favelang" checked={pag4 === 0}  onChange={()=>setPag4(0)}/> Discordo totalmente<br/>
    <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page5'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page3'}  >Voltar</Link></div>
    <div class="clearfix"></div>
    </div>

 )
}

export default Page4