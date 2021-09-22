import React from 'react';
import './importIcons';
import './index.scss';
import classes from 'src/utils/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name?: string; // svg名字
  color?: string; // svg颜色
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = props => {
  const {name, color = '#333', onClick, className = '', ...restProps} = props;

  return (
    <svg
      className={classes('lu-icon', className)}
      aria-hidden="true"
      fill={color}
      onClick={onClick}
      {...restProps}
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
