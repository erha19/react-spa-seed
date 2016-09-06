# 部署说明

## 运行

首先进入要存放文件的文件夹路径

运行`npm run dev-install`安装运行依赖

安装完毕后可运行

`npm run dev` --开发模式

`npm run build` --编译模式（将项目文件输出为上线文件）

## Issue

* webpack中的代理设置见`webpack.config.js`中的`devServer`
* webpack文件执行需要在`node --harmony`模式执行,设置`alias node = "node --harmony"`默认执行



