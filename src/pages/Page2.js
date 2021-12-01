




import {Link} from 'react-router-dom'
//import  page2 from './page2'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page2 = () => {


 const FormStore = useStoreState(state => state);

 const SetFormStore = useStoreActions(state => state.setForm);
 const [pag2, setPag2] = useState(FormStore.LID[1] ? FormStore.LID[0] : '')
  console.log(FormStore)
 function salvarRadio(){
   FormStore.LID[1] = pag2
 
   SetFormStore(FormStore);
 } 

return(

                   <div id="question-2">
                   <h2>Questão 2</h2>
                   <h3>A diferença entre um chefe e um líder é que o chefe tem pulso firme
               com a equipe enquanto o líder é mais amigo de todos. </h3>
               <input id="question-2-answer-a" type="radio" name="favelang" checked={pag2 === 1}  onChange={()=>setPag2(1)}/> Concordo totalmente<br/>
               <input id="question-2-answer-b" type="radio" name="favelang" checked={pag2 === 0.75}  onChange={()=>setPag2(0.75)}/> Concordo parcialmente<br/>
               <input id="question-2-answer-c" type="radio" name="favelang" checked={pag2 === 0.25}  onChange={()=>setPag2(0.25)}/> Discordo parcialmente<br/>
               <input id="question-2-answer-d" type="radio" name="favelang" checked={pag2 === 0}  onChange={()=>setPag2(0)}/> Discordo totalmente<br/>
               <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page3'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page1'}  >Voltar</Link></div>
               <div class="clearfix"></div>
               </div>
)
}

export default Page2