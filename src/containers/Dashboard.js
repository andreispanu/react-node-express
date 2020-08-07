import React from 'react';
import Menu from './Menu';

const Dashboard = () => {
  return (
    <div className="main">
      <div className="left">
        <Menu />
      </div>
      <div className="right">
        <p>right side</p>
      </div>
    </div>
  )
}

export default Dashboard;