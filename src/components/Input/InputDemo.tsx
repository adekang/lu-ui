import React from 'react';
import Demo from 'src/pages/demo';
import InputExample from 'components/Input/InputExample';

const InputDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./InputExample.tsx').default}>
      <InputExample/>
    </Demo>
  );
};

export default InputDemo;