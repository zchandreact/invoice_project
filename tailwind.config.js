/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/atoms/**/*.{js,ts,jsx,tsx,mdx}', // Corrected path
    './src/molecules/**/*.{js,ts,jsx,tsx,mdx}', // Corrected path
    './src/organisms/**/*.{js,ts,jsx,tsx,mdx}', // Corrected path
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}', // Corrected path
  ],
  theme: {
    fontFamily: {
      'primary': ['Montserrat Alternates', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#CED4DA',
        white: '#ffffff',
        green: '#28A745',
        blue: '#007BFF',
        yellow: '#FFC107'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

