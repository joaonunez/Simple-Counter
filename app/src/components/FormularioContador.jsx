import React from "react";

export function FormularioContador({ onStop, onReset, onPlay }) {
  return (
    <>
      <div className="mb-5 col-xxl-2 m-auto d-flex flex-row justify-content-around">
        <button className="btn btn-danger" onClick={onStop}>Detener</button>
        <button className="btn btn-success" onClick={onPlay}>Continuar</button>
        <button className="btn btn-warning" onClick={onReset}>Reiniciar</button>
      </div>
      {/* <div className="col-xxl-2 m-auto">
        <input
          className="m-auto text-center d-flex justify-content-center form-control"
          type="text"
          placeholder={"Ingresa valor"}
        />
      </div> */}
    </>
  );
}
