const pdf = require('html-pdf');
const pdfTemplate = require('../helper/htmlPDF');
const cloudinary = require('../helper/cloudinary');
const date = require('../helper/date');
const { isTest } = require('../config/config');

const controller = {
  async generatePdf(req, res) {
    const { name } = req.body;
    const now = date();
    try {
      pdf
        .create(pdfTemplate(name), {})
        .toFile(
          `./app/pdfUploads/${name.replace(/\s/g, '-')}-${now}.pdf`,
          async (error, resp) => {
            let result = {
              secure_url: ''
            };

            /* istanbul ignore next */
            if (!isTest) {
              result = await cloudinary(
                resp.filename,
                `${name.replace(/\s/g, '-')}-${now}`
              );
            }

            res.status(201).json({
              status: 201,
              message: 'PDF Successfully created',
              data: result.secure_url
            });
          }
        );
    } catch (error) {
      /* istanbul ignore next */
      throw error;
    }
  }
};

module.exports = controller;
