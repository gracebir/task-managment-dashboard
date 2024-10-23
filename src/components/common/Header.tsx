/** @format */

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
];

const Header: React.FC = () => {
    const [currentLang, setCurrentLang] = useState(languages[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [_, i18n] = useTranslation("global");

    useEffect(() => {
        const locLang =
            localStorage.getItem("lang") || navigator.language.slice(0, 2);
        const lang =
            languages.find((lang) => lang.code === locLang) || languages[0];
        i18n.changeLanguage(lang.code);
        document.documentElement.lang = lang.code;
        setCurrentLang(lang);
    }, [currentLang.code, i18n]);

    const selectLanguage = (lang: (typeof languages)[0]) => {
        localStorage.setItem("lang", lang.code);
        setCurrentLang(lang);
        setIsDropdownOpen(false);
        document.documentElement.lang = lang.code;
        window.location.reload();
    };

    return <header className='w-full'></header>;
};

export default Header;
