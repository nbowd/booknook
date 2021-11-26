(this.webpackJsonpbooknook=this.webpackJsonpbooknook||[]).push([[0],{12:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),r=s(5),n=s.n(r),i=(s(29),s(3)),o=(s(30),s(31),s(1));var l=function(){return Object(o.jsxs)("div",{className:"welcome",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Welcome to Booknook!"}),Object(o.jsx)("p",{children:"Get book recommendations for dozens of subjects"})]}),Object(o.jsxs)("div",{className:"get-started",children:[Object(o.jsx)("p",{children:"Getting Started:"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Type or scroll through the subjects list"}),Object(o.jsx)("li",{children:"Click 'Find Books' to get results"}),Object(o.jsx)("li",{children:"Click 'More Info' to see a book description and shopping link"})]})]}),Object(o.jsx)("div",{children:"To ensure fresh results, each selection is taken from a random sample of books tagged with that subject."})]})},d=s(4),j=s.n(d),u=s(8),b=(s(12),s(24));var h=function(e){var t=e.options,s=e.handleChange;return Object(o.jsx)(b.a,{className:"search-bar",menuPortalTarget:document.body,options:t,onChange:s})};var v=function(e){var t=e.message,s=e.className,c=e.onClick;return Object(o.jsx)("button",{className:s,onClick:c,children:t})},m=s(9),O=s.n(m);var x=function(e){var t=e.setResults,s={Fantasy:12442,"Science Fiction":15253,"Action & Adventure":1650,Mystery:4785,Horror:1775,Thriller:2059,"Historical Fiction":6844,Romance:19733,Magic:13930,"Graphic Novels":9748,"Short Story":1507,Juvenile:2369,Autobiography:2983,Biography:622100,Cooking:24697,Art:65208,"Self-help":3799,History:1639606,"True Crime":1138,Humor:20240,Essays:3603,Humanities:3560,Parenting:8174,Science:68592},a=Object(c.useState)(null),r=Object(i.a)(a,2),n=r[0],l=r[1],d=[];Object.keys(s).forEach((function(e){d.push({value:e.toLocaleLowerCase().replaceAll(" ","_"),label:e})}));var b=function(){var e=Object(u.a)(j.a.mark((function e(){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,O.a.get("/api/books",{params:{subject:n.value,amount:s[n.label]}});case 4:c=e.sent,a=c.data,t(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"search",children:[Object(o.jsxs)("div",{className:"search-bar-title",children:[Object(o.jsx)("h2",{children:"Select a Subject:"}),Object(o.jsx)(h,{options:d,handleChange:function(e){l(e)}})]}),Object(o.jsx)(v,{className:"search-button",message:"Find Books",onClick:b})]})},p=s.p+"static/media/default_book_cover.eca8f2f5.jpeg",k=s(23),f=s.n(k);s(75);var N=function(e){var t=e.open,s=e.close,c=e.props;if(!t)return null;var a=c.title,r=c.author,n=c.cover,i=c.link,l=c.description;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"overlay",onClick:s}),Object(o.jsxs)("div",{className:"modal",children:[Object(o.jsx)("div",{className:"cover",children:Object(o.jsx)("img",{src:n,alt:"book cover",className:"cover__full"})}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("div",{className:"heading",children:[Object(o.jsx)("h2",{className:"card__title",children:a}),Object(o.jsx)("h3",{className:"card__author",children:r})]}),Object(o.jsx)("div",{className:"modal-body",children:Object(o.jsxs)("div",{className:"desc",children:[Object(o.jsx)("div",{className:"description__heading",children:Object(o.jsx)("h4",{children:"Description:"})}),Object(o.jsx)("div",{style:{display:"table"},children:l?Object(o.jsx)("div",{style:{display:"table-cell",verticalAlign:"middle"},children:Object(o.jsx)(f.a,{className:"description",rows:2,maxRows:15,readOnly:!0,value:l})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"skeleton skeleton-text"}),Object(o.jsx)("div",{className:"skeleton skeleton-text"}),Object(o.jsx)("div",{className:"skeleton skeleton-text"}),Object(o.jsx)("div",{className:"skeleton skeleton-text"})]})})]})}),Object(o.jsx)("div",{children:i?Object(o.jsx)("a",{className:"shop-link",title:i,href:i,children:"Purchase"}):null}),Object(o.jsx)(v,{className:"close-modal",onClick:s,message:"\xd7"})]})]})]})};s(76);var g=function(e){var t=e.cover,s=e.title,a=e.author,r=e.id,n=(e.vendor,Object(c.useState)(!1)),l=Object(i.a)(n,2),d=l[0],b=l[1],h=Object(c.useState)({}),m=Object(i.a)(h,2),x=m[0],p=m[1],k=function(){var e=Object(u.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p({author:a,title:s,cover:t}),b(!0),e.next=4,O.a.get("/api/book",{params:{id:r,title:s,author:a}});case 4:c=e.sent,p({author:a,title:s,cover:t,description:f(c.data.bookDetails),link:c.data.vendor});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();d?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal");var f=function(e){return e.description?e.description.value?e.description.value:e.description:"No Description Found"};return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card__img-bg",children:Object(o.jsx)("img",{src:t,alt:"Cover for the book",className:"card__img"})}),Object(o.jsxs)("div",{className:"card__body",children:[Object(o.jsx)("h2",{className:"card__title",children:s}),Object(o.jsx)("h3",{className:"card__author",children:a})]}),Object(o.jsx)(v,{onClick:k,className:"card__button",message:"More Info"}),Object(o.jsx)(N,{props:x,open:d,close:function(){return b(!1)}})]})};var y=function(e){var t=e.results;return Object(o.jsx)("div",{className:"wrapper",children:t.map((function(e){return Object(o.jsx)(g,{id:e.key,cover:e.cover?e.cover:p,title:e.title,author:e.author,vendor:e.vendor},e.key)}))})};var _=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),s=t[0],a=t[1];return Object(o.jsxs)("div",{id:"app",children:[Object(o.jsxs)("div",{className:"intro",children:[Object(o.jsx)("h1",{className:"title",children:"Booknook"}),Object(o.jsx)(x,{setResults:a})]}),s?Object(o.jsx)(y,{results:s}):Object(o.jsx)(l,{})]})};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)("div",{className:"sapp",children:Object(o.jsx)(_,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.12564445.chunk.js.map