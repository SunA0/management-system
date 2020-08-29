module.exports = {
    devServer: {
        port: 8888,//端口号
        host: 'localhost',//主机名
        https: false,//协议
        open: true,//启动服务自动打开浏览器
        proxy:{
            '/dev-api':{
                target: 'https://www.easy-mock.com/mock/5f4a003c7e1a7f3146e313b2/main',
                changeOrigin: true,
                pathRewrite:{
                    '^/dev-api':'',
                }

            }
        }
    },
    lintOnSave: false,//格式检查关闭
    productionSourceMap: false //打包时不生成.map文件
}