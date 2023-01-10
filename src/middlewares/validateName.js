const validateName = (req, res, next) => {
  const user = req.body;
  const name = 'name';
  if (!(name in user) || user[name].length === 0) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (user[name].length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  return next();
};

module.exports = validateName;