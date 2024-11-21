/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { baseApiSlice } from "./slices/baseApiSlice";
import authSlice from "./slices/authSlice";
import todoSlice from "./slices/todoSlice";

export const store = configureStore({
    reducer: {
        [baseApiSlice.reducerPath]: baseApiSlice.reducer,
        auth: authSlice.reducer,
        todos: todoSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApiSlice.middleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
