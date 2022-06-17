import axios from "axios";
import {
  ADD_PRODUCT_ERR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_TO_CARD_ERR,
  ADD_TO_CARD_REQUEST,
  ADD_TO_CARD_SUCCESS,
  EDIT_PRO_SHOW_ERR,
  EDIT_PRO_SHOW_REQUEST,
  EDIT_PRO_SHOW_SUCCESS,
  LOGIN_ERR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  PRODUCT_SHOW_ERR,
  PRODUCT_SHOW_REQUEST,
  PRODUCT_SHOW_SUCCESS,
  REGISTER_ERR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  USER_SHOW_ALL_PRO_ERR,
  USER_SHOW_ALL_PRO_REQUEST,
  USER_SHOW_ALL_PRO_SUCCESS,
} from "../constant/userConstant";

export const RegisterAction = (obj) => async (dispatch, getState) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    let { data } = await axios.post("/api/user", obj);

    dispatch({ type: REGISTER_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error, "errorerrorerrorerrorerror");
    dispatch({
      type: REGISTER_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const LoginAction = (obj) => async (dispatch, getState) => {
  try {
    console.log(obj, "signInsignInsignInsignInsignIn");
    dispatch({ type: LOGIN_REQUEST });
    let { data } = await axios.post("/api/user/login", obj);

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: LOGIN_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productShowAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_SHOW_REQUEST });
    let isUser = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    console.log(isUser, "TokenTokenTokenTokenToken");

    let { data } = await axios.get("/api/admin/productShow");

    dispatch({ type: PRODUCT_SHOW_SUCCESS, payload: data });
    console.log(data, "datadatadatadatadata");
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: PRODUCT_SHOW_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ShowAllProAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_SHOW_ALL_PRO_REQUEST });

    let isUser = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    console.log(isUser.tokens, "TokenTokenTokenTokenToken");

    let { data } = await axios.get("/api/user/ShowAllPro");

    dispatch({ type: USER_SHOW_ALL_PRO_SUCCESS, payload: data });
    console.log(data, "datadatadatadatadata");
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: USER_SHOW_ALL_PRO_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// axios.get(api, { headers: {"" : `Bearer ${token}`} })
