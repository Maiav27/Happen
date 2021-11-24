import {Link} from 'react-router-dom'
 //import  page2 from './page2'
  import {useStoreActions, useStoreState } from 'easy-peasy';
 import React, {useState} from 'react'
 
const Page5 = () => {
    const FormStore = useStoreState(state => state.pagina5);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag5, setPag5] = useState(FormStore)
  
    function salvarRadio(){
      FormStore.pagina5  = pag5;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-5">
                <h2>Questão 5</h2>
                <h3>Sempre que recebo um feedback construtivo procuro explicar
                para a pessoa o que me levou a cometer aquela ação. </h3>
                <input id="question-2-answer-a" type="radio" name="favelang" checked={pag5 === 1}  onChange={()=>setPag5(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag5 === 0.75}  onChange={()=>setPag5(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag5 === 0.25}  onChange={()=>setPag5(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag5 === 0}  onChange={()=>setPag5(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page6'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page5