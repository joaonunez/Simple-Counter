import React, { useState, useEffect } from 'react';
import ContadorSegundos from './components/ContadorSegundos';

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
    </div>
  );
};

export default App;
