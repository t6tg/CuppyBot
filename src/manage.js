const kickUser = (msg) => {
  if (!msg.guild) return;
  if (msg.content.startsWith("!kick")) {
    const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
            msg.reply(`🎉 Successful kicked ${user.tag}`);
          })
          .catch((err) => {
            msg.reply(`I was unable to kick ${user.tag}`);
            console.log(err);
          });
      } else {
        msg.reply(`${user.tag} isn't in this guild!! 😢`);
      }
    } else {
      msg.reply("You dint't mention the user to kick 😢");
    }
  }
};

const banUser = (msg) => {
  if (!msg.guild) return;
  if (msg.content.startsWith("!ban")) {
    const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
            msg.reply(`🎉 Successful baned ${user.tag}`);
          })
          .catch((err) => {
            msg.reply(`I was unable to ban ${user.tag}`);
          });
      } else {
        msg.reply(`${user.tag} isn't in this guild!! 😢`);
      }
    } else {
      msg.reply(`You din't mention the user to ban`);
    }
  }
};

module.exports = { kickUser, banUser };
