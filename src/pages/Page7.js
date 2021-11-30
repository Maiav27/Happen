import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page7 = () => {
   const FormStore = useStoreState(state => state);

   const SetFormStore = useStoreActions(state => state.setForm);
   const [Pag7, setPag7] = useState(FormStore.PD[1] ? FormStore.PD[1]  : '')
 
   function salvarRadio(){
     FormStore.PD[1]= Pag7;
     SetFormStore(FormStore);
   } 
 return(
    <div id="question-7">
    <h2>Questão 7</h2>
    <h3>Sempre que alguém me pede uma ajuda e não estou disponível,
       consigo dizer não para essa pessoa. </h3>
       <input id="question-2-answer-a" type="radio" name="favelang" checked={Pag7 === 1}  onChange={()=>setPag7(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={Pag7 === 0.75}  onChange={()=>setPag7(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={Pag7 === 0.25}  onChange={()=>setPag7(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={Pag7 === 0}  onChange={()=>setPag7(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page8'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page7