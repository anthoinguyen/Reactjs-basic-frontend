import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Login from "./containers/loginPage";
import Register from "./containers/registerPage";
import NewFeed from "./containers/newFeedPage";
import Profile from "./containers/profilePage";
import FriendProfile from "./containers/friendProfilePage";
import RequestResetPassword from "./containers/requestResetPassword";
import AcceptResetPassword from "./containers/acceptResetPassword";
import ChangePassword from "./containers/changePassword";
import { history } from "./redux";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route path="/" exact component={NewFeed} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/friend-profile/:id" component={FriendProfile} />
          <Route path="/change-password" exact component={ChangePassword} />
          <Route
            path="/request-reset-password"
            exact
            component={RequestResetPassword}
          />
          <Route
            path="/accept-reset-password/:token"
            component={AcceptResetPassword}
          />
        </div>
      </Router>
    );
  }
}

export default App;
