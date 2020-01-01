import React, { Component, Fragment } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import CardPost from "./../../components/cardPost";
import NavbarCustom from "./../../components/navbar";
import ListInfor from "./../../components/listInfor";
import ModalError from "../../components/Modal/ModalError";
import { Container, CssBaseline, Grid, withStyles } from "@material-ui/core";
import * as friendProfileAction from "./action";
import * as CommonAction from "./../../action";
import styles from "./styles";

class FriendProfile extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    const {
      getFriendStatus,
      getFriendProfile
    } = this.props.friendProfileActionCreators;
    getFriendStatus(id);
    getFriendProfile(id);
  }

  onClose = () => {
    this.props.friendProfileActionCreators.closeModalError();
  };

  onPushLogin = () => {
    this.props.commonActionCreators.pushLogin();
  };

  render() {
    const {
      posts,
      userData,
      edit,
      page,
      allowEdit,
      errors,
      open,
      classes
    } = this.props;

    let post = posts.map((post, index) => {
      let result = "";
      result = <CardPost post={post} key={index} />;
      return result;
    });

    return (
      <Fragment>
        <NavbarCustom page={page} />
        <Container component="main" maxWidth="lg" className={classes.container}>
          <CssBaseline />
          <ModalError
            errors={errors}
            open={open}
            onClose={this.onClose}
            pushLogin={this.onPushLogin}
          />
          <Grid container spacing={4}>
            <Grid item lg={3} sm={12}>
              <ListInfor
                edit={edit}
                userData={userData}
                allowEdit={allowEdit}
              />
            </Grid>
            <Grid item lg={6} sm={12}>
              {post}
            </Grid>
            <Grid item lg={3} sm={12} />
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.friend.posts,
    userData: state.friend.userData,
    edit: state.friend.edit,
    page: state.friend.page,
    allowEdit: state.friend.allowEdit,
    errors: state.friend.errors,
    open: state.friend.open
  };
};
const mapDispatchToProps = dispatch => {
  return {
    friendProfileActionCreators: bindActionCreators(friendProfileAction, dispatch),
    commonActionCreators: bindActionCreators(CommonAction, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(FriendProfile);
