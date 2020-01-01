import * as types from "./constants";

const initialState = {
  page: "New Feed",
  results: [],
  errors: [],
  open: false,
  openModalDelete: false,
  idDelete: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEW_FEED: {
      return {
        ...state,
        results: []
      };
    }
    case types.GET_NEW_FEED_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        results: data
      };
    }
    case types.POST_STATUS: {
      return {
        ...state
      };
    }
    case types.POST_STATUS_SUCCESS: {
      const newPost = action.payload.data.data.status;
      let dataNewPost = [newPost].concat(state.results);
      return {
        ...state,
        results: dataNewPost
      };
    }
    case types.GET_NEW_FEED_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true
      };
    }
    case types.CLOSE_GET_NEW_FEED_ERROR_MODAL: {
      return {
        ...state,
        open: false
      };
    }
    case types.OPEN_MODAL_DELETE: {
      let { data } = action.payload;
      return {
        ...state,
        openModalDelete: true,
        idDelete: data
      };
    }
    case types.CLOSE_MODAL_DELETE: {
      return {
        ...state,
        openModalDelete: false,
        idDelete: ""
      };
    }
    case types.ARGEE_DELETE: {
      return {
        ...state
      };
    }
    case types.ARGEE_DELETE_SUCCESS: {
      let { data } = action.payload.data;
      return {
        ...state,
        results: state.results.filter(item => item.id !== data.id)
      };
    }
    default:
      return state;
  }
};

export default reducer;
