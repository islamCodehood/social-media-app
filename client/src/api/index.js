import axios from "axios";
//prod URL
//const url = "https://social-app-is.herokuapp.com/posts";

//dev URL
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const signin = (formData) => axios.post('http://localhost:5000/user/signin', formData);
export const signup = (formData) => axios.post('http://localhost:5000/user/signup', formData);
