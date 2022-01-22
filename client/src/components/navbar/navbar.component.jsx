import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import useStyles from "./navbar.styles.js";
import memories from "../../images/memories.png";
const NavBar = () => {
	const classes = useStyles();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	useEffect(() => {
		console.log(JSON.parse(localStorage.getItem("profile")))
	}, [user])
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
						<Avatar className={classes.purple} alt={user.profileObj?.givenName} src={user.profileObj?.imageUrl}>{user.profileObj?.givenName.charAt(0)}</Avatar>
						<Typography className={classes.userName} variant="h6">{`${user.profileObj?.givenName} ${user.profileObj?.familyName}`}</Typography>
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
