import React from 'react';
import Message from 'components/Message/Message';

const MessageExample = () => {

  return (
    <div>
      <button>警告</button>
      <button>成功</button>
      <button>错误</button>
      <Message/>
    </div>
  );

};

export default MessageExample;
