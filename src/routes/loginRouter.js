const express = require('express');
const { generateToken } = require('../utils');
const { validateEmail, validatePassword } = require('../middlewares');

const router = express.Router();
router.use(express.json());

router.post('/login', validateEmail, validatePassword, 
(_req, res) => res.status(200).json({ token: generateToken() }));

module.exports = router;