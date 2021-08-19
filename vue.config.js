// wenpack的配置 configureWebpack对象形式进行配置 chainwebpack 则是链式编程的方式进行配置
module.exports ={
  configureWebpack:{
    resolve:{
      alias: {
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}