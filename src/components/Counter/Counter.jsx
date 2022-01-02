import React, { useState, useContext } from 'react';
import { Card, Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import { CounterContext } from '../../contexts/CounterContext';
import styles from './Counter.module.scss';

const Counter = ({ counter }) => {
  const { dispatch } = useContext(CounterContext);
  const [input, setInput] = useState({
    title: counter.title,
    editable: false
  });

  const handleEditable = () => {
    setInput((prev) => ({ ...prev, editable: !prev.editable }));
  };

  const handleUpdate = () => {
    dispatch({ type: 'EDIT_TITLE', id: counter.id, title: input.title });
    handleEditable();
  };

  return (
    <Card
      bordered={false}
      className={styles.container}
      actions={[
        <UpOutlined
          key="increment"
          onClick={() => dispatch({ type: 'INCREMENT_COUNTER', id: counter.id })}
          data-testid="increment-button"
        />,
        <DownOutlined
          key="decrement"
          onClick={() => dispatch({ type: 'DECREMENT_COUNTER', id: counter.id })}
          data-testid="decrement-button"
        />,
        <EditOutlined key="edit" onClick={handleEditable} data-testid="edit-button" />,
        <DeleteOutlined
          key="delete"
          onClick={() => dispatch({ type: 'REMOVE_COUNTER', id: counter.id })}
          data-testid="delete-button"
        />
      ]}>
      {input.editable ? (
        <Input.Group compact>
          <Input
            value={input.title}
            onPressEnter={handleUpdate}
            onChange={(e) => setInput((prev) => ({ ...prev, title: e.target.value }))}
            data-testid="counter-input"
          />
          <Button type="primary" onClick={handleUpdate} className={styles.marginTop}>
            Update
          </Button>
        </Input.Group>
      ) : (
        `${counter.title}: ${counter.count}`
      )}
    </Card>
  );
};

export default Counter;
