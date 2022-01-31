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
  //if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
  //Get the post and update it
  const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
  console.log(updatedPost);
  res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  //if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
  await Post.findByIdAndDelete(_id);
  res.json({ message: "Post deleted successfully" });
};

export const likePost = async (req, res) => {
  
  const { id: _id } = req.params;
  //if not a registered user
  if (!req.userId) return res.json({ message: "unauthenticated"})
  const post = await Post.findById(_id);
  
  //search for the user id in the array of likes containing liked user ids
  const index = post.likes.findIndex(id => id === String(req.userId))

  if (index === -1) {
    //like the post
    post.likes.push(req.userId)
  } else {
    //dislikes the post
    post.likes = post.likes.filter(id => id !== String(req.userId))
    console.log(post.likes)
  }

  const updatedPost = await Post.findByIdAndUpdate(
    _id,
    post,
    { new: true }
  );

  res.json(updatedPost);
};
