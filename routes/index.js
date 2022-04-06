const router = require('express').Router();
const auth = require('./auth');
const user = require('./user');
const hotel = require('./hotel');
const room = require('./room');

router.use('/api/auth', auth);
router.use('/api/user', user);
router.use('/api/hotel', hotel);
router.use('/api/room', room);

module.exports = router;