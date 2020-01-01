import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Fab,
  Link
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import IconButton from "@material-ui/core/IconButton";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SearchCustom from "./../search/index";
import styles from "./styles";

class NavbarCustom extends Component {
  loggout = () => {
    localStorage.removeItem("jwtToken");
    this.props.history.push("/login");
  };

  render() {
    const { classes, page } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Link to="/" component={RouterLink}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <HomeIcon className={classes.homeIcon} />
              </IconButton>
            </Link>
            <Typography variant="h6" className={classes.title}>
              {page}
            </Typography>
            <SearchCustom />
            <Link to="/profile" component={RouterLink}>
              <Avatar className={classes.icon}>
                <AssignmentIcon color="error" />
              </Avatar>
            </Link>
            <Link to="/change-password" component={RouterLink}>
              <Avatar className={classes.icon}>
                <VpnKeyIcon color="error" />
              </Avatar>
            </Link>
            <Fab color="secondary" onClick={this.loggout} size="small">
              <Avatar className={classes.icon}>
                <ArrowForwardIcon color="secondary" />
              </Avatar>
            </Fab>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavbarCustom);
