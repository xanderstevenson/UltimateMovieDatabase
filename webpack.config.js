01| const path = require(‘path’);
02| const HWP = require(‘html-webpack-plugin’);
03| module.exports = {
04|    entry: path.join(__dirname, ‘/src/index.js’),
05|    output: {
06|        filename: ‘build.js’,
07|        path: path.join(__dirname, ‘/dist’)},
08|    module:{
09|        rules:[{
10|           test: /\.js$/,
11|           exclude: /node_modules/,
12|           loader: ‘babel-loader’
13|        }]
14|    },
15|    plugins:[
16|        new HWP(
17|           {template: path.join(__dirname,‘/src/index.html’)}
18|        )
19|    ]
20| }