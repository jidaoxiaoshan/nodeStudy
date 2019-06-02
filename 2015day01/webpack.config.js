const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),

    /*{ //入口 单入口可以只写一行，多入口写一个对象，键值的方式
    home: "./src/index.js",
},*/

    output: { //出口

        path: path.join(__dirname, './dist'),//必须是绝对路径

        filename: 'bundle.js'

    },
    devServer: {

        // contentBase:"./dist",

        //port:3000,//设置打开的端口

        compress: true,//服务器压缩

        open: true,//设置自动打开浏览器

        hot: true //热更新开启
    },

    module: {
        rules: [

            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({ //配置提取css文件，不配置的话css会嵌入在js文件当中
                    fallback: "style-loader", //表示开发的时候应用 style-loader
                    use: [
                        // {loader: "style-loader"},//如果配置了抽离插件的时候不需要导入 style-loader，有该行会报错
                        {loader: "css-loader"},
                        {loader: "postcss-loader"}
                    ]
                })
            },

           /* {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({ //配置提取css文件，不配置的话css会嵌入在js文件当中
                    fallback: "style-loader",
                    use: [
                        // {loader: "style-loader"},
                        {loader: "css-loader"},
                        {loader: "less-loader"},
                        {loader: "postcss-loader"}
                    ]
                })
            },*/

            // 识别 .vue 文件
            { test:/\.vue$/, use: 'vue-loader' },

            //匹配字体文件, 处理字体文件
            {test:/\.(ttf|eot|svg|woff|woff2)/,use: ['url-loader']},

            //  图片的加载依赖于这两个 loader ===>  url-loader file-loader
            {
                test:/\.(jpg|png|gif|bmp|jpeg)$/,
                use:['url-loader?limit=10240&name=[hash:8]-[name].[ext]']
            },

            //将高级语法 转换为 低级语法
            {
                test:/\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }

        ]
    },
    plugins: [ //插件配置

        new VueLoaderPlugin(), //vue 相关插件

       /* new CopyWebpackPlugin([{ //拷贝插件，原封不动地复制一份对应文件到目标文件 大部分时间用不上
            from: "./src/data",
            to: "public"
        }]),*/

        new ExtractTextWebpackPlugin({  //css提取插件
            filename: "css/index.css",
            // disable: true  //开发环境使用，不会提取css，上线的时候注释掉该行就可以生成对应的css文件
        }),

        new webpack.HotModuleReplacementPlugin(), //热更新插件

        new CleanWebpackPlugin(["./dist"]), //每次运行的时候清理对应目录下的文件，重新生成新文件

        new HtmlWebpackPlugin({
            //pathname:"index.html", //多页面的时候需要配置多个HtmlWebpackPlugin，该行配置每一个页面的路径
            template: path.join(__dirname, './src/index.html'),
            minify: {
                removeAttributeQuotes: true,//去除双引号
                collapseWhitespace: true //压缩代码成一行
            },
            //hash:true, //文件后添加hash值
            //chunks:["index"] //配置对应页面需要引入的文件
        })
    ],

    mode: "development", //开发模式

    resolve: {}
}