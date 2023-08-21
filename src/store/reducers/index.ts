import { combineReducers } from "redux";
import imageReducer from "./uploadImages";

export default combineReducers({
  imagesData: imageReducer,
});
