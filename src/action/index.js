import * as constAction from "./constant";

export const pushLogin = () => {
  return {
    type: constAction.PUSH_LOGIN
  };
};

export const showLoading = () => {
  return {
    type: constAction.SHOW_LOADING
  };
};

export const hideLoading = () => {
  return {
    type: constAction.HIDE_LOADING
  };
};
