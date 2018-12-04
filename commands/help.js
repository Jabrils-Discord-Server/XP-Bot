const Discord = require('discord.js')

exports.run = (client, message, args) => {

    let embed = new Discord.RichEmbed();
    .setTitle('Commands:')
    .setColor(client.config.embed_color_default)
    .setDescription('**Please use these commands in the #bot-playground channel!**\n\n'
    + '`xp? help` - shows this message\n'
    + '`xp? gamejam` - gives you some info on our next Game Jam\n'
    + '`xp? theme *your theme idea*` - submit a theme to our next Game Jam\n'
    + '`xp? team *@-pings of your teammates*` - register a team for the next Game Jam');
    
    message.channel.send(embed);
    message.delete();
}
