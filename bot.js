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
     const embed = new Discord.RichEmbed()
     .setTitle('A slick little embed')
     .setColor(0xFF0000)
     .setDescription('Hello, this is a slick embed!');
      
     msg.channel.send(embed);
  }
});

client.login(process.env.TOKEN);
