const express = require('express');
const { generatePdf } = require('../controllers/generatePdf');

const router = express.Router();

router.post('/generatepdf', generatePdf);

module.exports = router;
