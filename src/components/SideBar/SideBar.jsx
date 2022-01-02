import React, { useContext, useEffect } from 'react';
import { Layout, Button, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Counter from '../Counter/Counter';
import { CounterContext } from '../../contexts/CounterContext';
import styles from './SideBar.module.scss';

const SideBar = () => {
  const { Sider } = Layout;
  const { counters, dispatch } = useContext(CounterContext);

  const handleAddCounter = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_COUNTER' });
  };

  return (
    <Sider>
      {counters.length > 0 ? (
        counters.map((counter) => (
          <Row key={counter.id} gutter={[16, 16]}>
            <Col span={24} className={styles.flexboxCenter}>
              <Counter counter={counter} />
            </Col>
          </Row>
        ))
      ) : (
        <div>No counters available</div>
      )}
      <Row justify="center" align="middle">
        <Col className={styles.flexboxCenter}>
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            size="large"
            onClick={handleAddCounter}>
            Add Counter
          </Button>
        </Col>
      </Row>
    </Sider>
  );
};

export default SideBar;
