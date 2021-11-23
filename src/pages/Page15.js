import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page15 = () => {
    const FormStore = useStoreState(state => state.pagina15);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag15, setPag15] = useState(FormStore)
  
    function salvarRadio(){
      FormStore.pagina15  = pag15;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-15">
            <h2>Questão 15</h2>
            <h3>Conheço as 5 linguagens da conexão e como elas são usadas para criar laços entre equipes.  </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag15 === 1}  onChange={()=>setPag15(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag15 === 0.75}  onChange={()=>setPag15(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag15 === 0.25}  onChange={()=>setPag15(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag15 === 0}  onChange={()=>setPag15(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page16'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page15