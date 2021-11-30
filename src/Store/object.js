import {action} from 'easy-peasy';

export const form ={
   nome : '',   
   LID : [] ,
    PD : [],
    IE : [],
    TD : [],
    CM : [],
    CA : [],

   
   setForm: action((state,payload)=>{state = payload}),
}