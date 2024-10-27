/** @format */

import ActionButtons from "../components/todo-header/ActionButtons";
import Breadcrumb from "../components/todo-header/Breadcrumb";
import ProjectHeader from "../components/todo-header/ProjectHeader";
import TaskTabs from "../components/todo-header/TaskTab";
import Todos from "../components/Todos";
import { useGetAllTaskQuery } from "../lib/slices/todoSlice";
import DefaultLayout from "./layout/DefaultLayout";
import { CircularProgress } from "@mui/material";

function TaskManagment() {
    const { data, isLoading } = useGetAllTaskQuery({
        limit: 30,
    });
    console.log(data);
    return (
        <DefaultLayout>
            <main className='flex flex-col gap-6 overflow-x-hidden'>
                <div className='max-w-6xl p-6 text-gray-900 dark:text-white'>
                    <Breadcrumb />
                    <ProjectHeader />
                    <ActionButtons />
                    <TaskTabs />
                </div>
                {isLoading ? (
                    <div className='flex justify-center w-full h-40'>
                        <CircularProgress
                            size={24}
                            style={{
                                color: "#77548c",
                            }}
                        />
                    </div>
                ) : (
                    <Todos todos={data?.todos!} />
                )}
            </main>
        </DefaultLayout>
    );
}

export default TaskManagment;
