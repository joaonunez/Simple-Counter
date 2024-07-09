// src/App.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import ContadorSegundos from './components/ContadorSegundos';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <ContadorSegundos seconds={seconds} />
    </div>
  );
};

export default App;