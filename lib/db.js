const { readFile, writeFile } = require("fs/promises");
const path = require("path");

const pathname = path.join(__dirname, "/data.json")

const getAllUsers = async() => {
  const users = await readFile(pathname, "utf-8");
  if(!users) return [];
  return JSON.parse(users);
}

const saveUser = async(user) => {
  const users = await getAllUsers();
  users.push(user);
  await writeFile(pathname, JSON.stringify(users))
}

module.exports = { getAllUsers, saveUser };
