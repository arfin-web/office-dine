import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0E793C",

          "secondary": "#F5A524",

          "accent": "#C148AC",

          "neutral": "#021431",

          "base-100": "#FFFFFF",

          "info": "#93E7FB",

          "success": "#81CFD1",

          "warning": "#EFD7BB",

          "error": "#E58B8B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
