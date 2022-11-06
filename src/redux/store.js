import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "../redux/modules/userSlice";
const reducer = combineReducers({
  reducer: {
    user,
  },
});

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
