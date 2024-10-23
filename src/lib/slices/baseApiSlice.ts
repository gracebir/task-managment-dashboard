/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
    }),
    tagTypes: ["todos"],
    endpoints: () => ({}),
});
