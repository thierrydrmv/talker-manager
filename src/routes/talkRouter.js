const express = require('express');
const { readFile, writeFile } = require('../utils');
const { 
  auth, 
  validateName, 
  validateAge, 
  validateTalk, 
  validateWatchedAt,
  validateRate, 
} = require('../middlewares');

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
  return res.status(200).json(data[0]);
});

router.post('/talker', 
  auth, 
  validateName, 
  validateAge, 
  validateTalk, 
  validateWatchedAt, 
  validateRate, async (req, res) => {
    await writeFile(req.method, req.body);
    const data = await readFile();
    return res.status(201).json(data[data.length - 1]);
});

router.put('/talker/:id', 
  auth, 
  validateName, 
  validateAge, 
  validateTalk, 
  validateWatchedAt, 
  validateRate, async (req, res) => {
    const { id } = req.params;
    await writeFile(req.method, req.body, id);
    const data = await readFile();
    return res.status(200).json(data[data.length - 1]);
});

router.delete('/talker/:id', auth, async (req, res) => {
  const { id } = req.params;
  await writeFile(req.method, req.body, id);
  return res.status(204).end();
});

module.exports = router;