const fs = require('fs').promises;
const path = require('path');
const readFile = require('./readFile');

const writeFile = async (method, obj, id) => {
  const list = await readFile();
  if (method === 'POST') {
    const newList = [...list, { id: list.length + 1, ...obj }];
    const stringfy = JSON.stringify(newList, null, 2);
    await fs.writeFile(path.resolve(__dirname, '../talker.json'), stringfy);
    return newList;
  }
  if (method === 'PUT') {
    const changeData = list.map((user) => (user.id === Number(id) ? { ...user, ...obj } : user));
    const stringfy = JSON.stringify(changeData, null, 2);
    await fs.writeFile(path.resolve(__dirname, '../talker.json'), stringfy);
    return changeData;
  }
};

module.exports = writeFile;