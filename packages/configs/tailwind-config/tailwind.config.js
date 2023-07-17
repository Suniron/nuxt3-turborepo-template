/** @type {import('tailwindcss').Config} */
const config = {
  daisyui: {
    themes: [
      {
        light: {
          'accent': '#673AB7',
          'base-100': '#F8F9F9',
          'error': '#DD0800',
          'info': '#5BADF8',
          'neutral': '#D0D1D1',
          'primary': '#00B53B',
          'primary-content': '#F8F9F9',
          'secondary': '#4CA591',
          'success': '#36D399',
          'warning': '#FBBD23',
        },
      },
      {
        dark: {
          'accent': '#673AB7',
          'base-100': '#1f2937',
          'error': '#dd0800',
          'info': '#5BADF8',
          'neutral': '#737581',
          'primary': '#00B53B',
          'secondary': '#4CA591',
          'success': '#36D399',
          'warning': '#fbbd23',
        },
      },
      {
        cyberlancer: {
          'accent': '#EA580C',
          'base-100': '#F8F9F9',
          'error': '#DD0800',
          'info': '#5BADF8',
          'neutral': '#D0D1D1',
          'primary': '#1c4792',
          'primary-content': '#F8F9F9',
          'secondary': '#00a7e1',
          'success': '#36D399',
          'warning': '#FBBD23',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

module.exports = config
