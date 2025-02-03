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
        "profilePic": "url('/profilePicPng.png')"
      },
      backgroundSize: {
        "50%":"500px"
      },
      screens: {
        "2sm" : "568px",
        "3sm" : "480px",
        "4sm" : "376px",
        "5sm" : "301px",
        "medium" : "916px"
      }
    },
  },
  plugins: [],
} satisfies Config;
