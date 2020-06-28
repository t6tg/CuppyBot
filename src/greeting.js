const greet = (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "welcome"
  );
  const roles = member.guild.roles.cache.find((r) => r.name === "user");
  if (!channel) {
    return;
  }
  channel.send(`Welcome ${member} to this world`);
  member.roles.add(roles);
};
module.exports = { greet };
