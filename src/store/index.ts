import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import common from "store/common";
import { nationList } from "./nationList";
import { nationInfo } from "./nationInfo";
import { worldNews } from "./worldNews";

const rootReducer = combineReducers({
    common: common.reducer,
    nationList: nationList.reducer,
    worldNewsList: worldNews.reducer,
    nationInfo: nationInfo.reducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;