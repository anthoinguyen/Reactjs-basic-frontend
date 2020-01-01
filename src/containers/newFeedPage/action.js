import * as types from "./constants";

export const getNewFeed = data => {
  return {
    type: types.GET_NEW_FEED,
    payload: {
      data
    }
  };
};

export const getNewFeedSuccess = data => {
  return {
    type: types.GET_NEW_FEED_SUCCESS,
    payload: {
      data
    }
  };
};

export const postStatus = data => {
  return {
    type: types.POST_STATUS,
    payload: {
      data
    }
  };
};

export const postStatusSuccess = data => {
  return {
    type: types.POST_STATUS_SUCCESS,
    payload: {
      data
    }
  };
};

export const getNewFeedError = error => {
  return {
    type: types.GET_NEW_FEED_ERROR,
    payload: {
      error
    }
  };
};

export const closeModalError = () => {
  return {
    type: types.CLOSE_GET_NEW_FEED_ERROR_MODAL
  };
};

export const openModalDelete = data => {
  return {
    type: types.OPEN_MODAL_DELETE,
    payload: {
      data
    }
  };
};

export const closeModalDelete = () => {
  return {
    type: types.CLOSE_MODAL_DELETE
  };
};

export const argeeDelete = data => {
  return {
    type: types.ARGEE_DELETE,
    payload: {
      data
    }
  };
};

export const argeeDeleteSuccess = data => {
  return {
    type: types.ARGEE_DELETE_SUCCESS,
    payload: {
      data
    }
  };
};
