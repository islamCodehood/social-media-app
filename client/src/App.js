import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts.actions";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "./components/posts/posts.component";
import Form from "./components/form/form.component";
import useStyles from "./styles";
import NavBar from "./components/navbar/navbar.component";

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <NavBar />
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
    </Container>
  );
}

export default App;
