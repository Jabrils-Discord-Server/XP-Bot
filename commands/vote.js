const Discord = require('discord.js')
const http = require('http');

exports.run = (client, message, args) => {
    var invalid = false;
    let logChannel = '489605729624522762';
    let input = args.join(' ');
	var themes = [
		"Test",
		"I am a theme",
		"Succ"
	];
	var votedfor = 0;
	
	try {
		votedfor = parseInt(input);
		console.log("vf " + votedfor);
		if(votedfor > themes.length || votedfor == NaN || votedfor == undefined || votedfor == null || votedfor == "") {
			invalid = true;
			message.reply("please only use a number from 1 to" + themes.length);
		}
	}
	catch(err) {
		invalid = true;
		message.reply("please only use a number from 1 to" + themes.length);
	}
  
    if(!invalid) {
		message.reply("you have successfully voted for theme " + votedfor);
		
		let embed = new Discord.RichEmbed()
        .setTitle(`Vote from **${message.author.username}**`)
        .setColor(client.config.embed_color_default)
        .setDescription(`'${votedfor}'`);

        client.channels.get(logChannel).send(embed);
	}
}
