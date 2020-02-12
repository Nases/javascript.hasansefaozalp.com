const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-index-mdx": hot(preferDefault(require("/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/.docz/src/pages/404.js")))
}

