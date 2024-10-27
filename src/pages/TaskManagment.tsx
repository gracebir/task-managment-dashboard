/** @format */

import ActionButtons from "../components/todo-header/ActionButtons";
import Breadcrumb from "../components/todo-header/Breadcrumb";
import ProjectHeader from "../components/todo-header/ProjectHeader";
import TaskTabs from "../components/todo-header/TaskTab";
import DefaultLayout from "./layout/DefaultLayout";

function TaskManagment() {
    return (
        <DefaultLayout>
            <main>
                <div className='max-w-6xl p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
                    <Breadcrumb />
                    <ProjectHeader />
                    <ActionButtons />
                    <TaskTabs />
                </div>
            </main>
        </DefaultLayout>
    );
}

export default TaskManagment;
