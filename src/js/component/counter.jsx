import React from "react";
import {renderizarComponenteRegresivo,renderizarComponente, changeBoolean} from "../index.js"
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  return (
    <div className="container">
        <h1>{props.status}</h1>
    <div className="row d-flex-inline justify-content-center">
      <div className="card d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faClock} id="icon"/>
      </div>
      <div className="card d-flex justify-content-center align-items-center">
        <h1 className="card-text">{props.dias}</h1>
      </div>
      <div className="card d-flex justify-content-center align-items-center">
        <h1 className="card-text">{props.horas}</h1>
      </div>
      <div className="card d-flex justify-content-center align-items-center">
        <h1 className="card-text">{props.minutos}</h1>
      </div>
      <div className="card d-flex justify-content-center align-items-center">
        <h1 className="card-text">{props.segundos}</h1>
      </div>
    </div>
    <div className="row d-flex justify-content-center">
        <button onClick={changeBoolean} id="btn">START/STOP</button>
        <button onClick={renderizarComponenteRegresivo} id="btn">REGRESIVO</button>
    </div>
    </div>

  );
};

// TYPE my props
Counter.PropTypes = {
  segundos: PropTypes.number,
  minutos: PropTypes.number,
  horas: PropTypes.number,
  dias: PropTypes.number,
  status: PropTypes.string
};
// INIT default props
Counter.defaultProps = {
  segundos: 0,
  minutos: 0,
  horas: 0,
  dias: 0,
  status: "Running"
};

export default Counter;
