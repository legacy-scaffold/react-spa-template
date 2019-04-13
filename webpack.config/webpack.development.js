const path=require("path")
const merge=require("webpack-merge");
const webpackBaseConfig=require("./webpack.base.js")

const webpackDevConfig=merge(webpackBaseConfig,{
	mode:"development",
	devtool:"source-map",
    devServer:{
        open:true,
        port:"9090",
        inline:true,
        host:"192.168.0.100",
        disableHostCheck:false,
        historyApiFallback:true,
    }
})


module.exports=webpackDevConfig