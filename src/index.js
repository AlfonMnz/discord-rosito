require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
import runCommands from "./commands";
import runIntervals from "./behaviour/intervals";

client.on('ready', () => {
	runCommands(client);
	runIntervals(client);
	console.log('BOT STATUS [ ON ]');
});

client.on('message', async (msg) => {

});

client.login(process.env.TOKEN);