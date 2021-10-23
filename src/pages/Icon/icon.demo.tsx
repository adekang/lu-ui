import IconExample from './IconExample';
import React from 'react';
import Demo from '../demo';

const IconDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./IconExample.tsx').default}>
      <IconExample/>
    </Demo>
  );
};

export default IconDemo;