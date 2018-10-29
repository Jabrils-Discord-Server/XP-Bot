const config = require("./config.json")
const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();

module.exports ={
  embed_color: config.embed_color_default
}

client.on("ready", async () => {

  client.user.setPresence({ game: { name: 'you', type: 'WATCHING' }, status: 'online' })

});

client.on("message", async msg => {
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  msg.channel.send("huh");

});


client.login(process.env.TOKEN);
