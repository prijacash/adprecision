/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about': "url('https://i.imgur.com/josHtIK.jpg')",
        'cnc': "url('https://i.imgur.com/LrhFWQx.jpg')",
        'f35': "url('https://i.imgur.com/ERQSTTl.jpg')",
        'milling': "url('https://i.imgur.com/ImhrGCz.jpg')",
        'turning': "url('https://i.imgur.com/wYNVpEX.jpg')",
      },
    },
    
  },
  plugins: [],
}
