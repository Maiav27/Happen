import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page14 = () => {
    const FormStore = useStoreState(state => state);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag14, setPag14] = useState(FormStore.IE[3] ? FormStore.IE[3] : '')
  
    function salvarRadio(){
      FormStore.IE[3]  = pag14;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-14">
            <h2>Inteligência Emocional</h2>
            <h3>Sou familiarizado e praticante de técnicas como meditação e mindfulness. </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag14 === 1}  onChange={()=>setPag14(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag14 === 0.75}  onChange={()=>setPag14(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag14 === 0.25}  onChange={()=>setPag14(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag14 === 0}  onChange={()=>setPag14(0)}/> Discordo totalmente<br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page15'}>Próximo</Link></div>
            <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page13'}  >Voltar</Link></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page14