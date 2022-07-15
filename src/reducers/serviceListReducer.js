import {nanoid} from "nanoid";
import {ADD_SERVICE, REMOVE_SERVICE, UPDATE_SERVICE} from "../actions/actionTypes";

const initialState = [
  {
    id: nanoid(),
    name: 'Замена стекла',
    price: 2100,
  }
];

function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;
      return [...state, { id: nanoid, name, price }];
    }
    case UPDATE_SERVICE: {
      const { id, name, price } = action.payload;
      return state.map(item => {
        if (item.id === id) {
          return { id, name, price }
        }
        return item;
      });
    }
    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return state.filter(item => item.id !== id);
    }
    default:
      return state;
  }
}

export default serviceListReducer;
