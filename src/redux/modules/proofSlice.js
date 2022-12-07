import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    proofs: [],
    isLoading: false,
    photo: "",
    certificationId: "",
    filterData: [],
    filterButton: false,
    filter: {
        region: "",
        name: ""
    }
};

export const proofSlice = createSlice({
    name: "proofs",
    initialState,
    reducers: {
        proofData: (state, { payload }) => {
            state.filterData = payload;
        },
        filterTrue: (state) => {
            state.filterButton = true;
        },
        filterFalse: (state) => {
            state.filterButton = false;
        },
    },
    extraReducers: {},
});

export default proofSlice.reducer;
export const { proofData, filterTrue, filterFalse } = proofSlice.actions;
