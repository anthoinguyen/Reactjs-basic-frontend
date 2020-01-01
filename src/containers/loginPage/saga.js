import { call, takeLatest, put } from "redux-saga/effects";
import * as constLogin from "./constants";
import * as api from "./../../constants/config";
import * as constCommon from "./../../action/constant";
// import { pushLogin } from "./../../action";
import { push } from "connected-react-router";
import { loginSuccess, loginError } from "./action";
import axios from "axios";

const CancelToken = axios.CancelToken;
let cancel;

const apiLogin = async data => {
  if (cancel !== undefined) cancel();
  let result = await axios({
    method: "POST",
    url: `${api.API_LOGIN}`,
    data: {
      emailOrPhone: data.email,
      password: data.password
    },
    cancelToken: new CancelToken(c => (cancel = c))
  });
  return result;
};

function* onLogin({ payload }) {
  try {
    const result = payload.data;
    const resp = yield call(apiLogin, result);
    const { data, status } = resp;
    if (status === 200) {
      yield put(loginSuccess(data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(loginError(error.response.data));
    } else {
      yield put(loginError(error));
    }
  }
}

function* onLoginSuccess({ payload }) {
  const { data } = payload.data;
  localStorage.setItem("jwtToken", data);
  yield put(push("/"));
}

function* pushLogin() {
  localStorage.removeItem("jwtToken");
  yield put(push("/login"));
}

function* onLoginSaga() {
  yield takeLatest(constLogin.LOGIN, onLogin);
  yield takeLatest(constLogin.LOGIN_SUCCESS, onLoginSuccess);
  yield takeLatest(constCommon.PUSH_LOGIN, pushLogin);
}

export default onLoginSaga();
