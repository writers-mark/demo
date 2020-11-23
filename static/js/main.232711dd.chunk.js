(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{12:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(1),o=t.n(r),i=t(6),s=t.n(i),l=t(4),c=(t(12),t(2));var d=function(){var e=r.useState("#\nWelcome to Writer's Mark!\n\n##\nIntroduction\n\nIt's kinda like markdown, but a lot more flexible. It's also a lot safer, since arbitrary HTML cannot be injected, and links are prohibited. Feel free to poke around the text and/or the style to see what you can do!\n\nOnly CSS properties that have been explicitely whitelisted are available. For this demo, you can use: +font-size+, +font-family+, +color+, +background-color+ or +margin+\n\n##\nExamples:\n\nParagraphs are blocks of text.\nThey can be written accross multiple lines\nor on one single long line. \n\nAn empty line of text separates paragraphs\n\n!sample_para_rule!\nYou can style a paragraph by prepending it with the name of a \"para\" rule.\n\nYou can style span of text, like *this* by wrapping them around a span rule's name.\n\nAlternatively, span rules can have [i]Different beginning and ends[/i].\n\n__aside__\nStyles can also be added directly in the text (at the top or bottom of the document).\nNote that the --- mark needs to be either the very first or very last line of the document.\nTry adding a blank line at the bottom, and see what happens.\n\n---\npara __aside__ {\n  margin-left: 64px;\n  font-family: monospace;\n}\n---"),n=Object(l.a)(e,2),t=n[0],o=n[1],i=r.useState("para # {\n  font-size: 1.5em;\n  margin-left: 32px;\n}\n\npara ## {\n  font-size: 1.2em;\n  font-weight: bold;\n  margin-left: 32px;\n}\n\npara !sample_para_rule! {\n  margin-left: 32px;\n  margin-right: 32px;\n  background-color: black;\n  color: white;\n}\n\nspan * {\n  font-weight:bold;\n}\n\nspan + {\n  font-family: monospace;\n}\n\nspan [i] [/i] {\n  font-style: italic;\n}"),s=Object(l.a)(i,2),d=s[0],p=s[1],h=["color","font-size","font-family","color","background-color","margin"];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"Authoring",children:[Object(a.jsxs)("div",{className:"Content",children:[Object(a.jsx)("h3",{children:"Content"}),Object(a.jsx)("textarea",{className:"Editor",value:t,onChange:function(e){return n=e.target.value,void o(n);var n}})]}),Object(a.jsxs)("div",{className:"Style",children:[Object(a.jsx)("h3",{children:"Style"}),Object(a.jsx)("textarea",{className:"Editor",value:d,onChange:function(e){return n=e.target.value,void p(n);var n}})]})]}),Object(a.jsx)("div",{className:"Display",children:Object(a.jsx)(c.ContextProvider,{options:{whitelist:{para:h,span:h,cont:h}},children:Object(a.jsx)(c.StyleProvider,{text:d,children:Object(a.jsx)(c.WritersMark,{text:t})})})})]})};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.232711dd.chunk.js.map