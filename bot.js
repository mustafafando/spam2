const discord = require("discord.js");
const bot = new discord.Client();
const a = new discord.Client();
const s = new discord.Client();
const d = new discord.Client();
const f = new discord.Client();
const g = new discord.Client();
const h = new discord.Client();
const j = new discord.Client();
const k = new discord.Client();


bot.on('message', message => {
    var prefix = "=";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == '566992170293133332') return;

    if (message.content.startsWith(prefix + 'image')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });

a.on('message', message => {
    var prefix = "=";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == '566993438298603532') return;

    if (message.content.startsWith(prefix + 'image')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });

s.on('message', message => {
     var prefix = "=";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == '566995116854870026') return;

    if (message.content.startsWith(prefix + 'image')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });

d.on('message', message => {
    var prefix = "=";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == '566992848658890754') return;

    if (message.content.startsWith(prefix + 'image')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });

f.on('message', message => {
    var prefix = "=";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == '566986187059757086') return;

    if (message.content.startsWith(prefix + 'image')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });

 var prefix = "=";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == '566995813998264341') return;

    if (message.content.startsWith(prefix + 'image')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });

h.on('message', message => {
    var prefix = "=";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == '566996464480419848') return;

    if (message.content.startsWith(prefix + 'image')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });

j.on('message', message => {
     var prefix = "=";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == '566991556876435456') return;

    if (message.content.startsWith(prefix + 'image')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });
k.on('message', message => {
   var prefix = "=";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == '566982543161819153') return;

    if (message.content.startsWith(prefix + 'image')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });


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

a.on('message', message => {
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

a.on('message', message => {
    if(message.content.startsWith('daily')) {
        message.channel.send('#daily');
  }
});

a.on('message', message => {
    if(message.content.startsWith('credits')) {
        message.channel.send('#credits');
  }
});

s.on('message', message => {
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

s.on('message', message => {
    if(message.content.startsWith('daily')) {
        message.channel.send('#daily');
  }
});

s.on('message', message => {
    if(message.content.startsWith('credits')) {
        message.channel.send('#credits');
  }
});

d.on('message', message => {
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

d.on('message', message => {
    if(message.content.startsWith('daily')) {
        message.channel.send('#daily');
  }
});

d.on('message', message => {
    if(message.content.startsWith('credits')) {
        message.channel.send('#credits');
  }
});

f.on('message', message => {
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

f.on('message', message => {
    if(message.content.startsWith('daily')) {
        message.channel.send('#daily');
  }
});

f.on('message', message => {
    if(message.content.startsWith('credits')) {
        message.channel.send('#credits');
  }
});

g.on('message', message => {
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

g.on('message', message => {
    if(message.content.startsWith('daily')) {
        message.channel.send('#daily');
  }
});

g.on('message', message => {
    if(message.content.startsWith('credits')) {
        message.channel.send('#credits');
  }
});

h.on('message', message => {
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

h.on('message', message => {
    if(message.content.startsWith('daily')) {
        message.channel.send('#daily');
  }
});

h.on('message', message => {
    if(message.content.startsWith('credits')) {
        message.channel.send('#credits');
  }
});

j.on('message', message => {
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

j.on('message', message => {
    if(message.content.startsWith('daily')) {
        message.channel.send('#daily');
  }
});

j.on('message', message => {
    if(message.content.startsWith('credits')) {
        message.channel.send('#credits');
  }
});

k.on('message', message => {
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

k.on('message', message => {
    if(message.content.startsWith('daily')) {
        message.channel.send('#daily');
  }
});

k.on('message', message => {
    if(message.content.startsWith('credits')) {
        message.channel.send('#credits');
  }
});


bot.login(process.env.TOKEN);
a.login(process.env.TOKEN1);
s.login(process.env.TOKEN2);
d.login(process.env.TOKEN3);
f.login(process.env.TOKEN4);
g.login(process.env.TOKEN5);
h.login(process.env.TOKEN6);
j.login(process.env.TOKEN7);
k.login(process.env.TOKEN8);
