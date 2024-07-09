import React from "react";
export function FormularioContador() {
  return (
    <>
    <div className="mb-5 col-xxl-2 m-auto d-flex flex-row justify-content-around">
        <button className="btn btn-danger">Detener</button>
        <button className="btn btn-warning">Reiniciar</button>

      </div>
      <div className="col-xxl-2 m-auto">
        <input
          className="m-auto text-center d-flex justify-content-center form-control"
          type="text"
          placeholder={"Ingresa valor"}
        />
      </div>
      
    </>
  );
}
