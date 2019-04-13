const path=require("path");
const EasyConfig=require("../../EasyConfig.js")

module.exports={
	alias:Object.assign({
		PathPool:path.resolve(__dirname,"../../StringConstantPool/PathPool.js"),
		publicImage:path.resolve(__dirname,"../../development/publicImage/")
	},EasyConfig.alias)
}