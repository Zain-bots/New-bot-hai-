const fs = require("fs");
module.exports.config = {
	name: "mahadev",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Har har mahadev")==0 || event.body.indexOf("har har mahadev")==0 || event.body.indexOf("HAR HAR MAHADEV")==0 || event.body.indexOf("Har Har mahakal")==0) {
		var msg = {
				body: "𝐓𝐮 𝐒𝐚𝐚𝐭𝐡 𝐇𝐚𝐢 𝐓𝐨 𝐌𝐮𝐣𝐡𝐞 𝐊𝐢𝐬 𝐂𝐡𝐢𝐳 𝐊𝐢 𝐊𝐚𝐦𝐢 𝐌𝐮𝐣𝐡𝐞 𝐓𝐞𝐭𝐚 𝐇𝐢 𝐒𝐚𝐚𝐭𝐡 𝐂𝐡𝐚𝐡𝐢𝐲𝐞 𝐁𝐨𝐥𝐞 𝐍𝐚𝐭𝐡...🙂 𝐉𝐚𝐢 𝐁𝐡𝐨𝐥𝐞𝐧𝐚𝐭𝐡🙂💔",
				attachment: fs.createReadStream(__dirname + `/noprefix/ᴴ_ᴬ_ᴿ__ᴴ_ᴬ_ᴿ__ᴹ_ᴬ_ᴴ_ᴬ_ᴰ_ᴱ_ⱽ__🙏🏻_ᴶ_ᴬ_ᴵ__ˢ_ᴴ_ᴵ_ⱽ__ˢ_ᴴ_ᴬ_ᴺ_ᴷ_ᴬ_ᴿ__🥰❣️(360P).mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
