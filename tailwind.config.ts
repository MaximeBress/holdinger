import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2C5F2D',
                secondary: '#97BC62',
                accent: '#005F73',
                text: '#2B2D42',
                background: '#F8F9FA',
                surface: '#FFFFFF',
                wood: '#8D6E63',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            spacing: {
                'xs': '0.5rem',
                'sm': '1rem',
                'md': '2rem',
                'lg': '4rem',
                'xl': '8rem',
            },
            borderRadius: {
                'sm': '4px',
                'md': '8px',
                'lg': '16px',
            }
        },
    },
    plugins: [],
};
export default config;
