const Discord = require("discord.js");
module.exports = (client, message) => {
    let messageContent = message.content.toString().toLowerCase();
    try {
        // if(message.content.toString().replace(/\s*/gm, "").toLowerCase().includes("xd") && message.author.id != '427491040468140043') message.react("493187615659393025");//return message.delete();
        // if(message.content.toString().toLowerCase().includes("squint") || message.content.toString().toLowerCase().includes("cough") && message.author.id != '427491040468140043') message.react("492785060869832706");
        if(messageContent.match(/indood/gm) || messageContent.includes("indede") && message.author.id != '427491040468140043')
            message.react("522675592747810826");
        if((messageContent == "tea" || messageContent.match(/\s?tea\s+/) || messageContent.match(/\s+tea\s?/))
           || (messageContent == "biscuit" || messageContent == "biscuits" || messageContent.match(/\s?biscuits?\s+/) || messageContent.match(/\s+biscuits?\s?/))
        {
            recursiveReact(message, [":regional_indicator_b:", ":regional_indicator_r:", ":regional_indicator_i:", ":regional_indicator_t:"]);
        }
        // if(message.content.toString().toLowerCase().includes("lurk") && message.author.id != '427491040468140043') message.react("500645964835717120");
        // if(message.content.toString().toLowerCase().includes("bruh moment") && message.author.id != "427491040468140043") message.reply("https://youtu.be/V263ad2e2uk");
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
    
    let owolist = ["owo", "uwu", "ywy", "0w0", "3w3", "øwø", "ôwô", "õwõ", "OuO", "OwO", "UwU"]
    owolist.forEach(x => {
           if(message.content.includes(x)) {
               console.log('owo detected')
               return message.delete()
            }
    });
    
    
    const cmd = client.commands.get(command);
  
    if (!cmd) return;

    cmd.run(client, message, args);
  };


function recursiveReact(msg, reacts, idx)
{
    if(idx == undefined)
        idx = 0;

    if(idx == reactions.length)
        return;

    msg.react(reactions[idx]).then(() => {
        react(msg, reacts, (idx + 1));
    });
}
