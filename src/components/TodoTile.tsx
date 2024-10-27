/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";

const users = [
    {
        id: 1,
        name: "John Doe",
        image: "https://avatar.iran.liara.run/public/boy",
    },
    {
        id: 2,
        name: "Jane Smith",
        image: "https://avatar.iran.liara.run/public/girl",
    },
    {
        id: 3,
        name: "Alice Johnson",
        image: "https://avatar.iran.liara.run/public/boy",
    },
];

const TodoTile: React.FC<Todo> = ({ id, todo, completed, userId }) => {
    const [t] = useTranslation("global");
    return (
        <div className='shadow-md bg-white hover:-translate-y-2 duration-300 dark:bg-slate-800 rounded-md w-full p-4 flex flex-col justify-between min-h-[10rem]'>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    {completed ? (
                        <span className='font-bold text-xs text-success bg-light-success px-2 py-1 rounded'>
                            {t("task.todo.completed")}
                        </span>
                    ) : (
                        <span className='font-bold text-xs text-todo bg-light-todo px-2 py-1 rounded'>
                            {t("task.todo.todo")}
                        </span>
                    )}

                    <button className='text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-gray-200 hover:dark:hover:bg-gray-500'>
                        <PiDotsThreeVerticalBold size={20} />
                    </button>
                </div>
                <h3 className='font-bold text-base lg:font-bold'>{todo}</h3>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex -space-x-2'>
                    {users.map((user) => (
                        <img
                            key={user.id}
                            className='w-8 h-8 rounded-full border-2 border-white dark:border-gray-800'
                            src={user.image}
                            alt={user.name}
                        />
                    ))}
                </div>
                <button className='flex flex-row gap-1 items-start'>
                    <AiOutlineMessage size={19} />
                    <span className='text-xs'>{userId}</span>
                </button>
            </div>
        </div>
    );
};

export default TodoTile;
