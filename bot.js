const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!xp';
let embed_color = 0xadc7ff;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("canarado sleep O_o", {type: "WATCHING"});
  client.user.setAvatar('https://media.forgecdn.net/avatars/82/562/636181987634577193.png');
});

client.on('message', async msg => {
  if (!msg.content.includes(prefix)) return;
  if (msg.content.includes('ping')) {
    msg.reply('Pong!');
  }
  if (msg.content.includes('help') || msg.content.includes('-h') || msg.content.includes('?')) {
     let embed = new Discord.RichEmbed()
     .setTitle('XP-Bot - Commands:')
     .setColor(embed_color)
     .setDescription('`' + prefix + ' help`  displays this message\n'
                   + '`' + prefix + ' status`  shows your verification status');
      
     msg.channel.send(embed);
  }
});

client.login(process.env.TOKEN);
