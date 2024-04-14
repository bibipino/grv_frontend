/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            spacing: {
                'defpad': '8rem',
            },
            colors: {
                viola: '#6f165f',
                rosa: '#ee00c3',
                rosso: '#cd122e',
                blu: '#101a90',
                giallo: '#ffa122'
            }
        }
    },
    plugins: []
};