const Discord = require('discord.js')

exports.run = (client, message, args) => {

let embed = new Discord.RichEmbed()
                    .setTitle('Our next Game Jam:')
                    .setColor(client.config.embed_color_default)
                    .setDescription('Our next Game Jam will be the XMAS Jam\n\nDuration: 7 days\n\n\nBegins on: December 15th\n    Ends on: December 22nd\n    Voting Ends on: December 29th\n\n\n**Commands (please use them in #bot-playground):**\n\nTo submit a theme, please use\n`xp? theme *your submission*`\n\nTo form a team, please use\n`xp? team *@-pings of your teammates (don\'t include your own name)*`');
                    message.channel.send(embed)
                    message.delete()
}
