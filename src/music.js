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
        console.log("🔥 Error , pls try again later.");
      }
    } else {
      msg.reply(`You don't have permission to add ${permission.admin}`);
    }
  }
};

module.exports = { playMusicYT };
