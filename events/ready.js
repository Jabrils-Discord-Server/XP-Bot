const Discord = require('discord.js')

const logChannel = "489605729624522762";

module.exports = (client) => {
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    
    let embed = new Discord.RichEmbed()
        .setTitle('Everyone is ghey!')
        .setColor(client.config.embed_color_default)
        .setTimestamp()
        .setDescription(`Serving in ${client.channels.size} channels on ${client.guilds.size} servers for a total of ${client.users.size} users.`);
    client.channels.get(logChannel).send(embed)
       
    let actarr = [
        'Gabe succ a fat dicc',
        'Sv be a ghey furry',
        'Canny be the worst mod',
        'The mods periodically leave',
        'Print be a stinky brit',
        'Copy shower uwu',
        'the community die'
    ];
    
    client.user.setActivity(`${actarr.random()}`, {type: 'WATCHING'})
    
    setInterval(() => {
        client.user.setActivity(`${actarr.random()}`, {type: 'WATCHING'})
    }, 1000 * 60 * 3)
    // client.user.setActivity(`Noboruu shower`, { type: 'WATCHING' });
}

Array.prototype.random = function() {
 return this[Math.floor((Math.random()*this.length))];   
}
