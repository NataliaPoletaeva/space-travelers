import Axios from 'axios';

const FETCH_ROCKET = 'spaceTravelersHub/rockets/FETCH_ROCKET';
const BOOK_ROCKET = 'spaceTravelersHub/rockets/BOOK_ROCKET';

const initialState = [];

export const fetchRocket = (payload) => ({
  type: FETCH_ROCKET,
  payload,
});

export const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

export const fetchRocketApi = () => async (dispatch) => {
  const returnValue = await Axios.get('https://api.spacexdata.com/v3/rockets');
  const { data } = returnValue;
  const rockets = [];
  for (let i = 0; i < data.length; i += 1) {
    const name = data[i].rocket_name;
    const { id } = data[i];
    const { description } = data[i];
    const image = data[i].flickr_images[0];
    const reserved = false;
    const rocket = {
      id, name, description, image, reserved,
    };
    rockets.push(rocket);
  }
  dispatch(fetchRocket(rockets));
};

const reserveCancelRocket = (state, id) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== id) return rocket;
    return { ...rocket, reserved: !rocket.reserved };
  });
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.payload;
    case BOOK_ROCKET:
      return reserveCancelRocket(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
