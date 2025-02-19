#!name=Loon 插件测试
#!desc=这是一个Loon插件测试项目
#!author= 浪浪
#!homepage=https://github.com/Peng-YM/Loon-Gallery
#!icon=https://avatars.githubusercontent.com/u/38467044?v=4

[MITM]
hostname=xn--ck8h.com

[Script]

http-request https?:\/\/xn--ck8h\.com script-path=https://raw.githubusercontent.com/Peng-YM/Loon-Gallery/master/backend/gallery.js, requires-body=true, timeout=120, tag=Loon-Gallery
