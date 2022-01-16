import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts.actions"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import Posts from "./components/posts/posts.component";
import Form from "./components/form/form.component";
import useStyles from "./styles";
function App() {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [currentId, setCurrentId] = useState(null)
	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);


	
	return (
		<Container maxWidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h2" align="center">
					Memories
				</Typography>
				<img className={classes.image} src={memories} alt="memories" height="90" />
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justifyContent="space-between" align-items="stretch" spacing={3}>
						<Grid item xs={12} sm={12} md={7} order={{xs: 2, sm: 2}}>
							<Posts setCurrentId={setCurrentId} />
						</Grid>
						<Grid item xs={12} sm={8} md={5} order={{xs: 1, sm: 1}}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}

export default App;
