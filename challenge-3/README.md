## Webpack Challenge #3

> let's get a little more serious

#### Base features
* target for web
* use of `babel-preset-env` to target last 4 browsers
* use of `html-webpack-plugin`
* use of `sass-loader` for Sass/SCSS stylesheets
* resolve default extensions of `*.js` & `*.json`, as well as `*.css` & `*.scss`
* use of `extract-text-webpack-plugin` to create a separate CSS file for all styles

#### Development features
* use of `eslint` for development linting using the `standard` set of rules
* Hot Module Reloading

#### Production features
* use of `babili` for minification in production builds 
* use of `webpack.DefinePlugin` to set `process.env.NODE_ENV` equal to `production`