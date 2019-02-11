const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let resp1 = ["I get Syntax Error please help"];
    let resp2 = ["I got the following error in C#, can someone please help?\nSyntax Error, ':' expected\n\nThis is my code:\n(code here)"];
    
    let randIndex = Math.floor(Math.random()*resp1.length);
    
    let chosenResponse = "We want to help you but to do that we need more information.\n For example, instead of asking: \n```\n" + resp1[randIndex] + "\n```\nPlease ask \n```\n" + resp2[randIndex] + "\n```";    
    
    let embed = new Discord.RichEmbed()
    .setTitle("Please provide more information!")
    .setDescription(chosenResponse)
    .setColor(client.config.embed_color_default);

    message.channel.send(embed);
    
    message.delete();

    // If we want the bot to ping the victim as well
    //if(args.join(" ").includes(`@`))
    //  message.channel.send(`<@!${message.mentions.users.first().id}>`);

}
