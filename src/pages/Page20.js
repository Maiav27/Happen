
import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'
import axios from 'axios';

const Page20 = () => {
   const FormStore = useStoreState(state => state);

   const SetFormStore = useStoreActions(state => state.setForm);
   const [pag20, setPag20] = useState(FormStore.TD[4] ? FormStore.TD[4] : '')
 
   function salvarRadio(){
     FormStore.TD[4]  = pag20;
     SetFormStore(FormStore);

     axios.post('http://localhost:8080/respostas',
     {
        pontuacao : pag20,
     }
     ).then(salvaAprendiz => 
         console.log(salvaAprendiz)
     );

   } 
 return(
    <div id="question-20">
            <h2>Transformação Digital</h2>
            <h3>Entendo que quando falamos de negócios inovadores, estamos nos referindo a gestões
               inovadoras, e não necessariamente a produtos inovadores (como apps). </h3>
               <input id="question-2-answer-a" type="radio" name="favelang" checked={pag20 === 1}  onChange={()=>setPag20(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag20 === 0.75}  onChange={()=>setPag20(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag20 === 0.25}  onChange={()=>setPag20(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag20 === 0}  onChange={()=>setPag20(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page21'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page19'}  >Voltar</Link></div>
            </div>

 )
}

export default Page20