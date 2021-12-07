import { useStoreActions, useStoreState } from "easy-peasy"

import { useState } from "react"
import { Link } from "react-router-dom"



const Aprender = () => {
    const formStore = useStoreState(state => state)
    const setFormStore = useStoreActions(state => state.setForm)
    
        const [array, setArray] = useState(formStore.formas ? formStore.formas : [])

console.log(array)
    const onChangeArray = (evt) => {
        
        
        console.log(evt.target.checked)
         if(evt.target.checked === true){
              setArray([...array, evt.target.value])
        } else {
            let index = array.indexOf(evt.target.value)
            array.splice(index, 1)
            setArray([...array])
        }

    } 
    const salvar = () => {
          formStore.formas = array
          setFormStore(formStore)
          
    }
    console.log(array)
    /* Para usao alternativo
     onChangeArray = (valor) => (evt) =>{

     }

     Paara utilizar a função seria chaamda assim :
     onClick ={onChangeArray('Texto')}

     Por ser uma função que acaba chamadno outra, não precisa de colocar () => antes da propria função
     pois o código entre chaves  só pode ser chamado 
     */

    return(
        <div>
           <h1>Sua trilha já está quase pronta</h1>
              <h3>Agora me conta, qual a forma que você mais gosta de aprender ?</h3>
              <h3>Você pode escolher mais de um tipo </h3>

              Texto<input type = 'checkbox'  value='Texto' checked={array.includes('Texto')} onChange={onChangeArray} /> <br/>
              Vídeo<input type = 'checkbox' value='Vídeo'  checked={array.includes('Vídeo')} onChange={onChangeArray} /> <br/>
              Podcast<input type = 'checkbox' value='Podcast'  checked={array.includes('Podcast')} onChange={onChangeArray} /> <br/>
              Quiz<input type = 'checkbox' value='Quiz' checked={array.includes('Quiz')}  onChange={onChangeArray} /> <br/>
              Debate<input type = 'checkbox' value='Debate' checked={array.includes('Debate')}  onChange={onChangeArray} /> <br/>
              Jogos<input type = 'checkbox' value='Jogos' checked={array.includes('Jogos')} onChange={onChangeArray} /> <br/>

              <div id="home2" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvar} to ={'/Tempo'}>Próximo</Link></div>
                        <div id="home" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvar} to ={'/Home2'}  >Voltar</Link></div>
              

        </div>
        

    )
}
export default Aprender