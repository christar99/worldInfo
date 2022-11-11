import { createSlice } from "@reduxjs/toolkit";
import { worldInfo_api } from "api/worldInfo_api";

interface NationListState {
    nations: [{
        idx: number,
        name: string;
        continent: string;
    }?];
    status: string;
};

const initialState: NationListState = {
    nations: [],
    status: ''
};

export const nation_list = createSlice({
    name: 'getNationsList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(worldInfo_api.getNationsList.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(worldInfo_api.getNationsList.fulfilled, (state, action) => {
            action.payload.data.forEach(nation => state.nations.push(nation));
            state.status = 'complete';
        })
        .addCase(worldInfo_api.getNationsList.rejected, (state) => {
            state.status = 'error';
        })
    }
})