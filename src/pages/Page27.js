import { Link } from "react-router-dom"
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page27 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag27, setPag27] = useState(FormStore.CA[1] ? FormStore.CA[1] : '')
  
    function salvarRadio(){
      FormStore.CA[1]  = pag27;
      SetFormStore(FormStore);
    } 
    return(
        <div id="question-27">
        <h2>Questão 27</h2>
        <h3>Quando vejo algo que me interessa, procuro entender como aquilo funciona. </h3>
        <input id="question-2-answer-a" type="radio" name="favelang" checked={pag27 === 1}  onChange={()=>setPag27(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag27 === 0.75}  onChange={()=>setPag27(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag27 === 0.25}  onChange={()=>setPag27(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag27 === 0}  onChange={()=>setPag27(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page28'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>
   
    )
   }
   
   export default Page27