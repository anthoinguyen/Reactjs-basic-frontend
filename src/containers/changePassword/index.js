import React, { Component } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Button, CssBaseline, Typography, Grid, Box, Container, withStyles } from "@material-ui/core";
import Loading from "./../../components/loading";
import ModalError from "../../components/Modal/ModalError";
import renderTextField from "./../../components/formHelper/TextField";
import styles from "./styles";
import validate from "./validate";
import * as changePasswordAction from "./action";
import * as CommonAction from "./../../action";

class ChangePassword extends Component {
  componentWillMount() {
    if (!localStorage.getItem("jwtToken")) {
      this.props.history.push("/login");
    }
  }

  onClose = () => {
    this.props.changePasswordActionCreators.closeModalError();
  };

  onChangePassword = data => {
    this.props.changePasswordActionCreators.changePassword(data);
  };

  onCancel = () => {
    this.props.changePasswordActionCreators.cancelChangePassword();
  };

  onPushLogin = () => {
    this.props.commonActionCreators.pushLogin();
  };

  render() {
    const { classes, handleSubmit, showLoading, errors, open } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ModalError
          errors={errors}
          open={open}
          onClose={this.onClose}
          pushLogin={this.onPushLogin}
        />
        <Loading showLoading={showLoading} />
        <div className={classes.paper}>
          <Typography className={classes.title}>Change Password</Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(this.onChangePassword)}
          >
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              name="currentPassword"
              label="Current Password"
              type="password"
              id="currentPassword"
              component={renderTextField}
            />
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              name="newPassword"
              label="New Password"
              type="password"
              id="newPassword"
              component={renderTextField}
            />
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              name="confirmNewPassword"
              label="Confirm New Password"
              type="password"
              id="confirmNewPassword"
              component={renderTextField}
            />
            <Grid container>
              <Box>
                <Button
                  type="button"
                  variant="contained"
                  size="large"
                  color="default"
                  className={classes.submit}
                  onClick={this.onCancel}
                >
                  Cancel
                </Button>
              </Box>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.submit}
                >
                  Save
                </Button>
              </Box>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading,
    errors: state.changePassword.errors,
    open: state.changePassword.open
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changePasswordActionCreators: bindActionCreators(changePasswordAction, dispatch),
    commonActionCreators: bindActionCreators(CommonAction, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReduxForm = reduxForm({
  form: "changePassword",
  validate
});

export default compose(
  withStyles(styles),
  withReduxForm,
  withConnect
)(ChangePassword);
