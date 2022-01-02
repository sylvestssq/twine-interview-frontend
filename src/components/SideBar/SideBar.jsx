import React, { useContext } from 'react';
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
    <Sider width={300}>
      <Row gutter={[0, 16]}>
        {counters.length > 0 ? (
          counters.map((counter) => (
            <Col span={24} key={counter.id}>
              <div className={styles.flexboxCenter}>
                <Counter counter={counter} />
              </div>
            </Col>
          ))
        ) : (
          <Col span={24}>No counters available</Col>
        )}
      </Row>
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
