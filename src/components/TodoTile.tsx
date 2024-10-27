/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";
import {
    useDeleteTodoMutation,
    useMarkAsCompletedTodoMutation,
} from "../lib/slices/todoSlice";
import { toast } from "react-toastify";
import { CiCircleCheck } from "react-icons/ci";
import { BsTrash3 } from "react-icons/bs";
import ViewProjectModal from "./ViewProjectModal";

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
    const [maskAsCompleted] = useMarkAsCompletedTodoMutation();
    const [deleteTask] = useDeleteTodoMutation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [isView, setIsView] = useState(false);

    // handle mask as completed function
    const handleMasKAsCompleted = async () => {
        try {
            const value = {
                completed: true,
            };
            const response = await maskAsCompleted({
                id: id,
                todo: value,
            }).unwrap();
            if (response) {
                toast.success(t("task.completed"));
            }
        } catch (error) {
            console.log(error);
        }
    };

    // handleDetele
    const handleDelete = async () => {
        try {
            const response = await deleteTask({ id }).unwrap();
            if (response) {
                toast.success(t("task.todo.deleteMessage"));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleKeyDown = (
        event: React.KeyboardEvent,
        isOpen: boolean,
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        if (event.key === "Escape" && isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <>
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
                        <div className='relative' ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                onKeyDown={(e) =>
                                    handleKeyDown(
                                        e,
                                        dropdownOpen,
                                        setDropdownOpen
                                    )
                                }
                                className='text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-gray-200 hover:dark:hover:bg-gray-500'
                            >
                                <PiDotsThreeVerticalBold size={20} />
                            </button>
                            {dropdownOpen && (
                                <div className='absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5'>
                                    <div
                                        className='py-1'
                                        role='menu'
                                        aria-orientation='vertical'
                                        aria-labelledby='options-menu'
                                    >
                                        {!completed && (
                                            <a
                                                href='#'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleMasKAsCompleted();
                                                }}
                                                className='flex gap-1 px-4 py-2 text-sm text-green-400 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                                                role='menuitem'
                                            >
                                                <CiCircleCheck size={18} />{" "}
                                                {t("task.todo.maskAsCompleted")}
                                            </a>
                                        )}

                                        <a
                                            href='#'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleDelete();
                                            }}
                                            className='flex gap-1  px-4 py-2 text-sm text-red-500 hover:bg-gray-100 hover:text-gray-900 dark:text-red-600 dark:hover:bg-gray-600 dark:hover:text-white'
                                            role='menuitem'
                                        >
                                            <BsTrash3 size={18} />{" "}
                                            {t("task.todo.delete")}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
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
                    <button
                        onClick={() => setIsView(true)}
                        className='flex flex-row gap-1 items-start'
                    >
                        <AiOutlineMessage size={19} />
                        <span className='text-xs'>{userId}</span>
                    </button>
                </div>
            </div>
            <ViewProjectModal isView={isView} setIsView={setIsView} />
        </>
    );
};

export default TodoTile;
