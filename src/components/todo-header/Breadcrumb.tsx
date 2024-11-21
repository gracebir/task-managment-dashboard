/** @format */

import { useTranslation } from "react-i18next";

const Breadcrumb = () => {
    const [t] = useTranslation("global");
    return (
        <nav className='text-sm hidden lg:block text-gray-500 dark:text-gray-400 mb-2'>
            <ol className='list-none p-0 inline-flex'>
                <li className='flex items-center'>
                    <a
                        href='#'
                        className='hover:text-gray-700 text-sm lg:text-base dark:hover:text-gray-300'
                    >
                        {t("task.header.workspace")}
                    </a>
                    <span className='mx-2'>&gt;</span>
                </li>
                <li className='flex items-center'>
                    <a
                        href='#'
                        className='hover:text-gray-700 text-sm lg:text-base dark:hover:text-gray-300'
                    >
                        {t("task.header.creative")}
                    </a>
                    <span className='mx-2'>&gt;</span>
                </li>
                <li className='flex items-center'>
                    <span className='text-gray-700 text-xs lg:text-base dark:text-gray-300'>
                        {t("task.header.creativeWebsite")}
                    </span>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
