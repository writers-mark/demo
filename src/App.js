import './App.css';
import * as React from 'react'
import {WritersMark} from 'writers-mark-react'

const defaultText = `#
Welcome to Writer's Mark!

##
Introduction

It's kinda like markdown, but a lot more flexible. It's also a lot safer, since arbitrary HTML cannot be injected, and links are prohibited.

Feel free to poke around the text and/or the style to see what you can do!

##
Examples:

Lorem ipsum dolor sit amet, *consectetur* adipiscing elit. 
Vivamus mollis ante metus, eu commodo risus commodo quis. 
Ut eu fringilla tortor, vel interdum ligula. Proin nec 
tortor vel leo interdum vestibulum eu ac nibh. 

__aside__
Pellentesque mollis nisi nunc, vestibulum varius metus pharetra rutrum. Praesent ut elit magna. Nulla enim nunc, facilisis vel nisi quis, mollis ullamcorper augue. Phasellus accumsan, nunc in vulputate malesuada, diam ipsum pulvinar massa.

Fusce sit [i]amet ipsum accumsan[/i], molestie eros ut, mattis orci.`

const defaultStyle = `p default {
  margin-left: 32px;
}

p # {
  font-size: 1.5em;
  margin-left: 32px;
}

p ## {
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 32px;
}

p __aside__ {
  margin-left: 64px;
  font-family: monospace;
}

s * {font-weight:bold;}

s [i] [/i] {
  font-style: italic;
}`

function App() {
  const [content, setContent] = React.useState(defaultText);
  const [style, setStyle] = React.useState(defaultStyle);

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
        <WritersMark content={content} style={style}/>
      </div>
      
    </div>
  );
}

export default App;
