import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = ({ name, description }) => (
  <>
    <div className="mission-title">{name}</div>
    <div className="mission-descr">{description}</div>
    <div className="member-status">Not a member</div>
    <button className="join-or-leave" type="button">Join mission</button>
  </>
);

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;
