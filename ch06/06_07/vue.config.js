const merge = require('deepmerge');
const loader = require.resolve('./loader.js');

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('docs')
      .resourceQuery(/blockType=docs/)
      .use('docs')
      .loader(loader);
    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //   .tap(options =>
    //     merge(options, {
    //       loaders: {
    //         docs: loader
    //       }
    //     })
    //   ).end();
  }
}