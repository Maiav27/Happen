import {Link} from 'react-router-dom'
 //import  page2 from './page2'
  import {useStoreActions, useStoreState } from 'easy-peasy';
 import React, {useState} from 'react'
 import axios from 'axios';
 
const Page5 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag5, setPag5] = useState(FormStore.LID[4] ? FormStore.LID[4] : '')
  
    function salvarRadio(){
      FormStore.LID[4] = pag5;
      SetFormStore(FormStore);
      axios.post('http://localhost:8080/respostas',
      {
         pontuacao : pag5,
      }
      ).then(salvaAprendiz => 
          console.log(salvaAprendiz)
      );
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
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page6'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page5'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page5