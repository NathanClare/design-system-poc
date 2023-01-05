/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const tokens = require('./styles/_generated/json/styles.json')

/* TODO: Move to seperate file? */
const convertToRem = value => {
  return `${value / 16}rem`
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './patterns/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    fontSize: {
      xs: [
        convertToRem(tokens.FontM3BodySmall.fontSize),
        {
          lineHeight: convertToRem(tokens.FontM3BodySmall.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3BodySmall.letterSpacing),
          fontWeight: tokens.FontM3BodySmall.fontWeight
        }
      ],
      sm: [
        convertToRem(tokens.FontM3BodyMedium.fontSize),
        {
          lineHeight: convertToRem(tokens.FontM3BodyMedium.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3BodyMedium.letterSpacing),
          fontWeight: tokens.FontM3BodyMedium.fontWeight
        }
      ],
      base: [
        convertToRem(tokens.FontM3BodyLarge.fontSize),
        {
          lineHeight: convertToRem(tokens.FontM3BodyLarge.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3BodyLarge.letterSpacing),
          fontWeight: tokens.FontM3BodyLarge.fontWeight
        }
      ],
      lg: [
        convertToRem(tokens.FontM3HeadlineSmall.fontSize),
        {
          lineHeight: convertToRem(tokens.FontM3HeadlineSmall.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3HeadlineSmall.letterSpacing),
          fontWeight: tokens.FontM3HeadlineSmall.fontWeight
        }
      ],
      xl: [
        convertToRem(tokens.FontM3HeadlineMedium.fontSize),
        {
          lineHeight: convertToRem(tokens.FontM3HeadlineMedium.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3HeadlineMedium.letterSpacing),
          fontWeight: tokens.FontM3HeadlineMedium.fontWeight
        }
      ],
      '2xl': [
        convertToRem(tokens.FontM3HeadlineLarge.fontSize),
        {
          lineHeight: convertToRem(tokens.FontM3HeadlineLarge.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3HeadlineLarge.letterSpacing),
          fontWeight: tokens.FontM3HeadlineLarge.fontWeight
        }
      ],
      '3xl': [
        convertToRem(tokens.FontM3DisplaySmall.fontSize),
        {
          lineHeight: convertToRem(tokens.FontM3DisplaySmall.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3DisplaySmall.letterSpacing),
          fontWeight: tokens.FontM3DisplaySmall.fontWeight
        }
      ],
      '4xl': [
        convertToRem(tokens.FontM3DisplayMedium.fontSize),
        {
          lineHeight: convertToRem(tokens.FontM3DisplayMedium.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3DisplayMedium.letterSpacing),
          fontWeight: tokens.FontM3DisplayMedium.fontWeight
        }
      ],
      '5xl': [
        convertToRem(tokens.FontM3DisplayLarge.fontSize),
        {
          lineHeight: convertToRem(tokens.FontM3DisplayLarge.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3DisplayLarge.letterSpacing),
          fontWeight: tokens.FontM3DisplayLarge.fontWeight
        }
      ]
    },
    screens: {
      sm: '600px',
      md: '1240px',
      lg: '1440px'
    },
    colors: {
      white: '#ffffff',
      'primary-base': tokens.ColorM3RefPrimaryPrimary40,
      'primary-0': tokens.ColorM3RefPrimaryPrimary0,
      'primary-10': tokens.ColorM3RefPrimaryPrimary10,
      'primary-20': tokens.ColorM3RefPrimaryPrimary20,
      'primary-30': tokens.ColorM3RefPrimaryPrimary30,
      'primary-40': tokens.ColorM3RefPrimaryPrimary40,
      'primary-50': tokens.ColorM3RefPrimaryPrimary50,
      'primary-60': tokens.ColorM3RefPrimaryPrimary60,
      'primary-70': tokens.ColorM3RefPrimaryPrimary70,
      'primary-80': tokens.ColorM3RefPrimaryPrimary80,
      'primary-90': tokens.ColorM3RefPrimaryPrimary90,
      'primary-95': tokens.ColorM3RefPrimaryPrimary95,
      'primary-99': tokens.ColorM3RefPrimaryPrimary99,
      'primary-100': tokens.ColorM3RefPrimaryPrimary100,
      'secondary-base': tokens.ColorM3RefSecondarySecondary40,
      'secondary-0': tokens.ColorM3RefSecondarySecondary0,
      'secondary-10': tokens.ColorM3RefSecondarySecondary10,
      'secondary-20': tokens.ColorM3RefSecondarySecondary20,
      'secondary-30': tokens.ColorM3RefSecondarySecondary30,
      'secondary-40': tokens.ColorM3RefSecondarySecondary40,
      'secondary-50': tokens.ColorM3RefSecondarySecondary50,
      'secondary-60': tokens.ColorM3RefSecondarySecondary60,
      'secondary-70': tokens.ColorM3RefSecondarySecondary70,
      'secondary-80': tokens.ColorM3RefSecondarySecondary80,
      'secondary-90': tokens.ColorM3RefSecondarySecondary90,
      'secondary-95': tokens.ColorM3RefSecondarySecondary95,
      'secondary-99': tokens.ColorM3RefSecondarySecondary99,
      'secondary-100': tokens.ColorM3RefSecondarySecondary100,
      'tertiary-base': tokens.ColorM3RefTertiaryTertiary40,
      'tertiary-0': tokens.ColorM3RefTertiaryTertiary0,
      'tertiary-10': tokens.ColorM3RefTertiaryTertiary10,
      'tertiary-20': tokens.ColorM3RefTertiaryTertiary20,
      'tertiary-30': tokens.ColorM3RefTertiaryTertiary30,
      'tertiary-40': tokens.ColorM3RefTertiaryTertiary40,
      'tertiary-50': tokens.ColorM3RefTertiaryTertiary50,
      'tertiary-60': tokens.ColorM3RefTertiaryTertiary60,
      'tertiary-70': tokens.ColorM3RefTertiaryTertiary70,
      'tertiary-80': tokens.ColorM3RefTertiaryTertiary80,
      'tertiary-90': tokens.ColorM3RefTertiaryTertiary90,
      'tertiary-95': tokens.ColorM3RefTertiaryTertiary95,
      'tertiary-99': tokens.ColorM3RefTertiaryTertiary99,
      'tertiary-100': tokens.ColorM3RefTertiaryTertiary100,
      'error-base': tokens.ColorM3RefErrorError40,
      'error-0': tokens.ColorM3RefErrorError0,
      'error-10': tokens.ColorM3RefErrorError10,
      'error-20': tokens.ColorM3RefErrorError20,
      'error-30': tokens.ColorM3RefErrorError30,
      'error-40': tokens.ColorM3RefErrorError40,
      'error-50': tokens.ColorM3RefErrorError50,
      'error-60': tokens.ColorM3RefErrorError60,
      'error-70': tokens.ColorM3RefErrorError70,
      'error-80': tokens.ColorM3RefErrorError80,
      'error-90': tokens.ColorM3RefErrorError90,
      'error-95': tokens.ColorM3RefErrorError95,
      'error-99': tokens.ColorM3RefErrorError99,
      'error-100': tokens.ColorM3RefErrorError100,
      'neutral-base': tokens.ColorM3RefNeutralNeutral40,
      'neutral-0': tokens.ColorM3RefNeutralNeutral0,
      'neutral-10': tokens.ColorM3RefNeutralNeutral10,
      'neutral-20': tokens.ColorM3RefNeutralNeutral20,
      'neutral-30': tokens.ColorM3RefNeutralNeutral30,
      'neutral-40': tokens.ColorM3RefNeutralNeutral40,
      'neutral-50': tokens.ColorM3RefNeutralNeutral50,
      'neutral-60': tokens.ColorM3RefNeutralNeutral60,
      'neutral-70': tokens.ColorM3RefNeutralNeutral70,
      'neutral-80': tokens.ColorM3RefNeutralNeutral80,
      'neutral-90': tokens.ColorM3RefNeutralNeutral90,
      'neutral-95': tokens.ColorM3RefNeutralNeutral95,
      'neutral-99': tokens.ColorM3RefNeutralNeutral99,
      'neutral-100': tokens.ColorM3RefNeutralNeutral100
    },
    extend: {}
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newHeaderUtility = {
<<<<<<< Updated upstream
=======
        '.heading-xs': {
          fontSize: convertToRem(tokens.FontM3HeadlineMedium.fontSize),
          lineHeight: convertToRem(tokens.FontM3HeadlineMedium.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3HeadlineMedium.letterSpacing),
          fontWeight: tokens.FontM3HeadlineMedium.fontWeight
        },
        '.heading-sm': {
          fontSize: convertToRem(tokens.FontM3HeadlineLarge.fontSize),
          lineHeight: convertToRem(tokens.FontM3HeadlineLarge.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3HeadlineLarge.letterSpacing),
          fontWeight: tokens.FontM3HeadlineLarge.fontWeight
        },
        '.heading-md': {
          fontSize: convertToRem(tokens.FontM3DisplaySmall.fontSize),
          lineHeight: convertToRem(tokens.FontM3DisplaySmall.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3DisplaySmall.letterSpacing),
          fontWeight: tokens.FontM3DisplaySmall.fontWeight
        },
        '.heading-lg': {
          fontSize: convertToRem(tokens.FontM3DisplayMedium.fontSize),
          lineHeight: convertToRem(tokens.FontM3DisplayMedium.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3DisplayMedium.letterSpacing),
          fontWeight: tokens.FontM3DisplayMedium.fontWeight
        },
>>>>>>> Stashed changes
        '.heading-xl': {
          fontSize: convertToRem(tokens.FontM3BodyLarge.fontSize),
          lineHeight: convertToRem(tokens.FontM3BodyLarge.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3BodyLarge.letterSpacing),
          fontWeight: tokens.FontM3BodyLarge.fontWeight
        },
        '.heading-2xl': {
<<<<<<< Updated upstream
          fontSize: convertToRem(tokens.FontM3BodyLarge.fontSize),
          lineHeight: convertToRem(tokens.FontM3BodyLarge.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3BodyLarge.letterSpacing),
          fontWeight: tokens.FontM3BodyLarge.fontWeight
        }
      }

=======
          fontSize: convertToRem(tokens.FontM3DisplayLarge.fontSize),
          lineHeight: convertToRem(tokens.FontM3DisplayLarge.lineHeight),
          letterSpacing: convertToRem(tokens.FontM3DisplayLarge.letterSpacing),
          fontWeight: tokens.FontM3DisplayLarge.fontWeight
        }
      }
>>>>>>> Stashed changes
      addUtilities(newHeaderUtility)
    })
  ]
}
