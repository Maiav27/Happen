import {Link} from 'react-router-dom'
import { useStoreActions, useStoreState } from "easy-peasy"
import { useState } from "react"


const Tempo = () => {
    const setFormStore = useStoreActions(state => state.setForm)
    const formStore = useStoreState(state => state)
    const [tempo, setTempo] = useState(formStore.tempo ? formStore.tempo : 0)

    const salvar = () => {
        formStore.tempo = tempo
        setFormStore(formStore)
    }

    return( 
        <div>
           <h1>Quanto tempo por dia você quer aprender conosco?</h1>
              <h3>Escolha a melhor opção pra você</h3>
              

              <input type = 'radio' name='tempo' value={5} checked={tempo === 5} onChange={() => setTempo(5)} /> 5 minutos<br/>
              <input type = 'radio'  name='tempo' value={10} checked={tempo === 10} onChange={() => setTempo(10)}/> 10 minutos <br/>
              <input type = 'radio' name='tempo' value={15} checked={tempo === 15} onChange={() => setTempo(15)}/> 15 minutos <br/>
            <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvar}  to ={'/Page1'}>Próximo</Link></div>
            <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvar}  to ={'/Aprender'}  >Voltar</Link></div>
            <div class="clearfix"></div>
              

        </div>
        

    )
}
export default Tempo