const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let logChannel = '489605729624522762'

    let teamMates = message.mentions.users.join(' ')

    let embed = new Discord.RichEmbed()
    .setTitle('New team submitted:')
    .setColor(client.config.embed_color_default)
    .setDescription(`**${teamMates}**\n just formed a team!`)

    client.channels.get(logChannel).send(embed)
}
