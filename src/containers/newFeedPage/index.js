import React, { Component, Fragment } from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import CardPost from "./../../components/cardPost";
import NavbarCustom from "./../../components/navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardAddPost from "./../../components/cardAddPost";
import ModalError from "../../components/Modal/ModalError";
import ModalDelete from "../../components/Modal/ModalDelete";
import { Container, withStyles } from "@material-ui/core";
import * as getNewFeedAction from "./action";
import * as CommonAction from "./../../action";
import styles from "./styles";

class NewFeed extends Component {
  componentWillMount() {
    if (!localStorage.getItem("jwtToken")) {
      this.props.history.push("/login");
    }
  }

  componentDidMount() {
    this.props.getNewFeedActionCreators.getNewFeed();
  }

  addPost = async post => {
    this.props.getNewFeedActionCreators.postStatus(post);
  };

  onClose = () => {
    this.props.getNewFeedActionCreators.closeModalError();
  };

  onPushLogin = () => {
    this.props.commonActionCreators.pushLogin();
  };

  openModalDelete = data => {
    this.props.getNewFeedActionCreators.openModalDelete(data);
  };

  closeModalDelete = () => {
    this.props.getNewFeedActionCreators.closeModalDelete();
  };

  argeeDelete = () => {
    this.props.getNewFeedActionCreators.argeeDelete(this.props.idDelete);
  };

  render() {
    const {
      history,
      newFeeds,
      page,
      errors,
      open,
      openModalDelete,
      classes
    } = this.props;

    let posts = newFeeds.map((post, index) => {
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
        <Container component="main" maxWidth="sm" className={classes.container}>
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
          <CardAddPost addPost={this.addPost} />
          {posts}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    newFeeds: state.newFeed.results,
    page: state.newFeed.page,
    errors: state.newFeed.errors,
    open: state.newFeed.open,
    openModalDelete: state.newFeed.openModalDelete,
    idDelete: state.newFeed.idDelete
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getNewFeedActionCreators: bindActionCreators(getNewFeedAction, dispatch),
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
)(NewFeed);
