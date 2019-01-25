const path = require('path')
//const webpack= require('webpack')

module.exports={
    entry:{
        home:path.join(__dirname,'/src/entries/home.js'),
        redux:path.join(__dirname,'/src/entries/redux.js')
    },
    output:{
        filename:'js/[name].js',
        path:path.join(__dirname,'/dist')
    },
    devtool:'eval-source-map ',
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015','es2016','es2017','react','stage-2']
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
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
    devServer:{
        contentBase:path.join(__dirname,'/dist'),
        compress: true,
        port:9000
    }
}