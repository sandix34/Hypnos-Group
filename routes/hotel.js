const router = require('express').Router();
const controller = require('../controllers/hotel.controller');

// Create a new Hotel
router.post('/', controller.create);

// Retrieve all Hotels
router.get("/", controller.findAll);

// Retrieve a single Hotel with id
router.get("/:id", controller.findOne);

// Update a Hotel with id
router.put("/:id", controller.update);

// Delete a Hotel with id
router.delete("/:id", controller.delete);

module.exports = router;