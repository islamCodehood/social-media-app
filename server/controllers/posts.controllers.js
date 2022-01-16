import Post from "../models/post.model.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.status(200).json(posts);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

export const createPost = async (req, res) => {
	const post = req.body;
	const newPost = new Post(post);
	try {
		await newPost.save();
		res.status(201).json(newPost);
	} catch (err) {
		res.status(409).json({ message: err.message });
	}
};

export const updatePost = async (req, res) => {
	console.log(req.params);
    //get the post id
	const { id: _id } = req.params;
	const post = req.body;
    //check if the id is a valid id that is a valid Id
	//if (!mongoose.Types.objectId.isValid(_id)) return res.status(404).send("No post with that id");
    //Get the post and update it
	const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
    res.status(200).json(updatedPost);
};
