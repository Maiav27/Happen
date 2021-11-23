import { Link } from "react-router-dom"
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page29 = () => {
    const FormStore = useStoreState(state => state.pagina29);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag29, setPag29] = useState(FormStore)
  
    function salvarRadio(){
      FormStore.pagina29  = pag29;
      SetFormStore(FormStore);
    } 
    return(
        <div id="question-29">
            <h2>Questão 29</h2>
            <h3>Acredito que, no meu trabalho, não preciso usar a criatividade. Isso porque faço quase a mesma coisa todos os dias </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag29 === 1}  onChange={()=>setPag29(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag29 === 0.75}  onChange={()=>setPag29(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag29 === 0.25}  onChange={()=>setPag29(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag29 === 0}  onChange={()=>setPag29(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page30'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>
   
    )
   }
   
   export default Page29