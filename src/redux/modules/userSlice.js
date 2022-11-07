import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//로그인
export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("/api/login", payload);
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//회원가입
export const __addUsers = createAsyncThunk(
  "users/addUsers",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("/api/signUp", payload);
      // if (!data.data.result) {
      //   alert("회원가입에 실패하였습니다.");
      // }
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
  overlapEmail: false,
  overlapName: false,
  isLogin: false,
};

export const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    //로그인
    [__loginUser.fulfilled]: (state, action) => {
      if (action.payload.data.result) {
        state.isLogin = true;
        sessionStorage.setItem(
          "Access_Token"
          // action.payload.headers.accesstoken
        );
        sessionStorage.setItem(
          "Refresh_Token"
          // action.payload.headers.refreshtoken
        );
        //   sessionStorage.setItem("name", action.payload.data.data.name);
        //   alert(`${action.payload.data.data.name}님 환영합니다.`);
      } else {
        alert("아이디 비밀번호가 일치하지 않습니다");
      }
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //회원가입
    [__addUsers.fulfilled]: (state, action) => {},
    [__addUsers.rejected]: (state, action) => {
      state.message = "데이터를 불러오지 못했습니다.";
    },
  },
});

export default userSlice.reducer;
