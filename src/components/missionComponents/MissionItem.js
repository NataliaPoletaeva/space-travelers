import React from 'react';
import PropTypes from 'prop-types';
import '../styling/Missions.css';

const MissionItem = (props) => {
  const { mission: { name, description } } = props;
  return (
    <>
      <div className="mission-part">{name}</div>
      <div className="mission-part">{description}</div>
      <div className="mission-part">Not a member</div>
      <div className="mission-part">
        <button className="join-or-leave" type="button">Join mission</button>
      </div>
    </>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default MissionItem;
