
 import {Link} from 'react-router-dom'
 //import  page2 from './page2'
const Page1 = () => {
 return(

     <div id="question-1">
     <h1>Ola</h1>
                       <h2>Questão 1</h2>
                         <h3>Liderança:
                   "Para mim, liderança é um dom e existem pessoas que já nascem propensas a liderar."
                 </h3>
                         <input id="question-1-answer-a" type="radio" name="favelang" value={1}/> Concordo totalmente<br/> 
                         <input id="question-1-answer-b" type="radio" name="favelang" value={2}/> Concordo parcialmente<br/>
                         <input id="question-1-answer-c" type="radio" name="favelang" value={3}/> Discordo parcialmente<br/>
                         <input id="question-1-answer-d" type="radio" name="favelang" value={4}/> Discordo totalmente<br/>
                         <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} to ={'/Page2'} >Próximo</Link></div>
                         

                 <div class="clearfix"></div>
     </div>
 )
}

export default Page1
