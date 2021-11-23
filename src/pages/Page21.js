import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page21 = () => {
    const FormStore = useStoreState(state => state.pagina21);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag21, setPag21] = useState(FormStore)
  
    function salvarRadio(){
      FormStore.pagina21  = pag21;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-21">
            <h2>Questão 21</h2>
            <h3>Entendo que a comunicação interna é um dos pontos mais delicados em organizações. </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag21 === 1}  onChange={()=>setPag21(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag21 === 0.75}  onChange={()=>setPag21(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag21 === 0.25}  onChange={()=>setPag21(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag21 === 0}  onChange={()=>setPag21(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page22'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page21