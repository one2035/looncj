#!name=Loon 插件测试
#!desc=这是一个Loon插件测试项目
#!author= 浪浪
#!icon=https://avatars.githubusercontent.com/u/38467044?v=4

[MITM]
hostname=baidu.com

[Script]

http-request https?:\/\/baidu\.com script-path=https://raw.githubusercontent.com/one2035/looncj/refs/heads/main/demo2.js, requires-body=true, timeout=120, tag=小赵的脚本
