const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("canarado sleep O_o", {type: "WATCHING"});
});

client.on('message', async msg => {
  if (msg.content === '!xp ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.TOKEN);
