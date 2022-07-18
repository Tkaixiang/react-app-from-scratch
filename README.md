## My learning journey on creating a React app without CRA

### Babel

Babel converts ES6+ and JSX code into more traditional javascript. `preset-react` converts JSX and `preset-env` converts ES6+.

`.babelrc` is the configuration for Babel and we tell it to use the 2 **plugins** above to transform our code

### Webpack

- A **static module bundler** that converts different files/dependencies into "modules" (files that are readable from a browser)

- Most config information in `webpack.config.js`

- <u>**Note**</u>: The current config only outputs the `bundle.js` that contains all the node_modules and other scripts bundled into it. 
  
  - We will need to manually place `index.js` somewhere where it can access `bundle.js`
  
  - Need to install a file handler if we want webpack to handle images etc. Link [here](https://webpack.js.org/loaders/file-loader/)




