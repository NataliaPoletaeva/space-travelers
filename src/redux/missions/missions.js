import Axios from 'axios';

const FETCH_MISSIONS = 'spaceTravelers/missions/FETCH_MISSIONS';

const initialState = [];

export const fetchMission = (payload) => ({
    type: FETCH_MISSIONS,
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
        const mission = { id, name, description };
        missions.push(mission);
    }
    dispatch(fetchMission(info));
};

const missionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MISSIONS:
            return action.payload;
        default:
            return state;
    }
};

export default missionsReducer;
