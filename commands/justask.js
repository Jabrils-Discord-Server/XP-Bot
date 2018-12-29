const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    // Use simply by typing 
    //      xp?justask @User

    responses = [`If someone can help, they will; Simply ask your question from the beginning to save everyone time`+
    `\n\nInstead of asking:\n\`\`\`Does anybody here have a cat?\`\`\`ask:\n\`\`\`How do I stop my cat from coming on to me?\`\`\`\n\nYou get help sooner, and we waste less time - win | win`,
    `If someone can help, they will; Simply ask your question from the beginning to save everyone time`+
    `\n\nInstead of asking:\n\`\`\`Does anybody know a nun?\`\`\`ask:\n\`\`\`How do nuns not melt on hot days?\`\`\`\n\nYou get help sooner, and we waste less time - win | win`,
    `If someone can help, they will; Simply ask your question from the beginning to save everyone time`+
    `\n\nInstead of asking:\n\`\`\`Is anybody a doctor?\`\`\`ask:\n\`\`\`What do I do if my erection lasts more than 4 hours?\`\`\`\n\nYou get help sooner, and we waste less time - win | win`
    ];
    chosenResponse = responses[Math.floor(Math.random()*responses.length)];    
    
    let embed = new Discord.RichEmbed()
    .setTitle("Don't ask to ask, just ask")
    .setDescription(chosenResponse)
    .setColor(client.config.embed_color_default)
    .setFooter(`Inspired by Tiny Rick Bot`);

    message.channel.send(embed);

    // If we want the bot to ping the victim as well
    //if(args.join(" ").includes(`@`))
    //  message.channel.send(`<@!${message.mentions.users.first().id}>`);

}
