
 import {Link} from 'react-router-dom'
 //import  page2 from './page2'
const Page3 = () => {
 return(
            <div id="question-3">	
            <h2>Questão 3</h2>
            <h3>Mesmo com a evolução dos ambientes e formas de trabalho, a motivação
        dos colaboradores continua sendo o pagamento ao final do mês</h3>
            <input id="question-3-answer-a" type="radio" name="favelang" value={1}/> Concordo totalmente<br/>
        <input id="question-3-answer-b" type="radio" name="favelang" value={2}/> Concordo parcialmente<br/>
        <input id="question-3-answer-c" type="radio" name="favelang" value={3}/> Discordo parcialmente<br/>
        <input id="question-3-answer-d" type="radio" name="favelang" value={4}/> Discordo totalmente<br/>
        <div id="submit3" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} to ={'/Page4'} >Próximo</Link></div></div>
        <div class="clearfix"></div>
        </div>

 )
}

export default Page3