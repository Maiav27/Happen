import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page11 = () => {
    const FormStore = useStoreState(state => state.pagina11);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag11, setPag11] = useState(FormStore)
  
    function salvarRadio(){
      FormStore.pagina11  = pag11;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-11">
    <h2>Questão 11</h2>
    <h3>Conheço o conceito de mundo MUVUCA e como ele é aplicado as empresas. </h3>
    <input id="question-2-answer-a" type="radio" name="favelang" checked={pag11 === 1}  onChange={()=>setPag11(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag11 === 0.75}  onChange={()=>setPag11(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag11 === 0.25}  onChange={()=>setPag11(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag11 === 0}  onChange={()=>setPag11(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page12'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page11