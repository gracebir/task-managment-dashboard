/** @format */

type User = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: "male" | "female";
    image: string;
    accessToken: string;
    refreshToken: string;
};

type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
};

type TodoInput = {
    todo: string;
    completed: boolean;
    userId: number;
};

type TodoResponse = {
    todos: Todo[];
    total: number;
    skip: number;
    limit: number;
};

type StateType = {
    todos: Array<Todo> | null;
};
