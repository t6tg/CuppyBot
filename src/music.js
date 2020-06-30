const ytdl = require("ytdl-core");
const permission = require("./permission");

const playMusicYT = (msg) => {
  if (msg.content.startsWith("!play")) {
    if (permission.adminRole(msg) || permission.coAdminRole(msg)) {
      if (msg.channel.type !== "text") return;
      const song = msg.content.split(" ")[1];
      const voiceChannel = msg.member.voice.channel;
      if (!voiceChannel)
        return msg.reply("😟 Please join a voice channel first!!!");
      try {
        voiceChannel.join().then((con) => {
          const steam = ytdl(song, {
            filter: "audioonly",
          });
          const dispatcher = con.play(steam);
          dispatcher.on("end", () => voiceChannel.leave());
        });
      } catch (error) {
        msg.reply("🔥 Error , pls try again later.");
        console.log(error);
      }
    } else {
      msg.reply(
        `You don't have permission to play , this command accept with  ${permission.admin}`
      );
    }
  }
};

const stopMusicYT = (msg) => {
  if (msg.content === "!stop") {
    if (permission.adminRole(msg)) {
      if (msg.channel.type !== "text") return;
      const voiceChannel = msg.member.voice.channel;
      if (!voiceChannel)
        return msg.reply("😟 Please join a voice channel first!!!");
      try {
        msg.reply("✅ You confirm to stop music!!! ( confirm / no )");
      } catch (error) {
        msg.reply("🔥 Error , pls try again later.");
        console.log(error);
      }
    } else {
      msg.reply(
        `You don't have permission to stop , this command accept with ${permission.admin}`
      );
    }
  }
};

const confirmStop = (msg) => {
  if (permission.adminRole(msg)) {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel)
      return msg.reply("😟 Please join a voice channel first!!!");
    if (msg.content === "confirm") {
      voiceChannel.leave();
    }
  }
};

module.exports = { playMusicYT, stopMusicYT, confirmStop };
