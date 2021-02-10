require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
import runCommands from "./commands";
import runIntervals from "./behaviour/intervals";

client.on('ready', () => {
	runCommands(client);
	runIntervals(client);
	console.log('BOT STATUS [ON]');
});

client.on('message', async (msg) => {

});

client.login(process.env.TOKEN);

(async () => {
	//console.log(channelAlert);
	/*setInterval(() => {
		client.channels.cache.get('808397259476566096').send('@everyone La isla comienza')
		//client.send('808397259476566096').send('Test')
	}, 5000)*/
})();