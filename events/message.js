const Discord = require("discord.js");
module.exports = (client, message) => {
    try {
        if(message.content.toString().replace(/\s*/gm, "").toLowerCase().includes("xd") && message.author.id != '427491040468140043') message.react("493187615659393025");//return message.delete();
        if(message.content.toString().toLowerCase().includes("squint") || message.content.toString().toLowerCase().includes("cough") && message.author.id != '427491040468140043') message.react("492785060869832706");
        if(message.content.toString().toLowerCase().includes("indoo") || message.content.toString().toLowerCase().includes("indede") && message.author.id != '427491040468140043') message.react("522675592747810826");
        if(message.content.toString().toLowerCase().includes("lurk") && message.author.id != '427491040468140043') message.react("500645964835717120");
        if(message.content.toString().toLowerCase().includes("bruh moment")) message.react(new Discord.RichEmbed().setTitle("Bruh").setDescription("https://youtu.be/V263ad2e2uk"));
    }
    catch(err) {
        console.log(`Error: ${err}`);   
    }
    
    if (message.author.bot) return;
    if(message.content.toString().toLowerCase().match(/(\sarch[^\w])|(\sarch$)|(^arch$)|(^arch\s)/gm)) {
        let arches = ["I use arch btw", "btw I use arch", "btw did I tell you I use arch?", "also just so you know, I use arch"];
        message.reply(arches[Math.floor(Math.random() * arches.length)]);
    }
  
    if (message.content.indexOf(client.config.prefix) !== 0) return;
    
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    /*
    let owolist = ["owo", "uwu", "ywy", "0w0", "3w3", "øwø", "ôwô", "õwõ", "OuO", "OwO", "UwU"]
    owolist.forEach(x => {
           if(message.content.includes(x)) {
               console.log('owo detected')
               return message.delete()
            }
    })
    */
    
    const cmd = client.commands.get(command);
  
    if (!cmd) return;

    cmd.run(client, message, args);
  };
