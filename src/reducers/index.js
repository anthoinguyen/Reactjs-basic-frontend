import { combineReducers } from "redux";
import loginReducer from "./../containers/loginPage/reducer";
import registerReducer from "./../containers/registerPage/reducer";
import changePasswordReducer from "./../containers/changePassword/reducer";
import RequestResetPasswordReducer from "./../containers/requestResetPassword/reducer";
import AcceptResetPasswordReducer from "./../containers/acceptResetPassword/reducer";
import newFeedReducer from "./../containers/newFeedPage/reducer";
import profileReducer from "./../containers/profilePage/reducer";
import friendProfileReducer from "./../containers/friendProfilePage/reducer";
import uiReducer from "./uiReducer";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    form: formReducer,
    router: connectRouter(history),
    login: loginReducer,
    register: registerReducer,
    newFeed: newFeedReducer,
    profile: profileReducer,
    ui: uiReducer,
    friend: friendProfileReducer,
    changePassword: changePasswordReducer,
    requestResetPassword: RequestResetPasswordReducer,
    acceptResetPassword: AcceptResetPasswordReducer
  });
