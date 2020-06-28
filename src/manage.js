const admin = "administrator";
const users = "user";
const adminRole = (msg) => {
  return msg.member.roles.cache.some((role) => role.name === admin);
};

const kickUser = (msg) => {
  if (!msg.guild) return;
  if (msg.content.startsWith("!kick")) {
    if (adminRole(msg)) {
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
    } else {
      msg.reply("You don't have permission to kick users");
    }
  }
};

const banUser = (msg) => {
  if (!msg.guild) return;
  if (msg.content.startsWith("!ban")) {
    if (adminRole(msg)) {
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
    msg.reply("You don't have permission to ban users");
  }
};

const addUserRole = (msg) => {
  if (!msg.guild) return;
  if (msg.content.startsWith("!addUser")) {
    if (adminRole(msg)) {
      const user = msg.mentions.users.first();
      if (user) {
        const member = msg.guild.member(user);
        if (member) {
          const roles = member.guild.roles.cache.find((r) => r.name === users);
          member.roles.add(roles);
          msg.reply("🥳 Successful to add user role");
        }
      }
    } else {
      msg.reply("You don't have permission to ban users");
    }
  }
};

module.exports = { kickUser, banUser, addUserRole };
