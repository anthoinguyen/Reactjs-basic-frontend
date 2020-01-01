import React, { Component } from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { compose, bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import {Button, CssBaseline, Grid, Typography, Container, Link, Box, withStyles } from "@material-ui/core";
import Loading from "./../../components/loading";
import ModalError from "../../components/Modal/ModalError";
import renderTextField from "./../../components/formHelper/TextField";
import styles from "./styles";
import validate from "./validate";
import * as requestAction from "./action";

class RequestResetPassword extends Component {
  componentWillMount() {
    if (localStorage.getItem("jwtToken")) {
      this.props.history.push("/");
    }
  }

  onRequest = data => {
    this.props.requestActionCreators.requestResetPassword(data);
  };

  onClose = () => {
    this.props.requestActionCreators.closeModalError();
  };

  render() {
    const {
      classes,
      handleSubmit,
      invalid,
      showLoading,
      errors,
      open
    } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ModalError errors={errors} open={open} onClose={this.onClose} />
        <Loading showLoading={showLoading} />
        <div className={classes.paper}>
          <Typography className={classes.title}>Reset Password</Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(this.onRequest)}
          >
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              component={renderTextField}
            />
            <Grid container>
              <Box>
                <Link
                  to="/login"
                  underline="none"
                  component={RouterLink}
                  variant="body2"
                >
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
                </Link>
              </Box>
              <Box>
                <Button
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={invalid}
                >
                  Send
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
    errors: state.requestResetPassword.errors,
    open: state.requestResetPassword.open
  };
};
const mapDispatchToProps = dispatch => {
  return {
    requestActionCreators: bindActionCreators(requestAction, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReduxForm = reduxForm({
  form: "requestResetPassword",
  validate
});

export default compose(
  withStyles(styles),
  withReduxForm,
  withConnect
)(RequestResetPassword);
