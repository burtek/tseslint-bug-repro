/* eslint-disable */
import tseslint from 'typescript-eslint'

export default tseslint.config(
    tseslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: 'tsconfig.json'
            },
        }
    }
)
