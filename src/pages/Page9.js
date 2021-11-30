
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page9 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag9, setPag9] = useState(FormStore.PD[3] ? FormStore.PD[3] : '')
  
    function salvarRadio(){
      FormStore.PD[3] = pag9;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-9">
            <h2>Questão 9</h2>
            <h3>Um dia improdutivo para mim é quando fico o dia inteiro trabalhando. </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag9 === 1}  onChange={()=>setPag9(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag9 === 0.75}  onChange={()=>setPag9(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag9 === 0.25}  onChange={()=>setPag9(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag9 === 0}  onChange={()=>setPag9(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page10'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page9