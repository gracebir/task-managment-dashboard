/** @format */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiPlus } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import CreateTodo from "../create-todo/CreateTodo";

const TaskTabs = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [t] = useTranslation("global");
    const [isOpenModal, setIsModal] = useState(false);
    const tabs = [
        { id: "all", label: t("task.header.allTasks"), count: 23 },
        { id: "todo", label: t("task.header.toDo"), count: 3 },
        { id: "inprogress", label: t("task.header.inProgress"), count: 6 },
        { id: "completed", label: t("task.header.completed"), count: 14 },
    ];

    return (
        <div className='flex items-center justify-between border-b border-gray-200 dark:border-gray-700'>
            <div className='lg:flex hidden'>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 text-sm font-medium ${
                            activeTab === tab.id
                                ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400"
                                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}{" "}
                        <span className='ml-1 text-gray-400 dark:text-gray-500'>
                            ({tab.count})
                        </span>
                    </button>
                ))}
            </div>
            <div className='flex items-center'>
                <button className='flex items-center text-xs whitespace-nowrap px-3 py-1 mr-2 lg:text-sm border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'>
                    <FiFilter className='mr-2 h-4 w-4' />
                    {t("task.header.filter")}
                </button>
                <button
                    onClick={() => setIsModal(true)}
                    className='flex items-center text-xs px-3 py-1 whitespace-nowrap lg:text-sm bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600'
                >
                    <BiPlus className='mr-2 h-4 w-4' />
                    {t("task.header.task")}
                </button>
            </div>
            {isOpenModal && <CreateTodo setIsModal={setIsModal} />}
        </div>
    );
};

export default TaskTabs;
