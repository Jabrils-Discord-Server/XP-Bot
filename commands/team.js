const Discord = require('discord.js');
const http = require('http');

exports.run = (client, message, args) => {
    let logChannel = '489605729624522762';
    
    let mentions = message.mentions.members.array();
    var teammates = "";

    for(let i = 0; i < mentions.length; i++) {
        teammates.push(mentions[i].user.username + "#" + mentions[i].user.discriminator);
    }
    
    if(teammates.length > 1) let teammates_stringified = teammates.join(", ");
    else let teammates_stringified = teammates[0];

    try {
        var post_data = "xmas_jam_team_registering:%BEGIN%" + message.member.user.tag + "%SPLIT%" + teammates_stringified + "%END%";
        var post_req = http.request({
            host: 'sv443.ddns.net',
            port: '80',
            path: '/mphost',
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                'Content-Length': Buffer.byteLength(post_data)
            },
            function(res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    console.log('Response: ' + chunk);
                });
            }
        });

        // post the data
        post_req.write(post_data);
        post_req.end();
    }
    catch(err) {
        console.log("Couldn't POST to server: " + err);
        message.reply("the server couldn't be reached. Please try again in a few hours!");
    }

    let embed = new Discord.RichEmbed()
    .setTitle('New team submitted:')
    .setColor(client.config.embed_color_default)
    .setDescription(`**${message.member.user.tag}, ${teammates_stringified}**\n just formed a team!`);

    client.channels.get(logChannel).send(embed);
}
