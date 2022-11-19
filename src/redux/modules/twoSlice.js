import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
//상세페이지 2 불러오기
export const __getMountain = createAsyncThunk(
     "getMountain",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axios.get(
                    `${process.env.REACT_APP_AXIOS_API}/api/mountain/${payload}`,
                    {
                         headers: {
                              Authorization: `${sessionStorage.getItem(
                                   "Access_Token"
                              )}`,
                         },
                    }
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);
//상세2 인증샷 전송
export const __imgPost = createAsyncThunk(
     "__imgPost",
     async (payload, thunkAPI) => {
          console.log(payload);
          try {
               const data = await axios.post(
                    `${process.env.REACT_APP_AXIOS_API}/api/mountain/${payload.id}/certification`,
                    { photo: payload.imgSave },
                    {
                         headers: {
                              Authorization: `${sessionStorage.getItem(
                                   "Access_Token"
                              )}`,
                              "Content-Type": "multipart/form-data",
                         },
                    }
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);
//좋아요
export const __likePost = createAsyncThunk(
     "LIKE_POST",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axios.post(
                    `${process.env.REACT_APP_AXIOS_API}/api/mountain/${payload}/like`,
                    "",
                    {
                         headers: {
                              Authorization: `${sessionStorage.getItem(
                                   "Access_Token"
                              )}`,
                         },
                    }
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);

const initialState = {
     mountain: {},
     correctLike: {},
};
export const twoSlice = createSlice({
     name: "two",
     initialState,
     reducers: {},
     extraReducers: {
          [__getMountain.fulfilled]: (state, action) => {
               state.mountain = action.payload;
          },
          [__getMountain.rejected]: (state, action) => {},
          [__likePost.fulfilled]: (state, action) => {
               state.correctLike = action.payload.data;
          },
          [__likePost.rejected]: (state, action) => {
               alert("로그인이 필요한 기능입니다.");
          },
     },
});

//   export const {  } =
//   twoSlice.actions;
export default twoSlice.reducer;
