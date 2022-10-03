import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addAutoImport } from '@nuxt/kit'
import path from "path";
import * as fs from 'fs';
import { uno } from "./runtime/unocss/index";


export interface ModuleOptions {
  // isCore: boolean,
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'enab-ui',
    configKey: 'enabUi'
  },
  defaults: {
    // isCore: true,
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)



    // Components Hooks
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: resolve(runtimeDir, 'components'),
        global: true,
      })
    })


    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolve(runtimeDir, 'composables'))
    })

    // ColorMode Configuration
    let colorMode = { classSuffix: "" } as any;
    nuxt.options["colorMode"] = colorMode;

    // UnoCSS Configurations
    nuxt.options["unocss"] = uno;
  }
})