/*▓██   ██▓ ▄▄▄       ██ ▄█▀▄▄▄      
 ▒██  ██▒▒████▄     ██▄█▒▒████▄    
  ▒██ ██░▒██  ▀█▄  ▓███▄░▒██  ▀█▄  
  ░ ▐██▓░░██▄▄▄▄██ ▓██ █▄░██▄▄▄▄██ 
  ░ ██▒▓░ ▓█   ▓██▒▒██▒ █▄▓█   ▓██▒
   ██▒▒▒  ▒▒   ▓▒█░▒ ▒▒ ▓▒▒▒   ▓▒█░
 ▓██ ░▒░   ▒   ▒▒ ░░ ░▒ ▒░ ▒   ▒▒ ░
 ▒ ▒ ░░    ░   ▒   ░ ░░ ░  ░   ▒   
 ░ ░           ░  ░░  ░        ░  ░
 ░ ░                               

Hello,
Thanks for using Yaka bot.
I am,

██╗   ██╗ █████╗ ██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗
╚██╗ ██╔╝██╔══██╗██║ ██╔╝██╔══██╗██╔════╝██║  ██║██║
 ╚████╔╝ ███████║█████╔╝ ███████║███████╗███████║██║
  ╚██╔╝  ██╔══██║██╔═██╗ ██╔══██║╚════██║██╔══██║██║
   ██║   ██║  ██║██║  ██╗██║  ██║███████║██║  ██║██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝
                                                    */
require("dotenv").config();
const mongoose = require('mongoose');

mongoose.set('strict', true);

let defaultOwner = "254710881926";
const gg = process.env.MODS || defaultOwner;

const mongodb = process.env.MONGODB; // Replace with your MongoDB URL
const sessionId = process.env.SESSION_ID;
const prefa = process.env.PREFIX;
const tenorApiKey = process.env.TENOR_API_KEY; // Replace with your Tenor API Key
const packname = process.env.PACKNAME;
const author = process.env.AUTHOR;
const port = process.env.PORT;

module.exports = {
  mongodb,
};

const mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command *Baka*!",
  botadmin: "Sorry, I can't execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command, Baka!",
  grouponly: "This command is only made for *Groups*, Baka!",
  privateonly: "This command is only made for *Private Chat*, Baka!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Chotto Matte...",
  nolink: "Please provide me a *link*, Baka!",
  error: "An error occurred!",
  banned: `You are *Banned* from using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself!`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Don't be a pervert, Baka! This is not an NSFW enabled group!",
};