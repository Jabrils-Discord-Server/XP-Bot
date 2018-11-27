const Discord = require('discord.js')

exports.run = (client, message, args) => {

let embed = new Discord.RichEmbed()
                    .setTitle('Our next Game Jam:')
                    .setColor(client.config.embed_color_default)
                    .setDescription('Our next Game Jam will be the XMAS Jam\n\nDuration: 7 days\n\n\nBegins on: X\n    Ends on: X\n    Voting Ends on: X');
                    message.channel.send(embed)
                    message.delete()
}
