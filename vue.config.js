module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			// 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
			disableHostCheck: true,
			// 直接调取浏览器打开页面
			open:true,
			// 80 端口打开页面
			port:80
		}
	},
	//productionSourceMap: false,
}
