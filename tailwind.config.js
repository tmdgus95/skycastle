/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                mainColor: "#283c43",
                menuColor: "#d8f0ea",
                pointColor: "#398c7c",
            },
        },
    },
    plugins: [],
};
