import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

class Loading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let result = null;
    if (showLoading) {
      result = (
        <div className={classes.globalLoading}>
          <img src="/images/loading.gif" alt="loading" className={classes.icon} />
        </div>
      );
    }
    return result;
  }
}

export default withStyles(styles)(Loading);
