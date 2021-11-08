import React from 'react';

export interface ModelProps {
  visible?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  closeCb?: () => void;
  width?: number;
  okText?: string;
  cancelText?: string;
  title?: string;
  children?: React.ReactNode;
}
