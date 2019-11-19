const express = require('express');
const { generatePdf, getPdf } = require('../controllers/generatePdf');

const router = express.Router();

router.post('/generatepdf', generatePdf);
router.get('/getpdf/:name', getPdf);

module.exports = router;
