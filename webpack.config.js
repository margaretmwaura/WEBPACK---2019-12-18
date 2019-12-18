var path = require("path");
module.exports = {
    //...
    mode: "development",
    entry: './src/index.js',
    watch: true,
    module:{
        rules:[
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        hot : true
    },
};
