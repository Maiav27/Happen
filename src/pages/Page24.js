import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page24 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag24, setPag24] = useState(FormStore.CM[3] ? FormStore.CM[3] : '')
  
    function salvarRadio(){
      FormStore.CM[3]   = pag24;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-24">
    <h2>Questão 24</h2>
    <h3>Compreendo a Matriz da Janela de Johari e como ela pode ser utilizada na comunicação do dia dia </h3>
    <input id="question-2-answer-a" type="radio" name="favelang" checked={pag24 === 1}  onChange={()=>setPag24(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag24 === 0.75}  onChange={()=>setPag24(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag24 === 0.25}  onChange={()=>setPag24(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag24 === 0}  onChange={()=>setPag24(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page25'}>Próximo</Link></div>
            <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page23'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page24