/** @format */

import React from "react";
import { sidebarButtoms, sidebarItems } from "../../../utils/constant";
import SidebarButton from "./SidebarButton";
import { GiFlowers } from "react-icons/gi";
import { Link } from "react-router-dom";
import SettingButton from "./SettingButton";

const Sidebar: React.FC<{ isOpen: boolean }> = () => {
    return (
        <aside className='min-h-svh w-20 border-r border-gray-200 dark:border-blue-950 bg-white shadow-lg grid grid-rows-2 dark:bg-secondary'>
            <div className='border-b border-gray-200 dark:border-gray-700 justify-between py-4 flex flex-col'>
                <Link className='flex justify-center w-full py-6 mb-6' to={"/"}>
                    <GiFlowers className='text-pink' size={20} />
                </Link>
                <div className='flex-1 flex flex-col justify-between'>
                    <div className='flex flex-col'>
                        {sidebarItems.map((item, index) => (
                            <SidebarButton
                                href={item.href}
                                key={item.name}
                                isActive={index === 0}
                                Icon={item.Icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between py-6'>
                <div className='flex flex-col gap-4'>
                    <div className='border border-gray-200 dark:border-gray-800 h-12 w-12 mx-auto rounded-full'></div>
                    <div className='border border-gray-200 dark:border-gray-800 h-12 w-12 mx-auto rounded-full'></div>
                    <div className='border border-gray-200 dark:border-gray-800 h-12 w-12 mx-auto rounded-full'></div>
                </div>
                <div className='flex flex-col gap-5'>
                    <SettingButton
                        key={sidebarButtoms[0].name}
                        handleClick={() => {}}
                        Icon={sidebarButtoms[0].Icon}
                    />
                    <SettingButton
                        key={sidebarButtoms[1].name}
                        handleClick={() => {}}
                        Icon={sidebarButtoms[1].Icon}
                    />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
