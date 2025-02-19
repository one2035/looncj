const $ = new Env("lhlh")
const startTime = format()
let cards = []
let config = {
	cookie: {},
	cookieStr: "",
	key: "",
	user: {},
	watch: {},
	share: {},
	coins: {},
	score: {}
}
let real_times //实际需要投币次数

!(async () => {
	if (typeof $request != "undefined") {
		$.log("- 正在获取cookie, 请稍后")
	} else {
		$.log("- 正在获取11111111cookie, 请稍后")
	}
})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done())
