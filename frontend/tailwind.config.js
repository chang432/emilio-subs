/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Libre Baskerville'],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["lofi", "black"],
    },
};
