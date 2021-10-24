import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Button, {ButtonProps} from './button';

const defaultProps = {
  onClick: jest.fn()
};
const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'sm',
  className: 'class'
};
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
};

describe('test Button component', () => {
  it('default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('different button', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-sm class');
  });
  it('link button', () => {
    const wrapper = render(<Button btnType="link" href="http://url">Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element.tagName).toEqual('A');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn btn-link');
  });
  it('disabled button', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});