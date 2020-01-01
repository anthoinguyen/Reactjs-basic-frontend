import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";


class ItemInfor extends Component {
  render() {
    const { classes, color, primary, secondary, icon } = this.props;
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon className={classes.icon} color={color}>
              {icon}
            </Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
    );
  }
}

export default withStyles(styles)(ItemInfor);
