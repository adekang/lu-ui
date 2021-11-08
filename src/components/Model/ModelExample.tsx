import React, {useState} from 'react';
import Model from 'components/Model/Model';
import Button from 'components/Button/button';

const IconExample: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ok = () => {
    console.log('ok');
  };
  const cancel = () => {
    console.log('cancel');
  };
  return (
    <div>
      <Button onClick={() => {setVisible(!visible);}}>
        展示Model
      </Button>

      <Model
        width={450}
        closeCb={() => {setVisible(!visible);}}
        onCancel={cancel}
        onOk={ok}
        visible={visible}>
        <p>这是一段文字....</p>
        <p>这是一段文字....</p>
        <p>这是一段文字....</p>
      </Model>
    </div>
  );
};

export default IconExample;
