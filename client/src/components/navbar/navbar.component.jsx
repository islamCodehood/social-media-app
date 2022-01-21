import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import useStyles from "./navbar.styles.js";
import memories from "../../images/memories.png";

const NavBar = () => {
	const classes = useStyles();
	const [user, serUser] = useState();
	return (
		<AppBar className={classes.appBar} position="static" color="inherit">
			<div className={classes.brandContainer}>
				<Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
					Memories
				</Typography>
				<img className={classes.image} src={memories} alt="memories" height="90" />
			</div>
			<Toolbar className={classes.toolbar}>
				{user ? (
					<div className={classes.profile}>
						<Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
						<Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
						<Button variant="contained" color="secondary" className={classes.logout}>Logout</Button>
					</div>
				) : (
					<Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
