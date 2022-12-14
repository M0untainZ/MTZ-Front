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
  loginFalse: false,
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
    isLoginState: (state) => {
      state.isLogin = false;
    },
    logoutState: (state) => {
      state.isLogin = false;
      state.loginFalse = false;
    },
    loginFalseState: (state) => {
      state.loginFalse = true;
    },
  },
  extraReducers: {
    //로그인
    [__loginUser.fulfilled]: (state, action) => {
      if (action.payload.data.success) {
        state.isLogin = true;
        state.loginFalse = false;
        sessionStorage.setItem(
          "Access_Token",
          action.payload.headers.authorization
        );
        sessionStorage.setItem(
          "Refresh_Token",
          action.payload.headers.refresh_token
        );
        sessionStorage.setItem(
          "userinfos",
          JSON.stringify(action.payload.data.data)
        );
        sessionStorage.setItem("authority", action.payload.data.data.authority);
      } else {
        state.loginFalse = true;
      }
    },
    [__loginUser.rejected]: (state, action) => {
      state.loginFalse = true;
    },
    //회원가입
    [__addUsers.fulfilled]: (state, action) => {},
    [__addUsers.rejected]: (state, action) => {
      state.message = "데이터를 불러오지 못했습니다.";
    },
    // 닉네임 중복 체크
    [__nameCheck.fulfilled]: (state, action) => {
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

export const {
  overlapEmailCheck,
  overlapNameCheck,
  logoutState,
  isLoginState,
} = userSlice.actions;
export default userSlice.reducer;
