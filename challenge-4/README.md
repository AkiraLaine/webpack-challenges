Webpack Challenge #4
===
> no more funny business

#### Base features
* target for web
* use of `babel-preset-env` to target last 4 browsers with modules option disabled for tree-shaking
* use of `html-webpack-plugin` with custom template
* use of `sass-loader` for Sass/SCSS stylesheets
* use of `vue-loader` for compiling `*.vue` component files
* use of `postcss` with `autoprefixer` plugin to support last 4 browsers configured within `vue-loader`
* resolve default extensions of `*.js` & `*.json`, as well as `*.css`, `*.scss`, & `*.vue`
* use of `extract-text-webpack-plugin` to create a separate CSS file for all styles, including those found in Vue component files
* use of `url-loader` with a `10000` limit
    * must catch png, jpg, jpeg, gif, & svg then output to a `imgs` directory
    * must catch woff, woff2, eot, ttf, & otf then output to a `fonts` directory
* use of `file-loader` as a fallback for `url-loader` overage
* use of static assets folder located in `<project root>/static`
* output filename must include hash using `[substitutions]`
* use of `webpack.NoEmitOnErrorsPlugin`

#### Development features
* use of `eslint` for development linting using the `standard` set of rules
    * use of `babel-eslint` for parser with source type of `module`
* use of `friendly-errors-webpack-plugin`
* ensure access to `static/` assets folder is present
* Hot Module Reloading
* enable overlay option within `webpack-dev-server`

#### Production features
* use of `babili` for minification in production builds 
    * enable option to remove all console statements
* use of `webpack.DefinePlugin` to set `process.env.NODE_ENV` equal to `production`
* use of `optimize-css-assets-webpack-plugin`
* use of `webpack-bundle-analyzer`
* use of `dist` folder for output location
* use of `copy-webpack-plugin` to make `static/` assets available