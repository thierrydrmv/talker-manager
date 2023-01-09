const fs = require('fs').promises;
const path = require('path');

const readFile = async (id) => {
  const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
  const talker = JSON.parse(data);
  if (id) {
    return talker.filter((person) => person.id === Number(id)); 
  }
  return talker;
};

module.exports = readFile;