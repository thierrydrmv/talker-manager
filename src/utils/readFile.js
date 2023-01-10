const fs = require('fs').promises;
const path = require('path');

const readFile = async (id, query) => {
  const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
  const talker = JSON.parse(data);
  if (query) {
    const person = talker.filter((p) => p.name.includes(id));
    console.log(person);
    return person;
  }
  if (id) {
    const person = talker.filter((p) => p.id === Number(id)); 
    return person;
  }
  return talker;
};

module.exports = readFile;