import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getMyinfo = createAsyncThunk(
     "GETMYINFO",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axios.get(
                    `${process.env.REACT_APP_AXIOS_API}/api/myPages`,
                    {
                         headers: {
                              Authorization:
                                   sessionStorage.getItem("Access_Token"),
                         },
                    }
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (err) {
               return thunkAPI.rejectWithValue(err);
          }
     }
);

export const __putMyinfo = createAsyncThunk(
     "PUTMYINFO",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axios.patch(
                    `${process.env.REACT_APP_AXIOS_API}/api/myPageSujung`,
                    payload,
                    {
                         headers: {
                              Authorization:
                                   sessionStorage.getItem("Access_Token"),
                         },
                    }
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (err) {
               return thunkAPI.rejectWithValue(err);
          }
     }
);

const initialState = {
     mypage: {},
};

export const MypageSlice = createSlice({
     name: "mypage",
     initialState,
     reducers: {},
     extraReducers: {
          [__getMyinfo.fulfilled]: (state, action) => {
               state.mypage = action.payload;
          },
          [__getMyinfo.rejected]: (state, action) => {},
          [__putMyinfo.fulfilled]: (state, action) => {
               state.mypage = action.payload;
          },
          [__putMyinfo.rejected]: (state, action) => {},
     },
});

export default MypageSlice.reducer;
