/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { baseApiSlice } from "./slices/baseApiSlice";

export const store = configureStore({
    reducer: {
        [baseApiSlice.reducerPath]: baseApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApiSlice.middleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
