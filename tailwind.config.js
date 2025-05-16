/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}", // если вдруг будешь использовать старую структуру
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                muted: 'var(--color-muted)',
                background: 'var(--color-background)',
                section: 'var(--color-section)',
            },
        },
    },
    plugins: [],
}