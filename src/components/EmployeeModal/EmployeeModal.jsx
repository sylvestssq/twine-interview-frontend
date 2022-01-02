import React, { useState } from 'react';
import { Modal, Typography, Row, Col, Input, Button } from 'antd';
import EmployeeHeader from '../EmployeeHeader/EmployeeHeader';

const EmployeeModal = ({ employee, isModalVisible, hideModal }) => {
  const { Text, Link } = Typography;
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    visible: false,
    message: 'Message field is empty.'
  });

  const handleSubmit = () => {
    if (message.length === 0) {
      setErrorMessage((prev) => ({ ...prev, visible: true }));
    } else {
      hideModal();
    }
  };

  return (
    <Modal centered visible={isModalVisible} onCancel={hideModal} footer={null}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <EmployeeHeader employee={employee} />
        </Col>
        <Col span={24}>
          <Text>
            Go to{' '}
            <Link href={employee.profile_link} target="_blank">
              {`${employee.name}'s Profile`}
            </Link>
          </Text>
        </Col>
        <Col span={24}>
          {employee.termination_reason !== null ? (
            <Text>{employee.termination_reason}</Text>
          ) : (
            <Text>No recorded termination reason</Text>
          )}
        </Col>
        {employee.voluntary && employee.rehire_eligible === 'true' && (
          <>
            <Col span={24}>
              <Input
                placeholder={`Reach out to ${employee.name}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Col>
            {errorMessage.visible && (
              <Col span={24}>
                <Text type="danger">{errorMessage.message}</Text>
              </Col>
            )}
            <Col span={24}>
              <Button type="primary" onClick={handleSubmit}>
                Send Email
              </Button>
            </Col>
          </>
        )}
      </Row>
    </Modal>
  );
};

export default EmployeeModal;
