(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[10],{613:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(13),r=n.n(a),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=new r.a(e).dividedBy(new r.a(10).pow(t));return n.toNumber()},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return e.dividedBy(new r.a(10).pow(t)).toFixed()}},614:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return l}));var a=n(4),r=n.n(a),i=n(15),s=n(13),u=n.n(s),c=n(616),o=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.approve(n.options.address,c.ethers.constants.MaxUint256).send({from:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){var s,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="0x0000000000000000000000000000000000000000",-1!==document.cookie.indexOf("refer=")&&(c=document.cookie.indexOf("refer=")+6,o=document.cookie.substring(c).indexOf(";"),s=-1===o?document.cookie.substring(c):document.cookie.substring(c).substring(0,o)),e.abrupt("return",t.methods.deposit(n,new u.a(a).times(new u.a(10).pow(18)).toString(),s).send({from:i}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.withdraw(n,new u.a(a).times(new u.a(10).pow(18)).toString()).send({from:i}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a){var i,s,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="0x0000000000000000000000000000000000000000",-1!==document.cookie.indexOf("refer=")&&(s=document.cookie.indexOf("refer=")+6,u=document.cookie.substring(s).indexOf(";"),i=-1===u?document.cookie.substring(s):document.cookie.substring(s).substring(0,u)),e.abrupt("return",t.methods.deposit(n,"0",i).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},619:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return f}));var a=n(37),r=n(4),i=n.n(r),s=n(15),u=n(0),c=n(62),o=n(49),p=n(103),d=n(614),l=n(615),b=function(e){var t=Object(o.b)(),n=Object(c.m)().account,a=Object(l.d)();return{onReward:Object(u.useCallback)(Object(s.a)(i.a.mark((function r(){var s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(d.b)(a,e,n);case 2:return s=r.sent,t(Object(p.a)(n)),r.abrupt("return",s);case 5:case"end":return r.stop()}}),r)}))),[n,t,e,a])}},y=function(e){var t=Object(c.m)().account,n=Object(l.d)();return{onReward:Object(u.useCallback)(Object(s.a)(i.a.mark((function r(){var s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=e.reduce((function(e,r){return[].concat(Object(a.a)(e),[Object(d.b)(n,r,t)])}),[]),r.abrupt("return",Promise.all(s));case 2:case"end":return r.stop()}}),r)}))),[t,e,n])}},f=function(e){var t=Object(o.b)(),n=Object(c.m)(),a=n.account,r=(Object(l.e)(e),Object(l.d)()),b=Object(u.useCallback)(Object(s.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.b)(r,e,a);case 2:t(Object(p.g)(e,a)),t(Object(p.f)(e,a));case 4:case"end":return n.stop()}}),n)}))),[a,t,r,e]);return{onReward:b}}},620:function(e,t,n){"use strict";var a=n(16),r=n(10),i=(n(0),n(25)),s=n(62),u=n(170);t.a=function(e){var t=Object(u.a)(),n=Object(s.m)(),c=n.connect,o=n.reset,p=Object(i.G)(c,o).onPresentConnectModal;return Object(r.jsx)(i.d,Object(a.a)(Object(a.a)({onClick:p},e),{},{children:t(292,"Unlock Wallet")}))}},628:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var a=n(4),r=n.n(a),i=n(15),s=n(129),u=n.n(s),c=n(59),o=function(e,t){return new(new u.a(e).eth.Contract)(c,t)},p=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a){var i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o(t,n),e.prev=1,e.next=4,i.methods.balanceOf(a).call();case 4:return s=e.sent,e.abrupt("return",s);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,a){return e.apply(this,arguments)}}()},656:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"BurnRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"MaxTransferAmountRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"TransferTaxRateUpdated","type":"event"},{"inputs":[],"name":"BURN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_TRANSFER_TAX_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isExcludedFromAntiWhale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransferAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransferAmountRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"masterChef","type":"address"}],"name":"oneTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_excluded","type":"bool"}],"name":"setExcludedFromAntiWhale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferTaxRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_burnRate","type":"uint16"}],"name":"updateBurnRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_maxTransferAmountRate","type":"uint16"}],"name":"updateMaxTransferAmountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_transferTaxRate","type":"uint16"}],"name":"updateTransferTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},735:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return be}));var a=n(10),r=n(46),i=n(0),s=n(3),u=n(25),c=n(173),o=n(4),p=n.n(o),d=n(15),l=n(19),b=n(62),y=n(13),f=n.n(y),m=n(619),j=n(16),x=n(23),O=n(33),v=n(47),h=n(637),T=n(127),w=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(b.m)().account,s=Object(T.a)().fastRefresh;return Object(i.useEffect)((function(){r&&function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.map((function(e){return{address:Object(O.d)(),name:"pendingBeast",params:[e.pid,r]}})),e.next=3,Object(x.a)(v,t);case 3:n=e.sent,i=h.a.map((function(e,t){return Object(j.a)(Object(j.a)({},e),{},{balance:new f.a(n[t])})})),a(i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,s]),n},g=n(620),k=n(625),M=function(e){var t=e.value,n=e.decimals,r=e.fontSize,s=void 0===r?"40px":r,c=e.prefix,o=e.suffix,p=Object(k.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),d=p.countUp,l=p.update,b=Object(i.useRef)(l);return Object(i.useEffect)((function(){b.current(t)}),[t,b]),Object(a.jsxs)(u.A,{bold:!0,fontSize:s,children:[c,d,o]})},S=function(e){var t=e.earningsSum;return Object(b.m)().account?Object(a.jsx)(M,{value:t}):Object(a.jsx)(u.A,{color:"textDisabled",style:{lineHeight:"60px"},children:"Locked"})},A=function(e){var t=e.cakeBalance;return Object(b.m)().account?Object(a.jsx)(M,{value:t,fontSize:"24px"}):Object(a.jsx)(u.A,{color:"textDisabled",style:{lineHeight:"36px"},children:"Locked"})},R=n(106),z=n(270),B=n(81),E=n(628),C=function(e){var t=Object(i.useState)(new f.a(0)),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(b.m)(),u=s.account,c=s.ethereum,o=Object(T.a)().fastRefresh;return Object(i.useEffect)((function(){u&&c&&function(){var t=Object(d.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(E.b)(c,e,u);case 2:n=t.sent,r(new f.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[u,c,e,o]),a},N=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(b.m)().account,s=Object(T.a)().fastRefresh;return Object(i.useEffect)((function(){r&&function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.map((function(e){return{address:Object(O.d)(),name:"pendingBeast",params:[e.pid,r]}})),e.next=3,Object(x.a)(v,t);case 3:n=e.sent,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,s]),n},H=n(613);function _(){var e=Object(r.a)(["\n  margin-top: 24px;\n"]);return _=function(){return e},e}function D(){var e=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return D=function(){return e},e}function F(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return F=function(){return e},e}function P(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return P=function(){return e},e}function U(){var e=Object(r.a)(["\n  background-image: url('/images/beast-token-transparent.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  background-size: contain;\n  background-position-x: 75px;\n  background-position-y: -105px;\n  background-color: #100000;\n  min-height: 376px;\n  border-radius: 0;\n  border: 1px solid #ff9372;\n"]);return U=function(){return e},e}var V=Object(s.e)(u.h)(U()),W=s.e.div(P()),L=s.e.img(F()),$=s.e.div(D(),(function(e){return e.theme.colors.textSubtle})),I=s.e.div(_()),J=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(b.m)().account,c=w(),o=Object(H.a)(C(Object(O.a)())),y=Object(R.g)().toNumber(),j=N().reduce((function(e,t){return e+new f.a(t).div(new f.a(10).pow(18)).toNumber()}),0),x=c.filter((function(e){return e.balance.toNumber()>0})),v=Object(m.a)(x.map((function(e){return e.pid}))).onReward,h=Object(i.useCallback)(Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,v();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,r(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[v]);return Object(a.jsx)(V,{children:Object(a.jsxs)(u.i,{children:[Object(a.jsx)(u.n,{size:"xl",mb:"24px",children:"Farms & Pools"}),Object(a.jsx)(L,{src:"/images/beast-token-sm2.png",alt:"cake logo",width:64,height:64}),Object(a.jsxs)(W,{children:[Object(a.jsx)($,{children:"BEAST to Harvest"}),Object(a.jsx)(S,{earningsSum:j}),Object(a.jsxs)($,{children:["~$",(y*j).toFixed(2)]})]}),Object(a.jsxs)(W,{children:[Object(a.jsx)($,{children:"BEAST in Wallet"}),Object(a.jsx)(A,{cakeBalance:o}),Object(a.jsxs)($,{children:["~$",(y*o).toFixed(2)]})]}),Object(a.jsx)(I,{children:s?Object(a.jsx)(u.d,{id:"harvest-all",disabled:x.length<=0||n,onClick:h,fullWidth:!0,children:n?"Collecting BEAST":"Harvest all (".concat(x.length,")")}):Object(a.jsx)(g.a,{fullWidth:!0})})]})})},G=n(621),Q=n(656);function X(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return X=function(){return e},e}function Y(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0;\n  border: 1px solid #ff9372;\n  background-color: #100000;\n"]);return Y=function(){return e},e}var q=Object(s.e)(u.h)(Y()),K=s.e.div(X()),Z=function(){var e=function(){var e=Object(T.a)().slowRefresh,t=Object(i.useState)(),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(i.useEffect)((function(){function e(){return(e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(B.a)(z,Object(O.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,r(new f.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),a}(),t=function(e){var t=Object(i.useState)(new f.a(0)),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(T.a)().slowRefresh;return Object(i.useEffect)((function(){!function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(B.a)(z,Object(O.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,r(new f.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,s]),a}(Object(O.a)()),n=Object(R.c)(),r=Object(R.g)(),s=e?e.minus(t):new G.a(0),c=Object(H.a)(s),o=r.times(s),b=Object(i.useState)(0),y=Object(l.a)(b,2),m=y[0],j=y[1],x=Object(i.useState)(0),v=Object(l.a)(x,2),h=v[0],w=v[1],g=0;return n&&n[0]&&n[0].beastPerBlock&&(g=new G.a(n[0].beastPerBlock).div(new G.a(10).pow(18)).toNumber()),Object(i.useEffect)((function(){function e(){return(e=Object(d.a)(p.a.mark((function e(){var t,n,a,r,i,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(B.a)(Q,Object(O.a)()),e.next=3,t.methods.maxTransferAmount().call();case 3:return n=e.sent,a=new G.a(n).div(new G.a("1000000000000000000")).toFixed(5),r=new G.a(a).toNumber(),j(r),e.next=9,t.methods.transferTaxRate().call();case 9:i=e.sent,s=new G.a(i).dividedBy(100).toNumber(),w(s);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(a.jsx)(q,{children:Object(a.jsxs)(u.i,{children:[Object(a.jsx)(u.n,{size:"xl",mb:"24px",children:"BEAST Stats"}),Object(a.jsxs)(K,{children:[Object(a.jsx)(u.A,{fontSize:"14px",children:"Market Cap"}),Object(a.jsx)(M,{fontSize:"14px",value:Object(H.a)(o),decimals:0,prefix:"$"})]}),Object(a.jsxs)(K,{children:[Object(a.jsx)(u.A,{fontSize:"14px",children:"Circulating Supply"}),c&&Object(a.jsx)(M,{fontSize:"14px",value:c,decimals:0})]}),Object(a.jsxs)(K,{children:[Object(a.jsx)(u.A,{fontSize:"14px",children:"Total Burned"}),Object(a.jsx)(M,{fontSize:"14px",value:Object(H.a)(t),decimals:0})]}),Object(a.jsxs)(K,{children:[Object(a.jsx)(u.A,{fontSize:"14px",children:"Total Minted"}),e&&Object(a.jsx)(M,{fontSize:"14px",value:Object(H.a)(e),decimals:0})]}),Object(a.jsxs)(K,{children:[Object(a.jsx)(u.A,{fontSize:"14px",children:"New BEAST/block"}),Object(a.jsx)(u.A,{bold:!0,fontSize:"14px",children:g})]}),Object(a.jsxs)(K,{children:[Object(a.jsx)(u.A,{fontSize:"14px",children:"Max Transaction Amount"}),Object(a.jsx)(M,{fontSize:"14px",decimals:5,value:m})]}),Object(a.jsxs)(K,{children:[Object(a.jsx)(u.A,{fontSize:"14px",children:"Transfer Tax"}),Object(a.jsx)(M,{fontSize:"14px",decimals:1,value:h,suffix:"%"})]})]})})};function ee(){var e=Object(r.a)(["\n  padding-top: 8px;\n  font-size: 18px;\n  color: #c9c4d4;\n  border-radius: 0;\n"]);return ee=function(){return e},e}function te(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0;\n  border: 1px solid #ff9372;\n  background-color: #100000;\n"]);return te=function(){return e},e}var ne=Object(s.e)(u.h)(te()),ae=Object(s.e)(u.h)(ee()),re=function(){var e=Object(R.h)();return Object(a.jsx)(ne,{children:Object(a.jsxs)(u.i,{children:[Object(a.jsxs)(u.n,{size:"xl",mb:"24px",children:[Object(a.jsx)("div",{children:"Total Value Locked"}),Object(a.jsx)(ae,{children:"Across all Farms and Pools"})]}),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(M,{value:e.toNumber(),prefix:"$",decimals:2})})]})})},ie=n(726);function se(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0;\n  border: 1px solid #ff9372;\n  background-color: #100000;\n"]);return se=function(){return e},e}var ue=Object(s.e)(u.h)(se()),ce=function(){return Object(a.jsx)(ue,{children:Object(a.jsxs)(u.i,{children:[Object(a.jsx)(u.n,{size:"xl",mb:"24px",children:"Announcements"}),Object(a.jsx)(ie.a,{dataSource:{sourceType:"profile",screenName:"BeastModeToken"},options:{height:"320",chrome:"noheader, nofooter",width:"400"}})]})})};function oe(){var e=Object(r.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return oe=function(){return e},e}function pe(){var e=Object(r.a)(["\n  align-items: center;\n  background-image: url('/images/beast-banner.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: contain;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n"]);return pe=function(){return e},e}var de=s.e.div(pe()),le=Object(s.e)(u.b)(oe(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),be=function(){return Object(a.jsxs)(c.a,{children:[Object(a.jsx)(de,{}),Object(a.jsx)("div",{children:Object(a.jsxs)(le,{children:[Object(a.jsx)(J,{}),Object(a.jsx)(ce,{}),Object(a.jsx)(Z,{}),Object(a.jsx)(re,{})]})})]})}}}]);
//# sourceMappingURL=10.c42aa4be.chunk.js.map