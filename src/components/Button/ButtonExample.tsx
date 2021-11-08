import React from 'react';
import Button from './button';
import './demo.scss';

const ButtonExample = () => {
  return (
    <div>
      <h1>Button组件</h1>
      <h4>默认</h4>
      <section>
        <Button>Hello</Button>
        <Button disabled>Hello</Button>
      </section>

      <h4>颜色</h4>
      <section>
        <Button btnType="primary">Hello</Button>
        <Button btnType="default">Hello</Button>
        <Button btnType="danger">Hello</Button>
      </section>

      <h4>大小尺寸</h4>
      <section>
        <Button btnType="primary" size="lg">Hello</Button>
        <Button btnType="default">Hello</Button>
        <Button btnType="danger" size="sm">Hello</Button>
      </section>

      <h4>链接</h4>
      <section>
        <Button btnType="link" size="lg" href={'www.baidu.com'}>Hello</Button>
        <Button btnType="link" href={'www.baidu.com'}>Hello</Button>
        <Button btnType="link" size="sm" href={'www.baidu.com'} target="_blank">Hello</Button>
        <Button btnType="link" size="sm" href={'www.baidu.com'} disabled>Hello</Button>
      </section>

    </div>
  );
};

export default ButtonExample;
