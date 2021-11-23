
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page19 = () => {
   const FormStore = useStoreState(state => state.pagina19);

   const SetFormStore = useStoreActions(state => state.setForm);
   const [pag19, setPag19] = useState(FormStore)
 
   function salvarRadio(){
     FormStore.pagina19  = pag19;
     SetFormStore(FormStore);
   } 
 return(
    <div id="question-19">
            <h2>Questão 19</h2>
            <h3>Entendo a diferença entre automações e automatizações e como elas podem ser utilizadas
               para criar mais eficiência nos processos do dia a dia </h3>
               <input id="question-2-answer-a" type="radio" name="favelang" checked={pag19 === 1}  onChange={()=>setPag19(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag19 === 0.75}  onChange={()=>setPag19(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag19 === 0.25}  onChange={()=>setPag19(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag19 === 0}  onChange={()=>setPag19(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page20'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page19