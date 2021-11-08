import React from 'react';
import {ModelProps} from './interface';
import './index.scss';
import {createPortal} from 'react-dom';
import Button from '../Button/button';

const Model: React.FC<ModelProps> = props => {
  const {width, visible, title, okText, cancelText, children, closeCb, onCancel, onOk} = props;

  const onOkClick = () => {
    closeCb && closeCb();
    onOk && onOk();

  };
  const onCancelClick = () => {
    closeCb && closeCb();
    onCancel && onCancel();

  };

  return createPortal(
    <>
      {visible ?
        <div className="lu-mask">
          <div className="lu-model" style={{width: width && width + 'px'}}>
            <div className="lu-model-header">
              <p>{title || '标题'}</p>
              <span onClick={closeCb}>x</span>
            </div>
            <div className="lu-model-content">{children ? children : 'content'}</div>
            <div className="lu-model-footer">
              <Button className="cancel-btn" onClick={onCancelClick}>{cancelText || '取消'}</Button>
              <Button
                btnType="primary"
                className="ok-btn"
                onClick={onOkClick}
              >
                {okText || '确定'}
              </Button>
            </div>
          </div>
        </div>
        : null}
    </>
    , document.body);
};
export default Model;
