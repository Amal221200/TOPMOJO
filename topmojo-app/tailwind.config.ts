import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        ['dark-primary']: '#eb3b3b',
        ['link']: '#eb3b3b'
      },

      screens : {
        xs: '450px'
      }
    },
  },
  
  plugins: [typography],
}
export default config
