import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import ItemFriend from "../itemFriend/index";
import Typography from "@material-ui/core/Typography";

class ListFriend extends Component {
  render() {
    const { classes, friends } = this.props;

    const friend = friends.map((friend, index) => {
      let result = "";
      result = <ItemFriend key={index} color={"primary"} primary={friend.name} link={friend.id} icon={"person"} />;
      return result;
    });

    return (
      <List className={classes.root}>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          List Friend
        </Typography>
        {friend}
      </List>
    );
  }
}

export default withStyles(styles)(ListFriend);
