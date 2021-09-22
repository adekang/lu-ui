import React, {useState} from 'react';

interface InputProps {
  type?: string;
  disabled?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    type = 'text',
    disabled,
    placeholder
  } = props;

  const [text, setText] = useState<string>('');
  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(text => text = e.target.value);
  };
  return (
    <div>
      <input type={type} placeholder={placeholder} disabled={disabled} onChange={getValue}/>
      <p>{text}</p>
    </div>
  );

};

export default Input;