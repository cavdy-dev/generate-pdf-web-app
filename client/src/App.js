import React, { useState } from 'react';
import { generatePDF } from './services/generatePDF';

function App() {
  const [name, setName] = useState('');

  const handleChange = event => {
    setName({ [event.target.name]: event.target.value });
  };

  const createAndDownload = event => {
    event.preventDefault();
    const data = { name };
    if (name !== '' || name !== undefined || name !== null) {
      generatePDF(data);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <button onClick={createAndDownload}>Download PDF</button>
    </div>
  );
}

export default App;
