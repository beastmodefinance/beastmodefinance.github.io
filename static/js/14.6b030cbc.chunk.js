(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[14],{623:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(4),c=t.n(r),a=t(15),i=t(128),o=t.n(i),u=t(58),s=function(e,n){return new(new o.a(e).eth.Contract)(u,n)},b=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s(n,t),e.prev=1,e.next=4,a.methods.balanceOf(r).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,r){return e.apply(this,arguments)}}()},728:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return le}));var r=t(12),c=t(45),a=t(0),i=t(3),o=t(33),u=t(173),s=t(4),b=t.n(s),j=t(15),l=t(19),d=t(61),f=t(13),O=t.n(f),p=t(618),x=t(16),h=t(26),m=t(34),v=t(54),g=t(632),w=t(126),k=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(d.m)().account,i=Object(w.a)().fastRefresh;return Object(a.useEffect)((function(){c&&function(){var e=Object(j.a)(b.a.mark((function e(){var n,t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g.a.map((function(e){return{address:Object(m.d)(),name:"pendingEgg",params:[e.pid,c]}})),e.next=3,Object(h.a)(v,n);case 3:t=e.sent,a=g.a.map((function(e,n){return Object(x.a)(Object(x.a)({},e),{},{balance:new O.a(t[n])})})),r(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,i]),t},S=t(619),z=t(620),y=function(e){var n=e.value,t=e.decimals,c=e.fontSize,i=void 0===c?"40px":c,u=e.prefix,s=Object(z.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),b=s.countUp,j=s.update,l=Object(a.useRef)(j);return Object(a.useEffect)((function(){l.current(n)}),[n,l]),Object(r.jsxs)(o.A,{bold:!0,fontSize:i,children:[u,b]})},A=function(e){var n=e.earningsSum;return Object(d.m)().account?Object(r.jsx)(y,{value:n}):Object(r.jsx)(o.A,{color:"textDisabled",style:{lineHeight:"60px"},children:"Locked"})},E=function(e){var n=e.cakeBalance;return Object(d.m)().account?Object(r.jsx)(y,{value:n,fontSize:"24px"}):Object(r.jsx)(o.A,{color:"textDisabled",style:{lineHeight:"36px"},children:"Locked"})},B=t(105),T=t(268),C=t(81),N=t(623),R=function(e){var n=Object(a.useState)(new O.a(0)),t=Object(l.a)(n,2),r=t[0],c=t[1],i=Object(d.m)(),o=i.account,u=i.ethereum,s=Object(w.a)().fastRefresh;return Object(a.useEffect)((function(){o&&u&&function(){var n=Object(j.a)(b.a.mark((function n(){var t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(N.b)(u,e,o);case 2:t=n.sent,c(new O.a(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[o,u,e,s]),r},F=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(d.m)().account,i=Object(w.a)().fastRefresh;return Object(a.useEffect)((function(){c&&function(){var e=Object(j.a)(b.a.mark((function e(){var n,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g.a.map((function(e){return{address:Object(m.d)(),name:"pendingEgg",params:[e.pid,c]}})),e.next=3,Object(h.a)(v,n);case 3:t=e.sent,r(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,i]),t},H=t(608);function P(){var e=Object(c.a)(["\n  margin-top: 24px;\n"]);return P=function(){return e},e}function $(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return $=function(){return e},e}function D(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n"]);return D=function(){return e},e}function L(){var e=Object(c.a)(["\n  margin-bottom: 16px;\n"]);return L=function(){return e},e}function W(){var e=Object(c.a)(["\n  background-image: url('/images/beast-token-transparent.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  background-size: contain;\n  background-position-x: 75px;\n  background-position-y: -105px;\n  background-color: #100000;\n  min-height: 376px;\n  border-radius: 0;\n  border: 1px solid #ff9372;\n"]);return W=function(){return e},e}var J=Object(i.e)(o.h)(W()),M=i.e.div(L()),Q=i.e.img(D()),U=i.e.div($(),(function(e){return e.theme.colors.textSubtle})),V=i.e.div(P()),_=function(){var e=Object(a.useState)(!1),n=Object(l.a)(e,2),t=n[0],c=n[1],i=Object(d.m)().account,u=k(),s=Object(H.a)(R(Object(m.a)())),f=Object(B.g)().toNumber(),x=F().reduce((function(e,n){return e+new O.a(n).div(new O.a(10).pow(18)).toNumber()}),0),h=u.filter((function(e){return e.balance.toNumber()>0})),v=Object(p.a)(h.map((function(e){return e.pid}))).onReward,g=Object(a.useCallback)(Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,v();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[v]);return Object(r.jsx)(J,{children:Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.n,{size:"xl",mb:"24px",children:"Farms & Pools"}),Object(r.jsx)(Q,{src:"/images/beast-token-sm2.png",alt:"cake logo",width:64,height:64}),Object(r.jsxs)(M,{children:[Object(r.jsx)(U,{children:"BEAST to Harvest"}),Object(r.jsx)(A,{earningsSum:x}),Object(r.jsxs)(U,{children:["~$",(f*x).toFixed(2)]})]}),Object(r.jsxs)(M,{children:[Object(r.jsx)(U,{children:"BEAST in Wallet"}),Object(r.jsx)(E,{cakeBalance:s}),Object(r.jsxs)(U,{children:["~$",(f*s).toFixed(2)]})]}),Object(r.jsx)(V,{children:i?Object(r.jsx)(o.d,{id:"harvest-all",disabled:h.length<=0||t,onClick:g,fullWidth:!0,children:t?"Collecting BEAST":"Harvest all (".concat(h.length,")")}):Object(r.jsx)(S.a,{fullWidth:!0})})]})})},q=t(613);function G(){var e=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return G=function(){return e},e}function I(){var e=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0;\n  border: 1px solid #ff9372;\n  background-color: #100000;\n"]);return I=function(){return e},e}var K=Object(i.e)(o.h)(I()),X=i.e.div(G()),Y=function(){var e=function(){var e=Object(w.a)().slowRefresh,n=Object(a.useState)(),t=Object(l.a)(n,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var n,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(C.a)(T,Object(m.a)()),e.next=3,n.methods.totalSupply().call();case 3:t=e.sent,c(new O.a(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r}(),n=function(e){var n=Object(a.useState)(new O.a(0)),t=Object(l.a)(n,2),r=t[0],c=t[1],i=Object(w.a)().slowRefresh;return Object(a.useEffect)((function(){!function(){var e=Object(j.a)(b.a.mark((function e(){var n,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(C.a)(T,Object(m.a)()),e.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:t=e.sent,c(new O.a(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,i]),r}(Object(m.a)()),t=Object(B.c)(),c=Object(B.g)(),i=e?e.minus(n):new q.a(0),u=Object(H.a)(i),s=c.times(i),d=0;return t&&t[0]&&t[0].eggPerBlock&&(d=new q.a(t[0].eggPerBlock).div(new q.a(10).pow(18)).toNumber()),Object(r.jsx)(K,{children:Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.n,{size:"xl",mb:"24px",children:"BEAST Stats"}),Object(r.jsxs)(X,{children:[Object(r.jsx)(o.A,{fontSize:"14px",children:"Market Cap"}),Object(r.jsx)(y,{fontSize:"14px",value:Object(H.a)(s),decimals:0,prefix:"$"})]}),Object(r.jsxs)(X,{children:[Object(r.jsx)(o.A,{fontSize:"14px",children:"Total Minted"}),e&&Object(r.jsx)(y,{fontSize:"14px",value:Object(H.a)(e),decimals:0})]}),Object(r.jsxs)(X,{children:[Object(r.jsx)(o.A,{fontSize:"14px",children:"Total Burned"}),Object(r.jsx)(y,{fontSize:"14px",value:Object(H.a)(n),decimals:0})]}),Object(r.jsxs)(X,{children:[Object(r.jsx)(o.A,{fontSize:"14px",children:"Circulating Supply"}),u&&Object(r.jsx)(y,{fontSize:"14px",value:u,decimals:0})]}),Object(r.jsxs)(X,{children:[Object(r.jsx)(o.A,{fontSize:"14px",children:"New BEAST/block"}),Object(r.jsx)(o.A,{bold:!0,fontSize:"14px",children:d})]})]})})};function Z(){var e=Object(c.a)(["\n  padding-top: 8px;\n  font-size: 18px;\n  color: #c9c4d4;\n  border-radius: 0;\n"]);return Z=function(){return e},e}function ee(){var e=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0;\n  border: 1px solid #ff9372;\n  background-color: #100000;\n"]);return ee=function(){return e},e}var ne=Object(i.e)(o.h)(ee()),te=Object(i.e)(o.h)(Z()),re=function(){var e=Object(B.h)();return Object(r.jsx)(ne,{children:Object(r.jsxs)(o.i,{children:[Object(r.jsxs)(o.n,{size:"xl",mb:"24px",children:[Object(r.jsx)("div",{children:"Total Value Locked"}),Object(r.jsx)(te,{children:"Across all Farms and Pools"})]}),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(y,{value:e.toNumber(),prefix:"$",decimals:2})})]})})},ce=t(720);function ae(){var e=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0;\n  border: 1px solid #ff9372;\n  background-color: #100000;\n"]);return ae=function(){return e},e}var ie=Object(i.e)(o.h)(ae()),oe=function(){return Object(r.jsx)(ie,{children:Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.n,{size:"xl",mb:"24px",children:"Announcements"}),Object(r.jsx)(ce.a,{dataSource:{sourceType:"profile",screenName:"cz_binance"},options:{height:"320",chrome:"noheader, nofooter",width:"400"}})]})})};function ue(){var e=Object(c.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return ue=function(){return e},e}function se(){var e=Object(c.a)(["\n  align-items: center;\n  background-image: url('/images/beast-banner.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: contain;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n"]);return se=function(){return e},e}var be=i.e.div(se()),je=Object(i.e)(o.b)(ue(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),le=function(){return Object(r.jsxs)(u.a,{children:[Object(r.jsx)(be,{}),Object(r.jsx)("div",{children:Object(r.jsxs)(je,{children:[Object(r.jsx)(_,{}),Object(r.jsx)(oe,{}),Object(r.jsx)(Y,{}),Object(r.jsx)(re,{})]})})]})}}}]);
//# sourceMappingURL=14.6b030cbc.chunk.js.map