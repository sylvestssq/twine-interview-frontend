import React, { useState, useEffect } from 'react';
import { Tabs, Typography } from 'antd';
import axios from 'axios';
import AttritionList from '../AttritionList/AttritionList';
import getTimelineData from '../../utils/employeeTimelineHelper';

const AttritionContainer = () => {
  const { Title } = Typography;
  const [employees, setEmployees] = useState({});
  const [activeTab, setActiveTab] = useState('1');

  const tabs = [
    { id: 1, key: '1', tab: 'Rehire Eligible' },
    { id: 2, key: '2', tab: 'Rehire Ineligible' },
    { id: 3, key: '3', tab: 'Rehire Unknown' }
  ];

  /*
    getTimelineData() is a helper function to transform an array of employee objects into an object with key value pairs.
    Key of object is the termination date of employees.
    Value of each key is an array of employees which have termination date as the key value.
  */
  const fetchData = async (isActive, rehireEligibility) => {
    try {
      // NOTE: I am using localhost:8000 for my mock backend server.
      const res = await axios.get('http://localhost:8000/employees', {
        params: {
          is_active: isActive,
          rehire_eligible: rehireEligibility
        }
      });
      const { data } = res;
      const sortedResult = getTimelineData(data);
      setEmployees({ ...sortedResult });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (activeTab === '1') {
      fetchData(false, 'true');
    } else if (activeTab === '2') {
      fetchData(false, 'false');
    } else {
      fetchData(false, 'unknown');
    }
  }, [activeTab]);

  return (
    <>
      <Title level={3}>Attrition Timeline</Title>
      <Tabs defaultActiveKey={1} onChange={(key) => setActiveTab(key)}>
        {tabs.map((tab) => (
          <Tabs.TabPane tab={tab.tab} key={tab.key}>
            <AttritionList employees={employees} />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default AttritionContainer;
