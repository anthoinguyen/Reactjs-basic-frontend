import React, { Component, Fragment } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import CardPost from "./../../components/cardPost";
import ListInfor from "./../../components/listInfor";
import NavbarCustom from "./../../components/navbar";
import EditInfor from "./../../components/editInfor";
import ListFriend from "./../../components/listFriend";
import CardAddPost from "./../../components/cardAddPost";
import ModalError from "../../components/Modal/ModalError";
import ModalDelete from "../../components/Modal/ModalDelete";
import { Container, CssBaseline, withStyles, Grid } from "@material-ui/core";
import * as profileAction from "./action";
import * as CommonAction from "./../../action";
import styles from "./styles";

class Profile extends Component {
  componentDidMount() {
    const {
      getStatus,
      getListFriend,
      getProfile
    } = this.props.profileActionCreators;
    getStatus();
    getListFriend();
    getProfile();
  }

  addPost = async post => {
    this.props.profileActionCreators.postStatus(post);
  };

  onSave = user => {
    this.props.profileActionCreators.updateProfile(user);
  };

  onEdit = () => {
    const { profileActionCreators, userData } = this.props;
    const { editProfile } = profileActionCreators;
    editProfile(userData);
  };

  onCancel = () => {
    this.props.profileActionCreators.editCancel();
  };

  onClose = () => {
    this.props.profileActionCreators.closeModalError();
  };

  onPushLogin = () => {
    this.props.commonActionCreators.pushLogin();
  };

  openModalDelete = data => {
    this.props.profileActionCreators.openModalDelete(data);
  };

  closeModalDelete = () => {
    this.props.profileActionCreators.closeModalDelete();
  };

  argeeDelete = () => {
    this.props.profileActionCreators.argeeDelete(this.props.idDelete);
  };

  render() {
    const {
      history,
      posts,
      friends,
      userData,
      userEdit,
      edit,
      page,
      allowEdit,
      errors,
      open,
      openModalDelete,
      classes
    } = this.props;
    
    let post = posts.map((post, index) => {
      let result = "";
      result = (
        <CardPost
          post={post}
          key={index}
          openModalDelete={this.openModalDelete}
        />
      );
      return result;
    });

    return (
      <Fragment>
        <NavbarCustom page={page} history={history} />
        <Container component="main" maxWidth="lg" className={classes.container}>
          <CssBaseline />
          <ModalError
            errors={errors}
            open={open}
            onClose={this.onClose}
            pushLogin={this.onPushLogin}
          />
          <ModalDelete
            openModalDelete={openModalDelete}
            closeModalDelete={this.closeModalDelete}
            argeeDelete={this.argeeDelete}
          />
          <Grid container spacing={4}>
            <Grid item lg={3} sm={12}>
              <ListInfor
                edit={edit}
                userData={userData}
                onEdit={this.onEdit}
                allowEdit={allowEdit}
              />
              <EditInfor
                edit={edit}
                initialValues={userEdit}
                onSave={this.onSave}
                onCancel={this.onCancel}
              />
            </Grid>
            <Grid item lg={6} sm={12}>
              <CardAddPost addPost={this.addPost} />
              {post}
            </Grid>
            <Grid item lg={3} sm={12}>
              <ListFriend friends={friends} />
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.profile.posts,
    friends: state.profile.friends,
    userData: state.profile.userData,
    userEdit: state.profile.userEdit,
    edit: state.profile.edit,
    page: state.profile.page,
    allowEdit: state.profile.allowEdit,
    errors: state.profile.errors,
    open: state.profile.open,
    openModalDelete: state.profile.openModalDelete,
    idDelete: state.profile.idDelete
  };
};

const mapDispatchToProps = dispatch => {
  return {
    profileActionCreators: bindActionCreators(profileAction, dispatch),
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
)(Profile);
