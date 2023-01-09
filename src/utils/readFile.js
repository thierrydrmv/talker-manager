const fs = require('fs').promises;
const path = require('path');

const readFile = async (id) => {
  const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
  const talker = JSON.parse(data);
  if (id) {
    const person = talker.filter((p) => p.id === Number(id)); 
    return person;
  }
  return talker;
};

module.exports = readFile;