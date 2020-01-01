import { call, takeLatest, put } from "redux-saga/effects";
import {
  getFriendStatusSuccess,
  getFriendProfileSuccess,
  getFriendProfileError
} from "./action";
import * as types from "./constants";
import * as api from "./../../constants/config";
import axios from "axios";
// import { push } from "connected-react-router";

const apiGetFriendStatus = async data => {
  let token = await localStorage.getItem("jwtToken");
  let url = `${api.API_FRIEND_STATUS}/${data}/status`;
  let result = await axios({
    method: "GET",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
  });
  return result;
};

const apiGetFriendProfile = async data => {
  let token = await localStorage.getItem("jwtToken");
  let url = `${api.API_FRIEND_PROFILE}/${data}/friend-profile`;
  let result = await axios({
    method: "GET",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
  });
  return result;
};

function* getFriendStatus({ payload }) {
  try {
    let result = payload.data;
    const resp = yield call(apiGetFriendStatus, result);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getFriendStatusSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getFriendProfileError(error.response.data));
    } else {
      yield put(getFriendProfileError(error));
    }
  }
}

function* getFriendProfile({ payload }) {
  try {
    let result = payload.data;
    const resp = yield call(apiGetFriendProfile, result);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getFriendProfileSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getFriendProfileError(error.response.data));
    } else {
      yield put(getFriendProfileError(error));
    }
  }
}

function* getFriendProfileSaga() {
  yield takeLatest(types.GET_FRIEND_PROFILE, getFriendProfile);
  yield takeLatest(types.GET_FRIEND_STATUS, getFriendStatus);
}

export default getFriendProfileSaga();
