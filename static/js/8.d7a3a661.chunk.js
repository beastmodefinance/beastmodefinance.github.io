(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[8],{612:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(45),c=t(12),a=t(0),o=t.n(a),i=t(3);function s(){var e=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return s=function(){return e},e}var u=i.e.div(s(),(function(e){return e.size}),(function(e){return e.size})),b=function(e){var n,t=e.size,r=void 0===t?"md":t,o=Object(a.useContext)(i.a).spacing;switch(r){case"lg":n=o[6];break;case"sm":n=o[2];break;case"md":default:n=o[4]}return Object(c.jsx)(u,{size:n})};function l(){var e=Object(r.a)(["\n  flex: 1;\n  text-align: center;\n"]);return l=function(){return e},e}function j(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: #abc12300;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return j=function(){return e},e}var d=i.e.div(j(),(function(e){return e.theme.spacing[4]})),x=i.e.div(l()),f=function(e){var n=e.children,t=o.a.Children.toArray(n).length;return Object(c.jsx)(d,{children:o.a.Children.map(n,(function(e,n){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x,{children:e}),n<t-1&&Object(c.jsx)(b,{})]})}))})}},615:function(e,n,t){"use strict";t.d(n,"a",(function(){return w}));var r=t(45),c=t(12),a=(t(0),t(3)),o=t(613),i=t(33),s=t(169);function u(){var e=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return u=function(){return e},e}function b(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return b=function(){return e},e}var l=a.e.div(b(),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),j=a.e.input(u(),(function(e){return e.theme.colors.primary})),d=function(e){var n=e.endAdornment,t=e.onChange,r=e.placeholder,a=e.startAdornment,o=e.value;return Object(c.jsxs)(l,{children:[!!a&&a,Object(c.jsx)(j,{placeholder:r,value:o,onChange:t}),!!n&&n]})};function x(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return x=function(){return e},e}function f(){var e=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return f=function(){return e},e}function O(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return O=function(){return e},e}function p(){var e=Object(r.a)(["\n  width: ","px;\n"]);return p=function(){return e},e}function m(){var e=Object(r.a)([""]);return m=function(){return e},e}var h=a.e.div(m()),v=a.e.div(p(),(function(e){return e.theme.spacing[3]})),k=a.e.div(O()),g=a.e.div(f(),(function(e){return e.theme.colors.primary})),y=a.e.span(x(),(function(e){return e.theme.colors.primary})),w=function(e){var n=e.max,t=e.symbol,r=e.onChange,a=e.onSelectMax,u=e.value,b=e.depositFeeBP,l=void 0===b?0:b,j=Object(s.a)();return Object(c.jsxs)(h,{children:[Object(c.jsxs)(g,{children:[n.toLocaleString()," ",t," ",j(526,"Available")]}),Object(c.jsx)(d,{endAdornment:Object(c.jsxs)(k,{children:[Object(c.jsx)(y,{children:t}),Object(c.jsx)(v,{}),Object(c.jsx)("div",{children:Object(c.jsx)(i.d,{size:"sm",onClick:a,children:j(452,"Max")})})]}),onChange:r,placeholder:"0",value:u}),l>0?Object(c.jsxs)(g,{children:["Deposit Fee: ",new o.a(u||0).times(l/1e4).toString()," ",t]}):null]})}},623:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(4),c=t.n(r),a=t(15),o=t(128),i=t.n(o),s=t(58),u=function(e,n){return new(new i.a(e).eth.Contract)(s,n)},b=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){var a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u(n,t),e.prev=1,e.next=4,a.methods.balanceOf(r).call();case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,r){return e.apply(this,arguments)}}()},624:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(613);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(1);var c=new r.a(10512e3)},625:function(e,n,t){"use strict";var r=t(45);function c(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return c=function(){return e},e}var a=t(3).e.div(c());n.a=a},626:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return a}));var r=t(12),c=(t(0),t(33)),a=function(){return Object(r.jsx)(c.A,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"No Fees"})},o=function(){return Object(r.jsx)(c.A,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"Core"})},i=function(){return Object(r.jsx)(c.A,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.l,{}),children:"Community"})},s=function(){return Object(r.jsx)(c.A,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.c,{}),children:"Binance"})}},627:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return d}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(61),s=(t(617),t(50)),u=t(103),b=t(610),l=t(609),j=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)();return{onApprove:Object(o.useCallback)(Object(a.a)(c.a.mark((function a(){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(e,r,t);case 3:return o=c.sent,n(Object(u.a)(t)),c.abrupt("return",o);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[t,n,e,r])}},d=function(e,n){var t=Object(s.b)(),r=Object(i.m)().account,j=Object(l.e)(n);return{onApprove:Object(o.useCallback)(Object(a.a)(c.a.mark((function a(){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(e,j,r);case 3:return o=c.sent,t(Object(u.e)(n,r)),c.abrupt("return",o);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[r,t,e,j,n])}}},628:function(e,n,t){"use strict";t.d(n,"b",(function(){return j}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(61),s=t(50),u=t(103),b=t(610),l=t(609),j=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.b)(),r=Object(i.m)(),j=r.account,d=Object(l.d)(),x=Object(l.e)(e),f=Object(o.useCallback)(function(){var r=Object(a.a)(c.a.mark((function r(a){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==e){r.next=5;break}return r.next=3,Object(b.i)(d,0,a,j);case 3:r.next=12;break;case 5:if(!n){r.next=10;break}return r.next=8,Object(b.e)(x,a,j);case 8:r.next=12;break;case 10:return r.next=12,Object(b.d)(x,a,j);case 12:t(Object(u.h)(e,j)),t(Object(u.f)(e,j));case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[j,t,n,d,x,e]);return{onStake:f}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)();return{onStake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.i)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},629:function(e,n,t){"use strict";t.d(n,"b",(function(){return d}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(61),s=t(50),u=t(103),b=t(610),l=t(609),j=[5,6,3,1,22,23],d=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)(),d=Object(l.e)(e),x=j.includes(e);return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i,s,l;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e){c.next=7;break}return c.next=3,Object(b.j)(r,0,o,t);case 3:i=c.sent,console.info(i),c.next=18;break;case 7:if(!x){c.next=14;break}return c.next=10,Object(b.c)(d,o,t);case 10:s=c.sent,console.info(s),c.next=18;break;case 14:return c.next=16,Object(b.f)(d,o,t);case 16:l=c.sent,console.info(l);case 18:n(Object(u.h)(e,t)),n(Object(u.f)(e,t)),n(Object(u.g)(e,t));case 21:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,x,r,d,e])}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)();return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.j)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},725:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Ee}));var r=t(12),c=t(16),a=t(18),o=t(45),i=t(0),s=t(23),u=t(50),b=t(13),l=t.n(b),j=t(3),d=t(61),x=t(624),f=t(625),O=t(175),p=t(105),m=t(126),h=t(103),v=t(33),k=t(169);function g(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"]);return g=function(){return e},e}var y=j.e.div(g(),(function(e){return e.theme.colors.primary})),w=function(e){var n=e.onClick,t=e.expanded;return Object(r.jsxs)(y,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(r.jsx)(v.B,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(r.jsx)(v.k,{}):Object(r.jsx)(v.j,{})]})};w.defaultProps={expanded:!1};var S=w,C=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,r=e.tokenAddresses,c="BNB"===t?"ETH":n[56],a=r[56];return"".concat(c,"/").concat(a)};function T(){var e=Object(o.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"]);return T=function(){return e},e}function B(){var e=Object(o.a)(["\n  margin-top: 24px;\n"]);return B=function(){return e},e}var A=j.e.div(B()),P=Object(j.e)(v.r)(T(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),I=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,c=e.removed,a=e.totalValueFormated,o=e.lpLabel,i=e.quoteTokenAdresses,s=e.quoteTokenSymbol,u=e.tokenAddresses,b=Object(k.a)(),l=C({quoteTokenAdresses:i,quoteTokenSymbol:s,tokenAddresses:u});return Object(r.jsxs)(A,{children:[Object(r.jsxs)(v.m,{justifyContent:"space-between",children:[Object(r.jsxs)(v.B,{children:[b(316,"Stake"),":"]}),Object(r.jsx)(P,{href:n?"https://exchange.goosedefi.com/#/swap/".concat(u[56]):"https://exchange.goosedefi.com/#/add/".concat(l),children:o})]}),!c&&Object(r.jsxs)(v.m,{justifyContent:"space-between",children:[Object(r.jsxs)(v.B,{children:[b(23,"Total Liquidity"),":"]}),Object(r.jsx)(v.B,{children:a})]}),Object(r.jsx)(v.m,{justifyContent:"flex-start",children:Object(r.jsx)(v.q,{external:!0,href:t,bold:!1,children:b(356,"View on BscScan")})})]})},q=t(626);function D(){var e=Object(o.a)(["\n  margin-left: 4px;\n"]);return D=function(){return e},e}function F(){var e=Object(o.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);return F=function(){return e},e}var z=Object(j.e)(v.m)(F()),E=Object(j.e)(v.A)(D()),L=function(e){var n=e.lpLabel,t=e.multiplier,c=(e.risk,e.farmImage),a=e.tokenSymbol,o=e.depositFee;return Object(r.jsxs)(z,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(r.jsx)(v.p,{src:"/images/farms/".concat(c,".png"),alt:a,width:64,height:64}),Object(r.jsxs)(v.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(r.jsx)(v.n,{mb:"4px",children:n}),Object(r.jsxs)(v.m,{justifyContent:"center",children:[0===o?Object(r.jsx)(q.d,{}):null,Object(r.jsx)(E,{variant:"secondary",children:t})]})]})]})},N=t(4),M=t.n(N),Q=t(15),R=t(623),H=t(619),U=t(627),W=t(628),G=t(629),V=t(608),X=t(612),J=t(615),$=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,o=e.tokenName,s=void 0===o?"":o,u=e.depositFeeBP,b=void 0===u?0:u,l=Object(i.useState)(""),j=Object(a.a)(l,2),d=j[0],x=j[1],f=Object(i.useState)(!1),O=Object(a.a)(f,2),p=O[0],m=O[1],h=Object(k.a)(),g=Object(i.useMemo)((function(){return Object(V.b)(n)}),[n]),y=Object(i.useCallback)((function(e){x(e.currentTarget.value)}),[x]),w=Object(i.useCallback)((function(){x(g)}),[g,x]);return Object(r.jsxs)(v.v,{title:"".concat(h(316,"Deposit")," ").concat(s," Tokens"),onDismiss:c,children:[Object(r.jsx)(J.a,{value:d,onSelectMax:w,onChange:y,max:g,symbol:s,depositFeeBP:b}),Object(r.jsxs)(X.a,{children:[Object(r.jsx)(v.d,{variant:"secondary",onClick:c,children:h(462,"Cancel")}),Object(r.jsx)(v.d,{disabled:p,onClick:Object(Q.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,t(d);case 3:m(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:p?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})},_=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,o=e.tokenName,s=void 0===o?"":o,u=Object(i.useState)(""),b=Object(a.a)(u,2),l=b[0],j=b[1],d=Object(i.useState)(!1),x=Object(a.a)(d,2),f=x[0],O=x[1],p=Object(k.a)(),m=Object(i.useMemo)((function(){return Object(V.b)(c)}),[c]),h=Object(i.useCallback)((function(e){j(e.currentTarget.value)}),[j]),g=Object(i.useCallback)((function(){j(m)}),[m,j]);return Object(r.jsxs)(v.v,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(r.jsx)(J.a,{onSelectMax:g,onChange:h,value:l,max:m,symbol:s}),Object(r.jsxs)(X.a,{children:[Object(r.jsx)(v.d,{variant:"secondary",onClick:t,children:p(462,"Cancel")}),Object(r.jsx)(v.d,{disabled:f,onClick:Object(Q.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,n(l);case 3:O(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:f?p(488,"Pending Confirmation"):p(464,"Confirm")})]})]})};function K(){var e=Object(o.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);return K=function(){return e},e}var Y=j.e.div(K()),Z=function(e){var n=e.stakedBalance,t=e.tokenBalance,c=e.tokenName,o=e.pid,i=e.depositFeeBP,s=Object(k.a)(),u=Object(W.a)(o).onStake,b=Object(G.a)(o).onUnstake,l=Object(V.a)(n),j=l.toLocaleString(),d=Object(v.F)(Object(r.jsx)($,{max:t,onConfirm:u,tokenName:c,depositFeeBP:i})),x=Object(a.a)(d,1)[0],f=Object(v.F)(Object(r.jsx)(_,{max:n,onConfirm:b,tokenName:c})),O=Object(a.a)(f,1)[0];return Object(r.jsxs)(v.m,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(v.n,{color:0===l?"textDisabled":"text",children:j}),0===l?Object(r.jsx)(v.d,{onClick:x,children:s(999,"Stake")}):Object(r.jsxs)(Y,{children:[Object(r.jsx)(v.o,{variant:"tertiary",onClick:O,mr:"6px",children:Object(r.jsx)(v.u,{color:"primary"})}),Object(r.jsx)(v.o,{variant:"tertiary",onClick:x,children:Object(r.jsx)(v.a,{color:"primary"})})]})]})},ee=t(618);function ne(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);return ne=function(){return e},e}var te=j.e.div(ne()),re=function(e){var n=e.earnings,t=e.pid,c=Object(i.useState)(!1),o=Object(a.a)(c,2),s=o[0],u=o[1],b=Object(ee.b)(t).onReward,l=Object(V.a)(n),j=l.toLocaleString();return Object(r.jsxs)(v.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(v.n,{color:0===l?"textDisabled":"text",children:j}),Object(r.jsx)(te,{children:Object(r.jsx)(v.d,{disabled:0===l||s,onClick:Object(Q.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,b();case 3:u(!1);case 4:case"end":return e.stop()}}),e)}))),children:"Harvest"})})]})};function ce(){var e=Object(o.a)(["\n  padding-top: 16px;\n"]);return ce=function(){return e},e}var ae=j.e.div(ce()),oe=function(e){var n=e.farm,t=e.ethereum,c=e.account,o=Object(k.a)(),s=Object(i.useState)(!1),u=Object(a.a)(s,2),b=u[0],l=u[1],j=Object(p.a)(n.pid),d=j.pid,x=j.lpAddresses,f=j.tokenAddresses,O=j.isTokenOnly,m=j.depositFeeBP,h=Object(p.b)(d),g=h.allowance,y=h.tokenBalance,w=h.stakedBalance,S=h.earnings,C=x[56],T=f[56],B=n.lpSymbol.toUpperCase(),A=c&&g&&g.isGreaterThan(0),P=Object(i.useMemo)((function(){return O?Object(R.a)(t,T):Object(R.a)(t,C)}),[t,C,T,O]),I=Object(U.a)(P).onApprove,q=Object(i.useCallback)(Object(Q.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,I();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[I]);return Object(r.jsxs)(ae,{children:[Object(r.jsxs)(v.m,{children:[Object(r.jsx)(v.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"BEAST"}),Object(r.jsx)(v.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:o(999,"Earned")})]}),Object(r.jsx)(re,{earnings:S,pid:d}),Object(r.jsxs)(v.m,{children:[Object(r.jsx)(v.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:B}),Object(r.jsx)(v.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:o(999,"Staked")})]}),c?A?Object(r.jsx)(Z,{stakedBalance:w,tokenBalance:y,tokenName:B,pid:d,depositFeeBP:m}):Object(r.jsx)(v.d,{mt:"8px",fullWidth:!0,disabled:b,onClick:q,children:o(999,"Approve Contract")}):Object(r.jsx)(H.a,{mt:"8px",fullWidth:!0})]})},ie=function(e){var n,t=e.numberOfDays,r=e.farmApy/100,c=t/365,a=1e3/e.cakePrice,o=a*Math.pow(1+r/365,365*c);return n=o-a,Math.round(100*n)/100},se=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)};function ue(){var e=Object(o.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);return ue=function(){return e},e}function be(){var e=Object(o.a)(["\n  margin-bottom: '10px';\n"]);return be=function(){return e},e}function le(){var e=Object(o.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);return le=function(){return e},e}var je=j.e.div(le()),de=j.e.div(be()),xe=Object(j.e)(v.B)(ue()),fe=function(e){var n=e.onDismiss,t=e.lpLabel,c=e.quoteTokenAdresses,a=e.quoteTokenSymbol,o=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(k.a)(),b=C({quoteTokenAdresses:c,quoteTokenSymbol:a,tokenAddresses:o}),j=s.times(new l.a(100)).toNumber(),d=1e3/i.toNumber(),x=ie({numberOfDays:1,farmApy:j,cakePrice:i}),f=ie({numberOfDays:7,farmApy:j,cakePrice:i}),O=ie({numberOfDays:30,farmApy:j,cakePrice:i}),p=ie({numberOfDays:365,farmApy:j,cakePrice:i});return Object(r.jsxs)(v.v,{title:"ROI",onDismiss:n,children:[Object(r.jsxs)(je,{children:[Object(r.jsx)(de,{children:Object(r.jsx)(v.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"Timeframe")})}),Object(r.jsx)(de,{children:Object(r.jsx)(v.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"ROI")})}),Object(r.jsx)(de,{children:Object(r.jsx)(v.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:"BEAST per $1000"})}),Object(r.jsx)(de,{children:Object(r.jsx)(v.B,{children:"1d"})}),Object(r.jsx)(de,{children:Object(r.jsxs)(v.B,{children:[se({amountEarned:x,amountInvested:d}),"%"]})}),Object(r.jsx)(de,{children:Object(r.jsx)(v.B,{children:x})}),Object(r.jsx)(de,{children:Object(r.jsx)(v.B,{children:"7d"})}),Object(r.jsx)(de,{children:Object(r.jsxs)(v.B,{children:[se({amountEarned:f,amountInvested:d}),"%"]})}),Object(r.jsx)(de,{children:Object(r.jsx)(v.B,{children:f})}),Object(r.jsx)(de,{children:Object(r.jsx)(v.B,{children:"30d"})}),Object(r.jsx)(de,{children:Object(r.jsxs)(v.B,{children:[se({amountEarned:O,amountInvested:d}),"%"]})}),Object(r.jsx)(de,{children:Object(r.jsx)(v.B,{children:O})}),Object(r.jsx)(de,{children:Object(r.jsx)(v.B,{children:"365d(APY)"})}),Object(r.jsx)(de,{children:Object(r.jsxs)(v.B,{children:[se({amountEarned:p,amountInvested:d}),"%"]})}),Object(r.jsx)(de,{children:Object(r.jsx)(v.B,{children:p})})]}),Object(r.jsx)(xe,{fontSize:"12px",color:"textSubtle",children:u(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(r.jsx)(v.m,{justifyContent:"center",children:Object(r.jsxs)(v.r,{href:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:[u(999,"Get")," ",t]})})]})},Oe=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,c=e.quoteTokenSymbol,o=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(v.F)(Object(r.jsx)(fe,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:c,tokenAddresses:o,cakePrice:i,apy:s})),b=Object(a.a)(u,1)[0];return Object(r.jsx)(v.o,{onClick:b,variant:"text",size:"sm",ml:"4px",children:Object(r.jsx)(v.g,{})})};function pe(){var e=Object(o.a)(["\n  height: ",";\n  overflow: hidden;\n"]);return pe=function(){return e},e}function me(){var e=Object(o.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);return me=function(){return e},e}function he(){var e=Object(o.a)(["\n  align-self: baseline;\n  background: #100000;\n  border-radius: 0;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);return he=function(){return e},e}function ve(){var e=Object(o.a)(["\n  background: linear-gradient(45deg,\n    rgba(255, 0, 0, 1)      0%,\n    rgba(255, 154, 0, 1)   10%,\n    rgba(197, 20, 20, 1)   20%,\n    rgba(214, 49, 49, 1)   30%,\n    rgba(218, 49, 49, 1)   40%,\n    rgba(214, 191, 27, 1)  50%,\n    rgba(222, 59, 59, 1)   60%,\n    rgba(234, 55, 55, 1)   70%,\n    rgba(208, 62, 62, 1)   80%,\n    rgba(216, 123, 28, 1)  90%,\n    rgba(220, 186, 63, 1) 100%);\n\n  background-size: 300% 300%;\n  border-radius: 0;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n  animation: "," 2s linear infinite;\n"]);return ve=function(){return e},e}function ke(){var e=Object(o.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return ke=function(){return e},e}var ge=Object(j.f)(ke()),ye=j.e.div(ve(),ge),we=j.e.div(he()),Se=j.e.div(me(),(function(e){return e.theme.colors.borderColor})),Ce=j.e.div(pe(),(function(e){return e.expanded?"100%":"0px"})),Te=function(e){var n=e.farm,t=e.removed,c=e.cakePrice,o=e.bnbPrice,s=e.ethereum,u=e.account,b=Object(k.a)(),j=Object(i.useState)(!1),d=Object(a.a)(j,2),x=d[0],f=d[1],O=n.isTokenOnly?n.tokenSymbol.toLowerCase():"".concat(n.tokenSymbol.toLowerCase(),"-").concat(n.quoteTokenSymbol.toLowerCase()),p=Object(i.useMemo)((function(){return n.lpTotalInQuoteToken?"BNB"===n.quoteTokenSymbol?o.times(n.lpTotalInQuoteToken):"CAKE"===n.quoteTokenSymbol?c.times(n.lpTotalInQuoteToken):n.lpTotalInQuoteToken:null}),[o,c,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),m=p?"$".concat(Number(p).toLocaleString(void 0,{maximumFractionDigits:0})):"-",h=n.lpSymbol,g=n.apy&&n.apy.times(new l.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),y=n.quoteTokenAdresses,w=n.quoteTokenSymbol,C=n.tokenAddresses,T=n.risk;return Object(r.jsxs)(we,{style:{border:"BEAST"===n.tokenSymbol?"0":"1px solid #ff9372"},children:["BEAST"===n.tokenSymbol&&Object(r.jsx)(ye,{}),Object(r.jsx)(L,{lpLabel:h,multiplier:n.multiplier,risk:T,depositFee:n.depositFeeBP,farmImage:O,tokenSymbol:n.tokenSymbol}),!t&&Object(r.jsxs)(v.m,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsxs)(v.B,{children:[b(352,"APR"),":"]}),Object(r.jsx)(v.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Oe,{lpLabel:h,quoteTokenAdresses:y,quoteTokenSymbol:w,tokenAddresses:C,cakePrice:c,apy:n.apy}),g,"%"]}):Object(r.jsx)(v.y,{height:24,width:80})})]}),Object(r.jsxs)(v.m,{justifyContent:"space-between",children:[Object(r.jsxs)(v.B,{children:[b(318,"Earn"),":"]}),Object(r.jsx)(v.B,{bold:!0,children:"BEAST"})]}),Object(r.jsxs)(v.m,{justifyContent:"space-between",children:[Object(r.jsx)(v.B,{style:{fontSize:"24px"},children:"Deposit Fee:"}),Object(r.jsxs)(v.B,{bold:!0,style:{fontSize:"24px"},children:[n.depositFeeBP/100,"%"]})]}),Object(r.jsx)(oe,{farm:n,ethereum:s,account:u}),Object(r.jsx)(Se,{}),Object(r.jsx)(S,{onClick:function(){return f(!x)},expanded:x}),Object(r.jsx)(Ce,{expanded:x,children:Object(r.jsx)(I,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://bscscan.com/token/".concat(n.tokenAddresses[56]):"https://bscscan.com/token/".concat(n.lpAddresses[56]),totalValueFormated:m,lpLabel:h,quoteTokenAdresses:y,quoteTokenSymbol:w,tokenAddresses:C})})]})},Be=t(64);function Ae(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"]);return Ae=function(){return e},e}function Pe(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return Pe=function(){return e},e}var Ie=function(e){var n=e.stakedOnly,t=e.setStakedOnly,c=Object(s.g)(),a=c.url,o=c.isExact,i=Object(k.a)();return Object(r.jsxs)(qe,{children:[Object(r.jsxs)(De,{children:[Object(r.jsx)(v.C,{checked:n,onChange:function(){return t(!n)}}),Object(r.jsxs)(v.B,{children:[" ",i(699,"Staked only")]})]}),Object(r.jsxs)(v.e,{activeIndex:o?0:1,size:"sm",variant:"subtle",children:[Object(r.jsx)(v.f,{as:Be.b,to:"".concat(a),children:i(698,"Active")}),Object(r.jsx)(v.f,{as:Be.b,to:"".concat(a,"/history"),children:i(700,"Inactive")})]})]})},qe=j.e.div(Pe()),De=j.e.div(Ae(),v.B);function Fe(){var e=Object(o.a)(["\n  align-items: center;\n  background-image: url('/images/beast-banner.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: contain;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  min-height: 116px;\n  text-align: center;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    height: 116px;\n    width: 100%;\n    color: #ffffff;\n    font-size: 20px;\n    text-align: left;\n    text-shadow:\n     -1px -1px 0 #000,\n      1px -1px 0 #000,\n      -1px 1px 0 #000,\n       1px 1px 0 #000;\n\n    div:nth-child(1) {\n      margin-bottom: 8px;\n      font-size: 32px;\n    }\n\n    div:not(:nth-child(1)) {\n      flex-shrink: 99;\n    }\n  }\n"]);return Fe=function(){return e},e}var ze=j.e.div(Fe()),Ee=function(e){var n=Object(s.g)().path,t=Object(p.c)(),o=Object(p.g)(),b=Object(p.f)(),j=Object(d.m)(),v=j.account,k=j.ethereum,g=e.tokenMode,y=Object(u.b)(),w=Object(m.a)().fastRefresh;Object(i.useEffect)((function(){v&&y(Object(h.a)(v))}),[v,y,w]);var S=Object(i.useState)(!1),C=Object(a.a)(S,2),T=C[0],B=C[1],A=t.filter((function(e){return!!e.isTokenOnly===!!g&&"0X"!==e.multiplier})),P=t.filter((function(e){return!!e.isTokenOnly===!!g&&"0X"===e.multiplier})),I=A.filter((function(e){return e.userData&&new l.a(e.userData.stakedBalance).isGreaterThan(0)})),q=Object(i.useCallback)((function(e,n){return e.map((function(e){var n=new l.a(e.eggPerBlock||1).times(new l.a(e.poolWeight)).div(new l.a(10).pow(18)).times(x.a),t=o.times(n),r=new l.a(e.lpTotalInQuoteToken||0);return"BNB"===e.quoteTokenSymbol&&(r=r.times(b)),r.comparedTo(0)>0&&(t=t.div(r)),Object(c.a)(Object(c.a)({},e),{},{apy:t})})).map((function(e){return Object(r.jsx)(Te,{farm:e,removed:n,bnbPrice:b,cakePrice:o,ethereum:k,account:v},e.pid)}))}),[b,v,o,k]);return Object(r.jsxs)(O.a,{children:[Object(r.jsx)(ze,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"BEAST Farms"}),Object(r.jsx)("div",{children:"Stake LP tokens to earn BEAST"}),Object(r.jsx)("div",{children:"Deposit fees will be used to buyback BEAST"})]})}),Object(r.jsx)(Ie,{stakedOnly:T,setStakedOnly:B}),Object(r.jsx)("div",{children:Object(r.jsxs)(f.a,{children:[Object(r.jsx)(s.a,{exact:!0,path:"".concat(n),children:q(T?I:A,!1)}),Object(r.jsx)(s.a,{exact:!0,path:"".concat(n,"/history"),children:q(P,!0)})]})})]})}}}]);
//# sourceMappingURL=8.d7a3a661.chunk.js.map