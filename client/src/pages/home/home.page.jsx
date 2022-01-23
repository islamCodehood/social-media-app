import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts.actions";
import { Grow, Grid } from "@material-ui/core";
import Posts from "../../components/posts/posts.component";
import Form from "../../components/form/form.component";
import useStyles from "./home.styles";

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Grid
        container
        className={classes.mainContainer}
        justifyContent="space-between"
        align-items="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={12} md={7}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Grow>
  );
};

export default Home;
