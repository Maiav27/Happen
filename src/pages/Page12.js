
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page12 = () => {
  const FormStore = useStoreState(state => state.pagina12);

  const SetFormStore = useStoreActions(state => state.setForm);
  const [pag12, setPag12] = useState(FormStore)

  function salvarRadio(){
    FormStore.pagina12  = pag12;
    SetFormStore(FormStore);
  } 
 return(
    <div id="question-12">
            <h2>Questão 12</h2>
            <h3>Entendo que o autoconhecimento é a base para o desenvolvimento da 
              inteligência emocional. </h3>
              <input id="question-2-answer-a" type="radio" name="favelang" checked={pag12 === 1}  onChange={()=>setPag12(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag12 === 0.75}  onChange={()=>setPag12(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag12 === 0.25}  onChange={()=>setPag12(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag12 === 0}  onChange={()=>setPag12(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page13'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page12