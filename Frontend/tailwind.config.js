import { colors } from '@mui/material';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  colors:{
    'basic-bg':'#222831',
    'nav-bg':'#00ADB5',
    'nav-text':'#EEEEEE',
    'nav-hover':'#393E46',
    'basic-text':'#EEEEEE',
  },
  fontFamily:{
    'lato': ['Lato', 'sans-serif'],
    'anta' : ['Anta', 'sans-serif'],
  }
    },
  },
  plugins: [],
};