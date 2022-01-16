import * as api from "../api";

//Action Creators

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (err) {
		console.log(err.message);
	}
};

export const createPost = (newPost) => async (dispatch) => {
	try {
		const { data } = await api.createPost(newPost)
		dispatch({ type: "CREATE", payload: data });
	} catch (err) {
		console.log(err.message);
	}
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, updatedPost);
		dispatch({ type: "UPDATE", payload: data });
	} catch (err) {
		console.log(err.message)
	}
}
