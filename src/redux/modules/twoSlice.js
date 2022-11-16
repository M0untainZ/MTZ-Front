import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getMountain = createAsyncThunk(
     "getMountain",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axios.get(
                    `${process.env.REACT_APP_AXIOS_API}/api/mountain/${payload}`
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);

export const __likePost = createAsyncThunk(
     "LIKE_POST",
     async (payload, thunkAPI) => {
          try {
               console.log("like", payload);

               const result = await axios.post(
                    `${process.env.REACT_APP_AXIOS_API}/api/${payload}/like`,
                    "",
                    {
                         headers: {
                              Authorization: `${sessionStorage.getItem(
                                   "Access_Token"
                              )}`,
                         },
                    }
               );
               return thunkAPI.fulfillWithValue(result);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);

const initialState = {};
export const twoSlice = createSlice({
     name: "two",
     initialState,
     reducers: {},
     extraReducers: {
          [__getMountain.fulfilled]: (state, action) => {
               state.mountain = action.payload;
          },
          [__getMountain.rejected]: (state, action) => {},
     },
});

//   export const {  } =
//   twoSlice.actions;
export default twoSlice.reducer;
