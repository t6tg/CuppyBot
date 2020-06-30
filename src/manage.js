const permission = require("./permission");

const kickUser = (msg) => {
  if (!msg.guild) return;
  if (msg.content.startsWith("!kick")) {
    if (permission.adminRole(msg)) {
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
    if (permission.adminRole(msg)) {
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
    if (permission.adminRole(msg)) {
      const user = msg.mentions.users.first();
      if (user) {
        const member = msg.guild.member(user);
        if (member) {
          const roles = member.guild.roles.cache.find(
            (r) => r.name === permission.users
          );
          member.roles.add(roles);
          msg.reply("🥳 Successful to add user role");
        }
      }
    } else {
      msg.reply(`You don't have permission to add ${users}`);
    }
  }
};

const addCoAdminRole = (msg) => {
  if (!msg.guild) return;
  if (msg.content.startsWith("!addCoAdmin")) {
    if (permission.adminRole(msg) || permission.coAdminRole(msg)) {
      const user = msg.mentions.users.first();
      if (user) {
        const member = msg.guild.member(user);
        if (member) {
          const roles = member.guild.roles.cache.find(
            (r) => r.name === permission.coAdmin
          );
          member.roles.add(roles);
          msg.reply("🥳 Successful to add co-admin role");
        }
      } else {
        msg.reply(`You don't have permission to add ${coAdmin}`);
      }
    }
  }
};

const addAdminRole = (msg) => {
  if (!msg.guild) return;
  if (msg.content.startsWith("!addAdmin")) {
    if (permission.adminRole(msg)) {
      const user = msg.mentions.users.first();
      if (user) {
        const member = msg.guild.member(user);
        if (member) {
          const roles = member.guild.roles.cache.find(
            (role) => role.name === permission.admin
          );
          member.roles.add(roles);
          msg.reply("🥳 Successful to add Admin role");
        }
      } else {
        msg.reply(`You don't have permission to add ${admin}`);
      }
    }
  }
};

module.exports = {
  kickUser,
  banUser,
  addUserRole,
  addCoAdminRole,
  addAdminRole,
};
