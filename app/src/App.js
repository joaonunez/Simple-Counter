import React, { useState, useEffect } from 'react';
import ContadorSegundos from './components/ContadorSegundos';
import { FormularioContador } from './components/FormularioContador';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ContadorSegundos seconds={seconds} />
      <FormularioContador></FormularioContador>
    </div>
  );
};

export default App;
