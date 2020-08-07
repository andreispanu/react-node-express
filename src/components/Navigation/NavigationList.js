import React from 'react';

const NavigationList = () => {
  return (
    <>
      <div className="list-title">
        Menu
      </div>
      <div className="list-container">
        <ul>
          <li>Dashboard</li>
          <li className="selected">Buildings</li>
          <li>Posts</li>
          <li>Conversations</li>
          <li>Amenities</li>
          <li>Tenants</li>
          <li>Performance</li>
          <li>Users</li>
        </ul>
      </div>
    </>
  )
}

export default NavigationList;