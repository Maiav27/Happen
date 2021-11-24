import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page13 = () => {
  const FormStore = useStoreState(state => state.pagina13);

  const SetFormStore = useStoreActions(state => state.setForm);
  const [pag13, setPag13] = useState(FormStore)

  function salvarRadio(){
    FormStore.pagina13  = pag13;
    SetFormStore(FormStore);
  } 
 return(
    <div id="question-13">
            <h2>Questão 13</h2>
            <h3>Entendo quais são os 9 tipos de sabotadores e como eles podem 
              atrapalhar tarefas simples do dia a dia. </h3>
              <input id="question-2-answer-a" type="radio" name="favelang" checked={pag13 === 1}  onChange={()=>setPag13(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag13 === 0.75}  onChange={()=>setPag13(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag13 === 0.25}  onChange={()=>setPag13(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag13 === 0}  onChange={()=>setPag13(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page14'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page13