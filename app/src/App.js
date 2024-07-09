import React, { useState, useEffect } from 'react';
import ContadorSegundos from './components/ContadorSegundos';
import { FormularioContador } from './components/FormularioContador';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
  };
  const handlePlay = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  return (
    <div>
      <ContadorSegundos seconds={seconds} />
      <FormularioContador onStop={handleStop} onReset={handleReset} onPlay={handlePlay} />
    </div>
  );
};

export default App;
