const Discord = require('discord.js')
const http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.run = (client, message, args) => {
    var invalid = false;
    let logChannel = '489605729624522762';
    let input = args.join(' ');
    
    message.reply("Got input \"" + input + "\"");
    console.log('input');
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://sv443.ddns.net/mphost", true);
    xhr.addEventListener('load', function(e) {
        if (xhr.status >= 200 && xhr.status < 300) {
            message.reply("success - " + xhr.responseText);
			message.delete();
        } else {
            message.reply("error - " + xhr.statusText);
			message.delete();
        }
    });
	xhr.send("nbr:" + input);
}
