const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let logChannel = '489605729624522762'
    let ideas = args.join(' ')
    
    try {
        var post_data = ideas;
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
}

    let embed = new Discord.RichEmbed()
    .setTitle(`Theme idea from **${message.author.username}**`)
    .setColor(client.config.embed_color_default)
    .setDescription(`'${ideas}'`)

    client.channels.get(logChannel).send(embed)
}
