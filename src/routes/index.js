const express = require('express');

const router = express.Router();

const loginRouter = require('./loginRouter');
const talkRouter = require('./talkRouter');

router.use(loginRouter);
router.use(talkRouter);

module.exports = router;