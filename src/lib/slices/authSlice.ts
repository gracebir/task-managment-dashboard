/** @format */

import { TinitialState } from "../../types/auth";
import { baseApiSlice } from "./baseApiSlice";
import { createSlice } from "@reduxjs/toolkit";

const saveTokenToLocalStorage = (token: string) => {
    if (typeof window !== undefined) {
        localStorage.setItem("task-access-token", token);
    }
};

const removeTokenFromLocalStorage = () => {
    localStorage.removeItem("task-access-token");
};

const getInitialToken = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("task-access-token");
    }
    return null;
};

const saveUserDataToLocalStorage = (userData: any) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("task-user-data", JSON.stringify(userData));
    }
};

const removeUserDataFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("task-user-data");
    }
};

const getInitialUserData = () => {
    if (typeof window !== "undefined") {
        const userData = localStorage.getItem("task-user-data");
        return userData ? JSON.parse(userData) : null;
    }
    return null;
};

const initialState: TinitialState = {
    user: getInitialUserData(),
    token: getInitialToken(),
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
        getMe: builder.query({
            query: () => "/auth/me",
        }),
    }),
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload;
            saveTokenToLocalStorage(payload);
        },
        setUser: (state, { payload }) => {
            state.user = payload;
            saveUserDataToLocalStorage(payload);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            removeTokenFromLocalStorage();
            removeUserDataFromLocalStorage();
        },
    },
});

export const { useSignInMutation, useGetMeQuery } = authApi;
export const { setToken, setUser, logout } = authSlice.actions;

export default authSlice;
