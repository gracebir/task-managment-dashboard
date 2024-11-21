/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
        prepareHeaders: (headers, { getState }) => {
            //@ts-ignore
            const state: RootState = getState();
            const token = state.auth.token;

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["todos"],
    endpoints: () => ({}),
});
