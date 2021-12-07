import { Link } from "react-router-dom"
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'
import axios from 'axios';

const Page28 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag28, setPag28] = useState(FormStore.CA[2] ?  FormStore.CA[2] : '')
  
    function salvarRadio(){
      FormStore.CA[2]  = pag28;
      SetFormStore(FormStore);
      axios.post('http://localhost:8080/respostas',
      {
         pontuacao : pag28,
      }
      ).then(salvaAprendiz => 
          console.log(salvaAprendiz)
      );
    } 
    return(
        <div id="question-28">
            <h2>Criatividade</h2>
            <h3>Entendo a influência que estruturas tradicionais como escolas exercem para a nossa criatividade e poder de criação </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag28 === 1}  onChange={()=>setPag28(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag28 === 0.75}  onChange={()=>setPag28(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag28 === 0.25}  onChange={()=>setPag28(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag28 === 0}  onChange={()=>setPag28(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page29'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page27'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>
   
    )
   }
   
   export default Page28