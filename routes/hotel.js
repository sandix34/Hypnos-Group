const router = require('express').Router();
const controller = require('../controllers/hotel.controller');

// Create a new Hotel
router.post('/', controller.create);

module.exports = router;