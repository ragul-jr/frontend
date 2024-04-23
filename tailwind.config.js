// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       primaryColor:'#0067ff',
//       yellowColor:'#feb60d',
//       purpleColor:'#9771ff',
//       irisBlueColor:'#181a1e',
//       headingColor:'#4e545f',
//     },
//     boxShadow:'raba(17,12,46,0.15) 0px 48px 100px 0px;',
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.jsx"],
  theme: {
    extend: {
      primaryColor:'#0067ff',
             yellowColor:'#feb60d',
             purpleColor:'#9771ff',
             irisBlueColor:'#181a1e',
         headingColor:'#4e545f',
    },
  },
  plugins: [],
}

