import {CLEAR_FORM_FIELDS, CHANGE_FORM_FIELD, SET_FORM_FIELDS} from "../actions/actionTypes";

const initialState = {
  id: null,
  name: '',
  price: '',
};

function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM_FIELD: {
      const { name, value } = action.payload;
      return {...state, [name]: value};
    }
    case CLEAR_FORM_FIELDS: {
      return initialState;
    }
    case SET_FORM_FIELDS: {
      const { id, name, price } = action.payload;
      return { id, name, price };
    }
    default:
      return state;
  }
}

export default serviceAddReducer;
