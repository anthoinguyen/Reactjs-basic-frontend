import * as types from "./constants";
export const getFriendProfile = data => {
  return {
    type: types.GET_FRIEND_PROFILE,
    payload: {
      data
    }
  };
};

export const getFriendProfileSuccess = data => {
  return {
    type: types.GET_FRIEND_PROFILE_SUCCESS,
    payload: {
      data
    }
  };
};

export const getFriendStatus = data => {
  return {
    type: types.GET_FRIEND_STATUS,
    payload: {
      data
    }
  };
};

export const getFriendStatusSuccess = data => {
  return {
    type: types.GET_FRIEND_STATUS_SUCCESS,
    payload: {
      data
    }
  };
};

export const getFriendProfileError = error => {
  return {
    type: types.GET_FRIEND_PROFILE_ERROR,
    payload: {
      error
    }
  };
};

export const closeModalError = () => {
  return {
    type: types.CLOSE_FRIEND_PROFILE_ERROR_MODAL
  };
};