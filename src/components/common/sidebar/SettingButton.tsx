/** @format */

import React from "react";
import { IconType } from "react-icons";

const SettingButton: React.FC<{
    Icon: IconType;
    handleClick: () => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}> = ({ Icon, handleClick, onKeyDown }) => {
    return (
        <button
            onKeyDown={onKeyDown}
            className='w-full flex justify-center hover:bg-light-pink dark:hover:bg-purple-950 py-3 text-gray-800 dark:text-gray-200'
            type='button'
            onClick={handleClick}
        >
            <Icon size={20} />
        </button>
    );
};

export default SettingButton;
