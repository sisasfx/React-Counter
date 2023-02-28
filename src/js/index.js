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

const renderizarComponente = () => {
    setInterval(() => {
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
}

// Ask for boolean to change the Render status and stop counting
const isBoolean = () =>{
    console.log("El valor init --> ",stopCounter)
    stopCounter = !stopCounter
    console.log("El valor end --> ",stopCounter)
}

// RENDER -->TO FIX:  if Boolean change, doesn't affect the Render
if(stopCounter){
    renderizarComponente()
}else{
    ReactDOM.render(<Counter segundos={segundos} minutos={minutos} horas={horas} dias={dias}/>, document.querySelector("#app"))
}

export  {renderizarComponente, isBoolean}



