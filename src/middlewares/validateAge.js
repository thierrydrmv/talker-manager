const validateAge = (req, res, next) => {
  const age = 'age';
  const user = req.body;
  if (!(age in user) || !user[age]) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (Number(user[age]) < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  return next();
};

module.exports = validateAge;