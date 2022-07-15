import {SET_FILTER} from "../actions/actionTypes";

const initialState = '';

function setFilterReducer(state = initialState, action) {
  if (action.type === SET_FILTER) {
    const { value } = action.payload;
    return value;
  }
  return state;
}

export default setFilterReducer;
