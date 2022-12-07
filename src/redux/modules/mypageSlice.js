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
            Authorization: sessionStorage.getItem("Access_Token"),
          },
        }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//닉네임 중복체크
export const __mynameCheck = createAsyncThunk(
  "users/__nameCheck",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_AXIOS_API}/api/nickNameConfirm`,
        payload
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//프로필 수정
export const __putMyinfo = createAsyncThunk(
  "PUTMYINFO",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_AXIOS_API}/api/myPageSujung`,
        payload,
        {
          headers: {
            Authorization: sessionStorage.getItem("Access_Token"),
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
  overlapNameChk: false,
  badgeList: [],
  defaultBadge: {
    badgeName: "",
    badgeImg: "",
    badgeInfo: "",
  },
};

export const MypageSlice = createSlice({
  name: "mypage",
  initialState,
  reducers: {
    overlapNameChk: (state) => {
      state.mynameChk = false;
    },
  },
  extraReducers: {
    [__getMyinfo.fulfilled]: (state, action) => {
      state.mypage = action.payload;
    },
    [__getMyinfo.rejected]: (state, action) => {},
    [__putMyinfo.fulfilled]: (state, action) => {
      state.mypage = action.payload;
    },
    [__putMyinfo.rejected]: (state, action) => {},
    // 닉네임 중복 체크
    [__mynameCheck.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.mynameChk = true;
      } else {
        state.mynameChk = false;
      }
    },
  },
});
export const { overlapNameChk } = MypageSlice.actions;
export default MypageSlice.reducer;
