
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page18 = () => {
   const FormStore = useStoreState(state => state);

   const SetFormStore = useStoreActions(state => state.setForm);
   const [pag18, setPag18] = useState(FormStore.TD[2] ? FormStore.TD[2] : '')
 
   function salvarRadio(){
     FormStore.TD[2]  = pag18;
     SetFormStore(FormStore);
   } 
 return(
    <div id="question-18">
            <h2>Questão 18</h2>
            <h3>Conheço os 6 pilares principais da transformação digital e como eles podem ser aplicados
               para negócios de diversos portes.   </h3>
               <input id="question-2-answer-a" type="radio" name="favelang" checked={pag18 === 1}  onChange={()=>setPag18(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag18 === 0.75}  onChange={()=>setPag18(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag18 === 0.25}  onChange={()=>setPag18(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag18 === 0}  onChange={()=>setPag18(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page19'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page18