import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase, withStyles } from "@material-ui/core";
import styles from "./styles";

class SearchCustom extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SearchCustom);
