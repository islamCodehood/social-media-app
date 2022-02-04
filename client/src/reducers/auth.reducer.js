import { AUTH, LOGOUT } from "../constants/actionTypes";

const reducer = (state = { authData:  JSON.parse(localStorage.getItem('profile'))}, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: action?.payload };
    default:
      return state;
  }
};

export default reducer;
