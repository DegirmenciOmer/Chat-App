(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(21),s=n.n(a),i=n(6),o=(n(94),n(136)),l=n(141),j=n(137),d=n(138),u=n(145),b=n(1);function x(e){var t=e.onIdSubmit,n=Object(c.useRef)();return Object(b.jsx)(o.a,{className:"align-items-center d-flex justify-content-center",children:Object(b.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),t(n.current.value)},md:"8",className:"align-items-center d-flex flex-column ",children:[Object(b.jsx)(l.a.Group,{className:"mb-2",children:Object(b.jsx)(l.a.Control,{placeholder:"Enter Your Id",type:"text",ref:n,required:!0})}),Object(b.jsxs)(j.a,{className:"w-100 ","aria-label":"Basic example",children:[Object(b.jsx)(d.a,{className:"w-50",type:"submit",children:Object(b.jsxs)("span",{children:[Object(b.jsx)("i",{className:"fa fa-sign-in-alt"}),Object(b.jsx)("span",{children:"Login"})]})}),Object(b.jsx)(d.a,{className:"w-50",onClick:function(){t(Object(u.a)())},variant:"secondary",children:"New Id"})]})]})})}function O(e,t){var n="whatsapp-clone-"+e,r=Object(c.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),a=Object(i.a)(r,2),s=a[0],o=a[1];return Object(c.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,o]}var h=n(146),f=n(142),m=n(139),v=n(140),g=n(143),p=n(147),y=n(2),C=n(22),N=r.a.createContext();function w(){return Object(c.useContext)(N)}function S(e){var t=e.children,n=O("contacts",[]),c=Object(i.a)(n,2),r=c[0],a=c[1];return Object(b.jsx)(N.Provider,{value:{contacts:r,createContact:function(e,t){a((function(n){return[].concat(Object(C.a)(n),[{id:e,name:t}])}))}},children:t})}var k=n(87),I=n.n(k),M=r.a.createContext();function B(e){var t=e.id,n=e.children,r=Object(c.useState)(),a=Object(i.a)(r,2),s=a[0],o=a[1];return Object(c.useEffect)((function(){var e=I()("https://dry-thicket-16746.herokuapp.com/",{query:{id:t}});return o(e),function(){return e.close()}}),[t]),Object(b.jsx)(M.Provider,{value:s,children:n})}var F=r.a.createContext();function L(){return Object(c.useContext)(F)}function E(e){var t=e.id,n=e.children,r=O("conversations",[]),a=Object(i.a)(r,2),s=a[0],o=a[1],l=Object(c.useState)(0),j=Object(i.a)(l,2),d=j[0],u=j[1],x=w().contacts,h=Object(c.useContext)(M);var f=Object(c.useCallback)((function(e){var t=e.recipients,n=e.text,c=e.sender;o((function(e){var r=!1,a={sender:c,text:n},s=e.map((function(e){return n=e.recipients,c=t,n.length===c.length&&(n.sort(),c.sort(),n.every((function(e,t){return e===c[t]})))?(r=!0,Object(y.a)(Object(y.a)({},e),{},{messages:[].concat(Object(C.a)(e.messages),[a])})):e;var n,c}));return r?s:[].concat(Object(C.a)(e),[{recipients:t,messages:[a]}])}))}),[o]);Object(c.useEffect)((function(){if(null!=h)return h.on("receive-message",f),function(){return h.off("receive-message")}}),[h,f]);var m=s.map((function(e,n){var c=e.recipients.map((function(e){var t=x.find((function(t){return t.id===e})),n=t&&t.name||e;return{id:e,name:n}})),r=e.messages.map((function(e){var n=x.find((function(t){return t.id===e.sender})),c=n&&n.name||e.sender,r=t===e.sender;return Object(y.a)(Object(y.a)({},e),{},{senderName:c,fromMe:r})})),a=n===d;return Object(y.a)(Object(y.a)({},e),{},{messages:r,recipients:c,selected:a})})),v={conversations:m,selectedConversation:m[d],sendMessage:function(e,n){h.emit("send-message",{recipients:e,text:n}),f({recipients:e,text:n,sender:t})},selectConversationIndex:u,createConversation:function(e){o((function(t){return[].concat(Object(C.a)(t),[{recipients:e,messages:[]}])}))}};return Object(b.jsx)(F.Provider,{value:v,children:n})}var H=r.a.createContext();function P(){return Object(c.useContext)(H)}function T(e){var t=e.children,n=Object(c.useState)(!1),r=Object(i.a)(n,2),a=r[0],s=r[1];return Object(b.jsx)(H.Provider,{value:{toggleSidebar:function(){return s((function(e){return!e}))},showSidebar:a,setShowSidebar:s},children:t})}function q(){var e=L(),t=e.conversations,n=e.selectConversationIndex,c=P().toggleSidebar;return Object(b.jsx)(p.a,{variant:"flush",children:t.map((function(e,t){return Object(b.jsx)(p.a.Item,{action:!0,onClick:function(){return n(t),void c()},active:e.selected,children:e.recipients.map((function(e){return e.name})).join(", ")},t)}))})}var G=function(){var e=w().contacts;return Object(b.jsx)(p.a,{variant:"flush",children:e.map((function(e){return Object(b.jsxs)(p.a.Item,{children:[Object(b.jsx)("i",{style:{fontSize:"21px",color:"#0d6efd"},className:"fa fa-user-circle"}),e.name]},e.id)}))})},K=function(e){var t=e.closeModal,n=Object(c.useRef)(),r=Object(c.useRef)(),a=w().createContact;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a.Header,{closeButton:!0,children:Object(b.jsx)(g.a.Title,{children:"Create Contact"})}),Object(b.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),a(n.current.value,r.current.value),t()},children:[Object(b.jsxs)(g.a.Body,{children:[Object(b.jsxs)(l.a.Group,{children:[Object(b.jsx)(l.a.Label,{children:"Id"}),Object(b.jsx)(l.a.Control,{type:"text",ref:n,required:!0})]}),Object(b.jsxs)(l.a.Group,{children:[Object(b.jsx)(l.a.Label,{children:"Name"}),Object(b.jsx)(l.a.Control,{type:"text",ref:r,required:!0})]})]}),Object(b.jsx)(g.a.Footer,{children:Object(b.jsx)(d.a,{type:"submit",children:"Create"})})]})]})};function Y(e){var t=e.closeModal,n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],s=r[1],o=w().contacts,j=L().createConversation;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a.Header,{closeButton:!0,children:Object(b.jsx)(g.a.Title,{children:"Create Conversation"})}),Object(b.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),0!==a.length&&(j(a),t())},children:[Object(b.jsx)(g.a.Body,{children:o.map((function(e){return Object(b.jsx)(l.a.Group,{controlId:e.id,children:Object(b.jsx)(l.a.Check,{type:"checkbox",value:a.includes(e.id),label:e.name,onChange:function(){return t=e.id,void s((function(e){return e.includes(t)?e.filter((function(e){return t!==e})):[].concat(Object(C.a)(e),[t])}));var t}})},e.id)}))}),Object(b.jsx)(g.a.Footer,{children:Object(b.jsx)(d.a,{disabled:0===a,type:"submit",children:"Create"})})]})]})}var z="conversations",D="contacts";function J(e){var t=e.id,n=w().contacts,r=P(),a=r.showSidebar,s=r.toggleSidebar,o=Object(c.useState)(0===n.length?D:z),l=Object(i.a)(o,2),j=l[0],u=l[1],x=Object(c.useState)(!1),O=Object(i.a)(x,2),p=O[0],y=O[1],C=L().conversations;function N(){y(!1)}return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(h.a,{show:a,onHide:s,style:{width:"350px"},className:"gradient-bg d-flex flex-column",children:[Object(b.jsxs)(f.a.Container,{activeKey:j,onSelect:u,children:[Object(b.jsx)(h.a.Header,{as:m.a,closeButton:!0,children:Object(b.jsxs)(v.a,{style:{cursor:"pointer"},variant:"tabs",className:"justify-content-center flex-row",children:[Object(b.jsx)(h.a.Title,{children:Object(b.jsx)(v.a.Item,{children:Object(b.jsx)(v.a.Link,{eventKey:z,children:"Conversations"})})}),Object(b.jsx)(h.a.Title,{children:Object(b.jsx)(v.a.Item,{children:Object(b.jsx)(v.a.Link,{eventKey:D,children:"Contacts"})})})]})}),Object(b.jsx)(h.a.Body,{children:Object(b.jsxs)(f.a.Content,{className:"left-tab-container border-right overflow-auto flex-grow-1",children:[Object(b.jsx)(f.a.Pane,{eventKey:z,children:0===C.length?Object(b.jsx)("p",{bg:"warning",className:"warning text-center",children:"You have no conversations yet"}):Object(b.jsx)(q,{})}),Object(b.jsx)(f.a.Pane,{eventKey:D,children:n.length>0?Object(b.jsx)(G,{}):Object(b.jsx)("p",{className:"warning text-center",children:"You have no contacts yet"})})]})}),Object(b.jsxs)("div",{className:"p-2 border-top border-right small",children:["Your Id: ",Object(b.jsx)("span",{className:"text-muted",children:t})]}),Object(b.jsx)(d.a,{onClick:function(){return y(!0)},className:"rounded-0",children:j===z?Object(b.jsxs)("span",{children:[Object(b.jsx)("i",{className:"fa fa-comments "}),Object(b.jsx)("span",{style:{marginLeft:"10px"},children:"New Conversation"})]}):Object(b.jsxs)("span",{children:[Object(b.jsx)("i",{className:"fa fa-id-card "}),Object(b.jsx)("span",{style:{marginLeft:"10px"},children:"New Contact"})]})})]}),Object(b.jsx)(g.a,{show:p,onHide:N,children:j===z?Object(b.jsx)(Y,{closeModal:N}):Object(b.jsx)(K,{closeModal:N})})]})})}var R=n(148);function W(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useCallback)((function(e){e&&e.scrollIntoView({smooth:!0})}),[]),s=L(),o=s.sendMessage,j=s.selectedConversation;return Object(b.jsxs)("div",{className:"d-flex flex-column flex-grow-1",children:[Object(b.jsx)("div",{className:"flex-grow-1 overflow-auto",children:0===j.messages.length?Object(b.jsx)("div",{className:"warning no-message d-flex align-items-center justify-content-center ",children:Object(b.jsxs)("p",{children:["Start a conversation with"," ".concat(j.recipients.map((function(e){return e.name})).join(", "))]})}):j.messages.map((function(e,t){var n=j.messages.length-1===t;return Object(b.jsx)("div",{className:"d-flex flex-column align-items-start justify-content-end px-3",children:Object(b.jsxs)("div",{ref:n?a:null,className:"my-1 d-flex flex-column ".concat(e.fromMe?"align-self-end align-items-end":"align-items-start"),children:[Object(b.jsx)("div",{style:{maxWidth:"75vw"},className:"rounded px-2 py-1  ".concat(e.fromMe?"text-white bg-secondary ":"bg-light"),children:e.text}),Object(b.jsx)("div",{className:"text-muted small ".concat(e.fromMe?"text-right":""),children:e.fromMe?"You":e.senderName})]})},t)}))}),Object(b.jsx)(l.a,{onSubmit:function(e){e.preventDefault(),o(j.recipients.map((function(e){return e.id})),n),r("")},children:Object(b.jsx)(l.a.Group,{className:"m-2",children:Object(b.jsxs)(R.a,{children:[Object(b.jsx)(l.a.Control,{as:"textarea",required:!0,value:n,onChange:function(e){return r(e.target.value)},style:{height:"75px",resize:"none"}}),Object(b.jsx)(d.a,{disabled:!n,style:{fontSize:"25px"},type:"submit",children:Object(b.jsx)("i",{className:"fa fa-paper-plane"})})]})})})]})}var U=n(144),V=function(){var e=P().toggleSidebar,t=L().selectedConversation;return Object(b.jsxs)(U.a,{style:{height:"10vh",color:"white"},bg:"dark",className:"d-flex justify-content-between px-3",children:[Object(b.jsx)(v.a,{children:Object(b.jsx)(d.a,{variant:"dark",onClick:e,children:Object(b.jsx)("i",{className:"fa fa-bars"})})}),t&&Object(b.jsx)(v.a,{style:{fontSize:"1.5em",fontWeight:"400"},children:t.recipients.map((function(e){return e.name}))})]})},A=function(e){var t=e.show,n=e.setShow,c=P().toggleSidebar,r=function(){n(!1),c()},a={backgroundColor:"#8BC6EC"};return Object(b.jsxs)(g.a,{centered:!0,className:"gradient-bg",show:t,onHide:r,backdrop:"static",keyboard:!1,children:[Object(b.jsx)(g.a.Header,{style:a,children:Object(b.jsx)(g.a.Title,{children:"Let's start!"})}),Object(b.jsx)(g.a.Body,{style:a,children:Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"First, you need to add your friends to your contacts."}),Object(b.jsx)("li",{children:"Then you need to start a conversation by selecting from your contacts."})]})}),Object(b.jsx)(g.a.Footer,{style:a,children:Object(b.jsx)(d.a,{variant:"primary",onClick:r,children:"Understood"})})]})};function Q(e){var t=e.id,n=Object(c.useState)(!1),r=Object(i.a)(n,2),a=r[0],s=r[1],o=L().selectedConversation;return Object(c.useEffect)((function(){!o&&s(!0)}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(V,{}),Object(b.jsxs)("div",{className:"gradient-bg d-flex",style:{height:"90vh"},children:[Object(b.jsx)(J,{id:t}),o&&Object(b.jsx)(W,{}),Object(b.jsx)(A,{show:a,setShow:s})]})]})}var X=function(){var e=O("id",null),t=Object(i.a)(e,2),n=t[0],c=t[1];return n?Object(b.jsx)(B,{id:n,children:Object(b.jsx)(T,{children:Object(b.jsx)(S,{children:Object(b.jsx)(E,{id:n,children:Object(b.jsx)(Q,{id:n})})})})}):Object(b.jsx)(x,{onIdSubmit:c})};n(130),n(131);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(X,{})}),document.getElementById("root"))},94:function(e,t,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.4d3f97c7.chunk.js.map