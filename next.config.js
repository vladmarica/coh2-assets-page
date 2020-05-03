const withSass = require('@zeit/next-sass');

const config = {
  env: {
    ASSETS_DIRECTORY: '/home/vlad/Documents/CoH2/Assets'
  },
}

module.exports = withSass(Object.assign({}, config, {
  sassLoaderOptions: {
    implementation: require('sass')
  }
}));
