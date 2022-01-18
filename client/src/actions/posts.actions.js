import { FETCH_ALL, DELETE, LIKE, UPDATE, CREATE } from "../constants/actionTypes";
import * as api from "../api";

//Action Creators

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (err) {
		console.log(err);
	}
};

export const createPost = (newPost) => async (dispatch) => {
	try {
		const { data } = await api.createPost(newPost);
		dispatch({ type: CREATE, payload: data });
	} catch (err) {
		console.log(err);
	}
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, updatedPost);
		dispatch({ type: UPDATE, payload: data });
	} catch (err) {
		console.log(err);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);
		dispatch({ type: DELETE, payload: id });
	} catch (err) {
		console.log(err);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {

		const { data } = await api.likePost(id);
		console.log(data);
		dispatch({ type: LIKE, payload: data})
	} catch(err) {
		console.log(err)
	}
}
