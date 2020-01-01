import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import ItemInfor from "../itemInfor/index";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

class ListInfor extends Component {
  onEdit = () => {
    this.props.onEdit();
  };
  render() {
    const { classes, userData, edit, allowEdit } = this.props;
    let result = "";

    let onAllowEdit = allowEdit ? (
      <Box className={classes.submit}>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.onEdit}
        >
          Edit
        </Button>
      </Box>
    ) : (
      ""
    );
    if (edit === false) {
      result = (
        <List className={classes.root}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Information
          </Typography>
          <ItemInfor
            color={"primary"}
            primary={"Name"}
            secondary={userData.name}
            icon={"person"}
          />
          <ItemInfor
            color={"secondary"}
            primary={"Email"}
            secondary={userData.email}
            icon={"work"}
          />
          <ItemInfor
            color={"action"}
            primary={"Phone"}
            secondary={userData.phone}
            icon={"phone"}
          />
          <ItemInfor
            color={"error"}
            primary={"Gender"}
            secondary={userData.gender}
            icon={"wc"}
          />
          <ItemInfor
            color={"action"}
            primary={"Date Of Birth"}
            secondary={userData.dateOfBirth}
            icon={"cake"}
          />
          <ItemInfor
            color={"primary"}
            primary={"About"}
            secondary={userData.about}
            icon={"my_location"}
          />
          {onAllowEdit}
        </List>
      );
    }
    return result;
  }
}

export default withStyles(styles)(ListInfor);
