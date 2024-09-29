//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/9etcJPe";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic013aGZuMlN6ckVaK2w5ZGxwa1pmY0tOYWoxVFhmWGVyZEgveWV3R3RrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjV1dVA0bUlRRlV2VE5KcFJkVDR1OVRwc1hVY2dlUzRBQ2lFQm5BN1RVbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT0YrSklreUZ4dTVtWVJNcGN3L0lYK2pLbG5vMUdpRndMZ1h4RkMrbkhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RzFGaTBYSTl5RDhpYmFXVHhXN3E3WWFnT2tYVkt6TXduYW5PQldQNUgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIdlZockJ1dGFQZ0xmTHVJUGQ0WjdvZFBmMVF6djU3Sjl0R0pIcFhrbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpwRDl0dzYxaGxPYVNEZGwrZVU0akp6Z0FBSWRNenNVd2NUYUVlajVUM0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUc4cjlOMDZoTGI3a1o3bmF5SjkzYXU2WUNyOTYwOTVyMGpiYlFERStIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnowb0xUcmpPZnMyWTV2L1ViY2QwQ0FtOS8yUHNKeUpabTgrYmVCMUVVZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUwRWZMOWtUYXBLSjJUNjNqSlQzc2dTWHROc25BU1pOQjdYbG9jWDhYNHViUkRZQlo0NWRNWDk5ZExybUE1Qkl2d1dtbjJ5cTc1SWNaVFFlRkt1VkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiJaSWM0ZUNDQTNXOHJURWZKbTdTL2Y3Tkx6R2ZuaFBPZ3I4SHpyQ290LzlrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjQyNTI3NDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkU1MDU5NEIxMDMxNTIyODI0MDhCQjBBQTM0RTA3NEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzYyNDkzN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWWhZOFZQejlTWXVvSFd2dG8ydngyUSIsInBob25lSWQiOiJmZjExZTczZS0yNGZhLTRjMGQtOGYyOS05MDU1OTdkZWQ5ODUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVVSLzlQVmJ5elVMSTlTbFo3SUxWanhDS1RVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU5YmUvNm56RmtVWFBxclh3aHVod0lNMzEyZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYQ0Y1SDdDUyIsIm1lIjp7ImlkIjoiMjM0OTEyNDI1Mjc0NDoxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUaGUgS2V5IFRvIE15IERlc3Rpbnnwn5mC4oCN4oaU8J+kp/CfjJoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05xcDhZSUZFTmp0NWJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9hc2Q2OUt2S1grV2YwU2ZVVmdwbWhMSjVXeGlUUWpSUVNJZXdIUUhyaWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6InIyQnpKbzdyU1RJcWI3WmlmK0JkV0pjT0VnZ25MeSt4ZmhJSlEwb3pybWtaa2lXWnJvWjlWZXYvWGZjV3VIMW4xeTVWYVpGNTdrK1JWcTBnM1piY0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsN2ZncVVjWmlXZlQ5czF3Ui9wbjZaZUNEL3d1b0lzNFdTZzdJZ20wSm05dkdLZlV5ZW1tQngyRWZZTmV5Z0F6L2dWcGJiY2FwMDR3cGhhM1FIaWFBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjQyNTI3NDQ6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjJySGV2U3J5bC9sbjlFbjFGWUtab1N5ZVZzWWswSTBVRWlIc0IwQjY0cCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzYyNDkzMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMbEwifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
