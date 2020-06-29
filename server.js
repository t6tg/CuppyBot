const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config");
const message = require("./src/message");
const manage = require("./src/manage");
const greeting = require("./src/greeting");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", (member) => greeting.greet);

client.on("message", (msg) => {
  message.helloMsg(msg);
  manage.kickUser(msg);
  manage.banUser(msg);
  manage.addUserRole(msg);
  manage.addCoAdminRole(msg);
});

client.login(config.DISCORD_SECRET_TOKEN);
