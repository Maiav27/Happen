import {Link} from 'react-router-dom'

const Page23 = () => {
 return(
    <div id="question-23">
            <h2>Questão 23</h2>
            <h3>Entendo plenamente o conceito dos quatro passos da comunicação não violenta </h3>
                        <input id="question-5-answer-a" type="radio" name="favelang" value={1}/> Concordo totalmente<br/>
                    <input id="question-5-answer-b" type="radio" name="favelang" value={2}/> Concordo parcialmente<br/>
                    <input id="question-5-answer-c" type="radio" name="favelang" value={3}/> Discordo parcialmente<br/>
                    <input id="question-5-answer-d" type="radio" name="favelang" value={4}/> Discordo totalmente<br/>
                    <div id="submit4" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} to ={'/Page24'} >Próximo</Link></div></div>
                    <div class="clearfix"></div>
        </div>

 )
}

export default Page23