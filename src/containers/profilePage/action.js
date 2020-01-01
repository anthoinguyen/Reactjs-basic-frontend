import * as types from "./constants";

export const getProfile = data => {
  return {
    type: types.GET_PROFILE,
    payload: {
      data
    }
  };
};

export const getProfileSuccess = data => {
  return {
    type: types.GET_PROFILE_SUCCESS,
    payload: {
      data
    }
  };
};

export const getListFriend = data => {
  return {
    type: types.GET_LIST_FRIEND,
    payload: {
      data
    }
  };
};

export const getListFriendSuccess = data => {
  return {
    type: types.GET_LIST_FRIEND_SUCCESS,
    payload: {
      data
    }
  };
};

export const getStatus = data => {
  return {
    type: types.GET_STATUS,
    payload: {
      data
    }
  };
};

export const getStatusSuccess = data => {
  return {
    type: types.GET_STATUS_SUCCESS,
    payload: {
      data
    }
  };
};

export const updateProfile = data => {
  return {
    type: types.UPDATE_PROFILE,
    payload: {
      data
    }
  };
};

export const updateProfileSuccess = data => {
  return {
    type: types.UPDATE_PROFILE_SUCCESS,
    payload: {
      data
    }
  };
};

export const editProfile = data => {
  return {
    type: types.EDIT_PROFILE,
    payload: {
      data
    }
  };
};

export const editCancel = () => {
  return {
    type: types.EDIT_CANCEL
  };
};

export const postStatus = data => {
  return {
    type: types.POST_STATUS_PROFILE,
    payload: {
      data
    }
  };
};

export const postStatusSuccess = data => {
  return {
    type: types.POST_STATUS_PROFILE_SUCCESS,
    payload: {
      data
    }
  };
};

export const getProfileError = error => {
  return {
    type: types.GET_PROFILE_ERROR,
    payload: {
      error
    }
  };
};

export const closeModalError = () => {
  return {
    type: types.CLOSE_PROFILE_ERROR_MODAL
  };
};


export const openModalDelete = data => {
  return {
    type: types.OPEN_MODAL_DELETE_IN_PROFILE,
    payload: {
      data
    }
  };
};

export const closeModalDelete = () => {
  return {
    type: types.CLOSE_MODAL_DELETE_IN_PROFILE
  };
};

export const argeeDelete = data => {
  return {
    type: types.ARGEE_DELETE_IN_PROFILE,
    payload: {
      data
    }
  };
};

export const argeeDeleteSuccess = data => {
  return {
    type: types.ARGEE_DELETE_IN_PROFILE_SUCCESS,
    payload: {
      data
    }
  };
};
