import * as types from "./constants";
import moment from "moment";

const initialState = {
  page: "Profile",
  posts: [],
  userData: [],
  friends: [],
  edit: false,
  userEdit: [],
  allowEdit: true,
  errors: [],
  open: false,
  openModalDelete: false,
  idDelete: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILE: {
      return {
        ...state
      };
    }
    case types.GET_PROFILE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        userData: {
          ...data,
          gender: data.gender === 1 || data.gender === true ? "Male" : "Female",
          dateOfBirth: moment(data.date_of_birth).format("YYYY-MM-DD")
        },
        edit: false,
        allowEdit: true
      };
    }
    case types.GET_LIST_FRIEND: {
      return {
        ...state
      };
    }
    case types.GET_LIST_FRIEND_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        friends: data
      };
    }
    case types.GET_STATUS: {
      return {
        ...state
      };
    }
    case types.GET_STATUS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        posts: data
      };
    }
    case types.UPDATE_PROFILE: {
      return {
        ...state
      };
    }
    case types.UPDATE_PROFILE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        userData: {
          ...data,
          gender: data.gender === 1 || data.gender === true ? true : false,
          dateOfBirth: moment(data.date_of_birth).format("YYYY-MM-DD")
        },
        edit: false
      };
    }
    case types.EDIT_PROFILE: {
      const { data } = action.payload;
      return {
        ...state,
        edit: true,
        userEdit: {
          ...data,
          gender:
            data.gender === 1 || data.gender === true || data.gender === "Male"
              ? true
              : false,
          dateOfBirth: moment(data.date_of_birth).format("YYYY-MM-DD")
        }
      };
    }
    case types.EDIT_CANCEL: {
      return {
        ...state,
        edit: false
      };
    }
    case types.POST_STATUS_PROFILE: {
      return {
        ...state
      };
    }
    case types.POST_STATUS_PROFILE_SUCCESS: {
      const newPost = action.payload.data.data.status;
      let dataNewPost = [newPost].concat(state.posts);
      return {
        ...state,
        posts: dataNewPost
      };
    }
    case types.GET_PROFILE_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true
      };
    }
    case types.CLOSE_PROFILE_ERROR_MODAL: {
      return {
        ...state,
        open: false
      };
    }
    case types.ARGEE_DELETE_IN_PROFILE: {
      return {
        ...state
      };
    }
    case types.ARGEE_DELETE_IN_PROFILE_SUCCESS: {
      let { data } = action.payload.data;
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== data.id)
      };
    }
    case types.OPEN_MODAL_DELETE_IN_PROFILE: {
      let { data } = action.payload;
      return {
        ...state,
        openModalDelete: true,
        idDelete: data
      };
    }
    case types.CLOSE_MODAL_DELETE_IN_PROFILE: {
      return {
        ...state,
        openModalDelete: false,
        idDelete: ""
      };
    }
    default:
      return state;
  }
};

export default reducer;
