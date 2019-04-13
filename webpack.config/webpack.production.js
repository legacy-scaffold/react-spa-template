const path=require("path")
const merge=require("webpack-merge");
const webpackBaseConfig=require("./webpack.base.js")
const cleanWebpackPlugin=require("clean-webpack-plugin")

const webpackProdConfig=merge(webpackBaseConfig,{
	mode:"production",
	plugins:[
		new cleanWebpackPlugin(["*"],{
			root:path.resolve(__dirname,"../production/")
		})
	]
})


module.exports=webpackProdConfig