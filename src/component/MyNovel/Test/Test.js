// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function Test() {
  const [fileInput, setFileInput] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [summary, setSummary] = useState('');

  const handleFileInputChange = (event) => {
    setFileInput(event.target.files[0]);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const summarizeFromFile = async () => {
    try {
      const formData = new FormData();
      formData.append('file', fileInput);

      const response = await axios.post('/api/summarize-file', formData);

      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error summarizing from file:', error);
    }
  };

  const summarizeManually = async () => {
    try {
      const response = await axios.post('/api/summarize-manually', { text: textInput });

      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error summarizing manually:', error);
    }
  };

  return (
    <div className="App">
      <h1>Novel Summary Generator</h1>
      <div>
        <h2>Upload a Novel Text File</h2>
        <input type="file" onChange={handleFileInputChange} />
        <button onClick={summarizeFromFile}>Summarize</button>
      </div>
      <div>
        <h2>Or Enter Text Manually</h2>
        <textarea rows="4" value={textInput} onChange={handleTextInputChange}></textarea>
        <button onClick={summarizeManually}>Summarize</button>
      </div>
      <div>
        <h2>Summary:</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default Test;
