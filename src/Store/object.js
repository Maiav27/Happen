import {action} from 'easy-peasy';

export const form ={
   nome : '',   
   LID : [] ,
    PD : [],
    IE : [],
    TD : [],
    CM : [],
    CA : [],
    formas : [],
    tempo : 0,

   
   setForm: action((state,payload)=>{state = payload}),
}