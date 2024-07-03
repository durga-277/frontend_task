import React from 'react';
import { Modal } from 'antd';

const ConfirmationModal = ({ visible, onOk, onCancel }) => {
  return (
    <Modal
      title="Confirm Delete"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <p>Are you sure you want to delete this user?</p>
    </Modal>
  );
};

export default ConfirmationModal;
