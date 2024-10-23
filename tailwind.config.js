/**
 * @format
 * @type {import('tailwindcss').Config}
 */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {},
        screen: {
            ...defaultTheme,
        },
    },
    plugins: [require("daisyui")],
};
