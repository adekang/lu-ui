import React from 'react';
import './style/App.scss';
import LIcon from 'src/components/Icon';
import Input from 'src/components/Input';

function App() {
  const ok = () => {
    console.log('ok');
  };

  return (
    <div>
      <h1>你好</h1>
      <LIcon
        name="qq"
        color="#00ff00"
        onClick={ok}
        className="red"
        onMouseEnter={() => console.log('enter')}
        onMouseLeave={() => console.log('leave')}
        onTouchStart={() => console.log('touch')}
      />
      <hr/>
      <Input/>
    </div>
  );
}

export default App;
