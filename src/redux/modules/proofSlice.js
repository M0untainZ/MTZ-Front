import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getProof = createAsyncThunk("GET_PROOF", async (_, thunkAPI) => {
         try {
              const { data } = await axios.get(`${process.env.REACT_APP_AXIOS_API}/api/photos`, {
                headers: {
                    Authorization: sessionStorage.getItem("Access_Token"),
                },
              });
              return thunkAPI.fulfillWithValue(data);
         } catch (err) {
              return thunkAPI.rejectWithValue(err);
         }
    }
);

export const __proofFilter = createAsyncThunk("FILTER_PROOF", async (payload, thunkAPI) => {
         try {
              const { data } = await axios.post(`${process.env.REACT_APP_AXIOS_API}/api/photos/filter`, payload
              );
              return thunkAPI.fulfillWithValue(data);
         } catch (err) {
              return thunkAPI.rejectWithValue(err);
         }
    }
);

export const __proofDelete = createAsyncThunk("DELETE_PROOF", async (payload, thunkAPI) => {
    try {
       const {data} = await axios.delete(`${process.env.REACT_APP_AXIOS_API}/api/photos/sakje`);
       return thunkAPI.fulfillWithValue(data);
    } catch(err) {
        return thunkAPI.rejectWithValue(err);
    }
})

export const __infiniteProof = createAsyncThunk("INFINITE_SCROLL", async (page, thunkAPI) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_AXIOS_API}/api/photos?page=${page}`);
        if (res.data.data.length === 0) {
            throw res
        }
        return thunkAPI.fulfillWithValue(res.data.data)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    proofs: [],
    isLoading: false,
    filter: {
        region: "",
        name: ""
    }
};

export const proofSlice = createSlice({
    name: "proofs",
    initialState,
    reducers: {},
    extraReducers: {
        [__getProof.fulfilled]: (state, action) => {
            state.proofs = action.payload;
        },
        [__getProof.rejected]: (state, action) => {},
        [__proofFilter.fulfilled]: (state, action) => {
            state.proofs = action.payload;
        },
        [__proofFilter.rejected]: (state, action) => {

        },
        [__proofDelete.fulfilled]: (state, action) => {
            state.proofs = state.proof.filter((proof) => proof.certificationId !== action.payload);
        },
        [__proofDelete.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [__infiniteProof.fulfilled]: (state, action) => {
            state.proofs.push(...action.payload)
            state.isLoading = false;
        },
        [__infiniteProof.rejected]: (state, action) => {
        },
    },
});

export default proofSlice.reducer;
