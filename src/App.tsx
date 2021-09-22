import React from 'react';
import './App.css';
import qq from 'src/assets/qq.svg';

console.log(qq);

function App() {
  return (
    <div>
      <svg>
        <use xlinkHref="#qq"/>
      </svg>
    </div>
  );
}

export default App;
