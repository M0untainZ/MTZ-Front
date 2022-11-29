import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//전체 산리스트 불러오기
export const __getMountains = createAsyncThunk(
     "GETMOUNTAINS",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axios.get(
                    `${process.env.REACT_APP_AXIOS_API}/api/mountains`
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);
//필터에 따라 상세 1 산 리스트 불러오기
export const __postFilterMountains = createAsyncThunk(
     "POSTMOUNTAINS",

     async (payload, thunkAPI) => {
          try {
               console.log("^^", payload);
               const { data } = await axios.post(
                    `${process.env.REACT_APP_AXIOS_API}/api/mountains/filter`,
                    payload
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);
//상세 1 검색하기
export const __postSearchMountains = createAsyncThunk(
     "GETSEARCHMOUNTAINS",
     async (payload, thunkAPI) => {
          try {
               const { data } = await axios.post(
                    `${process.env.REACT_APP_AXIOS_API}/api/mountains/search`,
                    payload
               );
               return thunkAPI.fulfillWithValue(data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);

const initialState = {
     mountains: [],
     filter: {
          time: "",
          region: "",
          season: "",
          level: "",
     },
};

export const mountainsSlice = createSlice({
     name: "mountains",
     initialState,
     reducers: {},
     extraReducers: {
          [__getMountains.fulfilled]: (state, action) => {
               state.mountains = action.payload;
          },
          [__getMountains.rejected]: (state, action) => {},
          [__postFilterMountains.fulfilled]: (state, action) => {
               //console.log("filter", action);
               state.filter = action.meta.arg;
               state.mountains = action.payload;
          },
          [__postFilterMountains.rejected]: (state, action) => {},
          [__postSearchMountains.fulfilled]: (state, action) => {
               state.mountains = action.payload;
          },
          [__postSearchMountains.rejected]: (state, action) => {},
     },
});

export const { isSeasonFalse, isRegionFalse, isTimeFalse, isLevelFalse } =
     mountainsSlice.actions;
export default mountainsSlice.reducer;
