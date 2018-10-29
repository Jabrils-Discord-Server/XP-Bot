const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!xp';
var embed_color = 0xadc7ff;

//rework for command and arguments, review it i guess
//const args = message.content.slice(prefix.length).trim().split(/ +/g);
//const command = args.shift().toLowerCase();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: 'the world burn', type: 'WATCHING' }, status: 'idle' })
  client.user.setAvatar('https://d1u5p3l4wpay3k.cloudfront.net/minecraft_gamepedia/3/38/Experience_Orb.gif');
});

client.on('message', async msg => {
  if(msg.content.split(/\s+/)[0] != prefix) return;
  let command = msg.content.split(/\s+/)[1];
  let command_attribute = msg.content.split(/\s+/)[2];
  if (command == 'ping') {
    msg.reply('Pong!');
  }
  if (command == 'embed_color') {
    embed_color = "0x" + command_attribute;
    msg.reply('Changed embed color to ' + command_attribute.replace('#', ''));
  }
  if (command == 'help' || command == '?' || command == '-h') {
     let embed = new Discord.RichEmbed()
     .setTitle('XP-Bot - Commands:')
     .setColor(embed_color)
     .setDescription('`' + prefix + ' help`  displays this message\n'
                   + '`' + prefix + ' status`  shows your verification status');
      
     msg.channel.send(embed);
  }
});

client.login(process.env.TOKEN);
