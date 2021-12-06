
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'
import axios from 'axios';

const Page22 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag22, setPag22] = useState(FormStore.CM[1] ? FormStore.CM[1] : '')
  
    function salvarRadio(){
      FormStore.CM[1]  = pag22;
      SetFormStore(FormStore);

      axios.post('http://localhost:8080/respostas',
      {
         pontuacao : pag22,
      }
      ).then(salvaAprendiz => 
          console.log(salvaAprendiz)
      );
    } 
 return(
    <div id="question-22">
            <h2>Questão 22</h2>
            <h3>Para nos comunicarmos da melhor forma, é necessário entender quem é o receptor daquela mensagem. </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag22 === 1}  onChange={()=>setPag22(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag22 === 0.75}  onChange={()=>setPag22(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag22 === 0.25}  onChange={()=>setPag22(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag22 === 0}  onChange={()=>setPag22(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page23'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page21'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page22