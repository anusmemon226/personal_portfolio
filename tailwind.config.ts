import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "profilePic": "url('/profilePicPng.webp')"
      },
      backgroundSize: {
        "50%": "500px"
      },
      screens: {
        "2sm": "568px",
        "3sm": "480px",
        "4sm": "376px",
        "5sm": "301px",
        "medium": "916px"
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "10%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "black"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink 0.7s infinite"
      }
    },
  },
  plugins: [],
} satisfies Config;
