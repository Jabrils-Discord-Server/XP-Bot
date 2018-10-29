const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!xp';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("canarado sleep O_o", {type: "WATCHING"});
});

client.on('message', async msg => {
  if (!msg.content.includes(prefix)) return;
  if (msg.content.includes('ping')) {
    msg.reply('Pong!');
  }
  if (msg.content.includes('help') || msg.content.includes('-h') || msg.content.includes('?')) {
    msg.send({embed: {
      color: 3447003,
      description: "XP-Bot Help:\n\n`" + prefix + " help` - displays this message"
    }});
  }
});

client.login(process.env.TOKEN);
