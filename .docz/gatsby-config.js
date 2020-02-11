const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Javascript',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root:
          '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Javascript',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com',
          templates:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/node_modules/docz-core/dist/templates',
          docz:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/.docz',
          cache:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/.docz/.cache',
          app:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/.docz/app',
          appPackageJson:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/package.json',
          gatsbyConfig:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/gatsby-config.js',
          gatsbyBrowser:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/gatsby-browser.js',
          gatsbyNode:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/gatsby-node.js',
          gatsbySSR:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/gatsby-ssr.js',
          importsJs:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/.docz/app/imports.js',
          rootJs:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/.docz/app/root.jsx',
          indexJs:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/.docz/app/index.jsx',
          indexHtml:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/.docz/app/index.html',
          db:
            '/Users/hasansefaozalp/Desktop/Web Development/javascript.hasansefaozalp.com/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
