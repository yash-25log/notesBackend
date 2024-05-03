const notes_controller = require('../controllers/notesCntlr');
const router = require('express').Router();

router.get('/getNote', notes_controller.getNote);
router.post('/addNote', notes_controller.addNote);
router.get('/search', notes_controller.globalSearch);

module.exports = router