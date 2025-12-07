/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          500: '#800020', // Classic Maroon
          600: '#600018', // Darker Maroon
          700: '#400010', // Deepest Maroon
        },
        gold: {
          300: '#F4E5B0', // Pale Gold
          400: '#E6C200', // Bright Gold
          500: '#D4AF37', // Metallic Gold
          600: '#B8860B', // Dark Goldenrod
        },
        cream: {
          100: '#FFFDD0', // Cream
          200: '#F5F5DC', // Beige
        },
        pink: {
          50: '#FFF0F5', // Lavender Blush
          100: '#FADADD', // Pale Pink
        },
        green: {
          800: '#006A4E', // Bottle Green / Royal Green
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
