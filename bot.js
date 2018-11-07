const config = require("./config.json")
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();

module.exports = {
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

  //client.user.setPresence({ game: { name: 'over you ♥', type: 'WATCHING' }, status: 'online' });
  client.user.setActivity("your mom", { type: "WATCHING" });

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
    
      react(msg);
      sv443s_way_better_command_handler(msg);
  
  }
  catch(error) {
      try {
          msg.reply("Encountered error: " + error);
      }
      catch(error2) {
          console.log("Error in error catcher :squint:  -  " + error2);
          return false;
      }
      return false;
  }
  return true;
});



client.login(process.env.TOKEN);






function react(msg) {
    try {
        let msgc = msg.content.toLowerCase();
        if(msgc.includes("indede")) msg.react("🇮").then(()=>msg.react("🇳").then(()=>msg.react("🇩").then(()=>msg.react("🇪").then(()=>msg.react("509131917304659968").then(()=>msg.react("509131411882639381"))))));
        if(msgc.includes("cough")) msg.react("492785060869832706");
        if(msgc.includes("owo") || msgc.includes("uwu")) msg.delete();
    }
    catch(err) {}
}

function sv443s_way_better_command_handler(msg) {
try {
    let msgc = msg.content;
    if(msgc.split(" ")[0] == "?xp") {
        if(msgc.split(" ")[1] == "status"){
            if(msgc.split(" ")[2].toUpperCase() != "PLAYING" && msgc.split(" ")[2].toUpperCase() != "WATCHING") return false;
            let msgarr = msgc.split(" ");
            msgarr.shift();msgarr.shift();msgarr.shift();
            msgarr = msgarr.join(" ");
            client.user.setActivity(msgarr, { type: msgc.split(" ")[2].toUpperCase() });
            msg.reply("I set my status to '" + msgc.split(" ")[2].toUpperCase() + "' with content '" + msgarr + "'");
        }
    }
}
catch(err) {
    msg.reply("Error in Sv443's way better command handler: " + err);
}
}
