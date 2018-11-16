const config = require("./config.js")
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();

const admin_roles = ["user++", "Rot13", "Arbiter of Fate", "Our Lord, Jabril"];

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
  client.user.setAvatar('https://sv443.net/cdn/other/xpbotpfp.png');
  
  setTimeout(()=>{client.user.setStatus("dnd");}, 1000);
  client.user.setActivity("I just redeployed daddy!", { type: "PLAYING" });
  setTimeout(()=>{
      client.user.setActivity("for naughty messages", { type: "WATCHING" });
      setTimeout(()=>{client.user.setStatus("online");}, 5000);
  }, 3000);
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
    
      sv443s_way_better_command_handler(msg);
      react(msg);
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
        if(msgc == "cough") msg.react("492785060869832706");
        if(msgc == "wtf") msg.react("493175956236664834");
        if(includes_owo(msgc)) msg.delete();
    }
    catch(err) {}
}

function sv443s_way_better_command_handler(msg) {
try {
    let msgc = msg.content;
    if(msgc.split(" ")[0] == "?xp") {
        if(msgc.split(" ")[1] == "status" && isAdmin(msg)) {
            try {
            if(msgc.split(" ")[2] === undefined) return false;
            if(msgc.split(" ")[2].toUpperCase() != "PLAYING" && msgc.split(" ")[2].toUpperCase() != "WATCHING") return false;
            let msgarr = msgc.split(" ");
            msgarr.shift();msgarr.shift();msgarr.shift();
            msgarr = msgarr.join(" ");
            client.user.setActivity(msgarr,{type: msgc.split(" ")[2].toUpperCase()});
            msg.reply("I set my status to '" + msgc.split(" ")[2].toUpperCase().toLowerCase() + " " + msgarr + "'");
            msg.delete();
            return true;
            }
            catch(err) {}
        }
        if(msgc.split(" ")[1] == "gamejam") {
            try {
                let embed = new Discord.RichEmbed()
                    .setTitle('Our next Game Jam:')
                    .setColor(config.embed_color_default)
                    .setDescription('Our next Game Jam will be the XMAS Jam\n\nDuration: 7 days\n\n\nBegins on: X\n    Ends on: X\n    Voting Ends on: X');
                    msg.channel.send(embed);
                    msg.delete();
            }
            catch(err) {msg.reply("Error in gamejam command: " + err);}
        }
        if(msgc.split(" ")[1] == "naughty" && isAdmin(msg)) {
            try {
                let naughty_role = msg.guild.roles.find(role => role.name === "The Naughty Corner (Misbehaving)");
                msg.reply("Put user \"" + msgc.split(" ")[2] + "\" in the Naughty Corner!\n\ndbg: " + naughty_role);
                msg.delete();
            }
            catch(err) {msg.reply("Error in naughty command: " + err);}
        }
        else if(msgc.split(" ") == "" || msgc.split(" ") === undefined || msgc.split(" ") === null) return false;
    }
}
catch(err) {
    msg.reply("Error in Sv443's way better command handler: " + err);
}
}

function includes_owo(msgc) {
    try {
        let owolist = ["owo", "uwu", "ywy", "0w0", "3w3"];
        for(let i = 0; i < owolist.length; i++) if(msgc.includes(owolist[i])) return true;
        else return false;
    }
    catch(err) {}
}

function isAdmin(msg) {
    try {
        let is_admin = false;
        for(let i = 0; i < admin_roles.length; i++) {
            if(msg.member.roles.has(admin_roles[i].id)) is_admin = true;
        }
        return is_admin;
    }
    catch(err) {
        msg.reply("Sv443 made a fook up: " + err);
    }
}
