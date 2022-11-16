import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "../redux/modules/userSlice";
import twoSlice from "./modules/twoSlice";
const reducer = combineReducers({
  user,
  twoSlice,
});

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
