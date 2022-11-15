import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//로그인
export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_AXIOS_API}/api/login`,
        payload
      );
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
      const data = await axios.post(
        `${process.env.REACT_APP_AXIOS_API}/api/signup`,
        payload
      );
      // if (!data.data.result) {
      //   alert("회원가입에 실패하였습니다.");
      // }
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//이메일 중복체크
export const __emailCheck = createAsyncThunk(
  "users/__emailCheck",
  async (payload, thunkAPI) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_AXIOS_API}/api/emailConfirm`,
        payload
      );
      return thunkAPI.fulfillWithValue(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//닉네임 중복체크
export const __nameCheck = createAsyncThunk(
  "users/__nameCheck",
  async (payload, thunkAPI) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_AXIOS_API}/api/nickNameConfirm`,
        payload
      );
      return thunkAPI.fulfillWithValue(result);
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
  name: "users",
  initialState,
  reducers: {
    overlapEmailCheck: (state) => {
      state.overlapEmail = false;
    },
    overlapNameCheck: (state) => {
      state.overlapName = false;
    },
    loginState: (state) => {
      state.isLogin = true;
    },
    logoutState: (state) => {
      state.isLogin = false;
    },
  },
  extraReducers: {
    //로그인
    [__loginUser.fulfilled]: (state, action) => {
      console.log("data", action);
      if (action.payload.data.success) {
        state.isLogin = true;
        sessionStorage.setItem(
          "Access_Token",
          action.payload.headers.authorization
        );
        sessionStorage.setItem(
          "Refresh_Token",
          action.payload.headers.refresh_token
        );
        sessionStorage.setItem("name", action.payload.data.data.nickName);
        sessionStorage.setItem("badge", action.payload.data.data.badgeName);
        alert(`${action.payload.data.data.nickName}님 환영합니다.`);
      } else {
        alert("아이디와 비밀번호를 확인해주세요.");
      }
    },
    [__loginUser.rejected]: (state, action) => {},

    //회원가입
    [__addUsers.fulfilled]: (state, action) => {},
    [__addUsers.rejected]: (state, action) => {
      state.message = "데이터를 불러오지 못했습니다.";
    },
    // 닉네임 중복 체크
    [__nameCheck.fulfilled]: (state, action) => {
      console.log("action:", action.payload.data.result);
      if (action.payload.data.success) {
        state.overlapName = true;
      } else {
        state.overlapName = false;
      }
    },
    [__nameCheck.rejected]: (state, action) => {
      state.message = "데이터를 불러오지 못했습니다.";
    },
    //이메일 중복 체크
    [__emailCheck.fulfilled]: (state, action) => {
      console.log(action.payload);
      if (action.payload.data.success) {
        state.overlapEmail = true;
      } else {
        state.overlapEmail = false;
      }
    },
    [__emailCheck.rejected]: (state, action) => {
      state.message = "데이터를 불러오지 못했습니다.";
    },
  },
});

export const { overlapEmailCheck, overlapNameCheck, loginState, logoutState } =
  userSlice.actions;
export default userSlice.reducer;
