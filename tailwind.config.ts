import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Kumbh Sans Variable', 'sans-serif'],
        paragraph: ['Inter Variable', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#003333",
          "primary-content": "#ffffff",
          "secondary": "#999966",
          "secondary-content": "#ffffff",
          "accent": "#FFCC33",
          "neutral": "#CCCCCC",
          "base-100": "#F0FAFA"
        },
      },
    ]
  }
};
export default config;
