import { useStoreState } from "easy-peasy"

const  Temas = () => {
    const FormStore = useStoreState(state => state)
   const  tema = (request, reponse) =>{

    reponse.json({
        nome : FormStore.nome,   
        LID : FormStore.LID ,
         PD : FormStore.PD,
         IE : FormStore.IE,
         TD : FormStore.TD,
         CM : FormStore.CM,
         CA : FormStore.CA,
        })
}
    return(
        <>    
        {
            tema()
        }
        </>
    )
    

}

export default Temas