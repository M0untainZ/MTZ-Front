import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "../redux/modules/userSlice";
import mountains from "../redux/modules/mountainsSlice";
import twoSlice from "./modules/twoSlice";
import proofs from "./modules/proofSlice";

import mypage from "./modules/mypageSlice";

const reducer = combineReducers({
     user,
     mountains,
     twoSlice,
     proofs,
     mypage,
});

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
