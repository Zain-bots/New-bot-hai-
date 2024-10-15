const fs = require("fs");
module.exports.config = {
        name: "BYE",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "THIS BOT IS AADI SHARMA",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("BYE") ||
     react.includes("bye") || react.includes("Bye") || react.includes("𝐁𝐘𝐄") ||
react.includes("🅱🆈🅴") ||
react.includes("🄱🅈")) {
                var msg = {
                                body: `🙋  𝐓𝐚𝐤𝐞 𝐂𝐚𝐫𝐞 𝐁𝐲   🙋`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
