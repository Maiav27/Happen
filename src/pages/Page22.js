import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page22 = () => {
    const FormStore = useStoreState(state => state.pagina22);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag22, setPag22] = useState(FormStore)
  
    function salvarRadio(){
      FormStore.pagina22  = pag22;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-22">
            <h2>Questão 22</h2>
            <h3>Para nos comunicarmos da melhor forma, é necessário entender quem é o receptor daquela mensagem. </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag22 === 1}  onChange={()=>setPag22(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag22 === 0.75}  onChange={()=>setPag22(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag22 === 0.25}  onChange={()=>setPag22(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag22 === 0}  onChange={()=>setPag22(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page23'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page22