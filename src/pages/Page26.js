import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page26 = () => {
    const FormStore = useStoreState(state => state.pagina26);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag26, setPag26] = useState(FormStore)
  
    function salvarRadio(){
      FormStore.pagina26  = pag26;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-26">
            <h2>Questão 26</h2>
            <h3>Acredito que existam vários tipos de bloqueios a nossa criatividade no dia a dia </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag26 === 1}  onChange={()=>setPag26(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag26 === 0.75}  onChange={()=>setPag26(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag26 === 0.25}  onChange={()=>setPag26(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag26 === 0}  onChange={()=>setPag26(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page27'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page26