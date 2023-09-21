// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     screens: {
//       mobile: "375px",
//       desktop: "1440px",
//     },
//     extend: {
//       colors: {
//         "light-red": "hsl(0, 100%, 67%)",
//         "orangey-yellow": "hsl(39, 100%, 56%)",
//         "green-teal": "hsl(166, 100%, 37%)",
//         "cobalt-blue": "hsl(234, 85%, 45%)",
//         "light-slate-blue": "hsl(252, 100%, 67%)",
//         "light-royal-blue": "hsl(241, 81%, 54%)",
//         "Violet-blue": "hsla(256, 72%, 46%, 1)",
//         "persian-blue": "hsla(241, 72%, 46%, 0)",
//         "new-white": "hsl(0, 0%, 100%)",
//         "pale-blue": "hsl(221, 100%, 96%)",
//         "light-lavender": "hsl(241, 100%, 89%)",
//         "dark-gray-blue": "hsl(224, 30%, 27%)",
//       },
//       fontFamily: {
//         hanken: ["Hanken Grotesk", "sans-serif"],
//       },
//       fontWeight: {
//         hanken: [500, 700, 800],
//       },
//       fontSize: {
//         para: "18px",
//       },
//     },
//   },
//   plugins: [],
// };

tailwind.config = {
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "Violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "new-white": "hsl(0, 0%, 100%)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
      fontWeight: {
        hanken: [500, 700, 800],
      },
      fontSize: {
        para: "18px",
      },
    },
  },
};
