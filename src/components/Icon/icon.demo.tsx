import IconExample from './IconExample';
import React from 'react';
import Demo from '../../pages/demo';

const IconDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./IconExample.tsx').default}>
      <IconExample/>
    </Demo>
  );
};

export default IconDemo;