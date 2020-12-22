var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.data!==e&&(t.data=e)}let h;function g(t){h=t}const y=[],$=[],x=[],v=[],b=Promise.resolve();let k=!1;function q(t){x.push(t)}let _=!1;const P=new Set;function A(){if(!_){_=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];g(e),L(e.$$)}for(y.length=0;$.length;)$.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];P.has(e)||(P.add(e),e())}x.length=0}while(y.length);for(;v.length;)v.pop()();k=!1,_=!1,P.clear()}}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const E=new Set;function w(t,e){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,b.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(c,i,l,a,u,f,m=[-1]){const d=h;g(c);const p=i.props||{},y=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:m};let $=!1;if(y.ctx=l?l(c,p,(t,e,...n)=>{const r=n.length?n[0]:e;return y.ctx&&u(y.ctx[t],y.ctx[t]=r)&&(y.bound[t]&&y.bound[t](r),$&&w(c,t)),e}):[],y.update(),$=!0,r(y.before_update),y.fragment=!!a&&a(y.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);y.fragment&&y.fragment.l(t),t.forEach(s)}else y.fragment&&y.fragment.c();i.intro&&((x=c.$$.fragment)&&x.i&&(E.delete(x),x.i(v))),function(t,n,c){const{fragment:i,on_mount:l,on_destroy:s,after_update:a}=t.$$;i&&i.m(n,c),q(()=>{const n=l.map(e).filter(o);s?s.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(q)}(c,i.target,i.anchor),A()}var x,v;g(d)}function C(t,e,n){const r=t.slice();return r[5]=e[n],r}function F(t){let e,n,o,c,h,g,y,$,x,v,b,k,q,_,P,A,L,E,w=t[5].name+"",B=N(t[5].price)+"",C=t[5].qty+"",F=N(t[5].sumPrice)+"";function S(...e){return t[3](t[5],...e)}function M(...e){return t[4](t[5],...e)}return{c(){e=a("div"),n=a("h3"),o=u(w),c=u(" - "),h=u(B),g=u(" Ft"),y=f(),$=a("div"),x=u(C),v=u("\r\n\t\t\t\t\tdb -\r\n\t\t\t\t\t"),b=u(F),k=u("\r\n\t\t\t\t\tFt"),q=f(),_=a("div"),P=a("button"),P.textContent="-",A=f(),L=a("button"),L.textContent="+",d(n,"class","svelte-mhexnk"),d($,"class","itemData svelte-mhexnk"),d(P,"class","svelte-mhexnk"),d(L,"class","svelte-mhexnk"),d(_,"class","itemButtons svelte-mhexnk"),d(e,"class","item")},m(t,s,a){l(t,e,s),i(e,n),i(n,o),i(n,c),i(n,h),i(n,g),i(e,y),i(e,$),i($,x),i($,v),i($,b),i($,k),i(e,q),i(e,_),i(_,P),i(_,A),i(_,L),a&&r(E),E=[m(P,"click",S),m(L,"click",M)]},p(e,n){t=e,1&n&&w!==(w=t[5].name+"")&&p(o,w),1&n&&B!==(B=N(t[5].price)+"")&&p(h,B),1&n&&C!==(C=t[5].qty+"")&&p(x,C),1&n&&F!==(F=N(t[5].sumPrice)+"")&&p(b,F)},d(t){t&&s(e),r(E)}}}function S(e){let n,r,o,c,m,h,g,y,$,x,v=N(e[1])+"",b=e[0],k=[];for(let t=0;t<b.length;t+=1)k[t]=F(C(e,b,t));return{c(){n=a("div"),r=a("div"),o=a("img"),m=f();for(let t=0;t<k.length;t+=1)k[t].c();h=f(),g=a("h2"),y=u("Összesen: "),$=u(v),x=u(" Ft"),o.src!==(c="images/logo.png")&&d(o,"src","images/logo.png"),d(o,"alt",""),d(o,"srcset",""),d(o,"class","svelte-mhexnk"),d(g,"class","svelte-mhexnk"),d(r,"class","container svelte-mhexnk"),d(n,"class","content svelte-mhexnk")},m(t,e){l(t,n,e),i(n,r),i(r,o),i(r,m);for(let t=0;t<k.length;t+=1)k[t].m(r,null);i(r,h),i(r,g),i(g,y),i(g,$),i(g,x)},p(t,[e]){if(5&e){let n;for(b=t[0],n=0;n<b.length;n+=1){const o=C(t,b,n);k[n]?k[n].p(o,e):(k[n]=F(o),k[n].c(),k[n].m(r,h))}for(;n<k.length;n+=1)k[n].d(1);k.length=b.length}2&e&&v!==(v=N(t[1])+"")&&p($,v)},i:t,o:t,d(t){t&&s(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(k,t)}}}function M(t,e){return e.name<t.name?1:e.name>t.name?-1:0}function N(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function j(t,e,n){function r(t,e){t.qty=Math.max(t.qty+e,0),t.sumPrice=t.qty*t.price,n(1,c+=e*t.price),n(0,o=o.filter(e=>e.name!=t.name)),o.push(t),o.sort(M)}let o=[{name:"Almalé 5L",price:1300,qty:0,sumPrice:0},{name:"Cékla - Almalé 3L",price:1300,qty:0,sumPrice:0},{name:"Sütőtök - Almalé 3L",price:1300,qty:0,sumPrice:0},{name:"Gyömbér - Almalé 3L",price:1600,qty:0,sumPrice:0},{name:"Fekete Berkenyelé 1L",price:1500,qty:0,sumPrice:0},{name:"Homoktövis - Almalé 3L",price:3e3,qty:0,sumPrice:0},{name:"Meggy - Almalé 3L",price:1500,qty:0,sumPrice:0},{name:"Bag-in-Box kartondoboz 5L",price:220,qty:0,sumPrice:0}],c=0;o.sort(M);return[o,c,r,t=>r(t,-1),t=>r(t,1)]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),B(this,t,j,S,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map