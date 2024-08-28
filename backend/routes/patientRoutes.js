const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const authMiddleware = require('../middleware/auth');

router.post('/register', patientController.register);
router.post('/login', patientController.login);
router.get('/me', authMiddleware, patientController.getProfile);
// router.get('/all', authMiddleware, patientController.getAllPatients);
router.get('/', authMiddleware, patientController.getAllPatients);

module.exports = router;
