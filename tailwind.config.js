/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts}",
    ],
    theme: {
        extend: {
            dropShadow: {
                'white': '0px 0px 2px rgb(255 255 255 / 0.2)'
            },
        },
    },
    plugins: [],
}

