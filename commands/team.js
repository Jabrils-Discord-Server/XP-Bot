const Discord = require('discord.js');
const http = require('http');

exports.run = (client, message, args) => {
    var errored = false;
    let logChannel = '489605729624522762';

    message.reply("you can't join teams as there's no Jam running currently!\nUse `xp? gamejam` for more information.");
    /*
    let mentions = message.mentions.members.array();
    if(mentions == undefined || mentions == null || mentions == "" || mentions == []) {
        message.reply("please tag at least one or more of your teammates to create a team.");
        errored = true;
        return;
    }
    var teammates = [];

    for(let i = 0; i < mentions.length; i++) {
        let fu = mentions[i].user.username + "#" + mentions[i].user.discriminator;
        if(fu == message.member.user.tag) {
            message.reply("don't mention yourself, your name is being added automatically. Please try again.");
            return;
            errored = true;
        } 
        teammates.push(fu);
    }
    
    let teammates_stringified = "[ERROR]";
    
    if(teammates.length > 1) teammates_stringified = teammates.join(", ");
    else teammates_stringified = teammates[0];

    try {
        if(!errored) {
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
    }
    catch(err) {
        console.log("Couldn't POST to server: " + err);
        message.reply("the server couldn't be reached. Please try again in a few hours!");
        errored = true;
    }

    if(!errored) {
        console.log(message.member.user.tag + " created team with \"" + teammates_stringified + "\"");
        
        message.reply("you successfully created a team with **" + teammates_stringified + "**");
        message.react("✅");
        
        let embed = new Discord.RichEmbed()
        .setTitle('New team submitted:')
        .setColor(client.config.embed_color_default)
        .setDescription(`**${message.member.user.tag}, ${teammates_stringified}**\n just formed a team!`);

        client.channels.get(logChannel).send(embed);
    }*/
}
