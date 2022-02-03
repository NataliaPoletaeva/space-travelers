import Axios from 'axios';

const FETCH_MISSIONS = 'spaceTravelers/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'spaceTravelers/missions/JOIN_MISSIONS';
const LEAVE_MISSION = 'spaceTravelers/missions/LEAVE_MISSIONS';

const initialState = [];

const fetchMission = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const fetchMissionAPI = () => async (dispatch) => {
  const request = await Axios.get('https://api.spacexdata.com/v3/missions');
  const info = request.data;
  const missions = [];
  for (let i = 0; i < info.length; i += 1) {
    const id = info[i].mission_id;
    const name = info[i].mission_name;
    const { description } = info[i];
    const reserved = false;
    const mission = {
      id, name, description, reserved,
    };
    missions.push(mission);
  }
  dispatch(fetchMission(missions));
};

export const joinMissionAPI = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.id !== id) return mission;
    return { ...mission, reserved: true };
  });
  return newState;
};

export const leaveMissionAPI = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.id !== id) return mission;
    return { ...mission, reserved: false };
  });
  return newState;
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return joinMission(state.mission, action.payload);
    case LEAVE_MISSION:
      return leaveMission(state.mission, action.payload);
    default:
      return state;
  }
};

export default missionsReducer;
