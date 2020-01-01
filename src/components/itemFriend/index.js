import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";

class ItemFriend extends Component {
  render() {
    const { classes, color, primary, icon, link } = this.props;
    let linkTo = `/friend-profile/${link}`;
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon className={classes.icon} color={color}>
              {icon}
            </Icon>
          </Avatar>
        </ListItemAvatar>
        <Link to={linkTo} component={RouterLink} variant="body2">
          <ListItemText primary={primary} />
        </Link>
      </ListItem>
    );
  }
}

export default withStyles(styles)(ItemFriend);
