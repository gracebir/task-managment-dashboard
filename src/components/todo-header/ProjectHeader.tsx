/** @format */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronDown, BiPlus } from "react-icons/bi";

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
    {
        id: 4,
        name: "Bob Brown",
        image: "https://avatar.iran.liara.run/public/boy",
    },
];

const ProjectHeader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [t] = useTranslation("global");
    return (
        <div className='flex justify-between items-center mb-4'>
            <div>
                <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
                    {t("task.header.websiteDesign")}
                </h1>
                <div className='flex items-center mt-2'>
                    <div className='relative'>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className='flex items-center px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                        >
                            {t("task.header.limitedAccess")}{" "}
                            <BiChevronDown className='ml-2 h-4 w-4' />
                        </button>
                        {isDropdownOpen && (
                            <div className='absolute mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:ring-gray-700'>
                                <div
                                    className='py-1'
                                    role='menu'
                                    aria-orientation='vertical'
                                    aria-labelledby='options-menu'
                                >
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        role='menuitem'
                                    >
                                        Public access
                                    </a>
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        role='menuitem'
                                    >
                                        Private access
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='flex -space-x-2 ml-4'>
                        {users.map((user) => (
                            <img
                                key={user.id}
                                className='w-8 h-8 rounded-full border-2 border-white dark:border-gray-800'
                                src={user.image}
                                alt={user.name}
                            />
                        ))}
                        <button className='w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'>
                            <BiPlus className='h-4 w-4' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-right'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                    From 23 April
                </p>
                <p className='text-xs text-green-500 dark:text-green-400'>
                    Updated 12 min ago
                </p>
            </div>
        </div>
    );
};

export default ProjectHeader;
