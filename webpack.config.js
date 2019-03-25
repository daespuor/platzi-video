const path = require('path')
const webpack= require('webpack')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin= require('mini-css-extract-plugin')
module.exports={
    entry:{platzivideo:path.join(__dirname,'/index.js')},
    output:{
        filename:'js/[name][hash].js',
        path:path.join(__dirname,'/dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015','es2016','es2017','react']
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{}
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/[name][hash].css'
        }),
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

}