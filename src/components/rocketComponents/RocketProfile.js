import React from 'react';
import { useSelector } from 'react-redux';
import '../styling/Missions.css';

const RocketProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="reserve-container-top">
      <h2>My Rockets</h2>
      <ul className="reserve-container">
        {reservedRockets.length === 0 && <p>No Reserved Rockets</p>}
        {reservedRockets.map((rocket) => (
          <li key={rocket.id} className="reserve-item">{rocket.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RocketProfile;
