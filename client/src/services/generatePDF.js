import axios from 'axios';
import { saveAs } from 'file-saver';

export const generatePDF = ({ name }) => {
  axios
    .post('http://localhost:8500/generatepdf', name)
    .then(res => saveAs(res.data.data.pdf_url, res.data.data.pdf_name))
    .catch(error => {
      console.log(error);
    });
};
