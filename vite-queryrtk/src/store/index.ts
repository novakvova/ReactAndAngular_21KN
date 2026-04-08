import {configureStore} from "@reduxjs/toolkit";
import {apiUsers} from "../services/apiUsers.ts";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        [apiUsers.reducerPath]: apiUsers.reducer,
    },
    middleware:
        (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            apiUsers.middleware,
        )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector