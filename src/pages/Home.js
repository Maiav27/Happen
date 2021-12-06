import { useState } from 'react' 
import {Link} from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy'
import boneco from '../boneco.jpeg'
import axios from 'axios';

const Home = () => {


    const FormStore = useStoreState(state => state);
    const setFormStore = useStoreActions(state => state.setForm);
    const [nome, setNome] = useState (FormStore.nome ? FormStore.nome : '')

    const salvar = () => {
        FormStore.nome = nome
        setFormStore(FormStore);

    }

    console.log(nome)

    return(

        <div>
            <img src ={boneco} alt="Boneco"/>
            <h3> Olá, meu nome é Tony</h3>
            <h2>Bem-vindo a Happen!</h2>
            Para iniciar, gostaríamos de saber
            o seu nome:<input type="text" class='nome' value={nome} onChange={(event)  => setNome(event.target.value)}/>
            <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} to ={'/Home2'} onClick={salvar} >Próximo</Link></div>       
        </div>
    )
   }

export default Home