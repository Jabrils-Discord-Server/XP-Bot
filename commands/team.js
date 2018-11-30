const Discord = require('discord.js');
const http = require('http');

exports.run = (client, message, args) => {
    let logChannel = '489605729624522762';

    let teamMates = message.content.toString().split(" ");
    teamMates = message.author.id + " and " + teamMates[teamMates.length - 1];
    console.log(teamMates);
    
    http.request("POST", "http://sv443.ddns.net/mphost", "xmas_jam_team_submission:" + teamMates);

    let embed = new Discord.RichEmbed()
    .setTitle('New team submitted:')
    .setColor(client.config.embed_color_default)
    .setDescription(`**${teamMates}**\n just formed a team!`);

    client.channels.get(logChannel).send(embed);
}
