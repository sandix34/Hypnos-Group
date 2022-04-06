const router = require('express').Router();
const controller = require('../controllers/room.controller');

// Create a new Room
router.post('/', controller.create);