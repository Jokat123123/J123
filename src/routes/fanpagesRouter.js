const express = require('express');
const router = express.Router();
const threadController = require('../controllers/fanpageControllers');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.get('/', threadController.getAll);
router.get('/create', threadController.getAddForm);
router.post('/create', threadController.postAdd);
router.get('/edit/:id', threadController.getEditForm);
router.post('/edit/:id', threadController.postEdit);
router.post('/delete/:id', threadController.deleteThread);

router.get('/blank', require('../controllers/fanpageControllers').getBlankData);
router.get('/add-blank', require('../controllers/fanpageControllers').getAddBlankForm);
router.post('/add-blank', upload.single('img'), require('../controllers/fanpageControllers').postAddBlank);

router.get('/about', (req, res) => {
    res.render('pages/about');
});

module.exports = router;