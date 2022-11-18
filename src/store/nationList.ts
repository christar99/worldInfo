import { createSlice } from "@reduxjs/toolkit";
import { worldInfoApi } from "api/worldInfoApi";

interface NationListState {
    nations: [{
        idx: number,
        name: string;
        continent: string;
        code: string;
    }?];
    status: string;
};

const initialState: NationListState = {
    nations: [],
    status: ''
};

export const nationList = createSlice({
    name: 'getNationsList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(worldInfoApi.getNationsList.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(worldInfoApi.getNationsList.fulfilled, (state, action) => {
            action.payload.data.forEach(nation => state.nations.push(nation));
            state.status = 'complete';
        })
        .addCase(worldInfoApi.getNationsList.rejected, (state) => {
            state.status = 'error';
        })
    }
})