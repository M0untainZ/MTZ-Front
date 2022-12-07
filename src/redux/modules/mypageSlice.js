import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//닉네임 중복체크
export const __mynameCheck = createAsyncThunk(
  "users/__nameCheck",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_AXIOS_API}/api/nickNameConfirm`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  mypage: {},
  overlapNameChk: false,
  badgeList: [],
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
