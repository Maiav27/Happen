import { Link } from "react-router-dom"
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page28 = () => {
    const FormStore = useStoreState(state => state.pagina28);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag28, setPag28] = useState(FormStore)
  
    function salvarRadio(){
      FormStore.pagina28  = pag28;
      SetFormStore(FormStore);
    } 
    return(
        <div id="question-28">
            <h2>Questão 28</h2>
            <h3>Entendo a influência que estruturas tradicionais como escolas exercem para a nossa criatividade e poder de criação </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag28 === 1}  onChange={()=>setPag28(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag28 === 0.75}  onChange={()=>setPag28(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag28 === 0.25}  onChange={()=>setPag28(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag28 === 0}  onChange={()=>setPag28(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page29'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>
   
    )
   }
   
   export default Page28