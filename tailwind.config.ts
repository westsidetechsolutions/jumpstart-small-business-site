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
        header: ["Kumbh Sans Variable", "sans-serif"],
        paragraph: ["Inter Variable", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        'wsts': {                          // Theme with white background
          'primary': '#669999',            // Light Teal
          'primary-content': '#ffffff',    // White for primary text content
          'secondary': '#FFCC33',          // Electric Gold
          'secondary-content': '#ffffff',  // White for secondary text content
          'accent': '#186666',             // Circuit Board
          'accent-content': '#ffffff',     // White for accent text content
          'neutral': '#003333',            // Monitor Black
          'neutral-content': '#ffffff',    // White for neutral text content
          'base-100': '#ffffff',           // White background
          'base-content': '#000000',           // White background
          'info': '#669999',               // Light Teal
          'info-content': '#ffffff',       // White for info text content
          'success': '#186666',            // Circuit Board
          'success-content': '#ffffff',    // White for success text content
          'warning': '#FFCC33',            // Electric Gold
          'warning-content': '#ffffff',    // White for warning text content
          'error': '#999966',              // Copper
          'error-content': '#ffffff',      // White for error text content
          'background': '#ffffff',         // White background
        },
      },
      {
        'wsts-secondary': {                // Theme with white background
          'primary': '#FFCC33',            // Light Teal
          'primary-content': '#669999',    // White for primary text content
          'secondary': '#003333',          // Electric Gold
          'secondary-content': '#ffffff',  // White for secondary text content
          'accent': '#186666',             // Circuit Board
          'accent-content': '#ffffff',     // White for accent text content
          'neutral': '#003333',            // Monitor Black
          'neutral-content': '#ffffff',    // White for neutral text content
          'base-100': '#669999',           // White background
          'base-content': '#ffffff',           // White background
          'info': '#669999',               // Light Teal
          'info-content': '#ffffff',       // White for info text content
          'success': '#186666',            // Circuit Board
          'success-content': '#ffffff',    // White for success text content
          'warning': '#FFCC33',            // Electric Gold
          'warning-content': '#ffffff',    // White for warning text content
          'error': '#999966',              // Copper
          'error-content': '#ffffff',      // White for error text content
          'background': '#669999',         // White background
        },
      },
      {
        'wsts-green': {                    // Theme with green background
          'secondary': '#669999',            // Light Teal
          'secondary-content': '#ffffff',    // White for primary text content
          'primary': '#FFCC33',          // Electric Gold
          'primary-content': '#ffffff',  // White for secondary text content
          'accent': '#186666',             // Circuit Board
          'accent-content': '#ffffff',     // White for accent text content
          'neutral': '#000033',            // Monitor Black
          'neutral-content': '#ffffff',    // White for neutral text content
          'base-100': '#186666',           // Green background (Circuit Board)
          'info': '#669999',               // Light Teal
          'info-content': '#ffffff',       // White for info text content
          'success': '#186666',            // Circuit Board
          'success-content': '#ffffff',    // White for success text content
          'warning': '#FFCC33',            // Electric Gold
          'warning-content': '#ffffff',    // White for warning text content
          'error': '#999966',              // Copper
          'error-content': '#ffffff',      // White for error text content
          'background': '#186666',         // Green background (Circuit Board)
        },
      },
      //'light', 'dark', 'corporate', 'cyberpunk'
    ],
  },
};
export default config;
