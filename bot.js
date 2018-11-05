const config = require("./config.json")
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();

module.exports ={
  embed_color: config.embed_color_default
}

fs.readdir("./commands/", (err, files) => {

  if(err) return;
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
  });
});

client.on("ready", async () => {

  client.user.setPresence({ game: { name: 'your mother shower', type: 'WATCHING' }, status: 'idle' })

});

client.on("message", async msg => {
  try {
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  
  let prefix = config.prefix;
  let messageArray = msg.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,msg,args);

  
  if(msg.includes("indede")) msg.react("👍");
  }
  catch(error) {
      console.log("Encountered error: " + error);
  }
});



client.login(process.env.TOKEN);
