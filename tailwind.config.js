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
      sans: ['Inter', 'sans-serif']
    },
    fontWeight: {
      bold: tokens.FontParagraphsTextSmBold.fontWeight
    },
    fontSize: {
      xs: [
        convertToRem(tokens.FontParagraphsTextXsRegular.fontSize),
        {
          lineHeight: convertToRem(tokens.FontParagraphsTextXsRegular.lineHeight),
          letterSpacing: convertToRem(tokens.FontParagraphsTextXsRegular.letterSpacing),
          fontWeight: tokens.FontParagraphsTextXsRegular.fontWeight,
          fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
          fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
          fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
          paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
          paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
          textCase: tokens.FontParagraphsTextXsRegular.textCase
        }
      ],
      sm: [
        convertToRem(tokens.FontParagraphsTextSmRegular.fontSize),
        {
          lineHeight: convertToRem(tokens.FontParagraphsTextSmRegular.lineHeight),
          letterSpacing: convertToRem(tokens.FontParagraphsTextSmRegular.letterSpacing),
          fontWeight: tokens.FontParagraphsTextSmRegular.fontWeight,
          fontFamily: tokens.FontParagraphsTextSmRegular.fontFamily,
          fontStyle: tokens.FontParagraphsTextSmRegular.fontStyle,
          fontStretch: tokens.FontParagraphsTextSmRegular.fontStretch,
          paragraphIndent: tokens.FontParagraphsTextSmRegular.paragraphIndent,
          paragraphSpacing: tokens.FontParagraphsTextSmRegular.paragraphSpacing,
          textCase: tokens.FontParagraphsTextSmRegular.textCase
        }
      ],
      base: [
        convertToRem(tokens.FontParagraphsTextMdBaseRegular.fontSize),
        {
          lineHeight: convertToRem(tokens.FontParagraphsTextMdBaseRegular.lineHeight),
          letterSpacing: convertToRem(tokens.FontParagraphsTextMdBaseRegular.letterSpacing),
          fontWeight: tokens.FontParagraphsTextMdBaseRegular.fontWeight,
          fontFamily: tokens.FontParagraphsTextMdBaseRegular.fontFamily,
          fontStyle: tokens.FontParagraphsTextMdBaseRegular.fontStyle,
          fontStretch: tokens.FontParagraphsTextMdBaseRegular.fontStretch,
          paragraphIndent: tokens.FontParagraphsTextMdBaseRegular.paragraphIndent,
          paragraphSpacing: tokens.FontParagraphsTextMdBaseRegular.paragraphSpacing,
          textCase: tokens.FontParagraphsTextMdBaseRegular.textCase
        }
      ],
      lg: [
        convertToRem(tokens.FontParagraphsTextLgRegular.fontSize),
        {
          lineHeight: convertToRem(tokens.FontParagraphsTextLgRegular.lineHeight),
          letterSpacing: convertToRem(tokens.FontParagraphsTextLgRegular.letterSpacing),
          fontWeight: tokens.FontParagraphsTextLgRegular.fontWeight,
          fontFamily: tokens.FontParagraphsTextLgRegular.fontFamily,
          fontStyle: tokens.FontParagraphsTextLgRegular.fontStyle,
          fontStretch: tokens.FontParagraphsTextLgRegular.fontStretch,
          paragraphIndent: tokens.FontParagraphsTextLgRegular.paragraphIndent,
          paragraphSpacing: tokens.FontParagraphsTextLgRegular.paragraphSpacing,
          textCase: tokens.FontParagraphsTextLgRegular.textCase
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
      'warning-500': tokens.ColorSystemWarning500,
      'warning-50': tokens.ColorSystemWarning50,
      'error-500': tokens.ColorSystemError500,
      'error-50': tokens.ColorSystemError50,
      'info-500': tokens.ColorSystemInfo500,
      'info-50': tokens.ColorSystemInfo50
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
            fontSize: convertToRem(tokens.FontDesktopHeadingsHeadingXs.fontSize),
            lineHeight: convertToRem(tokens.FontDesktopHeadingsHeadingXs.lineHeight),
            letterSpacing: convertToRem(tokens.FontDesktopHeadingsHeadingXs.letterSpacing),
            fontWeight: tokens.FontDesktopHeadingsHeadingXs.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
          },
          '.heading-sm': {
            fontSize: convertToRem(tokens.FontDesktopHeadingsHeadingSm.fontSize),
            lineHeight: convertToRem(tokens.FontDesktopHeadingsHeadingSm.lineHeight),
            letterSpacing: convertToRem(tokens.FontDesktopHeadingsHeadingSm.letterSpacing),
            fontWeight: tokens.FontDesktopHeadingsHeadingSm.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
          },
          '.heading-md': {
            fontSize: convertToRem(tokens.FontDesktopHeadingsHeadingMd.fontSize),
            lineHeight: convertToRem(tokens.FontDesktopHeadingsHeadingMd.lineHeight),
            letterSpacing: convertToRem(tokens.FontDesktopHeadingsHeadingMd.letterSpacing),
            fontWeight: tokens.FontDesktopHeadingsHeadingMd.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
          },
          '.heading-lg': {
            fontSize: convertToRem(tokens.FontDesktopHeadingsHeadingLg.fontSize),
            lineHeight: convertToRem(tokens.FontDesktopHeadingsHeadingLg.lineHeight),
            letterSpacing: convertToRem(tokens.FontDesktopHeadingsHeadingLg.letterSpacing),
            fontWeight: tokens.FontDesktopHeadingsHeadingLg.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
          },
          '.heading-xl': {
            fontSize: convertToRem(tokens.FontDesktopHeadingsHeadingXl.fontSize),
            lineHeight: convertToRem(tokens.FontDesktopHeadingsHeadingXl.lineHeight),
            letterSpacing: convertToRem(tokens.FontDesktopHeadingsHeadingXl.letterSpacing),
            fontWeight: tokens.FontDesktopHeadingsHeadingXl.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
          },
          '.heading-2xl': {
            fontSize: convertToRem(tokens.FontDesktopHeadingsHeading2xl.fontSize),
            lineHeight: convertToRem(tokens.FontDesktopHeadingsHeading2xl.lineHeight),
            letterSpacing: convertToRem(tokens.FontDesktopHeadingsHeading2xl.letterSpacing),
            fontWeight: tokens.FontDesktopHeadingsHeading2xl.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
          },
          '.heading-m-xs': {
            fontSize: convertToRem(tokens.FontMobileHeadingsHeadingXs.fontSize),
            lineHeight: convertToRem(tokens.FontMobileHeadingsHeadingXs.lineHeight),
            letterSpacing: convertToRem(tokens.FontMobileHeadingsHeadingXs.letterSpacing),
            fontWeight: tokens.FontMobileHeadingsHeadingXs.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
          },
          '.heading-m-sm': {
            fontSize: convertToRem(tokens.FontMobileHeadingsHeadingSm.fontSize),
            lineHeight: convertToRem(tokens.FontMobileHeadingsHeadingSm.lineHeight),
            letterSpacing: convertToRem(tokens.FontMobileHeadingsHeadingSm.letterSpacing),
            fontWeight: tokens.FontMobileHeadingsHeadingSm.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
          },
          '.heading-m-md': {
            fontSize: convertToRem(tokens.FontMobileHeadingsHeadingMd.fontSize),
            lineHeight: convertToRem(tokens.FontMobileHeadingsHeadingMd.lineHeight),
            letterSpacing: convertToRem(tokens.FontMobileHeadingsHeadingMd.letterSpacing),
            fontWeight: tokens.FontMobileHeadingsHeadingMd.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
          },
          '.heading-m-lg': {
            fontSize: convertToRem(tokens.FontMobileHeadingsHeadingLg.fontSize),
            lineHeight: convertToRem(tokens.FontMobileHeadingsHeadingLg.lineHeight),
            letterSpacing: convertToRem(tokens.FontMobileHeadingsHeadingLg.letterSpacing),
            fontWeight: tokens.FontMobileHeadingsHeadingLg.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
          },
          '.heading-m-xl': {
            fontSize: convertToRem(tokens.FontMobileHeadingsHeadingXl.fontSize),
            lineHeight: convertToRem(tokens.FontMobileHeadingsHeadingXl.lineHeight),
            letterSpacing: convertToRem(tokens.FontMobileHeadingsHeadingXl.letterSpacing),
            fontWeight: tokens.FontMobileHeadingsHeadingXl.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
          },
          '.heading-m-2xl': {
            fontSize: convertToRem(tokens.FontMobileHeadingsHeading2xl.fontSize),
            lineHeight: convertToRem(tokens.FontMobileHeadingsHeading2xl.lineHeight),
            letterSpacing: convertToRem(tokens.FontMobileHeadingsHeading2xl.letterSpacing),
            fontWeight: tokens.FontMobileHeadingsHeading2xl.fontWeight,
            fontFamily: tokens.FontParagraphsTextXsRegular.fontFamily,
            fontStyle: tokens.FontParagraphsTextXsRegular.fontStyle,
            fontStretch: tokens.FontParagraphsTextXsRegular.fontStretch,
            paragraphIndent: tokens.FontParagraphsTextXsRegular.paragraphIndent,
            paragraphSpacing: tokens.FontParagraphsTextXsRegular.paragraphSpacing,
            textCase: tokens.FontParagraphsTextXsRegular.textCase
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
