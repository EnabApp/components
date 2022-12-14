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
        sansSerif: ['Tajawal:300,400,500,700'],
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
              font-family: ${theme['fontFamily']['sansSerif']};
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