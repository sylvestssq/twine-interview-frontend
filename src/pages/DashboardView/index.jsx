import React from 'react';
import { Typography } from 'antd';
import AttritionContainer from '../../components/AttritionContainer/AttritionContainer';

const { Title } = Typography;

const DashboardView = () => (
  <div>
    <Title level={1}>DASHBOARD</Title>
    <AttritionContainer />
  </div>
);

export default DashboardView;
