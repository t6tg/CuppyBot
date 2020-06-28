const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config");

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

client.login(config.DISCORD_SECRET_TOKEN);
