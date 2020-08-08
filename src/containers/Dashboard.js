import React from 'react';
import Navigation from './Navigation';
import BuildingsList from './BuildingsList';

const Dashboard = () => {
  return (
    <div className="main">
      <div className="left">
        <Navigation />
      </div>
      <div className="right">
        <BuildingsList />
      </div>
    </div>
  )
}

export default Dashboard;