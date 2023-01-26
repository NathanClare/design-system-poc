/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const tokens = require('./styles/_generated/json/styles.json')

/* TODO: Move to seperate file? */
const convertToRem = value => {
  return `${value / 16}rem`
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './ui/components/**/*.{js,ts,jsx,tsx}', './ui/patterns/**/*.{js,ts,jsx,tsx}'],
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
      'primary-base': tokens.ColorPrimaryOrange500Primary,
      'primary-900': tokens.ColorPrimaryOrange900,
      'primary-800': tokens.ColorPrimaryOrange800,
      'primary-700': tokens.ColorPrimaryOrange700,
      'primary-600': tokens.ColorPrimaryOrange600,
      'primary-500': tokens.ColorPrimaryOrange500Primary,
      'primary-400': tokens.ColorPrimaryOrange400,
      'primary-300': tokens.ColorPrimaryOrange300,
      'primary-200': tokens.ColorPrimaryOrange200,
      'primary-150': tokens.ColorPrimaryOrange150,
      'primary-100': tokens.ColorPrimaryOrange100,
      'primary-50': tokens.ColorPrimaryOrange50,
      'primary-25': tokens.ColorPrimaryOrange25,
      'surface-black': tokens.ColorSurfaceTextBlack,
      'surface-900': tokens.ColorSurfaceGrey900,
      'surface-800': tokens.ColorSurfaceGrey800,
      'surface-700': tokens.ColorSurfaceGrey700,
      'surface-600': tokens.ColorSurfaceGrey600,
      'surface-500': tokens.ColorSurfaceGrey500,
      'surface-400': tokens.ColorSurfaceGrey400,
      'surface-300': tokens.ColorSurfaceGrey300,
      'surface-200': tokens.ColorSurfaceGrey200,
      'surface-150': tokens.ColorSurfaceGrey150,
      'surface-100': tokens.ColorSurfaceGrey100,
      'surface-50': tokens.ColorSurfaceGrey50,
      'surface-white': tokens.ColorSurfaceWhite,
      'success-500': tokens.ColorSystemSuccess500,
      'success-50': tokens.ColorSystemSuccess50,
      'Warning-500': tokens.ColorSystemWarning500,
      'Warning-50': tokens.ColorSystemWarning50,
      'Error-500': tokens.ColorSystemError500,
      'Info-50': tokens.ColorSystemInfo50,
      'Info-500': tokens.ColorSystemInfo500,
      'Info-50': tokens.ColorSystemInfo50
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
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '60%': { transform: 'rotate(215deg)' },
          '100%': { transform: 'rotate(180deg)' }
        },
        jump: {
          '0%': { transform: 'translateY(0px)' },
          '60%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        drop: {
          '0%': { transform: 'translateY(0px)' },
          '60%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        shake: {
          '0%': { transform: 'translateY(0px)' },
          '10%': { transform: 'translateY(-5px)' },
          '20%': { transform: 'translateX(-5px)' },
          '30%': { transform: 'translateY(5px)' },
          '40%': { transform: 'translateX(5px)' },
          '50%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateX(-5px)' },
          '70%': { transform: 'translateY(5px)' },
          '80%': { transform: 'translateX(5px)' },
          '90%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateY(0px)' }
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
        rotate: 'rotate 650ms ease-in-out',
        jump: 'jump 650ms ease-in-out',
        drop: 'drop 650ms ease-in-out',
        shake: 'shake 650ms ease-in-out'
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
