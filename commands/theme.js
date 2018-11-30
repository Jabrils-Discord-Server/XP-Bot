const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let logChannel = '489605729624522762'
    let ideas = args.join(' ')

    let embed = new Discord.RichEmbed()
    .setTitle(`Theme idea from **${message.author}**`)
    .setColor(client.config.embed_color_default)
    .setDescription(`'${ideas}'`)

    client.channels.get(logChannel).send(embed)
}
