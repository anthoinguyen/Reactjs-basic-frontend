import { call, takeLatest, put } from "redux-saga/effects";
import {
  getStatusSuccess,
  getListFriendSuccess,
  getProfileSuccess,
  updateProfileSuccess,
  postStatusSuccess,
  getProfileError,
  argeeDeleteSuccess,
  getStatus
} from "./action";
import * as constProfile from "./constants";
import * as api from "./../../constants/config";
import axios from "axios";
import moment from "moment";
// import { push } from "connected-react-router";

const apiGetStatus = async () => {
  let token = await localStorage.getItem("jwtToken");
  let result = await axios.get(api.API_STATUS, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
  });
  return result;
};

const apiGetListFriend = async () => {
  let token = await localStorage.getItem("jwtToken");
  let result = await axios.get(api.API_LIST_FRIEND, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
  });
  return result;
};

const apiGetProfile = async () => {
  let token = await localStorage.getItem("jwtToken");
  let result = await axios.get(api.API_USER, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
  });
  return result;
};

const apiDeleteStatus = async idPost => {
  let token = await localStorage.getItem("jwtToken");
  let result = await axios({
    method: "DELETE",
    url: `${api.API_DELETE_STATUS}/${idPost}`,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return result;
};

const apiPutProfile = async user => {
  let token = await localStorage.getItem("jwtToken");
  let payload = {
    email: user.data.email,
    name: user.data.name,
    dateOfBirth: moment(user.data.dateOfBirth).format("DD/MM/YYYY"),
    about: user.data.about,
    gender: user.data.gender,
    phone: user.data.phone
  };
  let result = await axios({
    method: "PUT",
    url: `${api.API_EDIT_PROFILE}`,
    data: payload,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return result;
};

const apiPostStatus = async newPost => {
  let token = await localStorage.getItem("jwtToken");
  let result = await axios({
    method: "POST",
    url: `${api.API_STATUS}`,
    data: newPost,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return result;
};

function* getStatusSaga() {
  try {
    const resp = yield call(apiGetStatus);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getStatusSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getProfileError(error.response.data));
    } else {
      yield put(getProfileError(error));
    }
  }
}

function* getListFriend() {
  try {
    const resp = yield call(apiGetListFriend);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getListFriendSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getProfileError(error.response.data));
    } else {
      yield put(getProfileError(error));
    }
  }
}

function* getProfile() {
  try {
    const resp = yield call(apiGetProfile);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getProfileSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getProfileError(error.response.data));
    } else {
      yield put(getProfileError(error));
    }
  }
}

function* putProfile({ payload }) {
  try {
    const resp = yield call(apiPutProfile, payload);
    const { data, status } = resp;
    if (status === 200) {
      yield put(updateProfileSuccess(data.data));
      yield put(getStatus());
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getProfileError(error.response.data));
    } else {
      yield put(getProfileError(error));
    }
  }
}

function* postStatus({ payload }) {
  try {
    let newPost = payload.data;
    const resp = yield call(apiPostStatus, newPost);
    const { data, status } = resp;
    if (status === 200) {
      yield put(postStatusSuccess(data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getProfileError(error.response.data));
    } else {
      yield put(getProfileError(error));
    }
  }
}

function* deleteStatus({ payload }) {
  try {
    let isPost = payload.data;
    const resp = yield call(apiDeleteStatus, isPost);
    const { data, status } = resp;
    if (status === 200) {
      yield put(argeeDeleteSuccess(data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getProfileError(error.response.data));
    } else {
      yield put(getProfileError(error));
    }
  }
}

function* getProfileSaga() {
  yield takeLatest(constProfile.GET_STATUS, getStatusSaga);
  yield takeLatest(constProfile.GET_LIST_FRIEND, getListFriend);
  yield takeLatest(constProfile.GET_PROFILE, getProfile);
  yield takeLatest(constProfile.UPDATE_PROFILE, putProfile);
  yield takeLatest(constProfile.POST_STATUS_PROFILE, postStatus);
  yield takeLatest(constProfile.ARGEE_DELETE_IN_PROFILE, deleteStatus);
}

export default getProfileSaga();
