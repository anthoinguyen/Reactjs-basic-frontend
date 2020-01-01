import { all } from "redux-saga/effects";
import onLoginSaga from "./../containers/loginPage/saga";
import onRegisterSaga from "./../containers/registerPage/saga";
import getNewFeedSaga from "./../containers/newFeedPage/saga";
import getProfileSaga from "./../containers/profilePage/saga";
import onRequestResetPassword from "./../containers/requestResetPassword/saga";
import onAcceptResetPassword from "./../containers/acceptResetPassword/saga";
import onChangePasswordSaga from "./../containers/changePassword/saga";
import getFriendProfileSaga from "./../containers/friendProfilePage/saga"

function* rootSaga() {
  yield all([
    onLoginSaga,
    onRegisterSaga,
    getNewFeedSaga,
    getProfileSaga,
    onRequestResetPassword,
    onAcceptResetPassword,
    onChangePasswordSaga,
    getFriendProfileSaga
  ]);
}

export default rootSaga;
