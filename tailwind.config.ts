import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F6FF",
        "royal-blue": {
          "100": "#F5F4FF",
          "500": "#5644FC",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
