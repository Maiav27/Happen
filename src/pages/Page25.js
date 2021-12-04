
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page25 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag25, setPag25] = useState(FormStore.CM[4] ? FormStore.CM[4] : '')
  
    function salvarRadio(){
      FormStore.CM[4]  = pag25;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-25">
            <h2>Questão 25</h2>
            <h3>Entendo que, para diferentes níveis hierárquicos existem também diferentes formas de comunicação </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag25 === 1}  onChange={()=>setPag25(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag25 === 0.75}  onChange={()=>setPag25(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag25 === 0.25}  onChange={()=>setPag25(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag25 === 0}  onChange={()=>setPag25(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page26'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page24'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page25