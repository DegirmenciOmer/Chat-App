(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{129:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(20),s=n.n(a),i=n(6),o=(n(92),n(133)),l=n(138),j=n(134),u=n(135),d=n(141),b=n(1);function x(e){var t=e.onIdSubmit,n=Object(c.useRef)();return Object(b.jsx)(o.a,{className:"align-items-center d-flex justify-content-center",style:{height:"100vh"},children:Object(b.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),t(n.current.value)},md:"8",className:"align-items-center d-flex flex-column ",children:[Object(b.jsx)(l.a.Group,{className:"mb-2",children:Object(b.jsx)(l.a.Control,{placeholder:"Enter Your Id",type:"text",ref:n,required:!0})}),Object(b.jsxs)(j.a,{className:"w-100 ","aria-label":"Basic example",children:[Object(b.jsx)(u.a,{className:"w-50",type:"submit",children:"Login"}),Object(b.jsx)(u.a,{className:"w-50",onClick:function(){t(Object(d.a)())},variant:"secondary",children:"New Id"})]})]})})}function O(e,t){var n="whatsapp-clone-"+e,r=Object(c.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),a=Object(i.a)(r,2),s=a[0],o=a[1];return Object(c.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,o]}var f=n(142),m=n(139),h=n(136),v=n(137),p=n(140),g=n(143),C=n(2),y=n(21),N=r.a.createContext();function S(){return Object(c.useContext)(N)}function w(e){var t=e.children,n=O("contacts",[]),c=Object(i.a)(n,2),r=c[0],a=c[1];return Object(b.jsx)(N.Provider,{value:{contacts:r,createContact:function(e,t){a((function(n){return[].concat(Object(y.a)(n),[{id:e,name:t}])}))}},children:t})}var I=n(85),k=n.n(I),M=r.a.createContext();function B(e){var t=e.id,n=e.children,r=Object(c.useState)(),a=Object(i.a)(r,2),s=a[0],o=a[1];return Object(c.useEffect)((function(){var e=k()("https://dry-thicket-16746.herokuapp.com/",{query:{id:t}});return o(e),function(){return e.close()}}),[t]),Object(b.jsx)(M.Provider,{value:s,children:n})}var q=r.a.createContext();function E(){return Object(c.useContext)(q)}function G(e){var t=e.id,n=e.children,r=O("conversations",[]),a=Object(i.a)(r,2),s=a[0],o=a[1],l=Object(c.useState)(0),j=Object(i.a)(l,2),u=j[0],d=j[1],x=S().contacts,f=Object(c.useContext)(M);var m=Object(c.useCallback)((function(e){var t=e.recipients,n=e.text,c=e.sender;o((function(e){var r=!1,a={sender:c,text:n},s=e.map((function(e){return n=e.recipients,c=t,n.length===c.length&&(n.sort(),c.sort(),n.every((function(e,t){return e===c[t]})))?(r=!0,Object(C.a)(Object(C.a)({},e),{},{messages:[].concat(Object(y.a)(e.messages),[a])})):e;var n,c}));return r?s:[].concat(Object(y.a)(e),[{recipients:t,messages:[a]}])}))}),[o]);Object(c.useEffect)((function(){if(null!=f)return f.on("receive-message",m),function(){return f.off("receive-message")}}),[f,m]);var h=s.map((function(e,n){var c=e.recipients.map((function(e){var t=x.find((function(t){return t.id===e})),n=t&&t.name||e;return{id:e,name:n}})),r=e.messages.map((function(e){var n=x.find((function(t){return t.id===e.sender})),c=n&&n.name||e.sender,r=t===e.sender;return Object(C.a)(Object(C.a)({},e),{},{senderName:c,fromMe:r})})),a=n===u;return Object(C.a)(Object(C.a)({},e),{},{messages:r,recipients:c,selected:a})})),v={conversations:h,selectedConversation:h[u],sendMessage:function(e,n){f.emit("send-message",{recipients:e,text:n}),m({recipients:e,text:n,sender:t})},selectConversationIndex:d,createConversation:function(e){o((function(t){return[].concat(Object(y.a)(t),[{recipients:e,messages:[]}])}))}};return Object(b.jsx)(q.Provider,{value:v,children:n})}var H=function(e){var t=e.closeSideBar,n=E(),c=n.conversations,r=n.selectConversationIndex,a=function(e){r(e),t()};return Object(b.jsx)(g.a,{variant:"flush",children:c.map((function(e,t){return Object(b.jsx)(g.a.Item,{action:!0,active:e.selected,onClick:a(t),children:e.recipients.map((function(e){return e.name})).join(", ")},t)}))})},K=function(){var e=S().contacts;return Object(b.jsx)(g.a,{variant:"flush",children:e.map((function(e){return Object(b.jsx)(g.a.Item,{children:e.name},e.id)}))})},L=function(e){var t=e.closeModal,n=Object(c.useRef)(),r=Object(c.useRef)(),a=S().createContact;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p.a.Header,{closeButton:!0,children:Object(b.jsx)(p.a.Title,{children:"Create Contact"})}),Object(b.jsx)(p.a.Body,{children:Object(b.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),a(n.current.value,r.current.value),t(),console.log("FormSubmit")},children:[Object(b.jsxs)(l.a.Group,{children:[Object(b.jsx)(l.a.Label,{children:"Id"}),Object(b.jsx)(l.a.Control,{type:"text",ref:n,required:!0})]}),Object(b.jsxs)(l.a.Group,{children:[Object(b.jsx)(l.a.Label,{children:"Name"}),Object(b.jsx)(l.a.Control,{type:"text",ref:r,required:!0})]}),Object(b.jsx)(u.a,{type:"submit",children:"Create"})]})})]})};function P(e){var t=e.closeModal,n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],s=r[1],o=S().contacts,j=E().createConversation;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p.a.Header,{closeButton:!0,children:"Create Conversation"}),Object(b.jsx)(p.a.Body,{children:Object(b.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),j(a),t()},children:[o.map((function(e){return Object(b.jsx)(l.a.Group,{controlId:e.id,children:Object(b.jsx)(l.a.Check,{type:"checkbox",value:a.includes(e.id),label:e.name,onChange:function(){return t=e.id,void s((function(e){return e.includes(t)?e.filter((function(e){return t!==e})):[].concat(Object(y.a)(e),[t])}));var t}})},e.id)})),Object(b.jsx)(u.a,{type:"submit",children:"Create"})]})})]})}var Y="conversations",D="contacts";function F(e){var t=e.id,n=Object(c.useState)(Y),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],x=S().contacts,O=E().conversations;function g(){d(!1)}console.log(x);var C=Object(c.useState)(!1),y=Object(i.a)(C,2),N=y[0],w=y[1],I=function(){return w((function(e){return!e}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.a,{className:"menu-btn ",variant:"primary",onClick:I,children:"Menu"}),Object(b.jsxs)(f.a,{show:N,onHide:I,style:{width:"350px"},className:"d-flex flex-column",children:[Object(b.jsxs)(m.a.Container,{activeKey:a,onSelect:s,children:[Object(b.jsx)(f.a.Header,{as:h.a,closeButton:!0,children:Object(b.jsxs)(v.a,{style:{cursor:"pointer"},variant:"tabs",className:"justify-content-center flex-row",children:[Object(b.jsx)(f.a.Title,{children:Object(b.jsx)(v.a.Item,{children:Object(b.jsx)(v.a.Link,{eventKey:Y,children:"Conversations"})})}),Object(b.jsx)(f.a.Title,{children:Object(b.jsx)(v.a.Item,{children:Object(b.jsx)(v.a.Link,{eventKey:D,children:"Contacts"})})})]})}),Object(b.jsx)(f.a.Body,{children:Object(b.jsxs)(m.a.Content,{className:"left-tab-container border-right overflow-auto flex-grow-1",children:[Object(b.jsx)(m.a.Pane,{eventKey:Y,children:0===O.length?Object(b.jsx)("p",{bg:"warning",className:"warning text-center",children:"You have no conversations yet"}):Object(b.jsx)(H,{closeSideBar:I})}),Object(b.jsx)(m.a.Pane,{eventKey:D,children:x.length>0?Object(b.jsx)(K,{}):Object(b.jsx)("p",{className:"warning text-center",children:"You have no contacts yet"})})]})}),Object(b.jsxs)("div",{className:"p-2 border-top border-right small",children:["Your Id: ",Object(b.jsx)("span",{className:"text-muted",children:t})]}),Object(b.jsxs)(u.a,{onClick:function(){return d(!0)},className:"rounded-0",children:["New ",a===Y?"Conversation":"Contact"]})]}),Object(b.jsx)(p.a,{show:j,onHide:g,children:a===Y?Object(b.jsx)(P,{closeModal:g}):Object(b.jsx)(L,{closeModal:g})})]})]})}var J=n(144);function R(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useCallback)((function(e){e&&e.scrollIntoView({smooth:!0})}),[]),s=E(),o=s.sendMessage,j=s.selectedConversation;return Object(b.jsxs)("div",{className:"d-flex flex-column flex-grow-1",children:[Object(b.jsx)("div",{className:"flex-grow-1 overflow-auto",children:Object(b.jsx)("div",{className:"d-flex flex-column align-items-start justify-content-end px-3",children:j.messages.map((function(e,t){var n=j.messages.length-1===t;return Object(b.jsxs)("div",{ref:n?a:null,className:"my-1 d-flex flex-column ".concat(e.fromMe?"align-self-end align-items-end":"align-items-start"),children:[Object(b.jsx)("div",{className:"rounded px-2 py-1 ".concat(e.fromMe?"bg-primary text-white":"border"),children:e.text}),Object(b.jsx)("div",{className:"text-muted small ".concat(e.fromMe?"text-right":""),children:e.fromMe?"You":e.senderName})]},t)}))})}),Object(b.jsx)(l.a,{onSubmit:function(e){e.preventDefault(),o(j.recipients.map((function(e){return e.id})),n),r("")},children:Object(b.jsx)(l.a.Group,{className:"m-2",children:Object(b.jsxs)(J.a,{children:[Object(b.jsx)(l.a.Control,{as:"textarea",required:!0,value:n,onChange:function(e){return r(e.target.value)},style:{height:"75px",resize:"none"}}),Object(b.jsx)(u.a,{type:"submit",children:"Send"})]})})})]})}function T(e){var t=e.id,n=E().selectedConversation;return Object(b.jsxs)("div",{className:"d-flex",style:{height:"100vh"},children:[Object(b.jsx)(F,{id:t}),n&&Object(b.jsx)(R,{})]})}var z=function(){var e=O("id",null),t=Object(i.a)(e,2),n=t[0],c=t[1];return n?Object(b.jsx)(B,{id:n,children:Object(b.jsx)(w,{children:Object(b.jsx)(G,{id:n,children:Object(b.jsx)(T,{id:n})})})}):Object(b.jsx)(x,{onIdSubmit:c})};n(128);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root"))},92:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.cdf1d4f3.chunk.js.map