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
            },
        },
        screen: {
            ...defaultTheme,
        },
    },
    plugins: [],
};
