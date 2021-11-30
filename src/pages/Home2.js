
import {Link} from 'react-router-dom'
import { useStoreState } from 'easy-peasy'

const Home2 = () => {

        const FormStore = useStoreState(state => state)
        
        console.log(FormStore)
return(

    <div>
                      <h2>Prazer em te conhecer, {FormStore.nome}</h2>
                      <h3>Vamos começar o seu mapeamento?

                    Precisamos entender como você está em relação às Soft Skills, vamos te fazer
                    algumas perguntas dentro das skills desenvolvidas.
                    Esse é um passo que leva menos de 2 minutos. </h3>
                        
                        
    <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} to ={'/Page1'}>Próximo</Link></div>
                        

               
    </div>
)}

export default Home2