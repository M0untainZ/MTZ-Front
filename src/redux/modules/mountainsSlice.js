import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//전체 산리스트 불러오기
export const __getMountains = createAsyncThunk(
     "getMountains",
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
     "postMountains",

     async (payload, thunkAPI) => {
          console.log("페이", payload);
          try {
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
     "getSearchMountains",
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
               console.log("filter", action.payload);
          },
          [__getMountains.rejected]: (state, action) => {},
          [__postFilterMountains.fulfilled]: (state, action) => {
               console.log("filter", action.payload);

               state.mountains = action.payload;
          },
          [__postFilterMountains.rejected]: (state, action) => {},
          [__postSearchMountains.fulfilled]: (state, action) => {
               console.log("filter", action.payload);

               state.mountains = action.payload;
          },
          [__postSearchMountains.rejected]: (state, action) => {},
     },
});

export default mountainsSlice.reducer;
