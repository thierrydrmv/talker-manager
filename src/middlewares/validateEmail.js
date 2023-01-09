const validateEmail = (req, res, next) => {
  const data = req.body;
  const email = 'email';
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

  if (!(email in data) || !data[email].length) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  } 
  if (!emailRegex.test(data[email])) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  } 
  return next();
};

module.exports = validateEmail;