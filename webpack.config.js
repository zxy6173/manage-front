var path = require("path");
var webpack = require("webpack");
module.exports = {
    //入口
    entry : [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        path.join(__dirname,"js/main.js")

    ],

    //输出
    output : {
        path : path.join(__dirname,"dist"),
        filename : "[name].bundle.js",
        publicPath:'/'
    },
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000
    },
    module : {
        // loaders : [
        //     {test:/\.css$/,loader:"style-loader!css-loader"},
        //     // {test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"
        //     // ,query:{presets:['es2015','react'], "plugins": [
        //     //    "react-hot-loader/babel"
        //     //  ]}}
        //     {test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"}
        // ]
        rules: [
          {
            test: /\.js$/,
            use: [
              'babel-loader',
            ],
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ],
          },
        ]
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/',
        host:'0.0.0.0',
        proxy:{
          '/api':{
            target:'http://manage-back:3000',
            pathRewrite: {'^/api' : ''}
          }
        }
    },
    resolve : {
        alias : {
            tools:"../common/tools",
            store:"../common/store",
            Index:"../index/Index.js",
            Manage:"../index/Manage.js",
            Student:"../student/Student",
            Teacher:"../teacher/Teacher",
            Course:"../course/Course"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}
