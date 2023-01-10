const validRate = (rate) => {
  if (rate < 1 || rate > 5 || rate % 1 !== 0) return true;
};

const validateRate = (req, res, next) => {
  const { talk } = req.body;
  const rate = 'rate';
  if (!(rate in talk)) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (validRate(talk[rate])) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  return next();
};

module.exports = validateRate;