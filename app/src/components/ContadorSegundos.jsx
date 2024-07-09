import React from 'react';
const ContadorSegundos = ({ seconds }) => {
  const formatSeconds = (seconds) => {
    return String(seconds).padStart(6,'0');
  };

  const formattedSeconds = formatSeconds(seconds).split('');

  return (
    <div className="counter-container">
      {formattedSeconds.map((digit, index) => (
        <div key={index} className="card digit-card">
          <div className="card-body digit-body">
            {digit}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContadorSegundos;
