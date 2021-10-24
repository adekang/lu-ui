import React, {useState} from 'react';
import Button from '../Button/button';
import Transition from './transition';

function TransitionDemo() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Transition 组件</h1>
      <Button size="lg" onClick={() => {setShow(!show);}}>toggle</Button>
      <Transition in={show} timeout={250} animation={'zoom-in-top'} wrapper={true}>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </Transition>
    </div>
  );
}

export default TransitionDemo;