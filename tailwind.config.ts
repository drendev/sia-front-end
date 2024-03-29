import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "waves":  "url('/waves.svg')",
      },
      colors: {
        "red-primary": "#BB4747",
        "gray-primary": "#E5E5E5",
      },
      fontFamily: {
        custom: ["Caveat"],
      },
      borderWidth: {
        '1': '1px',
        '6': '6px',
      }
    },
  },
  plugins: [],
};
export default config;
