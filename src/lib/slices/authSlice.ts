/** @format */

import { TinitialState } from "../../types/auth";
import { baseApiSlice } from "./baseApiSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TinitialState = {
    user: null,
    token: null,
};

const authApi = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation<User, { username: string; password: string }>({
            query: (value) => {
                return {
                    url: "/auth/login",
                    method: "POST",
                    body: value,
                };
            },
        }),
    }),
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
});

export const { useSignInMutation } = authApi;

export default authSlice;
