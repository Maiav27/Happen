
 import {Link} from 'react-router-dom'
 import {useStoreActions, useStoreState } from 'easy-peasy';
 import React, {useState} from 'react'
 //import  page2 from './page2'

const Page1 = () => {

  const FormStore = useStoreState(state => state.pagina1);

  const SetFormStore = useStoreActions(state => state.setForm);
  const [pag1, setPag1] = useState(FormStore)

  function salvarRadio(){
    FormStore.pagina1  = pag1;
    SetFormStore(FormStore);
  } 

 return(

     <div id="question-1">
                       <h2>Questão 1</h2>
                         <h3>Liderança:
                   "Para mim, liderança é um dom e existem pessoas que já nascem propensas a liderar."
                 </h3>
                         <input id="question-1-answer-a" type="radio" name="favelang" checked={pag1 === 1}  onChange={()=>setPag1(1)}/> Concordo totalmente<br/> 
                         <input id="question-1-answer-b" type="radio" name="favelang" checked={pag1 === 0.75} onChange={()=>setPag1(0.75)}/> Concordo parcialmente<br/>
                         <input id="question-1-answer-c" type="radio" name="favelang" checked={pag1 === 0.25} onChange={()=>setPag1(0.25)}/> Discordo parcialmente<br/>
                         <input id="question-1-answer-d" type="radio" name="favelang" checked={pag1 === 0} onChange={()=>setPag1(0)}/> Discordo totalmente<br/>
                         <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page2'} >Próximo</Link></div>
                         

                 <div class="clearfix"></div>
     </div>
 )
}

export default Page1
