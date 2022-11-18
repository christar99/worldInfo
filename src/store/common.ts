import { createSlice } from "@reduxjs/toolkit"

type CommonState = {
    darkMode: boolean,
    openMenu: boolean,
    apiPending: boolean
}

const initialState: CommonState = {
    darkMode: false,
    openMenu: true,
    apiPending: false
}

export const common = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setDarkMode (state) {
            state.darkMode = !state.darkMode;
        },
        setOpenMenu (state) {
            state.openMenu = !state.openMenu;
        },
        loading (state, action) {
            state.apiPending = action.payload
        }
    },
});

export const { setDarkMode, setOpenMenu, loading } = common.actions;

export default common;