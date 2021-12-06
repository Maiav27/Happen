import { Link } from "react-router-dom"
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'
import axios from 'axios';

const Page30 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag30, setPag30] = useState(FormStore.CA[4]  ? FormStore.CA[4] : '')
  
    function salvarRadio(){
      FormStore.CA[4]   = pag30;
      SetFormStore(FormStore);
      axios.post('http://localhost:8080/respostas',
      {
         pontuacao : pag30,
      }
      ).then(salvaAprendiz => 
          console.log(salvaAprendiz)
      );
    } 
    console.log(FormStore)
    return(
        <div id="question-30">
            <h2>Questão 30</h2>
            <h3>Entendo os conceitos de input, output e insight, para criatividade </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag30 === 1}  onChange={()=>setPag30(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag30 === 0.75}  onChange={()=>setPag30(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag30 === 0.25}  onChange={()=>setPag30(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag30 === 0}  onChange={()=>setPag30(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page31'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page29'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>
   
    )
   }
   
   export default Page30