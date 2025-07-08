const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8176666020:AAG9cIWh8er6Tv7o9Td_KsvfprAgON-UX3s" 
global.BOT_NAME = "EmpireMd Bug Bot"
global.OWNER_NAME = "@only_one_empire" 
global.OWNER = ["https://t.me/only_one_empire", "https://youtube.com/@only_one_empire"] // 
global.DEVELOPER = ["6307156448"] //
global.pp = 'https://files.catbox.moe/eml2bt.jpg'



global.GROUP_ID = -1002298503534;
global.CHANNEL_ID = -1002196853117;
global.GROUP_LINK = "https://t.me/empire_tech_updates";
global.CHANNEL_INVITE_LINK = "https://t.me/+fFg5v0hJJwpkZTM0";
global.WHATSAPP_LINK = "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.YOUTUBE_LINK = "https://youtube.com/@only_one_empire";
global.INSTAGRAM_LINK = "https://www.instagram.com/only_one__empire";
global.owner = global.owner = ['2349014277524']


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
