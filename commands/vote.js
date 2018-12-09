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
	
	if(input == "" || input == null || input == undefined) {
		invalid = true;
		
		var content = "EMPTY";
		for(let i = 0; i < themes.length; i++) content += (i + ": " + themes[i] + "\n");
		
		let embed = new Discord.RichEmbed()
        	.setTitle(`Themes - vote with xp? vote \*number\*`)
        	.setColor(client.config.embed_color_default)
        	.setDescription(content);

        	message.channel.send(embed);
		
		message.delete();
	}
	
	try {
		votedfor = parseInt(input);
		if(votedfor > themes.length || isNaN(votedfor)) {
			console.log("isnan");
			invalid = true;
			message.reply("please only use a number from 1 to " + themes.length);
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
		
		message.delete();
	}
}
