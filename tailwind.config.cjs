const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
      },
      padding: {
        '5/6': '83.3333333%'
      },
      fontFamily: {
				sans: ['Inter', ...fontFamily.sans]
			}
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
