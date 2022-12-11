import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
            Authorization: `${sessionStorage.getItem("Access_Token")}`,
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
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_AXIOS_API}/api/mountain/${payload.id}/certification`,
        payload.formData,
        {
          headers: {
            Authorization: sessionStorage.getItem("Access_Token"),
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
            Authorization: `${sessionStorage.getItem("Access_Token")}`,
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
  isLike: false,
  badge: {},
  correctBadge: false,
};
export const twoSlice = createSlice({
  name: "two",
  initialState,
  reducers: {
    isCorrectBadge: (state) => {
      state.correctBadge = false;
    },
  },
  extraReducers: {
    //상세페이지 2 정보 불러오기
    [__getMountain.fulfilled]: (state, action) => {
      state.mountain = action.payload;
      state.correctLike = action.payload.data.correctLike;
      state.countLike = action.payload.data.countLike;
    },
    [__getMountain.rejected]: (state, action) => {},
    //좋아요
    [__likePost.fulfilled]: (state, action) => {
      state.badge = action.payload.data.badge;
      state.correctBadge = action.payload.data.correctBadge;
      state.correctLike = action.payload.data.correctLike;
      state.countLike = action.payload.data.countLike;
      state.isLike = true;
    },
    [__likePost.rejected]: (state, action) => {
      state.isLike = false;
    },
    //인증샷
    [__imgPost.fulfilled]: (state, action) => {
      state.mountain = action.payload;
    },
    [__imgPost.rejected]: (state, action) => {},
  },
});

export const { isCorrectBadge } = twoSlice.actions;
export default twoSlice.reducer;
