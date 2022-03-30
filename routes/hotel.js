const router = require('express').Router();
const controller = require('../controllers/hotel.controller');

// Create a new Hotel
router.post('/', controller.create);

// Retrieve all Hotels
router.get("/", controller.findAll);

module.exports = router;