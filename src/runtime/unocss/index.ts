import { UnocssNuxtOptions } from "@unocss/nuxt"
import colors from "./colors.json"
import heights from "./heights.json"
import { safelist } from "./safelist"

export const uno: UnocssNuxtOptions = {
    autoImport: true,
    uno: true,
    attributify: {
      ignoreAttributes: ['label'],
    },
    typography: true,
    webFonts: {
      provider: 'google',
      fonts: {
        sans: ['Almarai:300,400,700,800'],
      },
    },
    safelist: safelist,
    preflights: [
      // color: ${theme.colors.gray?.[700]};
      {
        getCSS: ({ theme }) => `
            * {
              padding: 0;
              margin: 0;
              font-family: ${theme['fontFamily']['sans']};
              -webkit-touch-callout: none; /* iOS Safari */
              -webkit-user-select: none; /* Safari */
               -khtml-user-select: none; /* Konqueror HTML */
                 -moz-user-select: none; /* Firefox */
                  -ms-user-select: none; /* Internet Explorer/Edge */
                      user-select: none; /* Non-prefixed version, currently
                                            supported by Chrome and Opera */
            }
            body {
                overflow: hidden;
            }
          `
      }
    ],
    theme: {
      colors: colors,
      height: heights,
    },
}