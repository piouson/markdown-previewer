import React, { useEffect } from 'react';
import './App.css';
import useMarked from './useMarked';
import useLocalStorage from './useLocalStorage';

const MD = `# Markdown Previewer Heading
\`\`\`javascript
const hello = 'Hello, World!';
console.log(hello);
\`\`\``;

function App() {
  const [text, setText] = useLocalStorage('marked', '');
  const previewer = useMarked(text);

  useEffect(() => {
    setText(str => str ? str : MD);
    console.log('App useEffect');
  }, [setText]);

  const handleChange = event =>
    setText(event.target.value);

  return (
    <div className="App">
      <div id="nav">
        <a href="#editor">Editor</a>
        <a href="#preview">Preview</a>
      </div>
      <div id="md">
        <textarea id="editor" value={text} onChange={handleChange} />
      </div>
      <div id="preview">
        <div dangerouslySetInnerHTML={previewer} />
      </div>
    </div>
  );
}

export default App;
