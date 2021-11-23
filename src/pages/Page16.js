
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page16 = () => {
    const FormStore = useStoreState(state => state.pagina16);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag16, setPag16] = useState(FormStore)
  
    function salvarRadio(){
      FormStore.pagina16  = pag16;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-15">
    <h2>Questão 16</h2>
    <h3>Entendo de forma básica o que é Inteligência Artificial e como ela está presente no nosso dia a dia.  </h3>
    <input id="question-2-answer-a" type="radio" name="favelang" checked={pag16 === 1}  onChange={()=>setPag16(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag16 === 0.75}  onChange={()=>setPag16(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag16 === 0.25}  onChange={()=>setPag16(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag16 === 0}  onChange={()=>setPag16(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page17'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page16