import {Link} from 'react-router-dom'

const Page13 = () => {
 return(
    <div id="question-13">
            <h2>Questão 13</h2>
            <h3>Entendo quais são os 9 tipos de sabotadores e como eles podem 
              atrapalhar tarefas simples do dia a dia. </h3>
                        <input id="question-5-answer-a" type="radio" name="favelang" value={1}/> Concordo totalmente<br/>
                    <input id="question-5-answer-b" type="radio" name="favelang" value={2}/> Concordo parcialmente<br/>
                    <input id="question-5-answer-c" type="radio" name="favelang" value={3}/> Discordo parcialmente<br/>
                    <input id="question-5-answer-d" type="radio" name="favelang" value={4}/> Discordo totalmente<br/>
                    <div id="submit4" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} to ={'/Page14'} >Próximo</Link></div></div>
                    <div class="clearfix"></div>
        </div>

 )
}

export default Page13