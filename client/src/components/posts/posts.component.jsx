import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "../post/post.component";
import useStyles from "./posts.styles.js";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  /**** */
  const posts = useSelector((state) => state.posts);
  //console.log(posts)
  /**** */
  return !posts.length ? (
    <CircularProgress color="primary" />
  ) : (
    <Grid
      container
      className={classes.container}
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
