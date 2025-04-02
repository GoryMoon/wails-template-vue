import { includeIgnoreFile } from '@eslint/compat'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

import prettierConfig from '@vue/eslint-config-prettier'
import {
    defineConfigWithVueTs,
    vueTsConfigs,
} from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
    includeIgnoreFile(gitignorePath),
    {
        ignores: ['**/wailsjs/'],
    },
    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommendedTypeChecked,
    prettierConfig,
)
