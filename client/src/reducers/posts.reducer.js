import {
  FETCH_ALL,
  DELETE,
  LIKE,
  UPDATE,
  CREATE,
} from "../constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
    case LIKE:
      return state.map((p) =>
        p._id === action.payload._id ? action.payload : p
      );
    case DELETE:
      return state.filter((p) => p._id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
