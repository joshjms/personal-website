/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            keyframes: {
                brighten: {
                    "0%, 50%": { backgroundColor: "#0f172a" },
                    "100%": { backgroundColor: "#9ca3af" },
                },
                glow: {
                    "0%, 100%": { filter: "contrast(0)" },
                    "50%": { filter: "contrast(1) "},
                },
                vibe: {
                    "0%, 100%": { transform: "translateX(0px) translateY(0px)" },
                    "50%": { transform: "translateX(10px) translateY(20px)" },
                },
            },
            animation: {
                brighten: 'brighten 3s ease-in-out',
                glow: 'glow 1s ease-in-out infinite',
                vibe: 'vibe 4s ease-in-out infinite',
            }
        },
    },
    plugins: [require("tailwindcss-textshadow")],
};
