import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "../redux/modules/userSlice";
import mountains from "../redux/modules/mountainsSlice";
import twoSlice from "./modules/twoSlice";
import proofs from "./modules/proofSlice";

const reducer = combineReducers({
     user,
     mountains,
     twoSlice,
     proofs
});

export default configureStore({
     reducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
