import React from 'react';
import Demo from 'src/pages/demo';
import MenuExample from 'components/Menu/MenuExample';

const MenuDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./MenuExample.tsx').default}>
      < MenuExample/>
    </Demo>
  );
};

export default MenuDemo;