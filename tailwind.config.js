/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
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
      'primary-black': tokens.ColorM3RefPrimaryPrimary0,
      'primary-900': tokens.ColorM3RefPrimaryPrimary10,
      'primary-800': tokens.ColorM3RefPrimaryPrimary20,
      'primary-700': tokens.ColorM3RefPrimaryPrimary30,
      'primary-600': tokens.ColorM3RefPrimaryPrimary40,
      'primary-500': tokens.ColorM3RefPrimaryPrimary50,
      'primary-400': tokens.ColorM3RefPrimaryPrimary60,
      'primary-300': tokens.ColorM3RefPrimaryPrimary70,
      'primary-200': tokens.ColorM3RefPrimaryPrimary80,
      'primary-100': tokens.ColorM3RefPrimaryPrimary90,
      'primary-50': tokens.ColorM3RefPrimaryPrimary95,
      'primary-25': tokens.ColorM3RefPrimaryPrimary99,
      'primary-white': tokens.ColorM3RefPrimaryPrimary100,
      'secondary-base': tokens.ColorM3RefSecondarySecondary40,
      'secondary-black': tokens.ColorM3RefSecondarySecondary0,
      'secondary-900': tokens.ColorM3RefSecondarySecondary10,
      'secondary-800': tokens.ColorM3RefSecondarySecondary20,
      'secondary-700': tokens.ColorM3RefSecondarySecondary30,
      'secondary-600': tokens.ColorM3RefSecondarySecondary40,
      'secondary-500': tokens.ColorM3RefSecondarySecondary50,
      'secondary-400': tokens.ColorM3RefSecondarySecondary60,
      'secondary-300': tokens.ColorM3RefSecondarySecondary70,
      'secondary-200': tokens.ColorM3RefSecondarySecondary80,
      'secondary-100': tokens.ColorM3RefSecondarySecondary90,
      'secondary-50': tokens.ColorM3RefSecondarySecondary95,
      'secondary-25': tokens.ColorM3RefSecondarySecondary99,
      'secondary-white': tokens.ColorM3RefSecondarySecondary100,
      'tertiary-base': tokens.ColorM3RefTertiaryTertiary40,
      'tertiary-black': tokens.ColorM3RefTertiaryTertiary0,
      'tertiary-900': tokens.ColorM3RefTertiaryTertiary10,
      'tertiary-800': tokens.ColorM3RefTertiaryTertiary20,
      'tertiary-700': tokens.ColorM3RefTertiaryTertiary30,
      'tertiary-600': tokens.ColorM3RefTertiaryTertiary40,
      'tertiary-500': tokens.ColorM3RefTertiaryTertiary50,
      'tertiary-400': tokens.ColorM3RefTertiaryTertiary60,
      'tertiary-300': tokens.ColorM3RefTertiaryTertiary70,
      'tertiary-200': tokens.ColorM3RefTertiaryTertiary80,
      'tertiary-100': tokens.ColorM3RefTertiaryTertiary90,
      'tertiary-50': tokens.ColorM3RefTertiaryTertiary95,
      'tertiary-25': tokens.ColorM3RefTertiaryTertiary99,
      'tertiary-white': tokens.ColorM3RefTertiaryTertiary100,
      'error-base': tokens.ColorM3RefErrorError40,
      'error-black': tokens.ColorM3RefErrorError0,
      'error-900': tokens.ColorM3RefErrorError10,
      'error-800': tokens.ColorM3RefErrorError20,
      'error-700': tokens.ColorM3RefErrorError30,
      'error-600': tokens.ColorM3RefErrorError40,
      'error-500': tokens.ColorM3RefErrorError50,
      'error-400': tokens.ColorM3RefErrorError60,
      'error-300': tokens.ColorM3RefErrorError70,
      'error-200': tokens.ColorM3RefErrorError80,
      'error-100': tokens.ColorM3RefErrorError90,
      'error-50': tokens.ColorM3RefErrorError95,
      'error-25': tokens.ColorM3RefErrorError99,
      'error-white': tokens.ColorM3RefErrorError100,
      'neutral-base': tokens.ColorM3RefNeutralNeutral40,
      'neutral-black': tokens.ColorM3RefNeutralNeutral0,
      'neutral-900': tokens.ColorM3RefNeutralNeutral10,
      'neutral-800': tokens.ColorM3RefNeutralNeutral20,
      'neutral-700': tokens.ColorM3RefNeutralNeutral30,
      'neutral-600': tokens.ColorM3RefNeutralNeutral40,
      'neutral-500': tokens.ColorM3RefNeutralNeutral50,
      'neutral-400': tokens.ColorM3RefNeutralNeutral60,
      'neutral-300': tokens.ColorM3RefNeutralNeutral70,
      'neutral-200': tokens.ColorM3RefNeutralNeutral80,
      'neutral-100': tokens.ColorM3RefNeutralNeutral90,
      'neutral-50': tokens.ColorM3RefNeutralNeutral95,
      'neutral-25': tokens.ColorM3RefNeutralNeutral99,
      'neutral-white': tokens.ColorM3RefNeutralNeutral100
    },
    extend: {
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '4rem',
        '3xl': '8rem'
      },
      dropShadow: {
        10: `${tokens.EffectM3ElevationLight10.offsetX}px ${tokens.EffectM3ElevationLight10.offsetY}px ${tokens.EffectM3ElevationLight10.radius}px rgba(0,0,0,0.15)`,
        20: `${tokens.EffectM3ElevationLight20.offsetX}px ${tokens.EffectM3ElevationLight20.offsetY}px ${tokens.EffectM3ElevationLight10.radius}px rgba(0,0,0,0.3)`
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        scaleIn: {
          from: { transform: 'scale(1.2)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 }
        },
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        slideIn: {
          from: { transform: 'translateY(5px)', opacity: 0 },
          to: { transform: 'translateY(0px)', opacity: 1 }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '60%': { transform: 'rotate(215deg)' },
          '100%': { transform: 'rotate(180deg)' }
        }
      },
      animation: {
        fadein: 'fadeIn 150ms ease-in',
        fadeout: 'fadeOut 150ms ease-in',
        scalein: 'scaleIn 120ms ease-out',
        slideDown: 'slideDown 150ms ease-in',
        slideUp: 'slideUp 150ms ease-in',
        slidein: 'slideIn 130ms ease-in',
        wiggle: 'wiggle 150ms ease-in',
        rotate: 'rotate 650ms ease-in-out'
      }
    },
    plugins: [
      plugin(function ({ addUtilities }) {
        const newHeaderUtility = {
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
          '.heading-xl': {
            fontSize: convertToRem(tokens.FontM3BodyLarge.fontSize),
            lineHeight: convertToRem(tokens.FontM3BodyLarge.lineHeight),
            letterSpacing: convertToRem(tokens.FontM3BodyLarge.letterSpacing),
            fontWeight: tokens.FontM3BodyLarge.fontWeight
          },
          '.heading-2xl': {
            fontSize: convertToRem(tokens.FontM3DisplayLarge.fontSize),
            lineHeight: convertToRem(tokens.FontM3DisplayLarge.lineHeight),
            letterSpacing: convertToRem(tokens.FontM3DisplayLarge.letterSpacing),
            fontWeight: tokens.FontM3DisplayLarge.fontWeight
          }
        }
        const newAnimationDelayUtility = {
          '.animation-delay-100': {
            animationDelay: '100ms'
          },
          '.animation-delay-150': {
            animationDelay: '150ms'
          },
          '.animation-delay-200': {
            animationDelay: '200ms'
          },
          '.animation-delay-300': {
            animationDelay: '300ms'
          },
          '.animation-delay-500': {
            animationDelay: '500ms'
          }
        }

        addUtilities(newHeaderUtility)
        addUtilities(newAnimationDelayUtility)
      })
    ]
  }
}
