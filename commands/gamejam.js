const Discord = require('discord.js')

exports.run = (client, message, args) => {

let embed = new Discord.RichEmbed()
                    .setTitle('Our next Game Jam:')
                    .setColor(client.config.embed_color_default)
                    .setDescription('The XMAS Jam has ended!\n'
                                    + 'Visit this page for all information: https://itch.io/jam/cult-of-jabrils-xmas-jam\n\n'
                                    + 'Duration: 7 days\n\n\n'
                                    + 'Began on: December 15th\n'
                                    + 'Ended on: December 22nd\n'
                                    + 'Voting Ended on: December 29th\n\n\n\n\n'
                                    + 'Next Game Jam: TBA (but probably in February or March)'
                                    /*+ '**Commands (not available during a Game Jam - please use them in #bot-playground):**\n\n'
                                    + 'To submit a theme, please use\n`xp? theme *your submission*`\n\n'
                                    + 'To form a team, please use\n`xp? team *@-pings of your teammates (don\'t include your own name)*`'*/);
                    message.channel.send(embed)
                    message.delete()
}
