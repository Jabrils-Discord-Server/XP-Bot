const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	var sayInChannel, sendMsg;

    var allowToUse = false;
    for(let i = 0; i < settings.dev_ids.length; i++) if(message.author.id == settings.dev_ids[i]) allowToUse = true;

    if(args == null) return message.delete();
    if(args.split(" ")[0].split("")[0] == "<" && args.split(" ")[0].split("")[1] == "#") {
        sayInChannel = args.split(" ")[0];
        sayInChannel = sayInChannel.substring(2, sayInChannel.length - 1);
        sendMsg = args.split(" ");
        sendMsg.shift();
        sendMsg = sendMsg.join(" ");
    }

    if(message.member.permissions.has("MANAGE_MESSAGES") || allowToUse) {
        if(sayInChannel == null) {
            message.delete().then(m=>{
                message.channel.send(args);
            });
        }
        else {
            try {
                message.guild.channels.get(sayInChannel).send(sendMsg);
                message.react("✅");
                message.delete(5000);
            }
            catch(err) {
                message.channel.send(args);
            }
        }
    }
    else return message.reply("you don't have enough permissions to do that!");
