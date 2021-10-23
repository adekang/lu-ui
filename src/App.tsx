import React from 'react';
import './style/App.scss';
import Icon from 'src/components/Icon';
import Input from 'src/components/Input';
import LayoutExample from 'components/Layout/layout.example';


function App() {

  const ok = () => {
    console.log('ok');
  };

  return (
    <div className="wrapper">
      <h1>你好</h1>
      <Icon
        name="qq"
        color="#000"
        onClick={ok}
        className="red"
        onMouseEnter={() => console.log('enter')}
        onMouseLeave={() => console.log('leave')}
        onTouchStart={() => console.log('touch')}
      />
      <hr/>
      <Input placeholder={'请输入文字'}/>
      <hr/>
      <LayoutExample/>
    </div>
  );
}

export default App;
