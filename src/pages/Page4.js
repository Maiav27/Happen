import {Link} from 'react-router-dom'
 //import  page2 from './page2'
 import {useStoreActions, useStoreState } from 'easy-peasy';
 import React, {useState} from 'react'
const Page4 = () => {

    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag4, setPag4] = useState(FormStore.LID[3] ? FormStore.LID[3] : '' )
  
    function salvarRadio(){
      FormStore.LID[3] = pag4
      FormStore.pagina4  = pag4;
      SetFormStore(FormStore);
    } 
    console.log(FormStore)
 return(
    <div id="question-4">
    <h2>Questão 4</h2>
    <h3>A equipe precisa se adaptar ao estilo de liderança do líder</h3>
    <input id="question-2-answer-a" type="radio" name="favelang" checked={pag4 === 1}  onChange={()=>setPag4(1)}/> Concordo totalmente<br/>
    <input id="question-2-answer-b" type="radio" name="favelang" checked={pag4 === 0.75}  onChange={()=>setPag4(0.75)}/> Concordo parcialmente<br/>
    <input id="question-2-answer-c" type="radio" name="favelang" checked={pag4 === 0.25}  onChange={()=>setPag4(0.25)}/> Discordo parcialmente<br/>
    <input id="question-2-answer-d" type="radio" name="favelang" checked={pag4 === 0}  onChange={()=>setPag4(0)}/> Discordo totalmente<br/>
    <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page5'} >Próximo</Link></div></div>
    <div class="clearfix"></div>
    </div>

 )
}

export default Page4