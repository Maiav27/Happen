import {Link} from 'react-router-dom'
 //import  page2 from './page2'
 import {useStoreActions, useStoreState } from 'easy-peasy';
 import React, {useState} from 'react'
 import axios from 'axios';

const Page6 = () => {
   const FormStore = useStoreState(state => state);

   const SetFormStore = useStoreActions(state => state.setForm);
   const [pag6, setPag6] = useState(FormStore.PD[0] ? FormStore.PD[0] : '')
 
   function salvarRadio(){
     FormStore.PD[0] = pag6
     SetFormStore(FormStore);

     axios.post('http://localhost:8080/respostas',
     {
        pontuacao : pag6,
     }
     ).then(salvaAprendiz => 
         console.log(salvaAprendiz)
     );
     
   } 
 return(
    <div id="question-6">
            <h2>Produtividade</h2>
            <h3>Eu separo um tempo para planejar minha semana, definindo
               metas, objetivos e prazos para serem cumpridos. </h3>
               <input id="question-2-answer-a" type="radio" name="favelang" checked={pag6 === 1}  onChange={()=>setPag6(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag6 === 0.75}  onChange={()=>setPag6(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag6 === 0.25}  onChange={()=>setPag6(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag6 === 0}  onChange={()=>setPag6(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page7'}>Próximo</Link></div>
              <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page5'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page6