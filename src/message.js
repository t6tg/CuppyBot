const helloMsg = (msg) => {
  if (msg.content === "!hello") {
    msg.reply(`Hello From the other side`);
  }
};

module.exports = { helloMsg };
