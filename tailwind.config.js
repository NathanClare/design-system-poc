/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars
const plugin = require('tailwindcss/plugin')

// eslint-disable-next-line @typescript-eslint/no-var-requires
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
    fontWeight: {
      normal: 400,
      bold: 700
    },
    fontSize: {
      xs: [
        convertToRem(tokens.Body10Regular.fontSize),
        {
          lineHeight: convertToRem(tokens.Body10Regular.lineHeight),
          letterSpacing: convertToRem(tokens.Body10Regular.letterSpacing),
          fontWeight: tokens.Body10Regular.fontWeight
        }
      ],
      sm: [
        convertToRem(tokens.Body12Regular.fontSize),
        {
          lineHeight: convertToRem(tokens.Body12Regular.lineHeight),
          letterSpacing: convertToRem(tokens.Body12Regular.letterSpacing),
          fontWeight: tokens.Body12Regular.fontWeight
        }
      ],
      base: [
        convertToRem(tokens.Body14Regular.fontSize),
        {
          lineHeight: convertToRem(tokens.Body14Regular.lineHeight),
          letterSpacing: convertToRem(tokens.Body14Regular.letterSpacing),
          fontWeight: tokens.Body14Regular.fontWeight
        }
      ],
      lg: [
        convertToRem(tokens.Body16Regular.fontSize),
        {
          lineHeight: convertToRem(tokens.Body16Regular.lineHeight),
          letterSpacing: convertToRem(tokens.Body16Regular.letterSpacing),
          fontWeight: tokens.Body16Regular.fontWeight
        }
      ],
      xl: [
        convertToRem(tokens.Body18Regular.fontSize),
        {
          lineHeight: convertToRem(tokens.Body18Regular.lineHeight),
          letterSpacing: convertToRem(tokens.Body18Regular.letterSpacing),
          fontWeight: tokens.Body18Regular.fontWeight
        }
      ],
      '2xl': [
        convertToRem(tokens.Body20Regular.fontSize),
        {
          lineHeight: convertToRem(tokens.Body20Regular.lineHeight),
          letterSpacing: convertToRem(tokens.Body20Regular.letterSpacing),
          fontWeight: tokens.Body20Regular.fontWeight
        }
      ],
      '3xl': [
        convertToRem(tokens.Body20Regular.fontSize),
        {
          lineHeight: convertToRem(tokens.Body20Regular.lineHeight),
          letterSpacing: convertToRem(tokens.Body20Regular.letterSpacing),
          fontWeight: tokens.Body20Regular.fontWeight
        }
      ],
      '4xl': [
        convertToRem(tokens.Body24Regular.fontSize),
        {
          lineHeight: convertToRem(tokens.Body24Regular.lineHeight),
          letterSpacing: convertToRem(tokens.Body24Regular.letterSpacing),
          fontWeight: tokens.Body24Regular.fontWeight
        }
      ]
    },
    screens: {
      sm: '600px',
      md: '1240px',
      lg: '1440px'
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',

      brand: {
        redlight: tokens.BrandImpermoRedLight,
        redprimary: tokens.BrandImpermoRedPrimary,
        reddark: tokens.BrandImpermoDarkRed,
        yellow: tokens.BrandImpermoYellow,
        lightgrey: tokens.BrandImpermoLightGrey,
        mediumgrey: tokens.BrandImpermoMediumGrey,
        black: tokens.BrandImpermoBlack,
        pastel: tokens.BrandImpermoPastel,
        blue: tokens.BrandImpermoBlue,
        pink: tokens.BrandImpermoPink
      },
      floor: {
        collection: tokens.BrandProductsFloorCollection,
        classic: tokens.BrandProductsFloorClassic,
        basic: tokens.BrandProductsFloorBasic
      },
      terrace: {
        collection: tokens.BrandProductsTerraceCollection,
        classic: tokens.BrandProductsTerraceClassic,
        basic: tokens.BrandProductsTerraceBasic
      },
      parquet: {
        collection: tokens.BrandMaterialsParquetCollection,
        classic: tokens.BrandMaterialsParquetClassic,
        basic: tokens.BrandMaterialsParquetBasic
      },
      rocks: {
        collection: tokens.BrandMaterialsNaturalRocksCollection,
        classic: tokens.BrandMaterialsNaturalRocksClassic,
        basic: tokens.BrandMaterialsNaturalRocksBasic
      },
      wall: {
        collection: tokens.WallCollection,
        classic: tokens.WallClassic,
        basic: tokens.WallBasic
      },
      tiles: {
        collection: tokens.BrandMaterialsTilesCollection,
        classic: tokens.BrandMaterialsTilesClassic,
        basic: tokens.BrandMaterialsTilesBasic
      },
      materials: {
        base: tokens.BrandMaterialsMaterials
      },
      promo: {
        500: tokens.StatusIndicatorPromo
      },
      info: {
        500: tokens.StatusIndicatorInfo,
        50: tokens.StatusBackgroundInformation
      },
      error: {
        500: tokens.StatusIndicatorError,
        50: tokens.StatusBackgroundError
      },
      warning: {
        500: tokens.StatusIndicatorWarning,
        50: tokens.StatusBackgroundWarning
      },
      success: {
        500: tokens.StatusIndicatorSuccess,
        50: tokens.StatusBackgroundSuccess
      },
      surface: {
        100: tokens.Greyscale100,
        90: tokens.Greyscale90,
        80: tokens.Greyscale80,
        70: tokens.Greyscale70,
        60: tokens.Greyscale60,
        50: tokens.Greyscale50,
        40: tokens.Greyscale40,
        30: tokens.Greyscale30,
        20: tokens.Greyscale20,
        10: tokens.Greyscale10,
        0: tokens.Greyscale0
      },
      red: {
        base: tokens.ButtonRedDefault,
        hover: tokens.ButtonRedHover
      },
      black: {
        base: tokens.ButtonBlackDefault,
        hover: tokens.ButtonBlackHover
      },
      green: {
        base: tokens.ButtonGreenDefault,
        hover: tokens.ButtonGreenHover
      },
      disabled: {
        button: tokens.ButtonDisabledDefault,
        text: tokens.TextDisabledDefault
      },
      icon: {
        white: tokens.IconWhiteDefault,
        black: tokens.IconBlackDefault
      }
    },
    extend: {
      transitionProperty: {
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke'
      },
      shadow: {
        sm: tokens.ShadowSm,
        md: tokens.ShadowMd,
        lg: tokens.ShadowLg
      },
      spacing: {
        xs: tokens.SpacingXs,
        sm: tokens.SpacingSm,
        md: tokens.SpacingMd,
        lg: tokens.SpacingLg,
        xl: tokens.SpacingXl,
        '2xl': tokens.Spaxing2xl,
        '3xl': tokens.Spacing3xl,
        '4xl': tokens.Spacing4xl
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
    plugins: []
  }
}
