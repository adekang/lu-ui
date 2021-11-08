import React from 'react';
import './index.scss';
import {MessageProps} from './types'

const Mess:React.FC =(props)=>{
const {children}  = props
  return (
  <div>{children
       } </div>
  )
}

const Message:React.FC<MessageProps> = () => {

  return (
    <div>
      <h1>message</h1>
      <Mess>
     </Mess>
    </div>
  );

};

export default Message;
