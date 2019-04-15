const discord = require("discord.js");
const TOKEN = "NTY2OTgyNTQzMTYxODE5MTUz.XLM6EA.mVfZWpZASw3qKKsATXKOvPisW7k";
const bot = new discord.Client();

bot.on('message', message => {
    var prefix = "=";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.author.id !== "416567959067033601") return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
  
  let args = message.content.split(" ").slice(1);
  let x = args.join(" ")
    if(message.content.startsWith(prefix + 'sy')) {
        message.channel.send(''+x);
            message.delete(999)
    }
    
   
  });

bot.on('message', message => {
    if(message.content.startsWith('daily')) {
        message.channel.send('#daily');
  }
});

bot.on('message', message => {
    if(message.content.startsWith('credits')) {
        message.channel.send('#credits');
  }
});


bot.login(TOKEN);
