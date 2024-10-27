/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { baseApiSlice } from "./baseApiSlice";

const initialState: StateType = {
    todos: null,
};

const todoApi = baseApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllTask: builder.query<TodoResponse, { limit: number }>({
            query: ({ limit }) => `/todos?limit=${limit}`,
            providesTags: ["todos"],
        }),
        getTaskById: builder.query<Todo, { id: number }>({
            query: ({ id }) => `/todos/${id}`,
        }),
        createTodo: builder.mutation<Todo, TodoInput>({
            query: (value) => {
                return {
                    url: "/todos/add",
                    method: "POST",
                    body: value,
                };
            },
            invalidatesTags: ["todos"],
        }),
        updateTodo: builder.mutation<
            Todo,
            { id: number; todo: Partial<TodoInput> }
        >({
            query: ({ id, todo }) => {
                return {
                    url: `/todos/${id}`,
                    method: "PUT",
                    body: todo,
                };
            },
            invalidatesTags: ["todos"],
        }),
        MarkAsCompletedTodo: builder.mutation<
            Todo,
            { id: number; todo: Partial<TodoInput> }
        >({
            query: ({ id, todo }) => {
                return {
                    url: `/todos/${id}`,
                    method: "PUT",
                    body: todo,
                };
            },
            invalidatesTags: ["todos"],
        }),
        deleteTodo: builder.mutation<Todo, { id: number }>({
            query: ({ id }) => {
                return {
                    url: `/todos/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["todos"],
        }),
    }),
});

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
});

export const {
    useCreateTodoMutation,
    useDeleteTodoMutation,
    useGetAllTaskQuery,
    useGetTaskByIdQuery,
    useUpdateTodoMutation,
    useMarkAsCompletedTodoMutation,
} = todoApi;

export default todoSlice;
