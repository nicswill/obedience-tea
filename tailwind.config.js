/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#9fb19f',
          400: '#8FBC8F',
          500: '#5c7a5c',
          600: '#4a634a',
          700: '#3d523d',
          800: '#334433',
          900: '#2d3a2d',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#DAA520',
          500: '#ca8a04',
          600: '#a16207',
          700: '#854d0e',
          800: '#713f12',
          900: '#633a16',
        },
        earth: {
          50: '#faf9f7',
          100: '#f0ede8',
          200: '#e0d9d0',
          300: '#cbbeb0',
          400: '#b5a088',
          500: '#8B4513',
          600: '#7a3f12',
          700: '#653311',
          800: '#542b13',
          900: '#472713',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
