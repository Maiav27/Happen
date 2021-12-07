
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page8 = () => {
   const FormStore = useStoreState(state => state);

   const SetFormStore = useStoreActions(state => state.setForm);
   const [Pag8, setPag8] = useState(FormStore.PD[2]  ? FormStore.PD[2] : '')
 
   function salvarRadio(){
     FormStore.PD[2]  = Pag8;
     SetFormStore(FormStore);
   } 
 return(
    <div id="question-8">
    <h2>Produtividade</h2>
    <h3>Quando percebo que não estou conseguindo me concentrar paro
       e faço exercícios de respiração para voltar ao foco. </h3>
       <input id="question-2-answer-a" type="radio" name="favelang" checked={Pag8 === 1}  onChange={()=>setPag8(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={Pag8 === 0.75}  onChange={()=>setPag8(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={Pag8 === 0.25}  onChange={()=>setPag8(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={Pag8 === 0}  onChange={()=>setPag8(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page9'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page7'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page8