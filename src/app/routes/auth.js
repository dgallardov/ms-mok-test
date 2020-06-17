const { Router } = require('express');
const AuthController = require('../controller/AuthController');
const router = Router();

// Para testear que la URL del Tpken este funcionando
router.post('/getAccessToken', AuthController.getAccessToken);
// router.get('/getAccessToken', AuthController.getAccessToken);

module.exports = router;