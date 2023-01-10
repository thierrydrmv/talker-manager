const validateTalk = (req, res, next) => {
  const talk = 'talk';
  const user = req.body;
  if (!(talk in user)) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  return next();
};

module.exports = validateTalk;