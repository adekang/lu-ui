import React from 'react';
import {scopedClassMaker} from 'utils/classes';
const sc = scopedClassMaker('lu-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Footer: React.FC<Props> = (props) => {
  const {className, ...rest} = props;

  return (
    <div className={sc('footer', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Footer;