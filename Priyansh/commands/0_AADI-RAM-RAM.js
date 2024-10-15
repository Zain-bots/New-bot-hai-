const fs = require("fs");
module.exports.config = {
	name: "KHANA",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "AADI BABU",
	description: "THIS BOT IS MR AADI SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Ram") ||
     react.includes("Jay shree Ram") || react.includes("Jay shree ram") || react.includes("Jay Shree Ram") ||
react.includes("jay shree ram") ||
react.includes("JAY SHREE RAM")) {
		var 
				body: `__🥰  𝐉𝐚𝐢 𝐒𝐡𝐫𝐞𝐞 𝐑𝐚𝐣 🙂 ❤💔`,attachment: fs.createReadStream(__dirname + `/noprefix/#ram_#ramlalaa_#ayodhya_#siyaram_in_2024___Ram_photos,_Shree_ram_photos,_Shri_ram_photo(360P).mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
