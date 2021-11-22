




 import {Link} from 'react-router-dom'
 //import  page2 from './page2'
const Page2 = () => {
 return(

                    <div id="question-2">
                    <h2>Questão 2</h2>
                    <h3>A diferença entre um chefe e um líder é que o chefe tem pulso firme
                com a equipe enquanto o líder é mais amigo de todos. </h3>
                <input id="question-2-answer-a" type="radio" name="favelang" value={1}/> Concordo totalmente<br/>
                <input id="question-2-answer-b" type="radio" name="favelang" value={2}/> Concordo parcialmente<br/>
                <input id="question-2-answer-c" type="radio" name="favelang" value={3}/> Discordo parcialmente<br/>
                <input id="question-2-answer-d" type="radio" name="favelang" value={4}/> Discordo totalmente<br/>
                <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} to ={'/Page3'} >Próximo</Link></div></div>
                <div class="clearfix"></div>
                </div>
 )
}

export default Page2