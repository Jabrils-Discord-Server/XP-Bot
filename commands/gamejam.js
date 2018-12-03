const Discord = require('discord.js')

exports.run = (client, message, args) => {

let embed = new Discord.RichEmbed()
                    .setTitle('Our next Game Jam:')
                    .setColor(client.config.embed_color_default)
                    .setDescription('Our next Game Jam will be the XMAS Jam\n\nDuration: 7 days\n\n\nBegins on: December 15th\n    Ends on: December 22nd\n    Voting Ends on: TBA');
                    message.channel.send(embed)
                    message.delete()
}
