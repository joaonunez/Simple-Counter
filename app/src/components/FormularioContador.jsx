import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStop,
  faRefresh
} from "@fortawesome/free-solid-svg-icons";
export function FormularioContador({
  onStop,
  onReset,
  onPlay,
  onReverse,
  deleteReverse,
  setValor,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSetValor = () => {
    const valorNumerico = parseInt(inputValue, 10);
    if (!isNaN(valorNumerico)) {
      setValor(valorNumerico);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="mb-5 col-xxl-1 m-auto d-flex flex-row justify-content-around">
        <button className="btn btn-success fw-bold" onClick={onPlay}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className="btn btn-danger fw-bold" onClick={onStop}>
          <FontAwesomeIcon icon={faStop} />
        </button>
        <button className="btn btn-warning fw-bold" onClick={onReset}>
          <FontAwesomeIcon icon={faRefresh} />
        </button>
      </div>
      <div className="mb-5 col-xxl-2 m-auto d-flex flex-row justify-content-around">
        <button className="btn btn-info fw-bold" onClick={onReverse}>
          Reversa
        </button>
        <button className="btn btn-warning fw-bold" onClick={deleteReverse}>
          Anular Reversa
        </button>
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
        <button className="btn btn-primary fw-bold" onClick={handleSetValor}>
          Establecer
        </button>
      </div>
    </>
  );
}
