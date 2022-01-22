import { combineReducers } from "redux";
import posts from "./posts.reducer";
import auth from "./auth.reducer";

export const reducers = combineReducers({ posts, auth });
