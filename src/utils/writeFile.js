const fs = require('fs').promises;
const path = require('path');
const readFile = require('./readFile');

const writePath = (param) => 
fs.writeFile(path.resolve(__dirname, '../talker.json'), JSON.stringify(param, null, 2));

const writeFile = async (method, obj, id) => {
  const list = await readFile();
  switch (method) {
    case 'POST': {
      const newList = [...list, { id: list.length + 1, ...obj }];
      await writePath(newList);
      return newList; }
    case 'PUT': {
      const changeData = list.map((user) => (user.id === Number(id) ? { ...user, ...obj } : user));
      await writePath(changeData);
      return changeData; }
    case 'DELETE': {
      const index = list.findIndex((person) => person.id === Number(id));
    list.splice(index, 1);
    await writePath(list);
    }
    break;
    default: 
}
};

module.exports = writeFile;