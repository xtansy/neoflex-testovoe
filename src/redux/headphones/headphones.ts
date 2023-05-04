import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getHeadphones } from "@api/requests";

interface HeadphonesSlice {
    headphones: null | Headphones;
    isLoading: boolean;
    errorMessage: null | string;
}

const initialState: HeadphonesSlice = {
    headphones: null,
    isLoading: true,
    errorMessage: null
}


export const fetchHeadphones = createAsyncThunk("headphones/fetchHeadphones", async () => {
    const { data } = await getHeadphones();
    return data;
})

const headphones = createSlice({
    name: "headphones",
    initialState,
    reducers: {
        // some code for items
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeadphones.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchHeadphones.fulfilled, (state, action) => {
                const payload = action.payload;
                state.headphones = { ...payload };
                state.isLoading = false;
            })
            .addCase(fetchHeadphones.rejected, (state) => {
                state.errorMessage = "Error with get headphones";
                state.isLoading = false;
            })
    },
});


const { reducer } = headphones;
export default reducer;
