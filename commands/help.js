const Discord = require("discord.js");
var data = require("../bot")

module.exports.run = async (client, msg, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle('XP-Bot - Commands:')
    .setColor(data.embed_color)
    .setDescription('`help`\ndisplays this help\n\n\n'
                  + '`status [WATCHING/PLAYING] [MESSAGE]`\nsets the status message of XP-Bot\n\n\n');
    msg.channel.send(embed);
}

module.exports.help = {
    name: "help"
}
