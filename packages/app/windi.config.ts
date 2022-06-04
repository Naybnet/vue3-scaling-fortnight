import { defineConfig } from '@windicss/plugin-utils'
import colors from 'windicss/colors'
import formsPlugin from 'windicss/plugin/forms'
import { transform } from 'windicss/helpers'

export default defineConfig({
  attributify: {
    prefix: 'w:',
  },
  analyze: true,
  extract: {
    include: ['./src/(layouts|components|pages)/**/*.vue'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#2CAE76',
        secondary: '#82B1FF',
        accent: '#82B1FF',
        error: '#FF5252',
        record: '#FF5252',
        info: colors.teal['400'],
        success: colors.emerald['400'],
        warning: colors.amber['200'],
        rblack: colors.dark['400'],
        rgrey: colors.zinc['400'],
        rlight: colors.slate['200'],
      },
      animation: {
        'pulse-fast': 'pulse 1.3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
    screens: {
      xs: '0px',
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1527px',
    },
  },
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg',
    'btn-primary': 'text-white bg-primary hover:elevation-2',
    'btn-secondary': 'text-white bg-secondary hover:elevation-2',
    'widevo-text': 'text-widevoblack',
    'list-item-title': 'text-sm widevo-text',
    'list-item-subtitle': 'text-xs text-primary',
    'list-item-thumbnail': 'h-70px w-90px rounded-md',
    'list-item-chip': 'rounded-16px text-xs widevo-text text-center',
    link: 'font-semibold text-primary hover:underline',
    input:
      'appearance-none rounded-lg p-2 border border-widevogrey placeholder-widevogrey text-widevoblack focus:outline-none focus:z-10 sm:text-sm',
    'item-title': 'text-2xl widevo-text',
    'item-thumbnail': 'h-100px w-140px rounded-md',
    'info-display': 'pt-12 flex items-center justify-center',
    card: 'rounded-md bg-widevogrey bg-opacity-10',
    overlay:
      '!z-99 fixed flex items-center justify-center top-0 left-0 bg-widevoblack bg-opacity-50 h-full w-full bg-blend-overlay',
  },
  plugins: [formsPlugin, transform('tailwindcss-elevation')(['responsive'])],
})
