"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[507],{2507:function(n,r,e){e.r(r),e.d(r,{default:function(){return A}});var t,o,i,c,a,u,d,s=e(2791),l=e(5861),p=e(9439),h=e(4687),x=e.n(h),f=e(5294),v=e(168),b=e(4894),g=b.ZP.button(t||(t=(0,v.Z)(["\n  width: 150px;\n  min-height: 40px;\n  background-color: blue;\n  color: white;\n  border: none;\n  cursor: pointer;\n  margin-right: 10px;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n\n   &:hover {\n    background-color: darkblue;\n"]))),k=e(184),m=function(n){var r=n.name,e=(n.id,n.onClick);return(0,k.jsx)(g,{text:r,onClick:e,children:r})},w=b.ZP.div(o||(o=(0,v.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),Z=b.ZP.ul(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n"]))),j=e(1413),y=e(5984),_=e(9434),P=e(3707),C=e(6351),q=b.ZP.div(c||(c=(0,v.Z)(["\n  width: 450px;\n  height: 450px;\n  overflow: scroll;\n  border: 1px solid black;\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n  border: 1px solid black;\n"]))),S=b.ZP.div(a||(a=(0,v.Z)(["\n  width: 200px;\n  height: 100px;\n  overflow: hidden;\n  background-color: grey;\n"]))),D=b.ZP.img(u||(u=(0,v.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),E=b.ZP.button(d||(d=(0,v.Z)(["\n  width: 100px;\n  min-height: 20px;\n  background-color: blue;\n  color: white;\n  border: none;\n  cursor: pointer;\n  margin-right: 10px;\n  border-radius: 10px;\n  padding: 5px;\n  transition: all 0.3s ease;\n  margin-top: 15px;\n\n   &:hover {\n    background-color: darkblue;\n"]))),F=function(n){var r=n.products,e=(0,_.I0)(),t=(0,_.v9)(C.$);return(0,k.jsx)(q,{children:r&&r.map((function(n){return(0,k.jsxs)("div",{children:[(0,k.jsx)(S,{children:(0,k.jsx)(D,{src:n.url,alt:n.name})}),(0,k.jsx)("h3",{children:n.name}),(0,k.jsx)("p",{children:n.price}),(0,k.jsx)(E,{onClick:function(){return function(n){var r=t.find((function(r){return r._id===n._id}));e(r?(0,P.Qd)({_id:r._id,quantity:r.quantity+1}):(0,P.Xq)((0,j.Z)((0,j.Z)({},n),{},{quantity:1})))}(n)},children:"Add to cart"})]},(0,y.x0)())}))})},I=function(){var n=(0,s.useState)([]),r=(0,p.Z)(n,2),e=r[0],t=r[1],o=(0,s.useState)([]),i=(0,p.Z)(o,2),c=i[0],a=i[1],u=(0,s.useState)(null),d=(0,p.Z)(u,2),h=d[0],v=d[1],b=function(){var n=(0,l.Z)(x().mark((function n(){var r;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.Z.get("https://delivery-app-backend-nwp2.onrender.com/api/shops");case 3:r=n.sent,t(r.data),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Downloading shops error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=(0,l.Z)(x().mark((function n(r){var e,t,o;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.Z.get("https://delivery-app-backend-nwp2.onrender.com/api/products");case 3:e=n.sent,t=e.data,o=t.filter((function(n){return n.shopId===r})),a(o),v(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("Error loading products:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(r){return n.apply(this,arguments)}}();return(0,s.useEffect)((function(){b()}),[]),(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(w,{children:[(0,k.jsx)(Z,{children:e.map((function(n){return(0,k.jsx)(m,{name:n.name,id:n._id,onClick:function(){return g(n._id)}},(0,y.x0)())}))}),h&&(0,k.jsx)(F,{products:c})]})})},$={display:"flex",flexDirection:"row"};function A(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h1",{children:"Shops"}),(0,k.jsx)("div",{style:$,children:(0,k.jsx)(I,{})})]})}},6351:function(n,r,e){e.d(r,{$:function(){return t}});var t=function(n){return n.cartProducts.products}}}]);
//# sourceMappingURL=507.7cdb5a3d.chunk.js.map