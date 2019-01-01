const Discord = require('discord.js')

const logChannel = "489605729624522762";

module.exports = (client) => {
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);

    let embed = new Discord.RichEmbed()
        .setTitle('Vs is ghey!')
        .setColor(client.config.embed_color_default)
        .setTimestamp()
        .setDescription(`Serving in ${client.channels.size} channels on ${client.guilds.size} servers for a total of ${client.users.size} users.`);
    client.channels.get(logChannel).send(embed)
        
    
    client.user.setActivity(`y'all fail at the Jam`, { type: 'WATCHING' });
}
