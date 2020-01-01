import { call, takeLatest, put } from "redux-saga/effects";
import {
  getNewFeedSuccess,
  postStatusSuccess,
  getNewFeedError,
  argeeDeleteSuccess,
} from "./action";
import * as constNewFeed from "./constants";
import * as api from "./../../constants/config";
import axios from "axios";

const apiGetNewFeed = async token => {
  let result = await axios.get(api.API_NEW_FEED, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
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

function* getNewFeed() {
  try {
    let token = yield localStorage.getItem("jwtToken");
    const resp = yield call(apiGetNewFeed, token);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getNewFeedSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getNewFeedError(error.response.data));
    } else {
      yield put(getNewFeedError(error));
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
      yield put(getNewFeedError(error.response.data));
    } else {
      yield put(getNewFeedError(error));
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
      yield put(getNewFeedError(error.response.data));
    } else {
      yield put(getNewFeedError(error));
    }
  }
}

function* getNewFeedSaga() {
  yield takeLatest(constNewFeed.GET_NEW_FEED, getNewFeed);
  yield takeLatest(constNewFeed.POST_STATUS, postStatus);
  yield takeLatest(constNewFeed.ARGEE_DELETE, deleteStatus);
}

export default getNewFeedSaga();
