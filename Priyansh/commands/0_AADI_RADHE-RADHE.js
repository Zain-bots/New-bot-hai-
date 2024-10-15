const fs = require("fs");
module.exports.config = {
        name: "Radha",
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
        if(react.includes("radhe radhe") ||
     react.includes("RADHE RADHE") || react.includes("Radhe Radhe") || react.includes("radhe") ||
react.includes("Radhe") ||
react.includes("RADHE")) {
                var msg = {
                                body: `__🥰  𝐍𝐚 𝐊𝐢𝐬𝐢 𝐊𝐚 𝐃𝐢𝐰𝐚𝐧𝐚 𝐇𝐮 𝐌𝐞𝐫𝐞 𝐒𝐚𝐚𝐭𝐡 𝐛𝐨𝐥𝐨 𝐑𝐚𝐝𝐡𝐞 𝐑𝐚𝐝𝐡𝐞  😍 ❤️`,attachment: fs.createReadStream(__dirname + `/noprefix/XX.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
