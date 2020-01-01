import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import validate from "./validate";
import renderTextField from "./../formHelper/TextField";
import renderSelectField from "./../formHelper/Select";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";

class EditInfor extends Component {
  onSave = data => {
    this.props.onSave(data);
  };

  render() {
    const { classes, edit, handleSubmit, invalid, onCancel } = this.props;
    let result = "";
    if (edit) {
      result = (
        <List className={classes.root}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Edit Information
          </Typography>
          <div className={classes.paper}>
            <form onSubmit={handleSubmit(this.onSave)}>
              <Grid container className={classes.container} spacing={2}>
                <Field
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  component={renderTextField}
                />
                <Field
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  component={renderTextField}
                  disabled={true}
                />
                <Field
                  margin="normal"
                  fullWidth
                  id="phone"
                  label="Number phone"
                  name="phone"
                  autoComplete="phone"
                  component={renderTextField}
                  disabled={true}
                />
                <Field
                  margin="normal"
                  fullWidth
                  name="dateOfBirth"
                  label="Date Of Birth"
                  type="date"
                  id="dateOfBirth"
                  InputLabelProps={{
                    shrink: true
                  }}
                  component={renderTextField}
                />
                <Field
                  name="gender"
                  id="gender"
                  component={renderSelectField}
                  label="Gender"
                >
                  <MenuItem value={true}>Male</MenuItem>
                  <MenuItem value={false}>Female</MenuItem>
                </Field>
                <Field
                  margin="normal"
                  fullWidth
                  name="about"
                  label="About"
                  id="about"
                  component={renderTextField}
                />
              </Grid>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="default"
                className={classes.submit}
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={invalid}
              >
                Save
              </Button>
            </form>
          </div>
        </List>
      );
    }
    return result;
  }
}

const withReduxForm = reduxForm({
  form: "editProfile",
  enableReinitialize: true,
  validate
});

export default compose(
  withStyles(styles),
  withReduxForm
)(EditInfor);
