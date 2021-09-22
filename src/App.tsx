import React from 'react';
import './App.css';
import Icon from 'src/components/Icon';

function App() {
  const ok = () => {
    console.log('ok');
  };

  return (
    <div>
      <h1>你好</h1>
      <Icon
        name="qq"
        color="red"
        onClick={ok}
        className="red"
        onMouseEnter={() => console.log('enter')}
        onMouseLeave={() => console.log('leave')}
        onTouchStart={() => console.log('touch')}
      />
    </div>
  );
}

export default App;
