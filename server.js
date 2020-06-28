const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config");
const message = require("./src/message");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "welcome"
  );
  if (!channel) {
    return;
  }
  channel.send(`Welcome ${member} to this world`);
});

client.on("message", (msg) => message.helloMsg(msg));

client.login(config.DISCORD_SECRET_TOKEN);
