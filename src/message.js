const helloMsg = (msg) => {
  if (msg.content === "!hello") {
    msg.reply(`Hello from the other side`);
  }
};

module.exports = { helloMsg };
