import React, { Component } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link as RouterLink } from "react-router-dom";
import { Link, Box, Grid, Button, CssBaseline, Typography, Container, withStyles } from "@material-ui/core";
import Loading from "./../../components/loading";
import ModalError from "../../components/Modal/ModalError";
import renderTextField from "./../../components/formHelper/TextField";
import styles from "./styles";
import validate from "./validate";
import * as acceptAction from "./action";

class AcceptResetPassword extends Component {
  componentWillMount() {
    if (localStorage.getItem("jwtToken")) {
      this.props.history.push("/");
    }
  }

  onAccept = data => {
    let { token } = this.props.match.params;
    let payload = {
      password: data.password,
      confirmPassword: data.confirmPassword,
      token: token
    };
    this.props.acceptActionCreators.acceptResetPassword(payload);
  };

  onClose = () => {
    this.props.acceptActionCreators.closeModalError();
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
          <form className={classes.form} onSubmit={handleSubmit(this.onAccept)}>
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              component={renderTextField}
            />
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
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
    errors: state.acceptResetPassword.errors,
    open: state.acceptResetPassword.open
  };
};
const mapDispatchToProps = dispatch => {
  return {
    acceptActionCreators: bindActionCreators(acceptAction, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReduxForm = reduxForm({
  form: "acceptResetPassword",
  validate
});

export default compose(
  withStyles(styles),
  withReduxForm,
  withConnect
)(AcceptResetPassword);
