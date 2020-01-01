import * as constRegister from "./constants";

export const register = data => {
  return {
    type: constRegister.REGISTER,
    payload: {
      data
    }
  };
};

export const registerSuccess = data => {
  return {
    type: constRegister.REGISTER_SUCCESS,
    payload: {
      data
    }
  };
};

export const registerError = error => {
  return {
    type: constRegister.REGISTER_ERROR,
    payload: {
      error
    }
  };
};

export const closeModalError = () => {
  return {
    type: constRegister.CLOSE_REGISTER_ERROR_MODAL
  };
};
