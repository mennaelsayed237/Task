/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                customPink: "#F4DBD4",
                customColor: '#F9F5F3',
            },
        },
    },
    plugins: [],
};