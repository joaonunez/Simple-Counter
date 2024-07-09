import React, { useState } from "react";

export function FormularioContador({ onStop, onReset, onPlay, onReverse, setValor }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSetValor = () => {
    const valorNumerico = parseInt(inputValue, 10);
    if (!isNaN(valorNumerico)) {
      setValor(valorNumerico);
    }
  };

  return (
    <>
      <div className="mb-5 col-xxl-3 m-auto d-flex flex-row justify-content-around">
        <button className="btn btn-danger fw-bold" onClick={onStop}>Detener</button>
        <button className="btn btn-success fw-bold" onClick={onPlay}>Continuar</button>
        <button className="btn btn-warning fw-bold" onClick={onReset}>Reiniciar</button>
        <button className="btn btn-info fw-bold" onClick={onReverse}>Reversa</button>
      </div>
      <div className="col-xxl-2 m-auto">
        <input
          className="m-auto text-center d-flex justify-content-center form-control"
          type="text"
          placeholder={"Ingresa valor"}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-3 col-xxl-2 m-auto d-flex flex-row justify-content-around">
        <button className="btn btn-primary fw-bold" onClick={handleSetValor}>Establecer</button>
      </div>
    </>
  );
}
