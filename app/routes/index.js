const express = require('express');
const generatePDF = require('./generatePdf');

const router = express.Router();

router.use(generatePDF);
router.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome... I am happy!!!'
  });
});

module.exports = router;
