/** @format */

import { GrHomeRounded } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { FiFolderMinus } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { LuFolderCheck } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

export const sidebarItems = [
    {
        name: "home",
        href: "/",
        Icon: GrHomeRounded,
    },
    {
        name: "message",
        href: "/message",
        Icon: CiMail,
    },
    {
        name: "files",
        href: "/files",
        Icon: FiFileText,
    },
    {
        name: "tasks",
        href: "/tasks",
        Icon: FiFolderMinus,
    },
    {
        name: "chart",
        href: "/chart",
        Icon: LuFolderCheck,
    },
];

export const sidebarButtoms = [
    {
        name: "settings",
        href: "/settings",
        Icon: IoSettingsOutline,
    },
    {
        name: "account",
        href: "#",
        Icon: AiOutlineUser,
    },
];
