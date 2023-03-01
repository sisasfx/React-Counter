//import react into the bundle
import { counter } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDOM from "react-dom";
import Counter  from "../js/component/counter.jsx"
// include your styles into the webpack bundle
import "../styles/index.css";

//INIT variables

let segundos = 0;
let minutos = 0;
let horas = 0;
let dias = 0;
let stopCounter = true;

//Function with setIterval on it
let aumentarComponente = setInterval(() => {
    if(segundos >= 59){
        segundos = 0
        minutos++
    }else if(minutos >= 59){
        horas++
        minutos = 0
    }else if(horas > 23){
        dias++
        horas = 0
    }else{
        segundos++
    }
    ReactDOM.render(<Counter segundos={segundos} minutos={minutos} horas={horas} dias={dias} />, document.querySelector("#app"));
},1000)   

const changeBoolean = () => {
    stopCounter ? stopCounter = false : stopCounter = true
    console.log("ChangeBool -->"+ stopCounter) 
    renderizarComponente()
}

const renderizarComponente = () => { 
    if(stopCounter){
        console.log("START COUNTER")
        aumentarComponente 
    }  
    else if(!stopCounter){
        console.log("STOP COUNTER")
        clearInterval(aumentarComponente)
        console.log(minutos, segundos)
    }
}


const renderizarComponenteRegresivo = () => {
        setInterval(() => {
            if(segundos >= 59){
                segundos = 0
                minutos--
            }else if(minutos >= 59){
                horas--
                minutos = 0
            }else if(horas > 23){
                dias--
                horas = 0
            }else{
                segundos--
            }
            ReactDOM.render(<Counter segundos={segundos} minutos={minutos} horas={horas} dias={dias} />, document.querySelector("#app"));
        },1000)

}

renderizarComponente()

export  {renderizarComponente, renderizarComponenteRegresivo,changeBoolean}



