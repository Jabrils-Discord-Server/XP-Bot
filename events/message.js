module.exports = (client, message) => {
    if (message.author.bot) return;
  
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    let owolist = ["owo", "uwu", "ywy", "0w0", "3w3", "øwø", "ôwô", "õwõ", "OuO", "OwO", "UwU"]
    owolist.forEach(x => {
        if(message.content.includes(x)) {
            message.delete()
        }
    })
 
    
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    const cmd = client.commands.get(command);
  
    if (!cmd) return;

    cmd.run(client, message, args);
  };
