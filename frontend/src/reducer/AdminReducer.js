import {
  ADD_PRODUCT_ERR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_TO_CARD_ERR,
  ADD_TO_CARD_REQUEST,
  ADD_TO_CARD_SUCCESS,
  DELETE_PRO_ERR,
  DELETE_PRO_REQUEST,
  DELETE_PRO_SUCCESS,
  EDIT_GET_DETAIL_ERR,
  EDIT_GET_DETAIL_REQUEST,
  EDIT_GET_DETAIL_SUCCESS,
  EDIT_PRO_SHOW_ERR,
  EDIT_PRO_SHOW_REQUEST,
  EDIT_PRO_SHOW_SUCCESS,
  PRODUCT_SHOW_ERR,
  PRODUCT_SHOW_REQUEST,
  PRODUCT_SHOW_SUCCESS,
} from "../constant/userConstant";

export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return { loading: true };
    case ADD_PRODUCT_SUCCESS:
      return { loading: false, addPro: action.payload };
    case ADD_PRODUCT_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productShowReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_SHOW_REQUEST:
      return { loading: true };
    case PRODUCT_SHOW_SUCCESS:
      return { loading: false, showPro: action.payload };
    case PRODUCT_SHOW_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getEditDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_PRO_SHOW_REQUEST:
      return { ...state, loading: true };
    case EDIT_PRO_SHOW_SUCCESS:
      return { ...state, loading: false, editDetail: action.payload };
    case EDIT_PRO_SHOW_ERR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteProReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRO_REQUEST:
      return { loading: true };
    case DELETE_PRO_SUCCESS:
      return { loading: false, deleteDetail: action.payload };
    case DELETE_PRO_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const editProductDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_GET_DETAIL_REQUEST:
      return { loading: true };
    case EDIT_GET_DETAIL_SUCCESS:
      return { loading: false, editIdDetail: action.payload };
    case EDIT_GET_DETAIL_ERR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
