module.exports = (client, message) => {
    if(message.content.toString().replace(/\s*/gm, "").toLowerCase().includes("xd")) message.react("493187615659393025");//return message.delete();
    if(message.content.toString().toLowerCase().includes("squint") || message.content.toString().toLowerCase().includes("cough")) message.react("492785060869832706");
    if(message.content.toString().toLowerCase().includes("indoo") || message.content.toString().toLowerCase().includes("indede")) message.react("522675592747810826");
    if(message.content.toString().toLowerCase().includes("lurk")) message.react("500645964835717120");
    if(message.author.id == "181962054683328512" || message.member.nickname.toString().toLowerCase().includes("pencil")) message.react("✏");
    if (message.author.bot) return;
  
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
