/** @format */

import { BiCopy } from "react-icons/bi";
import { LuLink } from "react-icons/lu";

function ActionButtons() {
    return (
        <div className='flex items-center space-x-2 mb-4'>
            <button className='p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'>
                <LuLink className='h-4 w-4' />
            </button>
            <button className='flex items-center px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-md hover:bg-indigo-200 dark:hover:bg-indigo-800'>
                <BiCopy className='mr-2 h-4 w-4' />
                Copy Link
            </button>
        </div>
    );
}

export default ActionButtons;
