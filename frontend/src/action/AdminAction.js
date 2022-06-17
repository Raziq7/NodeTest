import axios from "axios";
import {
  ADD_PRODUCT_ERR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRO_ERR,
  DELETE_PRO_REQUEST,
  DELETE_PRO_SUCCESS,
  EDIT_GET_DETAIL_ERR,
  EDIT_GET_DETAIL_REQUEST,
  EDIT_GET_DETAIL_SUCCESS,
  EDIT_POST_ERR,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_PRO_SHOW_ERR,
  EDIT_PRO_SHOW_REQUEST,
  EDIT_PRO_SHOW_SUCCESS,
} from "../constant/userConstant";

export const addProductAction = (image, obj) => async (dispatch, getState) => {
  console.log(image, "ksjdfkjjsfdkjh");
  try {
    dispatch({ type: ADD_PRODUCT_REQUEST });

    let { data } = await axios.post("/api/admin/addProduct", {
      image,
      obj,
    });

    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    console.log(error, "errorerrorerrorerrorerror");
    dispatch({
      type: ADD_PRODUCT_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getEditDetailsAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: EDIT_PRO_SHOW_REQUEST });
    let isUser = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    console.log(isUser.Token, "TokenTokenTokenTokenToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isUser.Token}`,
      },
    };
    let { data } = await axios.get(
      `/api/admin/editProductShow?id=${id}`,
      config
    );

    dispatch({ type: EDIT_PRO_SHOW_SUCCESS, payload: data });
    console.log(data, "datadatadatadatadata");
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: EDIT_PRO_SHOW_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_PRO_REQUEST });
    let { data } = await axios.delete(`/api/admin/deletePro?id=${id}`);

    dispatch({ type: DELETE_PRO_SUCCESS, payload: data });
    console.log(data, "datadatadatadatadata");
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: DELETE_PRO_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EditPostDetails = (detail) => async (dispatch, getState) => {
  try {
    console.log(detail._id, "datadatadatadatadata");

    dispatch({ type: EDIT_POST_REQUEST });
    let { data } = await axios.put(
      `/api/admin/EditPostDetails?id=${detail._id}`,
      { detail }
    );

    dispatch({ type: EDIT_POST_SUCCESS, payload: data });
    console.log(data, "datadatadatadatadata");
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: EDIT_POST_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// editProductDetailAction
export const editProductDetailAction = (id) => async (dispatch, getState) => {
  console.log(id, "datadatadatadatadata");
  try {
    dispatch({ type: EDIT_GET_DETAIL_REQUEST });
    let { data } = await axios.get(`/api/admin/editProductGetDetail?id=${id}`, {
      id,
    });

    dispatch({ type: EDIT_GET_DETAIL_SUCCESS, payload: data });
    console.log(data, "datadatadatadatadata");
  } catch (error) {
    console.log(error.response.data, "errorerrorerrorerrorerror");
    dispatch({
      type: EDIT_GET_DETAIL_ERR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
