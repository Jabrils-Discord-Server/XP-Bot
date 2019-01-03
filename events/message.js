module.exports = (client, message) => {
    if(message.content.toString().toLowerCase().includes("xd")) return message.delete();
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
