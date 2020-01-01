import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import { Button, CssBaseline, Link, Grid, Typography, Container, MenuItem, withStyles } from "@material-ui/core";
import styles from "./styles";
import validate from "./validate";
import Loading from "./../../components/loading";
import ModalError from "../../components/Modal/ModalError";
import renderSelectField from "./../../components/formHelper/Select";
import renderTextField from "./../../components/formHelper/TextField";
import * as registerAction from "./action";

class Register extends Component {
  onRegister = data => {
    this.props.registerActionCreators.register(data);
  };

  onClose = () => {
    this.props.registerActionCreators.closeModalError();
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
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <ModalError errors={errors} open={open} onClose={this.onClose} />
        <Loading showLoading={showLoading} />
        <div className={classes.paper}>
          <Typography className={classes.title}>Register</Typography>
          <form onSubmit={handleSubmit(this.onRegister)}>
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              component={renderTextField}
            />
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
              id="phone"
              label="Number phone"
              name="phone"
              autoComplete="phone"
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="gender"
                  id="gender"
                  component={renderSelectField}
                  label="Gender"
                >
                  <MenuItem value={true}>Male</MenuItem>
                  <MenuItem value={false}>Female</MenuItem>
                </Field>
              </Grid>
            </Grid>
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              name="about"
              label="About"
              id="about"
              component={renderTextField}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={invalid}
            >
              Register
            </Button>
            <Grid container justify="flex-start">
              <Grid item>
                <Typography className={classes.question}>
                  Already have an account ?
                </Typography>
              </Grid>
              <Grid item>
                <Link to="/login" component={RouterLink} variant="body2">
                  Sign in
                </Link>
              </Grid>
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
    errors: state.register.errors,
    open: state.register.open
  };
};
const mapDispatchToProps = dispatch => {
  return {
    registerActionCreators: bindActionCreators(registerAction, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReduxForm = reduxForm({
  form: "register",
  validate
});

export default compose(
  withStyles(styles),
  withReduxForm,
  withConnect
)(Register);
