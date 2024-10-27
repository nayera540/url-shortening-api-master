/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "Cyan": "hsl(180, 66%, 49%)",
                "Cyan-hover": "#91e8e8",
                "Dark-Violet": "hsl(257, 27%, 26%)",
                "Red": "hsl(0, 87%, 67%)",
                "Gray": "hsl(0, 0%, 75%)",
                "Dark-Gray": "#9e9aa7",
                "Grayish-Violet": "hsl(257, 7%, 63%)",
                "Very-Dark-Blue": "hsl(255, 11%, 22%)",
                "Very-Dark-Violet": "hsl(260, 8%, 14%)",
        },
        backgroundImage:{
            "bg-boost-desktop": "url('./public/images/bg-boost-desktop.svg')",
            "bg-boost-mobile": "url('./public/images/bg-boost-mobile.svg')",
            "bg-shorten-desktop": "url('./public/images/bg-shorten-desktop.svg')",
            "bg-shorten-mobile": "url('./public/images/bg-shorten-mobile.svg')",
        },
        fontFamily:{
            "poppins": ["Poppins", "sans-serif"]
        }
    },
},
plugins: [],
}

