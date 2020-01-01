import React, { Component } from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Button, CssBaseline, Grid, Typography, Container, Link, withStyles } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Field, reduxForm } from "redux-form";
import ModalError from "../../components/Modal/ModalError";
import renderTextField from "./../../components/formHelper/TextField";
import styles from "./styles";
import validate from "./validate";
import * as loginAction from "./action";

class Login extends Component {
  componentWillMount() {
    if (localStorage.getItem("jwtToken")) {
      this.props.history.push("/");
    }
  }

  onLogin = data => {
    this.props.loginActionCreators.login(data);
  };

  onClose = () => {
    this.props.loginActionCreators.closeModalError();
  };

  render() {
    const { classes, handleSubmit, errors, open } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ModalError errors={errors} open={open} onClose={this.onClose} />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className={classes.title}>Login</Typography>
          <form onSubmit={handleSubmit(this.onLogin)}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // disabled={invalid}
            >
              Login
            </Button>
          </form>
          <Grid container>
            <Grid item xs>
              <Link
                to="/request-reset-password"
                component={RouterLink}
                variant="body2"
              >
                Forgot password ?
              </Link>
            </Grid>
            <Grid item>
              <Typography className={classes.question}>
                Don't have an account ?
              </Typography>
            </Grid>
            <Grid item>
              <Link to="/register" component={RouterLink} variant="body2">
                {"Register"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.login.errors,
    open: state.login.open
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginActionCreators: bindActionCreators(loginAction, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReduxForm = reduxForm({
  form: "login",
  validate
});

export default compose(
  withStyles(styles),
  withReduxForm,
  withConnect
)(Login);
