/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // هنا كنعرفو الحركات (Keyframes) اللي محتاجينها للأنيميشن
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
        ,
        // Scroll indicator animations
        scrollBounce: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
          '100%': { transform: 'translateY(0)' },
        },
        linePulse: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        textFloat: {
          '0%': { transform: 'translateY(0)', opacity: '0.9' },
          '50%': { transform: 'translateY(-6px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '0.9' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.235s ease-out forwards',
        'fade-in': 'fadeIn 0.235s ease-out forwards',
        'scroll-bob': 'scrollBounce 0.588s ease-in-out infinite',
        'line-pulse': 'linePulse 0.941s ease-in-out infinite',
        'text-float': 'textFloat 1.294s ease-in-out infinite',
      },
      // هنا كنضيفو الخط الجديد Cairo
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}