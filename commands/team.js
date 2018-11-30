const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let logChannel = '489605729624522762'

    let teamMates = message.content.toString().split(" ")
    teamMates = teamMates[teamMates.length - 1]
    console.log(teamMates)

    let embed = new Discord.RichEmbed()
    .setTitle('New team submitted:')
    .setColor(client.config.embed_color_default)
    .setDescription(`**${teamMates}**\n just formed a team!`)
    .addField("Team submitted by: ", `${message.author.nickname}`)

    client.channels.get(logChannel).send(embed)
}
