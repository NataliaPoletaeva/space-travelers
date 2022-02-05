import React from 'react';
import MissionProfile from './missionComponents/MissionProfile';
import RocketProfile from './rocketComponents/RocketProfile';
import './styling/Missions.css';

const MyProfile = () => (
  <div className="profile">
    <MissionProfile />
    <RocketProfile />
  </div>
);

export default MyProfile;
