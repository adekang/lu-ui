import React from 'react';
import Demo from 'src/pages/demo';
import LayoutExample from 'components/Layout/LayoutExample';

const LayoutDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./LayoutExample.tsx').default}>
      <LayoutExample/>
    </Demo>
  );
};

export default LayoutDemo;