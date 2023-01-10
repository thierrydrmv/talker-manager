const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const auth = require('./auth');
const validateName = require('./validateName');
const validateAge = require('./validateAge');
const validateTalk = require('./validateTalk');
const validateWatchedAt = require('./validateWatechedAt');
const validateRate = require('./validateRate');

module.exports = { 
  validateEmail, 
  validatePassword,
  auth,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt, 
  validateRate,
};