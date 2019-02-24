const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let resp1 = ["I get Syntax Error please help",
                 "I need help with code it doesn't work"];
    
    let resp2 = ["I got the following error in C#, can someone please help?\nSyntax Error, ':' expected\n\nThis is my code:\n(code here)",
                 "I have the following Python code but when I run it it doesn't work nor does it give an error:\n(code here)"];
    
    let randIndex = Math.floor(Math.random()*resp1.length);
    
    let chosenResponse = "We want to help you but to do that we need more information.\n For example, instead of asking: \n```\n" + resp1[randIndex] + "\n```\nInstead ask: \n```\n" + resp2[randIndex] + "\n```";    
    
    let embed = new Discord.RichEmbed()
    .setTitle("Please provide more information!")
    .setDescription(chosenResponse)
    .addBlankField()
    .addField("Please make sure your question contains the following:", "- A code snippet\n\n- The programming language of that snippet\n\n- A good and in-depth explanation what you want to achieve with that code and what went wrong")
    .addBlankField()
    .setFooter("Thank you - Your mod team")
    .setColor(client.config.embed_color_default);

    message.channel.send(embed);
    
    message.delete();

    // If we want the bot to ping the victim as well
    //if(args.join(" ").includes(`@`))
    //  message.channel.send(`<@!${message.mentions.users.first().id}>`);

}
