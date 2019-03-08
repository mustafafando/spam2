const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550033741670645772")
setInterval(function() {
channel.send(`ilove spam`);
}, 30)
})

client.on('message', message => {
    if(message.content === 'ريب'){
        message.channel.send('#rep <@416567959067033601>')
    }
});

client.on('message', message => {
    if(message.content === 'كريدت'){
        message.channel.send('#credit <@416567959067033601> 10000')
    }
});

client.login(process.env.BOT_TOKEN);
