const pdf = require('html-pdf');
const pdfTemplate = require('../helper/htmlPDF');

const controller = {
  generatePdf(req, res) {
    const { name } = req.body;
    try {
      pdf
        .create(pdfTemplate(name), {})
        .toFile(`${__dirname}/${name.replace(/\s/g, '-')}.pdf`, error => {
          if (error) {
            res.send(Promise.reject());
          }

          res.send(Promise.resolve());
        });
    } catch (error) {
      throw error;
    }
  },
  getPdf(req, res) {
    let { name } = req.params;
    name = name.replace(/\s/g, '-');
    try {
      res.sendFile(`${__dirname}/${name}.pdf`);
    } catch (error) {
      throw error;
    }
  }
};

module.exports = controller;
