import { useStoreState } from "easy-peasy"



const Page31 = () =>{

    const FormStore = useStoreState(state => state)
    const MediaLID = FormStore.LID.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual) / 5
    const MediaPD = FormStore.PD.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual) / 5
    const MediaTD = FormStore.TD.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual) / 5
    const MediaIE = FormStore.IE.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual) / 5
    const MediaCA = FormStore.CA.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual) / 5
    const MediaCM = FormStore.CA.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual) / 5

        

    const prioridade = (media, tema) =>{
        if (media < 0.70) {
            console.log( tema + "\nPontuação: "+ (media *100)+ "%\nPrioridade alta")
            console.log("\n")
        }else if (media == 0.70 || media == 0.75 || media == 0.80 || media == 0.85 || media == 0.90 || media == 0.95 ) {
            console.log(tema + "\nPontuação: "+ (media*100) + "%\nPrioridade Media")
            console.log("\n")
        }else if (media == 1) {
            console.log(tema + "\nPontuação " + (media*100) + "%\nParabens!")  
        }
    }

    return(
       
        <div id="question-31"> 
        <h2>Obrigado por responder a pesquisa!</h2>
        <h3>Seu score  é: </h3>
       CA : {prioridade(MediaCA, 'CA')}
       LID : {prioridade(MediaLID, 'LID')}
       CM : {prioridade(MediaCM, 'CM')}
       TD : {prioridade(MediaTD, 'TD')}
       IE : {prioridade(MediaIE, 'IE')}
       PD : {prioridade(MediaPD, 'PD')}
        <h1></h1>
        <p ></p>
       
       </div> 
    )
}

export default Page31