import * as types from "./constants";
import moment from "moment";

const initialState = {
  page: "",
  posts: [],
  userData: [],
  edit: false,
  allowEdit: false,
  errors: [],
  open: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FRIEND_PROFILE: {
      return {
        ...state
      };
    }
    case types.GET_FRIEND_PROFILE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        userData: {
          ...data,
          gender: data.gender === 1 || data.gender === true ? "Male" : "Female",
          dateOfBirth: moment(data.date_of_birth).format("YYYY-MM-DD")
        },
        page: data.name,
        allowEdit: false
      };
    }
    case types.GET_FRIEND_STATUS: {
      return {
        ...state
      };
    }
    case types.GET_FRIEND_STATUS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        posts: data
      };
    }
    case types.GET_FRIEND_PROFILE_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true
      };
    }
    case types.CLOSE_FRIEND_PROFILE_ERROR_MODAL: {
      return {
        ...state,
        open: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
