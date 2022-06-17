import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import {
  addProductReducer,
  deleteProReducer,
  editProductDetailReducer,
  getEditDetailsReducer,
  productShowReducer,
} from "./reducer/AdminReducer";
import {
  loginReducer,
  ShowAllProReducer,
  userRegsterReducer,
} from "./reducer/userReducer";

const appReducer = combineReducers({
  userRegster: userRegsterReducer,
  login: loginReducer,
  productShow: productShowReducer,
  getEditDetails: getEditDetailsReducer,
  deletePro: deleteProReducer,
  addProduct: addProductReducer,
  ShowAllPro: ShowAllProReducer,
  editProductDetail: editProductDetailReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let Middleware = [thunk];

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...Middleware))
);
export default store;
