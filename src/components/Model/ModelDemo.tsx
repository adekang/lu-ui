import React from 'react';
import Demo from 'src/pages/demo';
import ModelExample from 'components/Model/ModelExample';

const ModelDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./ModelExample.tsx').default}>
      <ModelExample/>
    </Demo>
  );
};

export default ModelDemo;