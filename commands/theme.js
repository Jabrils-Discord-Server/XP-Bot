const Discord = require('discord.js')
const http = require('http');

exports.run = (client, message, args) => {
    var errored = false;
    let logChannel = '489605729624522762';
    let ideas = args.join(' ');
    
    let mentions = message.mentions.members.array();
    if(mentions == undefined || mentions == null || mentions == "" || mentions == []) {}
    else {
        errored = true;
        message.reply("please don't tag someone in the theme submission.");
    }
    
    if(!errored && (ideas == undefined || ideas == null || ideas == "" || ideas == " ")) {
        errored = true;
        message.reply("please enter a valid theme suggestion.");
    }
    
    if(!errored && (ideas.length < 10)) {
        errored = true;
        message.reply("please enter a theme suggestion that has ten or more characters and preferrably multiple words.");
    }
    
    try {
        if(!errored) {
            var post_data = "xmas_jam_theme_submission:%BEGIN%" + message.member.user.tag + "%SPLIT%" + ideas + "%END%";
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
        message.reply("your submission couldn't be processed by the server. Please try again in a few hours!\n\n" + err);
        errored = true;
}
    if(!errored) {
        console.log(message.member.user.tag + " submitted theme \"" + ideas + "\"");
        
        let embed = new Discord.RichEmbed()
        .setTitle(`Theme idea from **${message.author.username}**`)
        .setColor(client.config.embed_color_default)
        .setDescription(`'${ideas}'`);

        client.channels.get(logChannel).send(embed);
        
        message.reply("your theme idea (**" + ideas + "**) was successfully submitted!");
        message.react("✅");
    }
}
