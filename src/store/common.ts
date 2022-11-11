import { createSlice } from "@reduxjs/toolkit"

type CommonState = {
    darkMode: boolean
}

const initialState: CommonState = {
    darkMode: false,
}

export const common = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setDarkMode (state) {
            state.darkMode = !state.darkMode;
        }
    },
});

export const { setDarkMode } = common.actions;

export default common;