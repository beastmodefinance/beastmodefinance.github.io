(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[9],{612:function(n,e,t){"use strict";t.d(e,"a",(function(){return x}));var r=t(45),c=t(12),i=t(0),a=t.n(i),o=t(3);function s(){var n=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return s=function(){return n},n}var u=o.e.div(s(),(function(n){return n.size}),(function(n){return n.size})),d=function(n){var e,t=n.size,r=void 0===t?"md":t,a=Object(i.useContext)(o.a).spacing;switch(r){case"lg":e=a[6];break;case"sm":e=a[2];break;case"md":default:e=a[4]}return Object(c.jsx)(u,{size:e})};function l(){var n=Object(r.a)(["\n  flex: 1;\n  text-align: center;\n"]);return l=function(){return n},n}function b(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: #abc12300;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return b=function(){return n},n}var j=o.e.div(b(),(function(n){return n.theme.spacing[4]})),f=o.e.div(l()),x=function(n){var e=n.children,t=a.a.Children.toArray(e).length;return Object(c.jsx)(j,{children:a.a.Children.map(e,(function(n,e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{children:n}),e<t-1&&Object(c.jsx)(d,{})]})}))})}},615:function(n,e,t){"use strict";t.d(e,"a",(function(){return w}));var r=t(45),c=t(12),i=(t(0),t(3)),a=t(613),o=t(33),s=t(169);function u(){var n=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return u=function(){return n},n}function d(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return d=function(){return n},n}var l=i.e.div(d(),(function(n){return n.theme.colors.input}),(function(n){return n.theme.radii.default}),(function(n){return n.theme.spacing[3]})),b=i.e.input(u(),(function(n){return n.theme.colors.primary})),j=function(n){var e=n.endAdornment,t=n.onChange,r=n.placeholder,i=n.startAdornment,a=n.value;return Object(c.jsxs)(l,{children:[!!i&&i,Object(c.jsx)(b,{placeholder:r,value:a,onChange:t}),!!e&&e]})};function f(){var n=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return f=function(){return n},n}function x(){var n=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return x=function(){return n},n}function p(){var n=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return p=function(){return n},n}function O(){var n=Object(r.a)(["\n  width: ","px;\n"]);return O=function(){return n},n}function h(){var n=Object(r.a)([""]);return h=function(){return n},n}var v=i.e.div(h()),m=i.e.div(O(),(function(n){return n.theme.spacing[3]})),g=i.e.div(p()),k=i.e.div(x(),(function(n){return n.theme.colors.primary})),y=i.e.span(f(),(function(n){return n.theme.colors.primary})),w=function(n){var e=n.max,t=n.symbol,r=n.onChange,i=n.onSelectMax,u=n.value,d=n.depositFeeBP,l=void 0===d?0:d,b=Object(s.a)();return Object(c.jsxs)(v,{children:[Object(c.jsxs)(k,{children:[e.toLocaleString()," ",t," ",b(526,"Available")]}),Object(c.jsx)(j,{endAdornment:Object(c.jsxs)(g,{children:[Object(c.jsx)(y,{children:t}),Object(c.jsx)(m,{}),Object(c.jsx)("div",{children:Object(c.jsx)(o.d,{size:"sm",onClick:i,children:b(452,"Max")})})]}),onChange:r,placeholder:"0",value:u}),l>0?Object(c.jsxs)(k,{children:["Deposit Fee: ",new a.a(u||0).times(l/1e4).toString()," ",t]}):null]})}},624:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(613);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(1);var c=new r.a(10512e3)},625:function(n,e,t){"use strict";var r=t(45);function c(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return c=function(){return n},n}var i=t(3).e.div(c());e.a=i},626:function(n,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return s})),t.d(e,"d",(function(){return i}));var r=t(12),c=(t(0),t(33)),i=function(){return Object(r.jsx)(c.A,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"No Fees"})},a=function(){return Object(r.jsx)(c.A,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"Core"})},o=function(){return Object(r.jsx)(c.A,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.l,{}),children:"Community"})},s=function(){return Object(r.jsx)(c.A,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.c,{}),children:"Binance"})}},627:function(n,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"b",(function(){return j}));var r=t(4),c=t.n(r),i=t(15),a=t(0),o=t(61),s=(t(617),t(50)),u=t(103),d=t(610),l=t(609),b=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(l.d)();return{onApprove:Object(a.useCallback)(Object(i.a)(c.a.mark((function i(){var a;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(d.a)(n,r,t);case 3:return a=c.sent,e(Object(u.a)(t)),c.abrupt("return",a);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),i,null,[[0,8]])}))),[t,e,n,r])}},j=function(n,e){var t=Object(s.b)(),r=Object(o.m)().account,b=Object(l.e)(e);return{onApprove:Object(a.useCallback)(Object(i.a)(c.a.mark((function i(){var a;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(d.a)(n,b,r);case 3:return a=c.sent,t(Object(u.e)(e,r)),c.abrupt("return",a);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),i,null,[[0,8]])}))),[r,t,n,b,e])}}},628:function(n,e,t){"use strict";t.d(e,"b",(function(){return b}));var r=t(4),c=t.n(r),i=t(15),a=t(0),o=t(61),s=t(50),u=t(103),d=t(610),l=t(609),b=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.b)(),r=Object(o.m)(),b=r.account,j=Object(l.d)(),f=Object(l.e)(n),x=Object(a.useCallback)(function(){var r=Object(i.a)(c.a.mark((function r(i){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==n){r.next=5;break}return r.next=3,Object(d.i)(j,0,i,b);case 3:r.next=12;break;case 5:if(!e){r.next=10;break}return r.next=8,Object(d.e)(f,i,b);case 8:r.next=12;break;case 10:return r.next=12,Object(d.d)(f,i,b);case 12:t(Object(u.h)(n,b)),t(Object(u.f)(n,b));case 14:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),[b,t,e,j,f,n]);return{onStake:x}};e.a=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(l.d)();return{onStake:Object(a.useCallback)(function(){var a=Object(i.a)(c.a.mark((function i(a){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.i)(r,n,a,t);case 2:o=c.sent,e(Object(u.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),i)})));return function(n){return a.apply(this,arguments)}}(),[t,e,r,n])}}},629:function(n,e,t){"use strict";t.d(e,"b",(function(){return j}));var r=t(4),c=t.n(r),i=t(15),a=t(0),o=t(61),s=t(50),u=t(103),d=t(610),l=t(609),b=[5,6,3,1,22,23],j=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(l.d)(),j=Object(l.e)(n),f=b.includes(n);return{onUnstake:Object(a.useCallback)(function(){var a=Object(i.a)(c.a.mark((function i(a){var o,s,l;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==n){c.next=7;break}return c.next=3,Object(d.j)(r,0,a,t);case 3:o=c.sent,console.info(o),c.next=18;break;case 7:if(!f){c.next=14;break}return c.next=10,Object(d.c)(j,a,t);case 10:s=c.sent,console.info(s),c.next=18;break;case 14:return c.next=16,Object(d.f)(j,a,t);case 16:l=c.sent,console.info(l);case 18:e(Object(u.h)(n,t)),e(Object(u.f)(n,t)),e(Object(u.g)(n,t));case 21:case"end":return c.stop()}}),i)})));return function(n){return a.apply(this,arguments)}}(),[t,e,f,r,j,n])}};e.a=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(l.d)();return{onUnstake:Object(a.useCallback)(function(){var a=Object(i.a)(c.a.mark((function i(a){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.j)(r,n,a,t);case 2:o=c.sent,e(Object(u.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),i)})));return function(n){return a.apply(this,arguments)}}(),[t,e,r,n])}}},726:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return te}));var r=t(12),c=t(18),i=t(16),a=t(45),o=t(0),s=t.n(o),u=t(23),d=t(13),l=t.n(d),b=t(3),j=t(61),f=t(624),x=t(653),p=t.n(x),O=t(710),h=t.n(O),v=t(270),m=function(){return Object(o.useContext)(v.a)},g=t(608),k=t(105),y=t(37),w=t(625),C=t(175),S=t(4),z=t.n(S),D=t(15),A=t(33),N=t(619);function F(){var n=Object(a.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return F=function(){return n},n}var B=b.e.div(F(),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled":"primary"]})),E=function(n){var e=n.text,t=n.isFinished,c=void 0!==t&&t;return Object(r.jsx)(B,{isFinished:c,children:e})},I=t(609),T=t(627),M=t(169),P=t(628),L=t(629),U=t(618),R=t(620),W=t.n(R);function _(){var n=Object(a.a)(["\n  color: ",";\n"]);return _=function(){return n},n}var V=Object(b.e)(A.B)(_(),(function(n){var e=n.isDisabled,t=n.color,r=n.theme;return e?r.colors.textDisabled:t})),Y=function(n){var e=n.value,t=n.fontSize,c=n.color,i=n.decimals,a=n.isDisabled,s=n.unit,u=Object(o.useRef)(0);return Object(o.useEffect)((function(){u.current=e}),[e]),Object(r.jsxs)(V,{bold:!0,color:c,fontSize:t,isDisabled:a,children:[Object(r.jsx)(W.a,{start:u.current,end:e,decimals:i,duration:1,separator:","}),e&&s&&Object(r.jsx)("span",{children:s})]})};Y.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:3};var q=Y,H=t(612),J=t(615),Q=function(n){var e=n.max,t=n.onConfirm,i=n.onDismiss,a=n.tokenName,s=void 0===a?"":a,u=Object(o.useState)(""),d=Object(c.a)(u,2),l=d[0],b=d[1],j=Object(o.useState)(!1),f=Object(c.a)(j,2),x=f[0],p=f[1],O=Object(M.a)(),h=Object(o.useMemo)((function(){return Object(g.b)(e)}),[e]),v=Object(o.useCallback)((function(n){b(n.currentTarget.value)}),[b]),m=Object(o.useCallback)((function(){b(h)}),[h,b]);return Object(r.jsxs)(A.v,{title:"".concat(O(316,"Deposit")," ").concat(s," Tokens"),onDismiss:i,children:[Object(r.jsx)(J.a,{value:l,onSelectMax:m,onChange:v,max:h,symbol:s}),Object(r.jsxs)(H.a,{children:[Object(r.jsx)(A.d,{fullWidth:!0,variant:"secondary",onClick:i,children:O(462,"Cancel")}),Object(r.jsx)(A.d,{fullWidth:!0,disabled:x,onClick:Object(D.a)(z.a.mark((function n(){return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.next=3,t(l);case 3:p(!1),i();case 5:case"end":return n.stop()}}),n)}))),children:x?O(488,"Pending Confirmation"):O(464,"Confirm")})]})]})},G=function(n){var e=n.onConfirm,t=n.onDismiss,i=n.max,a=n.tokenName,s=void 0===a?"":a,u=Object(o.useState)(""),d=Object(c.a)(u,2),l=d[0],b=d[1],j=Object(o.useState)(!1),f=Object(c.a)(j,2),x=f[0],p=f[1],O=Object(M.a)(),h=Object(o.useMemo)((function(){return Object(g.b)(i)}),[i]),v=Object(o.useCallback)((function(n){b(n.currentTarget.value)}),[b]),m=Object(o.useCallback)((function(){b(h)}),[h,b]);return Object(r.jsxs)(A.v,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(r.jsx)(J.a,{onSelectMax:m,onChange:v,value:l,max:h,symbol:s}),Object(r.jsxs)(H.a,{children:[Object(r.jsx)(A.d,{variant:"secondary",onClick:t,children:O(462,"Cancel")}),Object(r.jsx)(A.d,{disabled:x,onClick:Object(D.a)(z.a.mark((function n(){return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.next=3,e(l);case 3:p(!1),t();case 5:case"end":return n.stop()}}),n)}))),children:x?O(488,"Pending Confirmation"):O(464,"Confirm")})]})]})};function X(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]);return X=function(){return n},n}var K=function(n){var e=n.earnings,t=n.onConfirm,i=n.onDismiss,a=n.tokenName,s=void 0===a?"":a,u=Object(o.useState)(!1),d=Object(c.a)(u,2),l=d[0],b=d[1],j=Object(M.a)(),f=Object(o.useMemo)((function(){return Object(g.b)(e)}),[e]);return Object(r.jsxs)(A.v,{title:"".concat(j(999,"Compound")," ").concat(j(330,"".concat(s," Earned"))),onDismiss:i,children:[Object(r.jsx)(Z,{children:Object(r.jsx)(q,{value:Number(f)})}),Object(r.jsxs)(H.a,{children:[Object(r.jsx)(A.d,{fullWidth:!0,variant:"secondary",onClick:i,children:j(462,"Cancel")}),Object(r.jsx)(A.d,{id:"compound-cake",fullWidth:!0,disabled:l,onClick:Object(D.a)(z.a.mark((function n(){return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b(!0),n.next=3,t(f);case 3:b(!1),i();case 5:case"end":return n.stop()}}),n)}))),children:l?j(488,"Pending Confirmation"):j(464,"Confirm")})]})]})},Z=b.e.div(X());function $(){var n=Object(a.a)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n  text-align: center;\n"]);return $=function(){return n},n}var nn=b.e.div($(),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled":"text"]}));function en(){var n=Object(a.a)(["\n  background: #100000;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 2px;\n  display: flex;\n  color: ",";\n  box-shadow: ",";\n  flex-direction: column;\n  position: relative;\n"]);return en=function(){return n},n}var tn=b.e.div(en(),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled":"secondary"]}),(function(n){return n.isActive?"0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);":"0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)"})),rn=t(64);function cn(){var n=Object(a.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"]);return cn=function(){return n},n}function an(){var n=Object(a.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"]);return an=function(){return n},n}function on(){var n=Object(a.a)(["\n  align-items: center;\n  background: ",";\n  border: 0;\n  border-radius: 12px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ","px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  pointer-events: ",";\n  width: 100%;\n  border: 2px solid ",";\n  width: 100px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0px;\n"]);return on=function(){return n},n}var sn,un=b.e.button(on(),(function(n){return n.disabled?"#3a3a3a":"#123456"}),(function(n){return n.disabled?"#acaaaf":"#32cad7"}),(function(n){return n.fontSize}),(function(n){return n.size}),(function(n){return n.padding}),(function(n){return n.padding}),(function(n){return n.disabled?"none":void 0}),(function(n){return n.disabled?"#eee":"#33cbd7"})),dn=Object(b.e)(rn.b)(an(),(function(n){return-n.theme.spacing[4]}),(function(n){return n.theme.spacing[4]})),ln=b.e.a(cn(),(function(n){return-n.theme.spacing[4]}),(function(n){return n.theme.spacing[4]})),bn=function(n){var e,t,c,i=n.children,a=n.disabled,s=n.href,u=n.onClick,d=n.size,l=n.text,j=n.to,f=Object(o.useContext)(b.a),x=f.colors,p=f.spacing,O=x.background;switch(d){case"sm":t=p[3],e=36,c=14;break;case"lg":t=p[4],e=72,c=16;break;case"md":default:t=p[4],e=56,c=16}var h=Object(o.useMemo)((function(){return j?Object(r.jsx)(dn,{to:j,children:l}):s?Object(r.jsx)(ln,{href:s,target:"__blank",children:l}):l}),[s,l,j]);return Object(r.jsxs)(un,{boxShadow:undefined,color:O,disabled:a,fontSize:c,onClick:u,padding:t,size:e,children:[i,h]})},jn=t(36),fn=t(722),xn=t(723),pn=t(626);function On(){var n=Object(a.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: #12aab5;\n"]);return On=function(){return n},n}function hn(){var n=Object(a.a)(["\n  font-size: 14px;\n"]);return hn=function(){return n},n}function vn(){var n=Object(a.a)(["\n  flex: 1;\n"]);return vn=function(){return n},n}function mn(){var n=Object(a.a)(["\n  align-items: center;\n  display: flex;\n"]);return mn=function(){return n},n}function gn(){var n=Object(a.a)(["\n  margin-top: 24px;\n"]);return gn=function(){return n},n}function kn(){var n=Object(a.a)(["\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ",";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n\n  & > svg {\n    margin-left: 4px;\n  }\n"]);return kn=function(){return n},n}function yn(){var n=Object(a.a)(["\n  border-top: 1px solid ",";\n  color: ",";\n  padding: 24px;\n"]);return yn=function(){return n},n}var wn=(sn={},Object(jn.a)(sn,y.a.BINANCE,pn.a),Object(jn.a)(sn,y.a.CORE,pn.c),Object(jn.a)(sn,y.a.COMMUNITY,pn.b),sn),Cn=b.e.div(yn(),(function(n){return n.theme.isDark?"#524B63":"#E9EAEB"}),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled2":"primary2"]})),Sn=b.e.button(kn(),(function(n){return n.theme.colors.primary})),zn=b.e.div(gn()),Dn=b.e.div(mn()),An=b.e.div(vn()),Nn=b.e.div(hn()),Fn=b.e.a(On()),Bn=function(n){var e=n.projectLink,t=n.totalStaked,i=n.blocksRemaining,a=n.isFinished,s=n.blocksUntilStart,u=n.poolCategory,d=Object(o.useState)(!1),l=Object(c.a)(d,2),b=l[0],j=l[1],f=Object(M.a)(),x=b?fn.a:xn.a,p=wn[u];return Object(r.jsxs)(Cn,{isFinished:a,children:[Object(r.jsxs)(Dn,{children:[Object(r.jsx)(An,{children:Object(r.jsx)(p,{})}),Object(r.jsxs)(Sn,{onClick:function(){return j(!b)},children:[b?"Hide":"Details"," ",Object(r.jsx)(x,{})]})]}),b&&Object(r.jsxs)(zn,{children:[Object(r.jsxs)(Dn,{style:{marginBottom:"4px"},children:[Object(r.jsx)(An,{children:Object(r.jsx)(Nn,{children:f(408,"Total")})}),Object(r.jsx)(q,{fontSize:"14px",isDisabled:a,value:Object(g.a)(t)})]}),s>0&&Object(r.jsxs)(Dn,{children:[Object(r.jsx)(An,{children:Object(r.jsxs)(Nn,{children:[f(410,"Start"),":"]})}),Object(r.jsx)(q,{fontSize:"14px",isDisabled:a,value:s,decimals:0})]}),0===s&&i>0&&Object(r.jsxs)(Dn,{children:[Object(r.jsx)(An,{children:Object(r.jsxs)(Nn,{children:[f(410,"End"),":"]})}),Object(r.jsx)(q,{fontSize:"14px",isDisabled:a,value:i,decimals:0})]}),Object(r.jsx)(Fn,{href:e,target:"_blank",children:f(412,"View project site")})]})]})},En=s.a.memo(Bn);function In(){var n=Object(a.a)(["\n  background: linear-gradient(45deg,\n    rgba(255, 0, 0, 1)      0%,\n    rgba(255, 154, 0, 1)   10%,\n    rgba(197, 20, 20, 1)   20%,\n    rgba(214, 49, 49, 1)   30%,\n    rgba(218, 49, 49, 1)   40%,\n    rgba(214, 191, 27, 1)  50%,\n    rgba(222, 59, 59, 1)   60%,\n    rgba(234, 55, 55, 1)   70%,\n    rgba(208, 62, 62, 1)   80%,\n    rgba(216, 123, 28, 1)  90%,\n    rgba(220, 186, 63, 1) 100%);\n\n  background-size: 300% 300%;\n  border-radius: 0;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n  animation: "," 2s linear infinite;\n"]);return In=function(){return n},n}function Tn(){var n=Object(a.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return Tn=function(){return n},n}function Mn(){var n=Object(a.a)(["\n  display: flex;\n  font-size: 14px;\n"]);return Mn=function(){return n},n}function Pn(){var n=Object(a.a)(["\n  height: ","px;\n  width: ","px;\n"]);return Pn=function(){return n},n}function Ln(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"]);return Ln=function(){return n},n}function Un(){var n=Object(a.a)(['\n  background-image: url("/images/pool-finished-sash.svg");\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n']);return Un=function(){return n},n}function Rn(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return Rn=function(){return n},n}function Wn(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  div:first-child  {\n    font-size: 16px;\n  }\n\n  div:nth-child(2) {\n    color: #EAE2FC;\n    font-size: 32px;\n    font-weight: 600;\n    line-height: 1;\n    margin-bottom: 12px;\n  }\n"]);return Wn=function(){return n},n}var _n=b.e.div(Wn()),Vn=b.e.div(Rn()),Yn=b.e.div(Un()),qn=b.e.div(Ln()),Hn=b.e.div(Pn(),(function(n){return n.theme.spacing[4]}),(function(n){return n.theme.spacing[4]})),Jn=b.e.div(Mn()),Qn=Object(b.f)(Tn()),Gn=b.e.div(In(),Qn),Xn=function(n){var e=n.pool,t=e.sousId,i=e.image,a=e.tokenName,s=e.stakingTokenName,u=e.stakingTokenAddress,d=e.projectLink,b=e.harvest,f=e.apy,x=e.tokenDecimals,p=e.poolCategory,O=e.totalStaked,h=e.startBlock,v=e.endBlock,k=e.isFinished,w=e.userData,C=e.stakingLimit,S=p===y.a.BINANCE,F=Object(M.a)(),B=Object(I.b)(u),R=Object(j.m)().account,W=m(),_=Object(T.b)(B,t).onApprove,V=Object(P.b)(t,S).onStake,Y=Object(L.b)(t).onUnstake,H=Object(U.c)(t,S).onReward,J=Object(o.useState)(!1),X=Object(c.a)(J,2),Z=X[0],$=X[1],en=Object(o.useState)(!1),rn=Object(c.a)(en,2),cn=rn[0],an=rn[1],on=new l.a((null===w||void 0===w?void 0:w.allowance)||0),sn=new l.a((null===w||void 0===w?void 0:w.stakingTokenBalance)||0),un=new l.a((null===w||void 0===w?void 0:w.stakedBalance)||0),dn=new l.a((null===w||void 0===w?void 0:w.pendingReward)||0),ln=Math.max(h-W,0),jn=Math.max(v-W,0),fn=(null===un||void 0===un?void 0:un.toNumber())>0,xn=!fn&&!on.toNumber()&&!S,pn=k&&fn,On=new l.a(C).multipliedBy(new l.a(10).pow(x)),hn=Object(A.F)(Object(r.jsx)(Q,{max:C&&sn.isGreaterThan(On)?On:sn,onConfirm:V,tokenName:C?"".concat(s," (").concat(C," max)"):s})),vn=Object(c.a)(hn,1)[0],mn=Object(A.F)(Object(r.jsx)(K,{earnings:dn,onConfirm:V,tokenName:s})),gn=Object(c.a)(mn,1)[0],kn=Object(A.F)(Object(r.jsx)(G,{max:un,onConfirm:Y,tokenName:s})),yn=Object(c.a)(kn,1)[0],wn=Object(o.useCallback)(Object(D.a)(z.a.mark((function n(){return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,$(!0),n.next=4,_();case 4:n.sent||$(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])}))),[_,$]);return Object(r.jsxs)(tn,{isActive:pn,isFinished:k&&0!==t,style:{border:0===e.sousId?"0":"1px solid #ff9372"},children:[0===e.sousId&&Object(r.jsx)(Gn,{}),k&&0!==t&&Object(r.jsx)(Yn,{}),Object(r.jsxs)("div",{style:{padding:"24px"},children:[Object(r.jsxs)(nn,{isFinished:k&&0!==t,children:[a," Pool"]}),Object(r.jsx)("div",{style:{marginBottom:"8px",display:"flex",alignItems:"center"},children:Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:Object(r.jsx)(A.p,{src:"/images/tokens/".concat(i||a,".png"),width:64,height:64,alt:a})})}),Object(r.jsxs)(_n,{children:[Object(r.jsx)(E,{isFinished:k&&0!==t,text:F(330,"".concat(a," earned"))}),Object(r.jsx)(q,{value:Object(g.a)(dn,x),isDisabled:k})]}),Object(r.jsxs)(Vn,{children:[R&&b&&Object(r.jsx)(bn,{disabled:!dn.toNumber()||cn,text:cn?"Collecting":"Harvest",onClick:Object(D.a)(z.a.mark((function n(){return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return an(!0),n.next=3,H();case 3:an(!1);case 4:case"end":return n.stop()}}),n)})))}),0===t&&R&&b&&Object(r.jsx)(bn,{disabled:!dn.toNumber()||cn,text:cn?"Compounding":"Compound",onClick:gn})]}),Object(r.jsxs)(qn,{children:[!R&&Object(r.jsx)(N.a,{}),R&&(xn?Object(r.jsx)("div",{style:{flex:1},children:Object(r.jsx)(A.d,{disabled:k||Z,onClick:wn,fullWidth:!0,children:"Approve ".concat(s)})}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(A.d,{disabled:un.eq(new l.a(0))||cn,onClick:yn,children:"Unstake ".concat(s)}),Object(r.jsx)(Hn,{}),Object(r.jsx)(A.o,{disabled:k&&0!==t,onClick:vn,children:Object(r.jsx)(A.a,{color:"background"})})]}))]}),Object(r.jsxs)(Jn,{children:[Object(r.jsx)("div",{style:{flex:1},children:"APR:"}),k||!f||(null===f||void 0===f?void 0:f.isNaN())||!(null===f||void 0===f?void 0:f.isFinite())?"-":Object(r.jsx)(q,{fontSize:"14px",isDisabled:k,value:null===f||void 0===f?void 0:f.toNumber(),decimals:2,unit:"%"})]}),Object(r.jsxs)(Jn,{children:[Object(r.jsx)("div",{style:{flex:1},children:"Your Stake:"}),Object(r.jsx)(q,{fontSize:"14px",isDisabled:k,value:Object(g.a)(un)})]})]}),Object(r.jsx)(En,{projectLink:d,totalStaked:O,blocksRemaining:jn,isFinished:k,blocksUntilStart:ln,poolCategory:p})]})};function Kn(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return Kn=function(){return n},n}var Zn=function(){var n=Object(u.g)(),e=n.url,t=n.isExact,c=Object(M.a)();return Object(r.jsx)($n,{children:Object(r.jsxs)(A.e,{activeIndex:t?0:1,size:"sm",variant:"subtle",children:[Object(r.jsx)(A.f,{as:rn.b,to:"".concat(e),children:c(999,"Active")}),Object(r.jsx)(A.f,{as:rn.b,to:"".concat(e,"/history"),children:c(999,"Inactive")})]})})},$n=b.e.div(Kn());function ne(){var n=Object(a.a)(["\n  align-items: center;\n  background-image: url('/images/beast-banner.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: contain;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  min-height: 116px;\n  text-align: center;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    height: 116px;\n    width: 100%;\n    color: #ffffff;\n    font-size: 20px;\n    text-align: left;\n    text-shadow:\n     -1px -1px 0 #000,\n      1px -1px 0 #000,\n      -1px 1px 0 #000,\n       1px 1px 0 #000;\n\n    div:nth-child(1) {\n      margin-bottom: 8px;\n      font-size: 32px;\n    }\n\n    div:not(:nth-child(1)) {\n      flex-shrink: 99;\n    }\n  }\n"]);return ne=function(){return n},n}var ee=b.e.div(ne()),te=function(){var n=Object(u.g)().path,e=Object(j.m)().account,t=Object(k.c)(),a=Object(k.e)(e),o=Object(k.f)(),s=m(),d=a.map((function(n){var e=n.poolCategory===y.a.BINANCE,r=t.find((function(e){return e.tokenSymbol===n.tokenName})),c=t.find((function(e){return e.tokenSymbol===n.stakingTokenName})),a=e?new l.a(1):new l.a(null===c||void 0===c?void 0:c.tokenPriceVsQuote),u=function(n,e,t){var r=new l.a(e);return"BNB"===n?new l.a(1):e&&"BUSD"===t?r.div(o):r}(n.tokenName,null===r||void 0===r?void 0:r.tokenPriceVsQuote,null===r||void 0===r?void 0:r.quoteTokenSymbol).times(n.tokenPerBlock).times(f.a),d=a.times(Object(g.a)(n.totalStaked)),b=u.div(d).times(100);return Object(i.a)(Object(i.a)({},n),{},{isFinished:0!==n.sousId&&(n.isFinished||s>n.endBlock),apy:b})})),b=h()(d,(function(n){return n.isFinished})),x=Object(c.a)(b,2),O=x[0],v=x[1];return Object(r.jsxs)(C.a,{children:[Object(r.jsx)(ee,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"BEAST Pools"}),Object(r.jsx)("div",{children:"Stake various tokens to earn BEAST"}),Object(r.jsx)("div",{children:"You may unstake at any time"})]})}),Object(r.jsx)(Zn,{}),Object(r.jsxs)(w.a,{children:[Object(r.jsx)(u.a,{exact:!0,path:"".concat(n),children:Object(r.jsx)(r.Fragment,{children:p()(v,["sortOrder"]).map((function(n){return Object(r.jsx)(Xn,{pool:n},n.sousId)}))})}),Object(r.jsx)(u.a,{path:"".concat(n,"/history"),children:p()(O,["sortOrder"]).map((function(n){return Object(r.jsx)(Xn,{pool:n},n.sousId)}))})]})]})}}}]);
//# sourceMappingURL=9.4386bb57.chunk.js.map