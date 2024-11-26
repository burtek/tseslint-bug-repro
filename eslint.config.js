import tseslint from 'typescript-eslint'

export default tseslint.config(
    tseslint.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                project: 'tsconfig.json'
            },
        }
    },
    {
        ignores: ["eslint.config.js"]
    }
)
