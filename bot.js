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
  if(msg.author.bot) return false;
  if(msg.channel.type === "dm") return false;
  
  let prefix = config.prefix;
  let messageArray = msg.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,msg,args);

  if(msg.author.id === '428678912558628865') msg.react(":mock:");
    
  react();
  
  }
  catch(error) {
      try {
          msg.reply("Encountered error: " + error);
      }
      catch(error2) {
          console.log("Error in error catcher ffs: " + error2);
          return false;
      }
      return false;
  }
  return true;
});



client.login(process.env.TOKEN);






function react() {
    if(msg.content.toLowerCase().includes("indede")) msg.react("🇮").then(()=>msg.react("🇳").then(()=>msg.react("🇩").then(()=>msg.react("🇪").then(()=>msg.react("509131917304659968").then(()=>msg.react("509131411882639381"))))));
    if(msg.content.toLowerCase().includes("cough")) msg.react("492785060869832706");
}
