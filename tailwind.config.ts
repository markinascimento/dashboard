import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F6FF",
        primary: "#5644FC",
      },
    },
  },
  plugins: [],
};
export default config;
