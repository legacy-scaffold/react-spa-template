const path=require("path");


module.exports={
	servers:new Map([
		["development",{
			port:"9090",
			host:"http://127.0.0.1",
		}],
		["test2",{
			port:"6001",
			host:"http://127.0.0.1",			
		}]
	]),
	alias:{
		
	}
}