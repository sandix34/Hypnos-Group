const router = require('express').Router();
const auth = require('./auth');
const user = require('./user');
const hotel = require('./hotel');

router.use('/api/auth', auth);
router.use('/api/user', user);
router.use('/api/hotel', hotel);

module.exports = router;