const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config");
const message = require("./src/message");
const manage = require("./src/manage");
const greeting = require("./src/greeting");
const music = require("./src/music");
const express = require("express")
const app = express()

app.get("/", req,res,() => {
  res.send("hi")
})


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", (member) => greeting.greet(member));

client.on("message", (msg) => {
  message.helloMsg(msg);
  manage.kickUser(msg);
  manage.banUser(msg);
  manage.addUserRole(msg);
  manage.addCoAdminRole(msg);
  manage.addAdminRole(msg);
  music.playMusicYT(msg);
  music.stopMusicYT(msg);
  music.confirmStop(msg);
});

client.login(config.DISCORD_SECRET_TOKEN);
