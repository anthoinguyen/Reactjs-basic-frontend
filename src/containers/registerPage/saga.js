import { call, takeLatest, put } from "redux-saga/effects";
import * as constRegister from "./constants";
import { showLoading, hideLoading } from "./../../action";
import * as api from "./../../constants/config";
import { push } from "connected-react-router";
import { registerError } from "./action";
import axios from "axios";
import moment from "moment";

const apiRegister = async data => {
  let result = await axios({
    method: "POST",
    url: `${api.API_REGISTER}`,
    data: {
      email: data.email,
      password: data.password,
      name: data.name,
      dateOfBirth: moment(data.dateOfBirth).format("DD/MM/YYYY"),
      about: data.about,
      gender: data.gender,
      phone: data.phone
    },
  });
  return result;
};

function* onRegister({ payload }) {
  try {
    const result = payload.data;
    yield put(showLoading());
    const resp = yield call(apiRegister, result);
    const { status } = resp;
    if (status === 200) {
      yield put(hideLoading());
      yield put(push("/login"));
      alert("Register Successfully. Please login now!");
    }
  } catch (error) {
    yield put(hideLoading());
    if (error.response && error.response.data.error) {
      yield put(registerError(error.response.data));
    } else {
      yield put(registerError(error));
    }
  }
}

function* onRegisterSaga() {
  yield takeLatest(constRegister.REGISTER, onRegister);
}

export default onRegisterSaga();
