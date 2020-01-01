import * as constLogin from "./constants";

export const login = data => {
  return {
    type: constLogin.LOGIN,
    payload: {
      data
    }
  };
};

export const loginSuccess = data => {
  return {
    type: constLogin.LOGIN_SUCCESS,
    payload: {
      data
    }
  };
};

export const loginError = error => {
  return {
    type: constLogin.LOGIN_ERROR,
    payload: {
      error
    }
  };
};

export const closeModalError = () => {
  return {
    type: constLogin.CLOSE_LOGIN_ERROR_MODAL
  };
};
