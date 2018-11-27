const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {
    if (!args) return message.reply('You must provide a color to change the embeds to!')
    client.config.embed_color_default = args[0]
    message.channel.send("Changed Embed Color to #"+ args[0])
}
