module.exports = {
    devServer: {
        port: 8888,//端口号
        host: 'localhost',//主机名
        https: false,//协议
        open: true,//启动服务自动打开浏览器
        proxy:{
            [process.env.VUE_APP_BASE_URL]:{
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true,
                pathRewrite:{
                    ['^'+process.env.VUE_APP_BASE_URL]:'',
                }

            }
        }
    },
    lintOnSave: false,//格式检查关闭
    productionSourceMap: false //打包时不生成.map文件
}