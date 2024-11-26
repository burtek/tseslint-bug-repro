Repro for https://github.com/typescript-eslint/typescript-eslint/issues/10395

To reproduce issue, clone the repo and run `npm run lint`:

```bash
$ npm run lint

> tseslint-bug-repro@1.0.0 lint
> eslint


/home/user/tseslint-bug-repro/eslint.config.js
  0:0  error  Parsing error: "parserOptions.project" has been provided for @typescript-eslint/parser.
The file was not found in any of the provided project(s): eslint.config.js

/home/user/tseslint-bug-repro/index.ts
  0:0  error  Parsing error: Invalid value for lib provided: es2022.sharedmemory

✖ 2 problems (2 errors, 0 warnings)
```
