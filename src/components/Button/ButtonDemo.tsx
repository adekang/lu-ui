import React from 'react';
import Demo from 'src/pages/demo';
import ButtonExample from 'components/Button/ButtonExample';

const ButtonDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./ButtonExample.tsx').default}>
      <ButtonExample/>
    </Demo>
  );
};

export default ButtonDemo;