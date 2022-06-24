import './App.css';
import React, { useState, useEffect } from 'react';
import serviceTypes from './serviceTypes';

function App() {
  const [task, setTask] = useState({
    title: 'Web portal',
    credits: 12,
    services: [],
    requirements: {
      security: 3,
      speed: 3,
      stability: 3,
    },
  });

  useEffect(() => {
    console.log('bonus checks');
  }, [task]);

  return (
    <div className="App">
      <div>
        <div className="box">{task.title}</div>
        <div className="box">
          <div>AWS box</div>
          {Object.keys(serviceTypes.aws).map((key) => (
            <div key={key} className="service-box">
              {key}
            </div>
          ))}
        </div>
        <div className="box">Azure box</div>
      </div>
    </div>
  );
}

export default App;
