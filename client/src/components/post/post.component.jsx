import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, likePost } from "../../actions/posts.actions";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./post.styles.js";
import Likes from "../likes/likes.component";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  moment.relativeTimeThreshold("d", 25);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData);

  const del = () => {
    dispatch(deletePost(post._id));
  };
  const like = () => {
    dispatch(likePost(post._id));
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        {(user?.user?._id === post.creator ||
          user?.user?.googleId === post.creator) && (
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
            }}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        )}
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag, index) => (
            <span key={index}>{`#${tag} `}</span>
          ))}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5">
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          /* disabled={user ? false : true} */
          onClick={() => like()}
        >
          <Likes likes={post.likes} />
        </Button>
        {(user?.user?._id === post.creator ||
          user?.user?.googleId === post.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => {
              del();
            }}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
