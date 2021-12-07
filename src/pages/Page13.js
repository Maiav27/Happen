import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page13 = () => {
  const FormStore = useStoreState(state => state);

  const SetFormStore = useStoreActions(state => state.setForm);
  const [pag13, setPag13] = useState(FormStore.IE[2] ? FormStore.IE[2] : '')

  function salvarRadio(){
    FormStore.IE[2]  = pag13;
    SetFormStore(FormStore);
  } 
 return(
    <div id="question-13">
           <h2>Inteligência Emocional</h2>
            <h3>Entendo quais são os 9 tipos de sabotadores e como eles podem 
              atrapalhar tarefas simples do dia a dia. </h3>
              <input id="question-2-answer-a" type="radio" name="favelang" checked={pag13 === 1}  onChange={()=>setPag13(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag13 === 0.75}  onChange={()=>setPag13(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag13 === 0.25}  onChange={()=>setPag13(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag13 === 0}  onChange={()=>setPag13(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page14'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page12'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page13