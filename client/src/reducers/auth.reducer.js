import {
    AUTH, LOGOUT
} from "../constants/actionTypes"

const reducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            return action?.payload;
        case LOGOUT:
            return {authData: null};
        default:
            return state;
    }
}

export default reducer;