
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page17 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag17, setPag17] = useState(FormStore.TD[1] ? FormStore.TD[1] : '')
  
    function salvarRadio(){
      FormStore.TD[1]  = pag17;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-17">
    <h2>Transformação Digital</h2>
    <h3>Entendo os conceitos de Inovação Aberta e quais são os principais players que devo me conectar.   </h3>
    <input id="question-2-answer-a" type="radio" name="favelang" checked={pag17 === 1}  onChange={()=>setPag17(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag17 === 0.75}  onChange={()=>setPag17(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag17 === 0.25}  onChange={()=>setPag17(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag17 === 0}  onChange={()=>setPag17(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page18'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page16'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page17