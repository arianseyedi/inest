// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   env: {
//     customKey: 'value',
//     MAILCHIMP_API_KEY: '691ba9b27505f1d610d1fa28d83fe088-us4',
//     MAILCHIMP_LIST_ID: '336b0f721b',
//   },
// })

const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCSS(
  withSass({
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
      }
      return config
    },
    env: {
      email_to: '',
    },
    // target: 'server', // TO EHSAN: This is the line I was talking about. 'server' is the correct value. Run yarn build, then yarn export.
    target: 'serverless' // for future in case you want to build for serverless instead.
  })
)
