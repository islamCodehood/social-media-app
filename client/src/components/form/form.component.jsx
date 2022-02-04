import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.actions";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./form.styles.js";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const user = useSelector((state) => state.auth.authData);

  const navigate = useNavigate()
  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, { ...postData, name: user?.user.name }));
    } else {
      dispatch(createPost({ ...postData, name: user?.user.name }));
    }
    const token = user?.token;
    if (token) {
      const decodedToken = jwt_decode(token);
      
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        navigate("/", { replace: true });
      }
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: [],
      selectedFile: "",
    });
  };
  return (
    <>
      {!user?.user ? (
        <Paper>
          <Typography variant="h6">
            Please, sign in to be able to create memories and like others'
            memories.
          </Typography>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <form
            className={`${classes.root} ${classes.form}`}
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
          >
            <Typography variant="h6">
              {currentId ? "Editing" : "Creating"} a memory
            </Typography>
            <TextField
              name="title"
              variant="outlined"
              label="Title"
              fullWidth
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
            <TextField
              name="message"
              variant="outlined"
              label="Message"
              fullWidth
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
            <TextField
              name="tags"
              variant="outlined"
              label="Tags"
              fullWidth
              value={postData.tags}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  tags: e.target.value.replaceAll(" ", "").split(","),
                })
              }
            />
            <div className={classes.fileInput}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              /* fullWidth */
            >
              Submit
            </Button>
            <Button
              variant="contained"
              size="large"
              /* fullWidth */
              className={classes.clearButton}
              onClick={clear}
            >
              Clear
            </Button>
          </form>
        </Paper>
      )}
    </>
  );
};

export default Form;
