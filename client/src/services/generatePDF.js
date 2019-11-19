import axios from 'axios';
import { saveAs } from 'file-saver';

export const generatePDF = ({ name }) => {
  axios
    .post('http://localhost:8500/generatepdf', name)
    .then(() =>
      axios
        .get(`http://localhost:8500/getpdf/${name.name}`, {
          responseType: 'blob'
        })
        .then(res => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
          saveAs(pdfBlob, `${name.name.replace(/\s/g, '-')}.pdf`);
        })
    )
    .catch(error => {
      console.log(error);
    });
};
