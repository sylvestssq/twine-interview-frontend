import React, { useState } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import EmployeeModal from '../EmployeeModal/EmployeeModal';
import EmployeeHeader from '../EmployeeHeader/EmployeeHeader';
import defaultEmployee from '../../utils/defaultEmployee';
import styles from './AttritionList.module.scss';

const AttritionList = ({ employees }) => {
  const { Text } = Typography;
  const [isModalVisible, setIsModalVisible] = useState({
    visible: false,
    selectedEmployee: defaultEmployee
  });

  const showModal = (employee) => {
    setIsModalVisible({ visible: true, selectedEmployee: employee });
  };

  const hideModal = () => {
    setIsModalVisible({ visible: false, selectedEmployee: defaultEmployee });
  };

  /*
  The render method renders each key of employees prop as the date followed by an array of employees.
  */
  return (
    <>
      <Row gutter={[0, 16]}>
        {Object.keys(employees).map((date) => (
          <React.Fragment key={date}>
            <Col span={24}>
              <Text>{date}</Text>
            </Col>
            {employees[date].map((employee) => (
              <Col key={employee.id} span={24}>
                <Card
                  key={employee.id}
                  hoverable
                  onClick={() => showModal(employee)}
                  className={styles.employeeCardContainer}>
                  <EmployeeHeader employee={employee} />
                </Card>
              </Col>
            ))}
          </React.Fragment>
        ))}
      </Row>
      {isModalVisible.visible && (
        <EmployeeModal
          employee={isModalVisible.selectedEmployee}
          isModalVisible={isModalVisible.visible}
          hideModal={hideModal}
        />
      )}
    </>
  );
};

export default AttritionList;
