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
            msg.reply("I was unable to kick the member 😢");
            console.log(err);
          });
      } else {
        message.reply("That user isn't in this guild! 😢");
      }
    } else {
      message.reply("You dint't mention the user to kick 😢");
    }
  }
};

module.exports = { kickUser };
