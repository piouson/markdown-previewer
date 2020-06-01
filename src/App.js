import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="nav">
        <a href="#editor">Editor</a>
        <a href="#preview">Preview</a>
      </div>
      <div id="md">
        <textarea id="editor" />
      </div>
      <div id="preview">
      </div>
    </div>
  );
}

export default App;
