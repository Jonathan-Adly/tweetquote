(this.webpackJsonprandom_quote=this.webpackJsonprandom_quote||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),o=n.n(r),s=n(2),a=n(0);var i=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!1),i=Object(s.a)(o,2),j=i[0],b=i[1],u=Object(c.useState)([]),d=Object(s.a)(u,2),h=d[0],l=d[1],O=Object(c.useState)([]),x=Object(s.a)(O,2),w=x[0],m=x[1],p=Object(c.useState)(""),f=Object(s.a)(p,2),v=f[0],q=f[1],N=function(){fetch("https://www.quotable.io/random").then((function(e){return e.json()})).then((function(e){b(!0),l(e.content),m(e.author),q("https://www.twitter.com/intent/tweet?text=%22".concat(e.content,"%22%0D%0A%0D%0A").concat(e.author))}),(function(e){b(!0),r(e)}))};return Object(c.useEffect)(N,[]),n?Object(a.jsxs)("div",{children:["Error: ",n.message]}):j?Object(a.jsxs)("div",{className:"px-3",id:"quote-box",children:[Object(a.jsx)("h1",{children:" The Quote "}),Object(a.jsx)("div",{id:"text",children:Object(a.jsxs)("p",{className:"lead",children:[h," "]})}),Object(a.jsx)("div",{id:"author",children:Object(a.jsxs)("p",{children:[" Author: ",w," "]})}),Object(a.jsx)("button",{className:"btn btn-secondary mx-2",onClick:N,id:"new-quote",children:" New Quote "}),Object(a.jsx)("a",{href:v,id:"tweet-quote",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"Tweet"})]}):Object(a.jsx)("div",{children:"Loading..."})};o.a.render(Object(a.jsx)(i,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.952b935f.chunk.js.map