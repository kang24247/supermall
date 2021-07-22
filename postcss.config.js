module.exports = {
    Plugins:{
        autoprefixer: {},  // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
        "postcss-px-to-viewport": {
            unitToConvert: "px",// 要转化的单位
            viewportUnit: 'vw', //指定需要转换成的视窗单位 ，vw
            unitPrecision: 5, //指定 px 转换成视窗单位值的小数位数 可能无法整除 有余数的原因
            viewportWidth: 375, //视口的宽度，对应设计稿的宽度
            viewportHeight: 667, //视口的高度。对应设计稿的高度
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            // ignore  则是可以手动添加给某个元素 达到不转化的效果
            selectorBlackList: ['ignore','tabbar'], //指定不需要转换的类（css）
            minPixelValue: 1, // 默认值1，小于或等于 1 px 则不再转换为 vw 单位了
            mediaQuery: false, //是否允许在媒体查询中转换 'px'
            exclude: [/TabBar/,/node_modules/] //正则文件匹配（排除）
        }
    }
}