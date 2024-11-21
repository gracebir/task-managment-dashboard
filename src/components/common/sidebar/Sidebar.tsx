/** @format */

import React, { useEffect, useRef, useState } from "react";
import { sidebarButtoms, sidebarItems } from "../../../utils/constant";
import SidebarButton from "./SidebarButton";
import { GiFlowers } from "react-icons/gi";
import { Link } from "react-router-dom";
import SettingButton from "./SettingButton";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../lib/store";
import { logout } from "../../../lib/slices/authSlice";

const Sidebar: React.FC<{ isOpen: boolean }> = () => {
    const [t] = useTranslation("global");
    const [dropupOpen, setDropupOpen] = useState(false);
    const toggleDropup = () => setDropupOpen(!dropupOpen);
    const dropupRef = useRef<HTMLDivElement>(null);
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropupRef.current &&
                !dropupRef.current.contains(event.target as Node)
            ) {
                setDropupOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                    <div className='relative' ref={dropupRef}>
                        <SettingButton
                            key={sidebarButtoms[1].name}
                            handleClick={toggleDropup}
                            onKeyDown={(e) =>
                                handleKeyDown(e, dropupOpen, setDropupOpen)
                            }
                            Icon={sidebarButtoms[1].Icon}
                        />
                        {dropupOpen && (
                            <div className='absolute bottom-full left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5'>
                                <div
                                    className='py-1'
                                    role='menu'
                                    aria-orientation='vertical'
                                    aria-labelledby='options-menu'
                                >
                                    <a
                                        href='#'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(logout());
                                        }}
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                                        role='menuitem'
                                    >
                                        {t("login.signout")}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
