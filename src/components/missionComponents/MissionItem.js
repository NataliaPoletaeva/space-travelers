import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styling/Missions.css';
import { useDispatch } from 'react-redux';
import { joinMissionAPI, leaveMissionAPI } from '../../redux/missions/missions';

const MissionItem = (props) => {
  const {
    mission: {
      id, name, description, reserved,
    },
  } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(joinMissionAPI, leaveMissionAPI);
  }, [dispatch]);
  return (
    <>
      <div className="mission-part">{name}</div>
      <div className="mission-part">{description}</div>
      <div className="mission-part">Not a member</div>
      <div className="mission-part">
        {reserved && (
          <button type="button" className="mission-btn" onClick={leaveMissionAPI(id)}>
            Leave Mission
          </button>
        )}
        {!reserved && (
          <button type="button" className="mission-btn" onClick={joinMissionAPI(id)}>
            Join Mission
          </button>
        )}
      </div>
    </>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default MissionItem;
