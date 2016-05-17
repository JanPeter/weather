import { TEMP_REQUEST } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case TEMP_REQUEST:
      return {
        city: action.payload.city,
        days: action.payload.list
      }
    default:
      return state;
  }
}
