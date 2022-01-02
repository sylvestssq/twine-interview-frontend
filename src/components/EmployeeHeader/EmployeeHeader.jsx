import React from 'react';
import { Row, Col } from 'antd';
import styles from './EmployeeHeader.module.scss';

const EmployeeHeader = ({ employee }) => {
  const getIconColor = () => {
    let style;
    if (employee.rehire_eligible !== 'true') {
      style = styles.unapplicable;
    } else if (employee.voluntary) {
      style = styles.voluntary;
    } else {
      style = styles.involuntary;
    }
    return style;
  };

  return (
    <Row>
      <Col span={2}>
        <div className={getIconColor(employee)} />
      </Col>
      <Col span={22}>{`${employee.name}, ${employee.position}`}</Col>
    </Row>
  );
};

export default EmployeeHeader;
