const user_controller = require('../controllers/userCntlr')
const router = require('express').Router()

router.post('/register', user_controller.addUser);
router.post('/login', user_controller.loginUser);

module.exports = router
