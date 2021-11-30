



const LID = [] ;
const PD = [];
const IE = [];
const TD = [];
const CM = [];
const CA = [];


var medias = [];
var mediaAux = [];
const temas = ['Liderança','Produtividade','Inteligência Emocional','Transformação Digital','Comunicação','Criatividade'];
let indicesOrdenado =[];


function mostrar(){
    let aux = 0;
    let LD = document.getElementsByName("lideranca");
    for(let i = 0 ; i < LD.length ; i++){
        if(LD[i].checked){
            LID[aux] = (LD[i].value);
            
        }  
    }

    aux++
    let LD2 = document.getElementsByName("lideranca2");
    for(let i = 0 ; i < LD2.length ; i++){
        if(LD2[i].checked){
            LID[aux] = (LD2[i].value);
           
        }  
    }

    aux++
    let LD3 = document.getElementsByName("lideranca3");
    for(let i =0 ; i < LD3.length ; i++){
        if(LD3[i].checked){
            LID[aux] = (LD[i].value);
           
        }  
    }
    aux++
    let LD4 = document.getElementsByName("lideranca4");
    for(let i =0 ; i < LD4.length ; i++){
        if(LD4[i].checked){
            LID[aux] = (LD4[i].value);
           
        }  
    }

    aux++
    let LD5 = document.getElementsByName("lideranca5");
    for(let i = 0 ; i < LD5.length ; i++){
        if(LD5[i].checked){
            LID[aux] = (LD[i].value);
        }  
    }





    

    aux++
    let PD1 = document.getElementsByName("prod1");
    for(let i =0 ; i < PD1.length ; i++){
        if(PD1[i].checked){
            PD[aux] = PD1[i].value;
        } 
    }
    aux++
    let PD2 = document.getElementsByName("prod2");
    for(let i =0 ; i < PD2.length ; i++){
        if(PD2[i].checked){
            PD[aux] = PD2[i].value;
        } 
    } 
    aux++
    let PD3 = document.getElementsByName("prod3");
    for(let i =0 ; i < PD3.length ; i++){
        if(PD3[i].checked){
            PD[aux] = PD3[i].value;
        } 
    } 
    aux++
    let PD4 = document.getElementsByName("prod4");
    for(let i =0 ; i < PD4.length ; i++){
        if(PD4[i].checked){
            PD[aux] = PD4[i].value;
        } 
    } 
    aux++
    let PD5 = document.getElementsByName("prod5");
    for(let i =0 ; i < PD5.length ; i++){
        if(PD5[i].checked){
            PD[aux] = PD5[i].value;
        } 
    }  








    

    aux++
    let inte1 = document.getElementsByName("inte1");
    for(let i =0 ; i < inte1.length ; i++){
        if(inte1[i].checked){
            IE[aux] = inte1[i].value;
        } 
    }
    aux++
    let inte2 = document.getElementsByName("inte2");
    for(let i =0 ; i < inte2.length ; i++){
        if(inte2[i].checked){
            IE[aux] = inte2[i].value;
        } 
    } 
    aux++
    let inte3 = document.getElementsByName("inte3");
    for(let i =0 ; i < inte3.length ; i++){
        if(inte3[i].checked){
            IE[aux] = inte3[i].value;
        } 
    } 
    aux++
    let inte4 = document.getElementsByName("inte4");
    for(let i =0 ; i < inte4.length ; i++){
        if(inte4[i].checked){
            IE[aux] = inte4[i].value;
        } 
    } 
    aux++
    let inte5 = document.getElementsByName("inte5");
    for(let i =0 ; i < inte5.length ; i++){
        if(inte5[i].checked){
            IE[aux] = inte5[i].value;
        } 
    } 







    


    aux++
    let trans1 = document.getElementsByName("trans1");
    for(let i =0 ; i < trans1.length ; i++){
        if(trans1[i].checked){
            TD[aux] = trans1[i].value;
        } 
    } 
    aux++
    let trans2 = document.getElementsByName("trans2");
    for(let i =0 ; i < trans2.length ; i++){
        if(trans2[i].checked){
            TD[aux] = trans2[i].value;
        } 
    } 
    aux++
    let trans3 = document.getElementsByName("trans3");
    for(let i =0 ; i < trans3.length ; i++){
        if(trans3[i].checked){
            TD[aux] = trans3[i].value;
        } 
    } 
    aux++
    let trans4 = document.getElementsByName("trans4");
    for(let i =0 ; i < trans4.length ; i++){
        if(trans4[i].checked){
            TD[aux] = trans4[i].value;
        } 
    } 
    aux++
    let trans5 = document.getElementsByName("trans5");
    for(let i =0 ; i < trans5.length ; i++){
        if(trans5[i].checked){
            TD[aux] = trans5[i].value;
        } 
    } 









    aux++
    let CM1 = document.getElementsByName("comu1");
    for(let i =0 ; i < CM1.length ; i++){
        if(CM1[i].checked){
            CM[aux] = CM1[i].value;
        } 
    } 
    aux++
    let CM2 = document.getElementsByName("comu2");
    for(let i =0 ; i < CM2.length ; i++){
        if(CM2[i].checked){
            CM[aux] = CM2[i].value;
        } 

    } 
    aux++
    let CM3 = document.getElementsByName("comu3");
    for(let i =0 ; i < CM3.length ; i++){
        if(CM3[i].checked){
            CM[aux] = CM3[i].value;
        } 

    } 
    aux++
    let CM4 = document.getElementsByName("comu4");
    for(let i =0 ; i < CM4.length ; i++){
        if(CM4[i].checked){
            CM[aux] = CM4[i].value ;
        } 

    } 
    aux++
    let CM5 = document.getElementsByName("comu5");
    for(let i =0 ; i < CM5.length ; i++){
        if(CM5[i].checked){
            CM[aux] = CM5[i].value;
        } 
    }     










    aux++
    let criat1 = document.getElementsByName("cria1");
    for(let i =0 ; i < criat1.length ; i++){
        if(criat1[i].checked){
            CA[aux] = criat1[i].value;
        } 
    }
    aux++
    let criat2 = document.getElementsByName("cria2");
    for(let i =0 ; i < criat2.length ; i++){
        if(criat2[i].checked){
            CA[aux] = criat2[i].value;
        } 
    } 
    aux++
    let criat3 = document.getElementsByName("cria3");
    for(let i =0 ; i < criat3.length ; i++){
        if(criat3[i].checked){
            CA[aux] = criat3[i].value;
        } 
    } 
    aux++
    let criat4 = document.getElementsByName("cria4");
    for(let i =0 ; i < criat4.length ; i++){
        if(criat4[i].checked){
            CA[aux] = criat4[i].value;
        } 
    } 
    aux++
    let criat5 = document.getElementsByName("cria5");
    for(let i =0 ; i < criat5.length ; i++){
        if(criat5[i].checked){
            CA[aux] = criat5[i].value;
        } 
    }  




    
    let auxLD = [];
    auxLD = LID.map(n => parseFloat(n));
    console.log(auxLD)

    let auxPD = [];
    auxPD = PD.map(n => parseFloat(n));
    console.log(auxPD)

    let auxIE = [];
    auxIE = IE.map(n => parseFloat(n));
    console.log(auxIE)

    let auxTD = [];
    auxTD = TD.map(n => parseFloat(n));
    console.log(auxTD)

    let auxCM = [];
    auxCM = CM.map(n => parseFloat(n));
    console.log(auxCM)

    let auxCA = [];
    auxCA = CA.map(n => parseFloat(n));
    console.log(auxCA)





    let mediaLD = auxLD.reduce((valorAnterior, valorAtual) => valorAnterior +  valorAtual)/ 5;
    let cont = 0;
    medias[cont] = mediaLD;
    mediaAux[cont] = mediaLD;

    let mediaPD = auxPD.reduce((valorAnterior, valorAtual) => valorAnterior +  valorAtual)/ 5;
    cont++
    medias[cont] = mediaPD;
    mediaAux[cont] = mediaPD;


    let mediaIE = auxIE.reduce((valorAnterior, valorAtual) => valorAnterior +  valorAtual)/ 5;
    cont++;
    medias[cont] = mediaIE;
    mediaAux[cont] = mediaIE;


    let mediaTD = auxTD.reduce((valorAnterior, valorAtual) => valorAnterior +  valorAtual)/ 5;
    cont++;
    medias[cont] = mediaTD;
    mediaAux[cont] = mediaTD;


    let mediaCM = auxCM.reduce((valorAnterior, valorAtual) => valorAnterior +  valorAtual)/ 5;
    cont++;
    medias[cont] = mediaCM;
    mediaAux[cont] = mediaCM;

    let mediaCA = auxCA.reduce((valorAnterior, valorAtual) => valorAnterior +  valorAtual)/ 5;
    cont++;
    medias[cont] = mediaCA;
    mediaAux[cont] = mediaCA;

    
    

}



function trilha(){

    medias.sort(function(a, b){
        let ordem
        ordem = a-b;
        return  ordem;
    }); 





    for(let i = 0; i < medias.length; i++){
        let valor = medias[i];
       
        for(let j = 0; j <mediaAux.length; j++){
            if (mediaAux[j]==valor){
                indicesOrdenado[i]=j 
                mediaAux[j]=-1  
                break 
               
            }
      }
    } 


    for (let i = 0; i < medias.length; i++) {
            
        if (medias[i] < 0.70) {
            console.log(temas[indicesOrdenado[i]] + "\nPontuação: "+ (medias[i]*100)+ "%\nPrioridade alta")
            console.log("\n")
        }else if (medias[i] == 0.70 || medias[i] == 0.75 || medias[i] == 0.80 || medias[i] == 0.85 || medias[i] == 0.90 || medias[i] == 0.95 ) {
            console.log(temas[indicesOrdenado[i]] + "\nPontuação: "+ (medias[i]*100) + "%\nPrioridade Media")
            console.log("\n")
        }else if (medias[i] == 1) {
            console.log(temas[indicesOrdenado[i]] + "\nPontuação " + (medias[i]*100) + "%\nParabens!")  
        }
   
    }
}

