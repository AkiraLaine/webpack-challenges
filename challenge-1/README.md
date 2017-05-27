Challenge 1
Must have features

* `babel-preset-env` to transpile JS for last 4 versions of browsers
* use of `style-loader` to directly import CSS files (from a JS file, not a vue component style tag)
* use of `vue-loader` to compile `*.vue` component files
* alias for a global `assets` folder
* use of `eslint-loader` that extends `standard` rules, and also lints JS within `*.vue` component files
* use of `babili` for code minification in production
* support for development HMR (hot reloading)