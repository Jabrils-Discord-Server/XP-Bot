const Discord = require("discord.js");
var data = require("../bot")

module.exports.run = async (client, msg, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle('XP-Bot - Commands:')
    .setColor(data.embed_color)
    .setDescription('`help`  displays this message\n'
                  + '`status`  shows your verification status');
    msg.channel.send(embed);
}

module.exports.help = {
    name: "help"
}
