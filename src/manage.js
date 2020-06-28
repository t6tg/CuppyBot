const kickMe = (msg, user) => {
  if (msg.content === "!kickme") {
    return this.client.api
      .guilds(this.guilds.id)
      .members(this.user.id)
      .delete({ user })
      .then(() => this);
  }
};
module.exports = { kickMe };
