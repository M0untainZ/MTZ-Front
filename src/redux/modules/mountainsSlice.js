import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getMountains = createAsyncThunk(
     "getMountains",
     async (payload, thunkAPI) => {
          try {
               const data = await axios.get(
                    `${process.env.REACT_APP_AXIOS_API}/api/mountains`
               );
               return thunkAPI.fulfillWithValue(data.data);
          } catch (error) {
               return thunkAPI.rejectWithValue(error);
          }
     }
);

const initialState = {
     mountains: [],
};

export const mountainsSlice = createSlice({
     name: "mountains",
     initialState,
     reducers: {},
     extraReducers: {
          [__getMountains.fulfilled]: (state, action) => {
               console.log(action);
               state.mountains = action.payload;
          },
          [__getMountains.rejected]: (state, action) => {},
     },
});

export default mountainsSlice.reducer;
