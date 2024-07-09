import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
const ContadorSegundos = ({ seconds }) => {
  return (
    <div className="seconds-counter">
      <i className="fas fa-clock"></i>
      <span>{seconds}</span>
    </div>
  );
};

export default ContadorSegundos;
