import * as constRegister from "./constants";

const initialState = {
  email: "",
  password: "",
  phone: "",
  gender: true,
  dateOfBirth: "",
  about: "",
  name: "",
  errors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constRegister.REGISTER: {
      return {
        ...state
      };
    }
    case constRegister.REGISTER_SUCCESS: {
      return {
        ...state
      };
    }
    case constRegister.REGISTER_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true
      };
    }
    case constRegister.CLOSE_REGISTER_ERROR_MODAL: {
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
