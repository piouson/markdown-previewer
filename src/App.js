import React, { useEffect } from 'react';
import './App.css';
import useMarked from './useMarked';
import useLocalStorage from './useLocalStorage';
import text from './text';

function App() {
  const [data, setData] = useLocalStorage('markd', '');
  const previewer = useMarked(data);

  useEffect(() => {
    setData(str => str ? str : text);
    console.log('App useEffect');
  }, [setData]);

  const handleChange = event =>
    setData(event.target.value);

  return (
    <div className="App">
      <div id="nav">
        <a href="#editor">Editor</a>
        <a href="#preview">Preview</a>
      </div>
      <div id="md">
        <textarea id="editor" value={data} onChange={handleChange} />
      </div>
      <div id="preview" dangerouslySetInnerHTML={previewer} />
    </div>
  );
}

export default App;
