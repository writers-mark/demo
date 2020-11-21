import * as React from 'react';
import * as wm from 'writers-mark';
import { createStyleElement } from 'writers-mark-dom';

import { Block, SpanSection, splitParagraphs, compileParagraph } from 'writers-mark/lib/ast';


const WritersMarkRuleInjector = (props) => {
  React.useEffect(() => {
    const [sheet, newRules] = createStyleElement(props.style);
    props.onRulesChanged(newRules);

    return () => {
      document.head.removeChild(sheet);
    };
  }, [props.style]);

  return <></>
}

const WritersMarkSection = (props) => {
  if (props.content.contents && props.content.style) {
    let className = '';
    if (props.rules) {
      className = props.rules['s_' + props.content.style];
    }

    return (
      <span className={className}>
        {props.content.contents.map(s=><WritersMarkSection content={s} rules={props.rules}/>)}
      </span>
    );
  } else {
    return props.content;
  }
}

const WritersMarkParagraph = (props) => {
  const p = React.useMemo(()=>compileParagraph(props.content, props.style), [props.style, props.content])

  let classes = [];
  if (props.rules && p.styles) {
    classes = p.styles.map((s) => props.rules['p_' + s]);
  }
  else if(props.rules){
    classes = [props.rules['p_default']]
  }
  
  return <p className={classes.join(' ')}>
    {p.contents.map(s=><WritersMarkSection content={s} rules={props.rules}/>)}
  </p>
}

interface WritersMark {
  content: string;
  style: string;
  options?: wm.Options;
}

export const WritersMark = (props) => {
  const [rules, setRules] = React.useState();

  // Perform a two-stage compilation. This way paragraphs that do not change do not need to be recompiled.
  const paragraphs = React.useMemo(() => [...splitParagraphs(props.content)], [props.content]);
  const style = React.useMemo(() => wm.compileStyle(props.style, props.options), [props.style, props.options]);

  const ast = { paragraphs: paragraphs.map(p=>compileParagraph(p, style)) };

  return (<>
      <WritersMarkRuleInjector style={style} onRulesChanged={setRules}/>
      {paragraphs.map((p, i)=><WritersMarkParagraph key={i} content={p} style={style} rules={rules}/>)}
    </>
  )
};
