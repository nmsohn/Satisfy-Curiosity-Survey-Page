const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = () => {
  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables // make your antd custom effective
    }
  })
}

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