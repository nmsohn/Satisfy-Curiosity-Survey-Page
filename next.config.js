const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const withTypescript = require('@zeit/next-typescript');
const fs = require('fs');
const path = require('path');
const withPlugins = require("next-compose-plugins");
const recursiveCopy = require('recursive-copy');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withPlugins(
  [
    withTypescript,
    withLess
  ],
  {
    LessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables // make your antd custom effective
    },
    // exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
    //   await recursiveCopy(join(dir, 'src/'), outDir, {dot:true});
    //   return defaultPathMap
    // },
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ]
  
        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        })
      }
      return config
    },
  }
)

// module.exports = withTypescript(withLess({
//   lessLoaderOptions: {
//       javascriptEnabled: true,
//   },
//   exportPathMap: () => return {
//     '/': { page: '/' },
//     '/about': { page: '/about' },
//     '/readme.md': { page: '/readme' },
//     '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
//     '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
//     '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
// },
// }));