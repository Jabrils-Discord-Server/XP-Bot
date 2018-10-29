const Discord = require("discord.js");
var data = require("../bot")

module.exports.run = async (client, msg, args) => {
  if (args.length != 1) return;
  data.embed_color = args[0]
  msg.channel.send("Changed Embed Color to #"+ args[0]);
}

module.exports.help = {
    name: "embed_color"
}
