const fs = require('fs').promises;
const path = require('path');
const readFile = require('./readFile');

const writeFile = async (method, obj, _id) => {
  const list = await readFile();
  // const listById = await readFile(id);
  if (method === 'POST') {
    const newList = [...list, { id: list.length + 1, ...obj }];
    const stringfy = JSON.stringify(newList, null, 2);
    await fs.writeFile(path.resolve(__dirname, '../talker.json'), stringfy);
    return newList;
  }
};

module.exports = writeFile;