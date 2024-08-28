const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/auth');

router.post('/register', doctorController.register);
router.post('/login', doctorController.login);
router.get('/me', authMiddleware, doctorController.getProfile);
// router.get('/', doctorController.getAllDoctors);
router.get('/', authMiddleware, doctorController.getAllDoctors);
module.exports = router;
