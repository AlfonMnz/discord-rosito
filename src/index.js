require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const {MessageEmbed} = require('discord.js');

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    if (message.content.toLowerCase().includes("la isla de las tentaciones")){
        message.react('#️⃣')
        message.react('🇷')
        message.react('🇴')
        message.react('🇸')
        message.react('🇮')
        message.react('🇹')
        message.react('🅾️')
    }
});



client.login(process.env.TOKEN);