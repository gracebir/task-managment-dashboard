/** @format */

import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

const SidebarButton: React.FC<{
    isActive: boolean;
    Icon: IconType;
    href: string;
}> = ({ isActive = false, Icon, href }) => {
    return (
        <Link
            className={`${
                isActive
                    ? "border-l-4 border-pink text-pink dark:text-white bg-light-pink dark:bg-purple-950"
                    : "border-none"
            } w-full py-4 flex justify-center duration-300 text-gray-800 dark:text-gray-200 hover:bg-light-pink dark:hover:bg-purple-950`}
            to={href}
        >
            <Icon size={20} />
        </Link>
    );
};

export default SidebarButton;
