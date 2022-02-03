import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionItem from './MissionItem';
import { fetchMissionAPI } from '../../redux/missions/missions';
import '../styling/Missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissionAPI());
  }, [dispatch]);
  return (
    <div>
      <div className="mission-header">
        <div className="header-item">Mission</div>
        <div className="header-item">Description</div>
        <div className="header-item">Status</div>
        <div className="header-item">Join/Leave</div>
      </div>
      <ul className="missions">
        {console.log(missions)}
        {missions.map((mission) => (
          <li className="mission-item" key={mission.id}>
            <MissionItem mission={mission} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
