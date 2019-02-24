const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if(message.member.permissions.has("MANAGE_MESSAGES")) {
        message.delete().then(m=>{
            return message.channel.send(args.join(" "));
        });
    }
    else return message.reply("you don't have enough permissions to do that!");
}
