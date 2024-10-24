/** @format */

import React from "react";
import { IconType } from "react-icons";

const SettingButton: React.FC<{
    Icon: IconType;
    handleClick: () => void;
}> = ({ Icon, handleClick }) => {
    return (
        <button
            className='w-full flex justify-center hover:bg-light-pink py-3 text-gray-800 dark:text-gray-200'
            type='button'
            onClick={handleClick}
        >
            <Icon size={20} />
        </button>
    );
};

export default SettingButton;
