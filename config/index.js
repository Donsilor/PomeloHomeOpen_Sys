// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    h5Page: path.resolve(__dirname, '../dist/h5Page.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 9528,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/test/api/':{
        //target:'http://172.26.85.69:8080',
        target:'http://192.168.1.13:8080',//测试
        // target: 'http://sh-opencheck-dev.xl.cn', // 开发环境
          // target: 'http://172.26.84.246:8080/api/ext', // 本地测试
        changeOrigin: true,
        pathRewrite:{
          '/test/api/':'/api/'
        }
      },
      '/api/':{
        // target:'http://192.168.0.28:8081/',
        //target:'http://172.26.85.69:8080',
        target:'http://betaphoau.evergrande.me',//测试
        // target: 'http://sh-opencheck-dev.xl.cn', // 开发环境
          // target: 'http://172.26.84.246:8080/api/ext', // 本地测试
        changeOrigin: true,
      },
      /* '/v1/':{
        target:'http://opencheck-uat.evergrande.cn/api2/category-model-service/',
        changeOrigin: true,
      }, */
      /* '/scene_web_type_mgt/':{
        target:'http://opencheck-uat.evergrande.cn/api2/scene-service/',
        changeOrigin: true,
      },
      '/scene_web_template_mgt/':{
        target:'http://opencheck-uat.evergrande.cn/api2/scene-service/',
        changeOrigin: true,
      }, */
      /* '/icon/':{
        target:'http://opencheck-uat.evergrande.cn/api2/resources-service/',
        changeOrigin: true,
      }, */
      '/api2/':{
        // target:'http://opencheck-uat.evergrande.cn',
        target:'http://betaphoau.evergrande.me/',
        // target:'http://172.26.252.196:7101',
        changeOrigin: true,
        pathRewrite:{
          // '/api2/category-model-service/': '/'
        }
      }
      // 192.168.1.12:8181      徐
      // 192.168.1.18:7101      钟
      // 192.168.1.13:8080      张
    },
    cssSourceMap: false
  }
}
