import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '2xl': '1536px'
        // 'xl'은 기본적으로 1280px
        // 'lg'은 기본적으로 1024px
        // 'md'은 기본적으로 768px
        // 'sm'은 기본적으로 640px
      },
      colors: {
        bg: 'var(--bg)',
        textColor: 'var(--textColor)',
        softBg: 'var(--softBg)',
        softTextColor: 'var(--softTextColor)'
      }
    }
  },
  plugins: []
};
export default config;
