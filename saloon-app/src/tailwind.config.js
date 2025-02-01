import './styles/index.css';
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', // Add paths to your HTML, JS, TS files
    ],
    theme: {
      extend: {
        // You can extend the default theme here, e.g., adding custom colors or fonts
      },
    },
    plugins: [
      // Add any plugins you want to use, such as forms, typography, etc.
    ],
  }
  