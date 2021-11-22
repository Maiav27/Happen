
 import {Link} from 'react-router-dom'
 //import  page2 from './page2'
const Page4 = () => {
 return(
    <div id="question-4">
    <h2>Questão 4</h2>
    <h3>A equipe precisa se adaptar ao estilo de liderança do líder</h3>
            <input id="question-3-answer-a" type="radio" name="favelang" value={1}/> Concordo totalmente<br/>
        <input id="question-4-answer-b" type="radio" name="favelang" value={2}/> Concordo parcialmente<br/>
        <input id="question-4-answer-c" type="radio" name="favelang" value={3}/> Discordo parcialmente<br/>
        <input id="question-4-answer-d" type="radio" name="favelang" value={4}/> Discordo totalmente<br/>
        <div id="submit4" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} to ={'/Page5'} >Próximo</Link></div></div>
        <div class="clearfix"></div>
        </div>

 )
}

export default Page4