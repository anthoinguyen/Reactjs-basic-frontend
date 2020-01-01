import React, { Component, Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  withStyles,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Link,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import styles from "./styles";

class CardPost extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOpenModalDelete = () => {
    this.setState({ anchorEl: null });
    this.props.openModalDelete(this.props.post.id);
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes, post } = this.props;
    let linkToFriend = "";
    let dropdown = "";

    if (post.friend_lists_id) {
      let linkTo = `/friend-profile/${post.friend_lists_id}`;
      linkToFriend = (
        <Link to={linkTo} component={RouterLink} variant="body2">
          <Typography
            className={classes.name}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {post.name}
          </Typography>
        </Link>
      );
    } else {
      let linkTo = `/profile`;
      linkToFriend = (
        <Link to={linkTo} component={RouterLink} variant="body2">
          <Typography
            className={classes.name}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {post.name}
          </Typography>
        </Link>
      );

      dropdown = (
        <Fragment>
          <IconButton
            aria-label="settings"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleOpenModalDelete}>Delete</MenuItem>
          </Menu>
        </Fragment>
      );
    }

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            className={classes.cardheader}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                TH
              </Avatar>
            }
            action={dropdown}
            title={linkToFriend}
            subheader={post.updated_at}
          />
          <CardContent>
            <Typography
              className={classes.title}
              variant="body1"
              color="textSecondary"
              component="p"
            >
              {post.title}
            </Typography>
            <Typography
              className={classes.content}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {post.content}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CardPost);
