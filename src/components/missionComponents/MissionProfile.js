import React from 'react';
import { useSelector } from 'react-redux';
import '../styling/Missions.css';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="profile-missions">
      <h2 className="header-profile-mission">My Missions</h2>
      <ul className="missions-list">
        {joinedMissions.map((mission) => (
          <li className="joined-mission" key={mission.id}>{mission.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MissionProfile;
