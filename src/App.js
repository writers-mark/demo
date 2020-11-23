import './App.css';
import * as React from 'react'
import {WritersMark, StyleProvider, ContextProvider} from 'writers-mark-react'

const defaultText = `#
Welcome to Writer's Mark!

##
Introduction

It's kinda like markdown, but a lot more flexible. It's also a lot safer, since arbitrary HTML cannot be injected, and links are prohibited. Feel free to poke around the text and/or the style to see what you can do!

Only CSS properties that have been explicitly whitelisted are available. For this demo, you can use: +font-size+, +font-family+, +font-style'+, +color+, +background-color+, +margin+ or +margin-left+

##
Examples:

Paragraphs are blocks of text.
They can be written across multiple lines
or on one single long line. 

An empty line of text separates paragraphs

!sample_para_rule!
You can style a paragraph by prepending it with the name of a "para" rule.

You can style span of text, like *this* by wrapping them around a span rule's name.

Alternatively, span rules can have [i]different beginning and ends[/i].

__aside__
Styles can also be added directly in the text (at the top or bottom of the document).
Note that the --- mark needs to be either the very first or very last line of the document.
Try adding a blank line at the bottom, and see what happens.

---
para __aside__ {
  margin-left: 64px;
  font-family: monospace;
}
---`;

const defaultStyle = `para # {
  font-size: 1.5em;
  margin-left: 32px;
}

para ## {
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 32px;
}

para !sample_para_rule! {
  margin-left: 32px;
  margin-right: 32px;
  background-color: black;
  color: white;
}

span * {
  font-weight:bold;
}

span + {
  font-family: monospace;
}

span [i] [/i] {
  font-style: italic;
}`;

function App() {
  const [content, setContent] = React.useState(defaultText);
  const [style, setStyle] = React.useState(defaultStyle);

  const cssProps = ["color", 'font-size', 'font-family', 'font-style', 'color', 'background-color', 'margin', 'margin-left']

  return (
    <div className="App">
      <div className="Authoring">
        <div className="Content">
          <h3>Content</h3>
          <textarea className="Editor" value={content} onChange={e=>setContent(e.target.value)}></textarea >
        </div>
        <div className="Style">
          <h3>Style</h3>
          <textarea className="Editor" value={style} onChange={e=>setStyle(e.target.value)}></textarea >
        </div>
      </div>
      <div className="Display">
        <ContextProvider options={{whitelist: {para: cssProps, span: cssProps, cont: cssProps}}}>
          <StyleProvider text={style}>
            <WritersMark text={content}/>
          </StyleProvider>
        </ContextProvider>
      </div>
      
    </div>
  );
}

export default App;
