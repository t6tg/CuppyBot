const admin = "administrator";
const users = "user";
const coAdmin = "co-administrator";

const adminRole = (msg) => {
  return msg.member.roles.cache.some((role) => role.name === admin);
};
const coAdminRole = (msg) => {
  return msg.member.roles.cache.some((role) => role.name === coAdmin);
};
const userRole = (msg) => {
  return msg.member.roles.cache.some((role) => role.name === users);
};

module.exports = { adminRole, coAdminRole, userRole, users, admin, coAdmin };
