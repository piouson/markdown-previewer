import { useState, useEffect } from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

const OPTIONS = {
  breaks: true,
  headerIds: false,
  smartLists: true
};

const useMarked = (text, options = null) => {
  const [parsedHtml, setParsedHtml] = useState(null);

  useEffect(() => {
    if (options) {
      marked.setOptions({...OPTIONS, options});
    }
    else {
      marked.setOptions({...OPTIONS})
    }
    console.log('Marked useEffect');

    const html = DOMPurify.sanitize(
      marked(text)
    );

    setParsedHtml({__html: html});
  }, [text, options]);

  return parsedHtml;
}

export default useMarked;