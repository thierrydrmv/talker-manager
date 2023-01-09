const express = require('express');
const readFile = require('../utils/readFile');

const router = express.Router();
router.use(express.json());

router.get('/talker', async (_req, res) => {
  const data = await readFile();  
  return res.status(200).json(data);
});

router.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const data = await readFile(Number(id));
  if (!data.length) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).json(data);
});

module.exports = router;