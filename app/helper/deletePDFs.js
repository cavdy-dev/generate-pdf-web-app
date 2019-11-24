const cron = require('node-cron');
const findRemoveSync = require('find-remove');

/* istanbul ignore next */
const deletePDFs = () => {
  try {
    findRemoveSync('./app/pdfUploads', {
      extensions: ['.pdf']
    });
  } catch (err) {
    throw err;
  }
};

/* istanbul ignore next */
const runCronJob = () => {
  cron.schedule('* * * * 7', function() {
    deletePDFs();
  });
};

module.exports = runCronJob;
