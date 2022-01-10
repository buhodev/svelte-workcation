const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
      },
      padding: {
        '5/6': '83.3333333%'
      }
    },
  },

  plugins: [require('@tailwindcss/forms')],
};

module.exports = config;
