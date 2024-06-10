/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Libre Baskerville'],
            },
        },
        // height: theme => ({
        //     // auto: 'auto',
        //     // ...theme('spacing'),
        //     // full: '100%',
        //     screen: 'calc(var(--vh) * 100)',
        // }),
        // minHeight: theme => ({
        //     // '0': '0',
        //     // ...theme('spacing'),
        //     // full: '100%',
        //     screen: 'calc(var(--vh) * 100)',
        // }),
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["lofi", "black"],
    },
};
