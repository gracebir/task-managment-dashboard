/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { GoMoon } from "react-icons/go";
import { HiMiniSun } from "react-icons/hi2";
import useColorMode from "../../hooks/useColorMode";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiLanguage } from "react-icons/hi2";
import { LuChevronDown } from "react-icons/lu";
import ViewProjectModal from "../ViewProjectModal";

const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
];

const Header: React.FC = () => {
    const [currentLang, setCurrentLang] = useState(languages[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [colorMode, setColorMode] = useColorMode();
    console.log(colorMode);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        const locLang =
            localStorage.getItem("lang") || navigator.language.slice(0, 2);
        const lang =
            languages.find((lang) => lang.code === locLang) || languages[0];
        i18n.changeLanguage(lang.code);
        document.documentElement.lang = lang.code;
        setCurrentLang(lang);
    }, [currentLang.code, i18n]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const selectLanguage = (lang: (typeof languages)[0]) => {
        localStorage.setItem("lang", lang.code);
        setCurrentLang(lang);
        setIsDropdownOpen(false);
        document.documentElement.lang = lang.code;
        window.location.reload();
    };

    return (
        <header className='w-full bg-white dark:bg-secondary h-16 shadow-md border-gray-100 border-b dark:border-gray-800 px-6 lg:px-8'>
            <nav className='grid grid-cols-2 h-full items-center'>
                {/* search input */}
                <div>
                    <input type='text' />
                </div>
                {/* button */}
                <div className='flex items-center justify-end space-x-8'>
                    <div className='flex flex-row gap-6'>
                        <button
                            onClick={() => {
                                if (typeof setColorMode === "function") {
                                    setColorMode(
                                        colorMode === "light" ? "dark" : "light"
                                    );
                                }
                            }}
                            className='bg-gray-100 duration-300 text-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 shadow-md flex items-center justify-center h-10 w-10 rounded-full'
                        >
                            {colorMode === "dark" ? (
                                <HiMiniSun size={20} />
                            ) : (
                                <GoMoon size={23} />
                            )}
                        </button>
                        <button className='bg-gray-100 duration-300 text-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 shadow-md flex items-center justify-center h-10 w-10 rounded-full'>
                            <IoNotificationsOutline size={20} />
                        </button>
                    </div>
                    <span className='text-gray-500 dark:text-gray-200'> |</span>
                    <div className='flex gap-6 items-center'>
                        <div className='flex items-center gap-2'>
                            <button className='duration-300 text-sm hover:underline text-gray-500  dark:text-gray-200 '>
                                {t("header.view")}
                            </button>
                        </div>
                        <div
                            id='google_translate_element'
                            className={`relative text-white`}
                            ref={dropdownRef}
                        >
                            <button
                                className='flex items-center gap-3'
                                onClick={toggleDropdown}
                                aria-haspopup='true'
                                aria-expanded={isDropdownOpen}
                            >
                                <HiLanguage />
                                <span className='text-sm font-bold'>
                                    {currentLang.code.toUpperCase()}
                                </span>
                                <LuChevronDown
                                    className={`transform transition-transform duration-200 ${
                                        isDropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {isDropdownOpen && (
                                <div className='absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                    <div className='py-1'>
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                className={`block w-full text-left px-4 py-2 text-sm text-gray-700 ${
                                                    currentLang.code ===
                                                        lang.code &&
                                                    "bg-primary text-white"
                                                } hover:bg-primary hover:text-white`}
                                                onClick={() =>
                                                    selectLanguage(lang)
                                                }
                                            >
                                                {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            {/* <ViewProjectModal /> */}
        </header>
    );
};

export default Header;
