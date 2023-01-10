const validateRate = (req, res, next) => {
  const { talk } = req.body;
  const rate = 'rate';
  if (!(talk[rate])) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (talk[rate] < 1 || talk[rate] > 5 || talk[rate] % 1 !== 0) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  return next();
};

module.exports = validateRate;