(this.webpackJsonpbooknook=this.webpackJsonpbooknook||[]).push([[0],{13:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),a=c(5),n=c.n(a),o=(c(29),c(3)),i=(c(30),c(31),c(1));var l=function(){return Object(i.jsxs)("div",{className:"welcome",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Welcome to Booknook!"}),Object(i.jsx)("p",{children:"Get book recommendations for dozens of subjects"})]}),Object(i.jsxs)("div",{className:"get-started",children:[Object(i.jsx)("p",{children:"Getting Started:"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Type or scroll through the subjects list"}),Object(i.jsx)("li",{children:"Click 'Find Books' to get results"}),Object(i.jsx)("li",{children:"Click 'More Info' to see the book description and shopping link"})]})]}),Object(i.jsx)("div",{children:"Each selection of results is taken from a random sample of the total books tagged with that subject."})]})},j=c(4),d=c.n(j),u=c(8),b=(c(13),c(12)),h=c(24);var v=function(e){var t=e.options,c=e.handleChange;return Object(i.jsx)(h.a,{className:"search-bar",styles:{menuPortal:function(e){return Object(b.a)(Object(b.a)({},e),{},{zIndex:9999,backgroundColor:"red"})}},menuPortalTarget:document.body,options:t,onChange:c})};var p=function(e){var t=e.message,c=e.className,s=e.onClick;return Object(i.jsx)("button",{className:c,onClick:s,children:t})},O=c(9),m=c.n(O);var x=function(e){var t=e.setResults,c={Fantasy:12442,"Science Fiction":15253,"Action & Adventure":1650,Mystery:4785,Horror:1775,Thriller:2059,"Historical Fiction":6844,Romance:19733,Magic:13930,"Graphic Novels":9748,"Short Story":1507,Juvenile:2369,Autobiography:2983,Biography:622100,Cooking:24697,Art:65208,"Self-help":3799,History:1639606,"True Crime":1138,Humor:20240,Essays:3603,Humanities:3560,Parenting:8174,Science:68592},r=Object(s.useState)(null),a=Object(o.a)(r,2),n=a[0],l=a[1],j=[];Object.keys(c).forEach((function(e){j.push({value:e.toLocaleLowerCase().replaceAll(" ","_"),label:e})}));var b=function(){var e=Object(u.a)(d.a.mark((function e(){var s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,m.a.get("http://localhost:3001/api/books",{params:{subject:n.value,amount:c[n.label]}});case 4:s=e.sent,r=s.data,t(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"search",children:[Object(i.jsxs)("div",{className:"search-bar-title",children:[Object(i.jsx)("h2",{children:"Select a Subject:"}),Object(i.jsx)(v,{options:j,handleChange:function(e){l(e)}})]}),Object(i.jsx)(p,{className:"search-button",message:"Find Books",onClick:b})]})},f=c.p+"static/media/default_book_cover.a14e6a45.jpeg";c(68);var k=function(e){var t=e.open,c=e.close,s=e.props;if(!t)return null;var r=s.title,a=s.author,n=s.cover,o=s.link,l=s.description;return console.log(o),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"overlay",onClick:c}),Object(i.jsxs)("div",{className:"modal",children:[Object(i.jsx)("div",{className:"cover",children:Object(i.jsx)("img",{src:n,alt:"book cover",className:"cover__full"})}),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsxs)("div",{className:"heading",children:[Object(i.jsx)("h2",{children:r}),Object(i.jsx)("h4",{children:a})]}),Object(i.jsx)("p",{children:l}),Object(i.jsx)("a",{className:"shop-link",href:o,children:o?"Purchase":null}),Object(i.jsx)(p,{className:"close-modal",onClick:c,message:"\xd7"})]})]})]})};c(69);var g=function(e){var t=e.cover,c=e.title,r=e.author,a=e.id,n=(e.vendor,Object(s.useState)(!1)),l=Object(o.a)(n,2),j=l[0],b=l[1],h=Object(s.useState)({}),v=Object(o.a)(h,2),O=v[0],x=v[1],f=function(){var e=Object(u.a)(d.a.mark((function e(){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3001/api/book",{params:{id:a,title:c,author:r}});case 2:s=e.sent,console.log(s),x({author:r,title:c,cover:t,description:s.data.description.description?s.data.description.description.value:"No Description Available",link:s.data.vendor}),b(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card__img-bg",children:Object(i.jsx)("img",{src:t,alt:"Cover for the book",className:"card__img"})}),Object(i.jsxs)("div",{className:"card__body",children:[Object(i.jsx)("h2",{className:"card__title",children:c}),Object(i.jsx)("h3",{className:"card__author",children:r})]}),Object(i.jsx)(p,{onClick:f,className:"card__button",message:"More Info"}),Object(i.jsx)(k,{props:O,open:j,close:function(){return b(!1)}})]})};var N=function(e){var t=e.results;return Object(i.jsx)("div",{className:"wrapper",children:t.map((function(e){return Object(i.jsx)(g,{id:e.key,cover:e.cover?e.cover:f,title:e.title,author:e.author,vendor:e.vendor},e.key)}))})};var y=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(i.jsxs)("div",{id:"app",children:[Object(i.jsxs)("div",{className:"intro",children:[Object(i.jsx)("h1",{className:"title",children:"Booknook"}),Object(i.jsx)(x,{setResults:r})]}),c?Object(i.jsx)(N,{results:c}):Object(i.jsx)(l,{})]})};n.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)("div",{className:"sapp",children:Object(i.jsx)(y,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.b69091c2.chunk.js.map