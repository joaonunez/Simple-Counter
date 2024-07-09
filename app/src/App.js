import React, { useState, useEffect } from 'react';
import ContadorSegundos from './components/ContadorSegundos';
import { FormularioContador } from './components/FormularioContador';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(prevSeconds => isReversing ? prevSeconds - 1 : prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isReversing]);

  const handleStop = () => {
    setIsRunning(false);
    setIsReversing(false);
  };

  const handlePlay = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  const handleReverse = () => {
    setIsReversing(!isReversing);
    setIsRunning(true);
  };
  const handledeleteReverse = () =>{
    setIsReversing(false);
    setIsRunning(true);
  }

  const handleSetValor = (valor) => {
    setSeconds(valor);
    setIsRunning(false);  // Detener el contador al establecer un nuevo valor
    
    
  };

  return (
    <div>
      <ContadorSegundos seconds={seconds} />
      <FormularioContador 
        onStop={handleStop} 
        onReset={handleReset} 
        onPlay={handlePlay} 
        onReverse={handleReverse} // Agregar la función de reversa
        setValor={handleSetValor} 
        deleteReverse={handledeleteReverse}
      />
    </div>
  );
};

export default App;
