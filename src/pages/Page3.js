
 import {Link} from 'react-router-dom'
 //import  page2 from './page2'
 import {useStoreActions, useStoreState } from 'easy-peasy';
 import React, {useState} from 'react'
 import axios from 'axios';

const Page3 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag3, setPag3] = useState(FormStore.LID[2] ? FormStore.LID[2] : '')
  
    function salvarRadio(){
      FormStore.LID[2] = pag3
      SetFormStore(FormStore);

      axios.post('http://localhost:8080/respostas',
      {
         pontuacao : pag3,
      }
      ).then(salvaAprendiz => 
          console.log(salvaAprendiz)
      );

    } 
    console.log(FormStore)
 return(
            <div id="question-3">	
            <h2>Questão 3</h2>
            <h3>Mesmo com a evolução dos ambientes e formas de trabalho, a motivação
            dos colaboradores continua sendo o pagamento ao final do mês</h3>
             <input id="question-2-answer-a" type="radio" name="favelang" checked={pag3 === 1}  onChange={()=>setPag3(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag3 === 0.75}  onChange={()=>setPag3(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag3 === 0.25}  onChange={()=>setPag3(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag3 === 0}  onChange={()=>setPag3(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page4'}>Próximo</Link></div>
            <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page2'}  >Voltar</Link></div>
            <div class="clearfix"></div>

            </div>

 )
}

export default Page3