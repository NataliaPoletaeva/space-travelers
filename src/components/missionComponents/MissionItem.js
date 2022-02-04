import React from 'react';
import PropTypes from 'prop-types';
import '../styling/Missions.css';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const MissionItem = (props) => {
  const {
    mission: {
      id, name, description, reserved,
    },
  } = props;
  const dispatch = useDispatch();
  return (
    <>
      <div className="mission-name">{name}</div>
      <div className="mission-part">{description}</div>
      <div className="mission-part">
        {reserved
          && <p className="badge badge-active">Active Member</p>}
        {!reserved
          && <p className="badge badge-inactive">NOT A MEMBER</p>}
      </div>
      <div className="mission-part">
        {!reserved
          && (
            <button type="button" className="mission-btn-join" onClick={() => dispatch(joinMission(id))}>
              Join Mission
            </button>
          )}
        {reserved
          && (
            <button type="button" className="mission-btn" onClick={() => dispatch(leaveMission(id))}>
              Leave Mission
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
