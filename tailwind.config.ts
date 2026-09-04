import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: { sm: '480px', md: '768px', lg: '1024px', lgx: '1200px', xl: '1500px' },
    extend: {
      colors: {
        accent: { DEFAULT: '#52D8E6', hover: '#3FC9D9', soft: '#D9F5F9', deep: '#0E7C8C' },
        link: '#096183',
        ink: '#21292E',
        n: {
          0: '#FFFFFF',
          50: '#F5F7F8',
          200: '#E2E4E5',
          400: '#ABADAF',
          600: '#565A5D',
          700: '#464E52',
          800: '#3A4348',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['"Public Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        h1: ['44px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '300' }],
        'h1-m': ['36px', { lineHeight: '43px', letterSpacing: '-0.02em', fontWeight: '300' }],
        h2: ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '300' }],
        'h2-m': ['30px', { lineHeight: '38px', letterSpacing: '-0.015em', fontWeight: '300' }],
        h3: ['30px', { lineHeight: '38px', letterSpacing: '-0.01em', fontWeight: '400' }],
        h4: ['26px', { lineHeight: '34px', letterSpacing: '-0.01em', fontWeight: '400' }],
        'h4-m': ['22px', { lineHeight: '30px', letterSpacing: '-0.01em', fontWeight: '400' }],
        lead: ['18px', { lineHeight: '32px', fontWeight: '400' }],
        base: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        bullet: ['16px', { lineHeight: '25.6px', fontWeight: '400' }],
        meta: ['14px', { lineHeight: '22px', fontWeight: '400' }],
        eyebrow: ['14px', { lineHeight: '22px', letterSpacing: '1.7px', fontWeight: '400' }],
        fine: ['12px', { lineHeight: '20px', fontWeight: '400' }],
      },
      borderRadius: { card: '16px', pill: '30px' },
      boxShadow: {
        card: '0 4px 4px rgb(0 0 0 / 0.05)',
        panel: '0 4px 18px rgb(0 0 0 / 0.16)',
        lift: '0 18px 44px -20px rgb(16 32 40 / 0.42)',
        glow: '0 0 0 1px rgb(82 216 230 / 0.35), 0 18px 50px -18px rgb(82 216 230 / 0.45)',
      },
      keyframes: {
        // Hero fonidagi rangli dog'larning sekin siljishi
        aurora: {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '100%': { transform: 'translate3d(6%,-8%,0) scale(1.18)' },
        },
        // Cheksiz gorizontal lenta (ikki nusxa ketma-ket qo'yiladi)
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Skroll ishorasining pastga sakrashi
        nudge: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.55' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        aurora: 'aurora 16s ease-in-out infinite alternate',
        'aurora-slow': 'aurora 24s ease-in-out infinite alternate-reverse',
        marquee: 'marquee 38s linear infinite',
        nudge: 'nudge 2.2s ease-in-out infinite',
        floaty: 'floaty 9s ease-in-out infinite',
      },
      maxWidth: { page: '1600px' },
      spacing: { page: 'var(--page-px)', section: 'var(--section-py)', hero: '88px' },
      transitionTimingFunction: { soft: 'cubic-bezier(0.4, 0, 0.2, 1)' },
    },
  },
  plugins: [],
} satisfies Config;
