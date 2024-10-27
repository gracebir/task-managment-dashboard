/**
 * @format
 * @type {import('tailwindcss').Config}
 */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
            colors: {
                primary: "#F6F8FA",
                "primary-dark": "#0d1824",
                secondary: "#041324",
                pink: "#5653C3",
                "light-pink": "#F4F2FB",
                "light-progress": "#EDF9F5",
                progress: "#78B9E7",
                success: "#71B297",
                "light-success": "#F2F7FB",
                todo: "#E2B88B",
                "light-todo": "#F9F4ED",
                online: "#AFEAA1",
                bodydark: "#AEB7C0",
                bodydark1: "#DEE4EE",
                bodydark2: "#8A99AF",
                stroke: "#E2E8F0",
                whiten: "#F1F5F9",
                whiter: "#F5F7FD",
                boxdark: "#24303F",
                "boxdark-2": "#1A222C",
                strokedark: "#2E3A47",
                "meta-1": "#DC3545",
                "meta-2": "#EFF2F7",
                "meta-3": "#10B981",
                "meta-4": "#313D4A",
                "meta-5": "#259AE6",
                "meta-6": "#FFBA00",
                "meta-7": "#FF6766",
                "meta-8": "#F0950C",
                "meta-9": "#E5E7EB",
            },
        },
        screen: {
            ...defaultTheme,
        },
    },
    plugins: [],
};
