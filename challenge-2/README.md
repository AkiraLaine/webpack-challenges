## Webpack Challenge #2

> it's not just for the front-end

#### Required Features

1. target webpack to build for a node environment
2. treat only **dependencies** as externals to ensure `node_modules` are **not** bundled in the final build (you cannot use an npm package to do this for you)
3. use of `babel-preset-env` to target the current version of node
4. use of `babel-preset-stage-0` for usage of drafted ECMAScript features
5. use library target of `commonjs2` for build
6. usage of DefinePlugin to define `process.env.NODE_ENV` = production in final builds