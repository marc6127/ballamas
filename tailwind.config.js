/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [
    require('flowbite/plugin')
   ],
   content: [
    "./node_modules/flowbite/**/*.js"
   ],
 }

