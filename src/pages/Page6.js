import {Link} from 'react-router-dom'
 //import  page2 from './page2'
 import {useStoreActions, useStoreState } from 'easy-peasy';
 import React, {useState} from 'react'

const Page6 = () => {
   const FormStore = useStoreState(state => state.pagina6);

   const SetFormStore = useStoreActions(state => state.setForm);
   const [pag6, setPag6] = useState(FormStore)
 
   function salvarRadio(){
     FormStore.pagina6  = pag6;
     SetFormStore(FormStore);
   } 
 return(
    <div id="question-6">
            <h2>Questão 6</h2>
            <h3>Eu separo um tempo para planejar minha semana, definindo
               metas, objetivos e prazos para serem cumpridos. </h3>
               <input id="question-2-answer-a" type="radio" name="favelang" checked={pag6 === 1}  onChange={()=>setPag6(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag6 === 0.75}  onChange={()=>setPag6(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag6 === 0.25}  onChange={()=>setPag6(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag6 === 0}  onChange={()=>setPag6(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page7'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page6