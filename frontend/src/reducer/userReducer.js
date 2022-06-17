import {
  LOGIN_ERR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_ERR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  USER_SHOW_ALL_PRO_ERR,
  USER_SHOW_ALL_PRO_REQUEST,
  USER_SHOW_ALL_PRO_SUCCESS,
} from "../constant/userConstant";

export const userRegsterReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case REGISTER_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case LOGIN_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ShowAllProReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SHOW_ALL_PRO_REQUEST:
      return { loading: true };
    case USER_SHOW_ALL_PRO_SUCCESS:
      return { loading: false, allPro: action.payload };
    case USER_SHOW_ALL_PRO_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
