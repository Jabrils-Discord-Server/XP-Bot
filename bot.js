const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!xp';
var embed_color = 0xadc7ff;


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
     const embed = new Discord.RichEmbed()
     .setTitle('XP-Bot - Help:')
     .setColor(embed_color)
     .setDescription('`' + prefix + ' help` displays this message');
      
     msg.reply(embed);
  }
});

client.login(process.env.TOKEN);
