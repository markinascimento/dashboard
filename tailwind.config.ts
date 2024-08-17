import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "the-demise-fashion": "url(./src/assets/icons/the-demise-fashion.svg",
      },
      colors: {
        background: "#F7F6FF",
        "royal-blue": {
          "100": "#F5F4FF",
          "500": "#5644FC",
          '900': "#15133D"
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
