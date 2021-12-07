
   
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'
import axios from 'axios';

const Page10 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag10, setPag10] = useState(FormStore.PD[4] ? FormStore.PD[4] : '')
  
    function salvarRadio(){
      FormStore.PD[4]  = pag10;
      SetFormStore(FormStore);

      axios.post('http://localhost:8080/respostas',
      {
         pontuacao : pag10,
      }
      ).then(salvaAprendiz => 
          console.log(salvaAprendiz)
      );

    } 
 return(
    <div id="question-10">
            <h2>Produtividade</h2>
            <h3>Não costumo procrastinar quando tenho uma tarefa importante para fazer. </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag10 === 1}  onChange={()=>setPag10(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag10 === 0.75}  onChange={()=>setPag10(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag10 === 0.25}  onChange={()=>setPag10(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag10 === 0}  onChange={()=>setPag10(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page11'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page9'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page10