const validatePassword = (req, res, next) => {
  const data = req.body;
  const password = 'password';

  if (!(password in data) || !data[password].length) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  } 
  console.log(data[password].length);
  if (data[password].length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  return next();
};

module.exports = validatePassword;