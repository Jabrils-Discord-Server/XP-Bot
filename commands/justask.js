const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    // Use simply by typing 
    //      xp?justask @User

    responses = [
      {wrong: 'Does anybody here have a cat?', right: 'How do I stop my cat from coming on to me?'},
      {wrong: 'Does anybody know a nun?', right: 'How do nuns not melt on hot days?'},
      {wrong: 'Is anybody a doctor?', right: 'What do I do if my erection lasts more than 4 hours?'},
      {wrong: 'Is anybody here a hunter?', right: 'How can i kill bears the most efficient way?'},
    ]

    chosenResponse = responses[Math.floor(Math.random()*responses.length)];    
    
    let embed = new Discord.RichEmbed()
    .setTitle("Don't ask to ask, just ask")
    .setDescription(`If someone can help, they will; Simply ask your question from the beginning to save everyone time\n\nInstead of asking:\n\`\`\`${chosenResponse.wrong}\`\`\`ask:\n\`\`\`${chosenResponse.right}\`\`\`\n\nYou get help sooner, and we waste less time - win | win`)
    .setColor(client.config.embed_color_default)
    .setFooter(`Inspired by Tiny Rick Bot`);

    message.channel.send(embed);
    
    message.delete();

    // If we want the bot to ping the victim as well
    //if(args.join(" ").includes(`@`))
    //  message.channel.send(`<@!${message.mentions.users.first().id}>`);

}
