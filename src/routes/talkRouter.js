const express = require('express');
const readFile = require('../utils/readFile');

const router = express.Router();
router.use(express.json());

router.get('/talker', async (_req, res) => {
  const data = await readFile();  
  const talker = JSON.parse(data);
  return res.status(200).json(talker);
});

module.exports = router;