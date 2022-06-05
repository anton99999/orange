var ia=Object.defineProperty,sa=Object.defineProperties;var ra=Object.getOwnPropertyDescriptors;var Zs=Object.getOwnPropertySymbols;var oa=Object.prototype.hasOwnProperty,la=Object.prototype.propertyIsEnumerable;var Js=(n,e,t)=>e in n?ia(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,er=(n,e)=>{for(var t in e||(e={}))oa.call(e,t)&&Js(n,t,e[t]);if(Zs)for(var t of Zs(e))la.call(e,t)&&Js(n,t,e[t]);return n},tr=(n,e)=>sa(n,ra(e));const aa=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};aa();function B(){}function _o(n,e){for(const t in e)n[t]=e[t];return n}function po(n){return n()}function nr(){return Object.create(null)}function Re(n){n.forEach(po)}function fi(n){return typeof n=="function"}function Te(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let wn;function Be(n,e){return wn||(wn=document.createElement("a")),wn.href=e,n===wn.href}function ua(n){return Object.keys(n).length===0}function ca(n,...e){if(n==null)return B;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function _(n,e){n.appendChild(e)}function k(n,e,t){n.insertBefore(e,t||null)}function T(n){n.parentNode.removeChild(n)}function ha(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function g(n){return document.createElement(n)}function ve(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function J(n){return document.createTextNode(n)}function I(){return J(" ")}function et(){return J("")}function se(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function d(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function mo(n){return n===""?null:+n}function da(n){return Array.from(n.childNodes)}function De(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function ge(n,e){n.value=e==null?"":e}function In(n,e,t,i){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}function Rn(n,e){for(let t=0;t<n.options.length;t+=1){const i=n.options[t];if(i.__value===e){i.selected=!0;return}}n.selectedIndex=-1}function go(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}function fa(n,e,{bubbles:t=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,t,i,e),s}let on;function Xt(n){on=n}function _i(){if(!on)throw new Error("Function called outside component initialization");return on}function _a(n){_i().$$.on_mount.push(n)}function pa(n){_i().$$.after_update.push(n)}function ma(n){_i().$$.on_destroy.push(n)}function ga(){const n=_i();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=fa(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}function ir(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const Kt=[],sr=[],Fn=[],rr=[],Co=Promise.resolve();let Ui=!1;function Do(){Ui||(Ui=!0,Co.then(vo))}function Ca(){return Do(),Co}function ln(n){Fn.push(n)}const Ti=new Set;let An=0;function vo(){const n=on;do{for(;An<Kt.length;){const e=Kt[An];An++,Xt(e),Da(e.$$)}for(Xt(null),Kt.length=0,An=0;sr.length;)sr.pop()();for(let e=0;e<Fn.length;e+=1){const t=Fn[e];Ti.has(t)||(Ti.add(t),t())}Fn.length=0}while(Kt.length);for(;rr.length;)rr.pop()();Ui=!1,Ti.clear(),Xt(n)}function Da(n){if(n.fragment!==null){n.update(),Re(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(ln)}}const kn=new Set;let ot;function as(){ot={r:0,c:[],p:ot}}function us(){ot.r||Re(ot.c),ot=ot.p}function ze(n,e){n&&n.i&&(kn.delete(n),n.i(e))}function ht(n,e,t,i){if(n&&n.o){if(kn.has(n))return;kn.add(n),ot.c.push(()=>{kn.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function Eo(n,e){n.d(1),e.delete(n.key)}function yo(n,e,t,i,s,r,o,l,a,u,c,h){let f=n.length,p=r.length,m=f;const D={};for(;m--;)D[n[m].key]=m;const w=[],S=new Map,E=new Map;for(m=p;m--;){const v=h(s,r,m),F=t(v);let x=o.get(F);x?i&&x.p(v,e):(x=u(F,v),x.c()),S.set(F,w[m]=x),F in D&&E.set(F,Math.abs(m-D[F]))}const N=new Set,C=new Set;function A(v){ze(v,1),v.m(l,c),o.set(v.key,v),c=v.first,p--}for(;f&&p;){const v=w[p-1],F=n[f-1],x=v.key,L=F.key;v===F?(c=v.first,f--,p--):S.has(L)?!o.has(x)||N.has(x)?A(v):C.has(L)?f--:E.get(x)>E.get(L)?(C.add(x),A(v)):(N.add(L),f--):(a(F,o),f--)}for(;f--;){const v=n[f];S.has(v.key)||a(v,o)}for(;p;)A(w[p-1]);return w}function bo(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],l=e[r];if(l){for(const a in o)a in l||(i[a]=1);for(const a in l)s[a]||(t[a]=l[a],s[a]=1);n[r]=l}else for(const a in o)s[a]=1}for(const o in i)o in t||(t[o]=void 0);return t}function wo(n){return typeof n=="object"&&n!==null?n:{}}function an(n){n&&n.c()}function kt(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:l}=n.$$;s&&s.m(e,t),i||ln(()=>{const a=r.map(po).filter(fi);o?o.push(...a):Re(a),n.$$.on_mount=[]}),l.forEach(ln)}function Nt(n,e){const t=n.$$;t.fragment!==null&&(Re(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function va(n,e){n.$$.dirty[0]===-1&&(Kt.push(n),Do(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function xe(n,e,t,i,s,r,o,l=[-1]){const a=on;Xt(n);const u=n.$$={fragment:null,ctx:null,props:r,update:B,not_equal:s,bound:nr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:nr(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(u.root);let c=!1;if(u.ctx=t?t(n,e.props||{},(h,f,...p)=>{const m=p.length?p[0]:f;return u.ctx&&s(u.ctx[h],u.ctx[h]=m)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](m),c&&va(n,h)),f}):[],u.update(),c=!0,Re(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){const h=da(e.target);u.fragment&&u.fragment.l(h),h.forEach(T)}else u.fragment&&u.fragment.c();e.intro&&ze(n.$$.fragment),kt(n,e.target,e.anchor,e.customElement),vo()}Xt(a)}class Oe{$destroy(){Nt(this,1),this.$destroy=B}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ua(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(n,e){if(!n)throw Lt(e)},Lt=function(n){return new Error("Firebase Database ("+Ao.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ea=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],l=n[t++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},cs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,l=o?n[s+1]:0,a=s+2<n.length,u=a?n[s+2]:0,c=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(f=64)),i.push(t[c],t[h],t[f],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(So(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ea(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||u==null||h==null)throw Error();const f=r<<2|l>>4;if(i.push(f),u!==64){const p=l<<4&240|u>>2;if(i.push(p),h!==64){const m=u<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},To=function(n){const e=So(n);return cs.encodeByteArray(e,!0)},Io=function(n){return To(n).replace(/\./g,"")},or=function(n){try{return cs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n){return Fo(void 0,n)}function Fo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ba(t)||(n[t]=Fo(n[t],e[t]));return n}function ba(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ko(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wa())}function Aa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function No(){return Ao.NODE_ADMIN===!0}function Sa(){return typeof indexedDB=="object"}function Ta(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="FirebaseError";class hs extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ia,Object.setPrototypeOf(this,hs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Fa(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new hs(s,l,i)}}function Fa(n,e){return n.replace(ka,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ka=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(n){return JSON.parse(n)}function de(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=un(or(r[0])||""),t=un(or(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Na=function(n){const e=xo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ra=function(n){const e=xo(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Rt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function lr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ji(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(ar(r)&&ar(o)){if(!ji(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function ar(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=l^r&(o^l),c=1518500249):(u=r^o^l,c=1859775393):h<60?(u=r&o|l&(r|o),c=2400959708):(u=r^o^l,c=3395469782);const f=(s<<5|s>>>27)+u+a+c+i[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function mi(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,b(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},gi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n){return n&&n._delegate?n._delegate:n}class cn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new pi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ba(e))try{this.getOrInitializeService({instanceIdentifier:it})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=it){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=it){return this.instances.has(e)}getOptions(e=it){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ma(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=it){return this.component?this.component.multipleInstances?e:it:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ma(n){return n===it?void 0:n}function Ba(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Ua={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},ja=K.INFO,Wa={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},$a=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Wa[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oo{constructor(e){this.name=e,this._logLevel=ja,this._logHandler=$a,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ua[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const za=(n,e)=>e.some(t=>n instanceof t);let ur,cr;function Va(){return ur||(ur=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qa(){return cr||(cr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lo=new WeakMap,Wi=new WeakMap,Po=new WeakMap,Ii=new WeakMap,ds=new WeakMap;function Ga(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ye(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Lo.set(t,n)}).catch(()=>{}),ds.set(e,n),e}function Ya(n){if(Wi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Wi.set(n,e)}let $i={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Po.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ye(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ka(n){$i=n($i)}function Qa(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Fi(this),e,...t);return Po.set(i,e.sort?e.sort():[e]),Ye(i)}:qa().includes(n)?function(...e){return n.apply(Fi(this),e),Ye(Lo.get(this))}:function(...e){return Ye(n.apply(Fi(this),e))}}function Xa(n){return typeof n=="function"?Qa(n):(n instanceof IDBTransaction&&Ya(n),za(n,Va())?new Proxy(n,$i):n)}function Ye(n){if(n instanceof IDBRequest)return Ga(n);if(Ii.has(n))return Ii.get(n);const e=Xa(n);return e!==n&&(Ii.set(n,e),ds.set(e,n)),e}const Fi=n=>ds.get(n);function Za(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),l=Ye(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Ye(o.result),a.oldVersion,a.newVersion,Ye(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}const Ja=["get","getKey","getAll","getAllKeys","count"],eu=["put","add","delete","clear"],ki=new Map;function hr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ki.get(e))return ki.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=eu.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ja.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&a.done]))[0]};return ki.set(e,r),r}Ka(n=>tr(er({},n),{get:(e,t,i)=>hr(e,t)||n.get(e,t,i),has:(e,t)=>!!hr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nu(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function nu(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zi="@firebase/app",dr="0.7.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Oo("@firebase/app"),iu="@firebase/app-compat",su="@firebase/analytics-compat",ru="@firebase/analytics",ou="@firebase/app-check-compat",lu="@firebase/app-check",au="@firebase/auth",uu="@firebase/auth-compat",cu="@firebase/database",hu="@firebase/database-compat",du="@firebase/functions",fu="@firebase/functions-compat",_u="@firebase/installations",pu="@firebase/installations-compat",mu="@firebase/messaging",gu="@firebase/messaging-compat",Cu="@firebase/performance",Du="@firebase/performance-compat",vu="@firebase/remote-config",Eu="@firebase/remote-config-compat",yu="@firebase/storage",bu="@firebase/storage-compat",wu="@firebase/firestore",Au="@firebase/firestore-compat",Su="firebase",Tu="9.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="[DEFAULT]",Iu={[zi]:"fire-core",[iu]:"fire-core-compat",[ru]:"fire-analytics",[su]:"fire-analytics-compat",[lu]:"fire-app-check",[ou]:"fire-app-check-compat",[au]:"fire-auth",[uu]:"fire-auth-compat",[cu]:"fire-rtdb",[hu]:"fire-rtdb-compat",[du]:"fire-fn",[fu]:"fire-fn-compat",[_u]:"fire-iid",[pu]:"fire-iid-compat",[mu]:"fire-fcm",[gu]:"fire-fcm-compat",[Cu]:"fire-perf",[Du]:"fire-perf-compat",[vu]:"fire-rc",[Eu]:"fire-rc-compat",[yu]:"fire-gcs",[bu]:"fire-gcs-compat",[wu]:"fire-fst",[Au]:"fire-fst-compat","fire-js":"fire-js",[Su]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new Map,Vi=new Map;function Fu(n,e){try{n.container.addComponent(e)}catch(t){fs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ln(n){const e=n.name;if(Vi.has(e))return fs.debug(`There were multiple attempts to register component ${e}.`),!1;Vi.set(e,n);for(const t of On.values())Fu(t,n);return!0}function ku(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},dt=new Ro("app","Firebase",Nu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=Tu;function Ou(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Mo,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw dt.create("bad-app-name",{appName:String(i)});const s=On.get(i);if(s){if(ji(n,s.options)&&ji(t,s.config))return s;throw dt.create("duplicate-app",{appName:i})}const r=new Ha(i);for(const l of Vi.values())r.addComponent(l);const o=new Ru(n,t,r);return On.set(i,o),o}function Lu(n=Mo){const e=On.get(n);if(!e)throw dt.create("no-app",{appName:n});return e}function It(n,e,t){var i;let s=(i=Iu[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fs.warn(l.join(" "));return}Ln(new cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="firebase-heartbeat-database",Mu=1,hn="firebase-heartbeat-store";let Ni=null;function Bo(){return Ni||(Ni=Za(Pu,Mu,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(hn)}}}).catch(n=>{throw dt.create("storage-open",{originalErrorMessage:n.message})})),Ni}async function Bu(n){try{return(await Bo()).transaction(hn).objectStore(hn).get(Ho(n))}catch(e){throw dt.create("storage-get",{originalErrorMessage:e.message})}}async function fr(n,e){try{const i=(await Bo()).transaction(hn,"readwrite");return await i.objectStore(hn).put(e,Ho(n)),i.done}catch(t){throw dt.create("storage-set",{originalErrorMessage:t.message})}}function Ho(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=1024,Uu=30*24*60*60*1e3;class ju{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $u(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_r();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Uu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_r(),{heartbeatsToSend:t,unsentEntries:i}=Wu(this._heartbeatsCache.heartbeats),s=Io(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _r(){return new Date().toISOString().substring(0,10)}function Wu(n,e=Hu){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),pr(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),pr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class $u{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sa()?Ta().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pr(n){return Io(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n){Ln(new cn("platform-logger",e=>new tu(e),"PRIVATE")),Ln(new cn("heartbeat",e=>new ju(e),"PRIVATE")),It(zi,dr,n),It(zi,dr,"esm2017"),It("fire-js","")}zu("");var Vu="firebase",qu="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(Vu,qu,"app");const vt=[];function Uo(n,e){return{subscribe:jo(n,e).subscribe}}function jo(n,e=B){let t;const i=new Set;function s(l){if(Te(n,l)&&(n=l,t)){const a=!vt.length;for(const u of i)u[1](),vt.push(u,n);if(a){for(let u=0;u<vt.length;u+=2)vt[u][0](vt[u+1]);vt.length=0}}}function r(l){s(l(n))}function o(l,a=B){const u=[l,a];return i.add(u),i.size===1&&(t=e(s)||B),l(n),()=>{i.delete(u),i.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}function Wo(n,e,t){const i=!Array.isArray(n),s=i?[n]:n,r=e.length<2;return Uo(t,o=>{let l=!1;const a=[];let u=0,c=B;const h=()=>{if(u)return;c();const p=e(i?a[0]:a,o);r?o(p):c=fi(p)?p:B},f=s.map((p,m)=>ca(p,D=>{a[m]=D,u&=~(1<<m),l&&h()},()=>{u|=1<<m}));return l=!0,h(),function(){Re(f),c()}})}function Gu(n,e){if(n instanceof RegExp)return{keys:!1,pattern:n};var t,i,s,r,o=[],l="",a=n.split("/");for(a[0]||a.shift();s=a.shift();)t=s[0],t==="*"?(o.push("wild"),l+="/(.*)"):t===":"?(i=s.indexOf("?",1),r=s.indexOf(".",1),o.push(s.substring(1,~i?i:~r?r:s.length)),l+=!!~i&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(l+=(~i?"?":"")+"\\"+s.substring(r))):l+="/"+s;return{keys:o,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}function Yu(n){let e,t,i;const s=[n[2]];var r=n[0];function o(l){let a={};for(let u=0;u<s.length;u+=1)a=_o(a,s[u]);return{props:a}}return r&&(e=new r(o()),e.$on("routeEvent",n[7])),{c(){e&&an(e.$$.fragment),t=et()},m(l,a){e&&kt(e,l,a),k(l,t,a),i=!0},p(l,a){const u=a&4?bo(s,[wo(l[2])]):{};if(r!==(r=l[0])){if(e){as();const c=e;ht(c.$$.fragment,1,0,()=>{Nt(c,1)}),us()}r?(e=new r(o()),e.$on("routeEvent",l[7]),an(e.$$.fragment),ze(e.$$.fragment,1),kt(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(l){i||(e&&ze(e.$$.fragment,l),i=!0)},o(l){e&&ht(e.$$.fragment,l),i=!1},d(l){l&&T(t),e&&Nt(e,l)}}}function Ku(n){let e,t,i;const s=[{params:n[1]},n[2]];var r=n[0];function o(l){let a={};for(let u=0;u<s.length;u+=1)a=_o(a,s[u]);return{props:a}}return r&&(e=new r(o()),e.$on("routeEvent",n[6])),{c(){e&&an(e.$$.fragment),t=et()},m(l,a){e&&kt(e,l,a),k(l,t,a),i=!0},p(l,a){const u=a&6?bo(s,[a&2&&{params:l[1]},a&4&&wo(l[2])]):{};if(r!==(r=l[0])){if(e){as();const c=e;ht(c.$$.fragment,1,0,()=>{Nt(c,1)}),us()}r?(e=new r(o()),e.$on("routeEvent",l[6]),an(e.$$.fragment),ze(e.$$.fragment,1),kt(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(l){i||(e&&ze(e.$$.fragment,l),i=!0)},o(l){e&&ht(e.$$.fragment,l),i=!1},d(l){l&&T(t),e&&Nt(e,l)}}}function Qu(n){let e,t,i,s;const r=[Ku,Yu],o=[];function l(a,u){return a[1]?0:1}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),i=et()},m(a,u){o[e].m(a,u),k(a,i,u),s=!0},p(a,[u]){let c=e;e=l(a),e===c?o[e].p(a,u):(as(),ht(o[c],1,1,()=>{o[c]=null}),us(),t=o[e],t?t.p(a,u):(t=o[e]=r[e](a),t.c()),ze(t,1),t.m(i.parentNode,i))},i(a){s||(ze(t),s=!0)},o(a){ht(t),s=!1},d(a){o[e].d(a),a&&T(i)}}}function mr(){const n=window.location.href.indexOf("#/");let e=n>-1?window.location.href.substr(n+1):"/";const t=e.indexOf("?");let i="";return t>-1&&(i=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:i}}const _s=Uo(null,function(e){e(mr());const t=()=>{e(mr())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}});Wo(_s,n=>n.location);Wo(_s,n=>n.querystring);const gr=jo(void 0);function Xu(n,e,t){let{routes:i={}}=e,{prefix:s=""}=e,{restoreScrollState:r=!1}=e;class o{constructor(A,v){if(!v||typeof v!="function"&&(typeof v!="object"||v._sveltesparouter!==!0))throw Error("Invalid component object");if(!A||typeof A=="string"&&(A.length<1||A.charAt(0)!="/"&&A.charAt(0)!="*")||typeof A=="object"&&!(A instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:F,keys:x}=Gu(A);this.path=A,typeof v=="object"&&v._sveltesparouter===!0?(this.component=v.component,this.conditions=v.conditions||[],this.userData=v.userData,this.props=v.props||{}):(this.component=()=>Promise.resolve(v),this.conditions=[],this.props={}),this._pattern=F,this._keys=x}match(A){if(s){if(typeof s=="string")if(A.startsWith(s))A=A.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const L=A.match(s);if(L&&L[0])A=A.substr(L[0].length)||"/";else return null}}const v=this._pattern.exec(A);if(v===null)return null;if(this._keys===!1)return v;const F={};let x=0;for(;x<this._keys.length;){try{F[this._keys[x]]=decodeURIComponent(v[x+1]||"")||null}catch{F[this._keys[x]]=null}x++}return F}async checkConditions(A){for(let v=0;v<this.conditions.length;v++)if(!await this.conditions[v](A))return!1;return!0}}const l=[];i instanceof Map?i.forEach((C,A)=>{l.push(new o(A,C))}):Object.keys(i).forEach(C=>{l.push(new o(C,i[C]))});let a=null,u=null,c={};const h=ga();async function f(C,A){await Ca(),h(C,A)}let p=null,m=null;r&&(m=C=>{C.state&&C.state.__svelte_spa_router_scrollY?p=C.state:p=null},window.addEventListener("popstate",m),pa(()=>{p?window.scrollTo(p.__svelte_spa_router_scrollX,p.__svelte_spa_router_scrollY):window.scrollTo(0,0)}));let D=null,w=null;const S=_s.subscribe(async C=>{D=C;let A=0;for(;A<l.length;){const v=l[A].match(C.location);if(!v){A++;continue}const F={route:l[A].path,location:C.location,querystring:C.querystring,userData:l[A].userData,params:v&&typeof v=="object"&&Object.keys(v).length?v:null};if(!await l[A].checkConditions(F)){t(0,a=null),w=null,f("conditionsFailed",F);return}f("routeLoading",Object.assign({},F));const x=l[A].component;if(w!=x){x.loading?(t(0,a=x.loading),w=x,t(1,u=x.loadingParams),t(2,c={}),f("routeLoaded",Object.assign({},F,{component:a,name:a.name,params:u}))):(t(0,a=null),w=null);const L=await x();if(C!=D)return;t(0,a=L&&L.default||L),w=x}v&&typeof v=="object"&&Object.keys(v).length?t(1,u=v):t(1,u=null),t(2,c=l[A].props),f("routeLoaded",Object.assign({},F,{component:a,name:a.name,params:u})).then(()=>{gr.set(u)});return}t(0,a=null),w=null,gr.set(void 0)});ma(()=>{S(),m&&window.removeEventListener("popstate",m)});function E(C){ir.call(this,n,C)}function N(C){ir.call(this,n,C)}return n.$$set=C=>{"routes"in C&&t(3,i=C.routes),"prefix"in C&&t(4,s=C.prefix),"restoreScrollState"in C&&t(5,r=C.restoreScrollState)},n.$$.update=()=>{n.$$.dirty&32&&(history.scrollRestoration=r?"manual":"auto")},[a,u,c,i,s,r,E,N]}class Zu extends Oe{constructor(e){super(),xe(this,e,Xu,Qu,Te,{routes:3,prefix:4,restoreScrollState:5})}}function Ju(n){let e;return{c(){e=g("div"),e.innerHTML=`<h1 class="svelte-1vyr2yy">404</h1> 
    <h2 text="">\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043B\u0435 \u0442\u0430\u043A\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u043D\u0435\u043C\u0430\u0454</h2> 
    <a href="#/" class="svelte-1vyr2yy">\u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443</a>`,d(e,"flex","center"),d(e,"class","over")},m(t,i){k(t,e,i)},p:B,i:B,o:B,d(t){t&&T(e)}}}function ec(n){return localStorage.name||(location.hash="/login"),[]}class tc extends Oe{constructor(e){super(),xe(this,e,ec,Ju,Te,{})}}const Cr="@firebase/database",Dr="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o="";function nc(n){$o=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:un(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return He(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ic(e)}}catch{}return new sc},lt=zo("localStorage"),qi=zo("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Oo("@firebase/database"),rc=function(){let n=1;return function(){return n++}}(),Vo=function(n){const e=La(n),t=new Oa;t.update(e);const i=t.digest();return cs.encodeByteArray(i)},Dn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Dn.apply(null,i):typeof i=="object"?e+=de(i):e+=i,e+=" "}return e};let ut=null,vr=!0;const oc=function(n,e){b(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Ft.logLevel=K.VERBOSE,ut=Ft.log.bind(Ft),e&&qi.set("logging_enabled",!0)):typeof n=="function"?ut=n:(ut=null,qi.remove("logging_enabled"))},Ce=function(...n){if(vr===!0&&(vr=!1,ut===null&&qi.get("logging_enabled")===!0&&oc(!0)),ut){const e=Dn.apply(null,n);ut(e)}},vn=function(n){return function(...e){Ce(n,...e)}},Gi=function(...n){const e="FIREBASE INTERNAL ERROR: "+Dn(...n);Ft.error(e)},ft=function(...n){const e=`FIREBASE FATAL ERROR: ${Dn(...n)}`;throw Ft.error(e),new Error(e)},ye=function(...n){const e="FIREBASE WARNING: "+Dn(...n);Ft.warn(e)},lc=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ps=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ac=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},_t="[MIN_NAME]",Qe="[MAX_NAME]",Mt=function(n,e){if(n===e)return 0;if(n===_t||e===Qe)return-1;if(e===_t||n===Qe)return 1;{const t=Er(n),i=Er(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},uc=function(n,e){return n===e?0:n<e?-1:1},jt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+de(e))},ms=function(n){if(typeof n!="object"||n===null)return de(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=de(e[i]),t+=":",t+=ms(n[e[i]]);return t+="}",t},qo=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Se(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Go=function(n){b(!ps(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,a;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(a=t;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const c=u.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(c.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},cc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},dc=new RegExp("^-?(0*)\\d{1,10}$"),fc=-2147483648,_c=2147483647,Er=function(n){if(dc.test(n)){const e=Number(n);if(e>=fc&&e<=_c)return e}return null},Bt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ye("Exception was thrown by user callback.",t),e},Math.floor(0))}},pc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zt=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ye(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ye(e)}}class Yi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="5",Yo="v",Ko="s",Qo="r",Xo="f",Zo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jo="ls",el="p",Ki="ac",tl="websocket",nl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t,i,s,r=!1,o="",l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=lt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&lt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Dc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function il(n,e,t){b(typeof e=="string","typeof type must == string"),b(typeof t=="object","typeof params must == object");let i;if(e===tl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===nl)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Dc(n)&&(t.ns=n.namespace);const s=[];return Se(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.counters_={}}incrementCounter(e,t=1){He(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ya(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri={},xi={};function Cs(n){const e=n.toString();return Ri[e]||(Ri[e]=new vc),Ri[e]}function Ec(n,e){const t=n.toString();return xi[t]||(xi[t]=e()),xi[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Bt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="start",bc="close",wc="pLPCommand",Ac="pRTLPCB",sl="id",rl="pw",ol="ser",Sc="cb",Tc="seg",Ic="ts",Fc="d",kc="dframe",ll=1870,al=30,Nc=ll-al,Rc=25e3,xc=3e4;class yt{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vn(e),this.stats_=Cs(t),this.urlFn=a=>(this.appCheckToken&&(a[Ki]=this.appCheckToken),il(t,nl,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new yc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xc)),ac(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ds((...r)=>{const[o,l,a,u,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yr)this.id=l,this.password=a;else if(o===bc)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[yr]="t",i[ol]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Sc]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Yo]=gs,this.transportSessionId&&(i[Ko]=this.transportSessionId),this.lastSessionId&&(i[Jo]=this.lastSessionId),this.applicationId&&(i[el]=this.applicationId),this.appCheckToken&&(i[Ki]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Zo.test(location.hostname)&&(i[Qo]=Xo);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yt.forceAllow_=!0}static forceDisallow(){yt.forceDisallow_=!0}static isAvailable(){return yt.forceAllow_?!0:!yt.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!cc()&&!hc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=de(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=To(t),s=qo(i,Nc);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[kc]="t",i[sl]=e,i[rl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=de(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ds{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rc(),window[wc+this.uniqueCallbackIdentifier]=e,window[Ac+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ds.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sl]=this.myID,e[rl]=this.myPW,e[ol]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+al+i.length<=ll;){const o=this.pendingSegs.shift();i=i+"&"+Tc+s+"="+o.seg+"&"+Ic+s+"="+o.ts+"&"+Fc+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Rc)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=16384,Lc=45e3;let Pn=null;typeof MozWebSocket!="undefined"?Pn=MozWebSocket:typeof WebSocket!="undefined"&&(Pn=WebSocket);class Fe{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vn(this.connId),this.stats_=Cs(t),this.connURL=Fe.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Yo]=gs,typeof location!="undefined"&&location.hostname&&Zo.test(location.hostname)&&(o[Qo]=Xo),t&&(o[Ko]=t),i&&(o[Jo]=i),s&&(o[Ki]=s),r&&(o[el]=r),il(e,tl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,lt.set("previous_websocket_failure",!0);try{let i;No(),this.mySock=new Pn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Pn!==null&&!Fe.forceDisallow_}static previouslyFailed(){return lt.isInMemoryStorage||lt.get("previous_websocket_failure")===!0}markConnectionHealthy(){lt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=un(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=de(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=qo(t,Oc);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Fe.responsesRequiredToBeHealthy=2;Fe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yt,Fe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Fe&&Fe.isAvailable();let i=t&&!Fe.previouslyFailed();if(e.webSocketOnly&&(t||ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Fe];else{const s=this.transports_=[];for(const r of dn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);dn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}dn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=6e4,Mc=5e3,Bc=10*1024,Hc=100*1024,Oi="t",br="d",Uc="s",wr="r",jc="e",Ar="o",Sr="a",Tr="n",Ir="p",Wc="h";class $c{constructor(e,t,i,s,r,o,l,a,u,c){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vn("c:"+this.id+":"),this.transportManager_=new dn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Zt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Oi in e){const t=e[Oi];t===Sr?this.upgradeIfSecondaryHealthy_():t===wr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ar&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=jt("t",e),i=jt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ir,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=jt("t",e),i=jt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=jt(Oi,e);if(br in e){const i=e[br];if(t===Wc)this.onHandshake_(i);else if(t===Tr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Uc?this.onConnectionShutdown_(i):t===wr?this.onReset_(i):t===jc?Gi("Server Error: "+i):t===Ar?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),gs!==i&&ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Zt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Pc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Mc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ir,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(lt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends cl{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ko()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Mn}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=32,kr=768;class Y{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function V(){return new Y("")}function U(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Xe(n){return n.pieces_.length-n.pieceNum_}function Z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Y(n.pieces_,e)}function hl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function zc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function dl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function fl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Y(e,0)}function oe(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof Y)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new Y(t,0)}function j(n){return n.pieceNum_>=n.pieces_.length}function be(n,e){const t=U(n),i=U(e);if(t===null)return e;if(t===i)return be(Z(n),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function vs(n,e){if(Xe(n)!==Xe(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ke(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Xe(n)>Xe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Vc{constructor(e,t){this.errorPrefix_=t,this.parts_=dl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=gi(this.parts_[i]);_l(this)}}function qc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=gi(e),_l(n)}function Gc(n){const e=n.parts_.pop();n.byteLength_-=gi(e),n.parts_.length>0&&(n.byteLength_-=1)}function _l(n){if(n.byteLength_>kr)throw new Error(n.errorPrefix_+"has a key path longer than "+kr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Fr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fr+") or object contains a cycle "+st(n))}function st(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends cl{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Es}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=1e3,Yc=60*5*1e3,Kc=3*1e3,Nr=30*1e3,Qc=1.3,Xc=3e4,Zc="server_kill",Rr=3;class $e extends ul{constructor(e,t,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=$e.nextPersistentConnectionId_++,this.log_=vn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wt,this.maxReconnectDelay_=Yc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!No())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Es.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(de(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new pi,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const l=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,l,!1,null),t.resolve(l)):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},Kc),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,u=l.s;$e.warnOnListenWarnings_(a,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&He(e,"w")){const i=Rt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ra(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Na(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Gi("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Xc&&(this.reconnectDelay_=Wt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Qc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+$e.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},u=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new $c(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{ye(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Zc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ye(h),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],lr(this.interruptReasons_)&&(this.reconnectDelay_=Wt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ms(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new Y(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ce("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rr&&(this.reconnectDelay_=Nr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ce("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+$o.replace(/\./g,"-")]=1,ko()?e["framework.cordova"]=1:Aa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mn.getInstance().currentlyOnline();return lr(this.interruptReasons_)&&e}}$e.nextPersistentConnectionId_=0;$e.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new M(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new M(_t,e),s=new M(_t,t);return this.compare(i,s)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn;class pl extends Ci{static get __EMPTY_NODE(){return Sn}static set __EMPTY_NODE(e){Sn=e}compare(e,t){return Mt(e.name,t.name)}isDefinedOn(e){throw Lt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return M.MIN}maxPost(){return new M(Qe,Sn)}makePost(e,t){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Sn)}toString(){return".key"}}const ct=new pl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:ce.RED,this.left=s!=null?s:Ee.EMPTY_NODE,this.right=r!=null?r:Ee.EMPTY_NODE}copy(e,t,i,s,r){return new ce(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ee.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Ee.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class Jc{copy(e,t,i,s,r){return this}insert(e,t,i){return new ce(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ee{constructor(e,t=Ee.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ee(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new Ee(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Tn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Tn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Tn(this.root_,null,this.comparator_,!0,e)}}Ee.EMPTY_NODE=new Jc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(n,e){return Mt(n.name,e.name)}function ys(n,e){return Mt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;function th(n){Qi=n}const ml=function(n){return typeof n=="number"?"number:"+Go(n):"string:"+n},gl=function(n){if(n.isLeafNode()){const e=n.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&He(e,".sv"),"Priority must be a string or number.")}else b(n===Qi||n.isEmpty(),"priority of unexpected type.");b(n===Qi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr;class ue{constructor(e,t=ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gl(this.priorityNode_)}static set __childrenNodeConstructor(e){xr=e}static get __childrenNodeConstructor(){return xr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:U(e)===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=U(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(b(i!==".priority"||Xe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ml(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Go(this.value_):e+=this.value_,this.lazyHash_=Vo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ue.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ue.VALUE_TYPE_ORDER.indexOf(t),r=ue.VALUE_TYPE_ORDER.indexOf(i);return b(s>=0,"Unknown leaf type: "+t),b(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl,Dl;function nh(n){Cl=n}function ih(n){Dl=n}class sh extends Ci{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Mt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Qe,new ue("[PRIORITY-POST]",Dl))}makePost(e,t){const i=Cl(e);return new M(t,new ue("[PRIORITY-POST]",i))}toString(){return".priority"}}const ie=new sh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=Math.log(2);class oh{constructor(e){const t=r=>parseInt(Math.log(r)/rh,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bn=function(n,e,t,i){n.sort(e);const s=function(a,u){const c=u-a;let h,f;if(c===0)return null;if(c===1)return h=n[a],f=t?t(h):h,new ce(f,h.node,ce.BLACK,null,null);{const p=parseInt(c/2,10)+a,m=s(a,p),D=s(p+1,u);return h=n[p],f=t?t(h):h,new ce(f,h.node,ce.BLACK,m,D)}},r=function(a){let u=null,c=null,h=n.length;const f=function(m,D){const w=h-m,S=h;h-=m;const E=s(w+1,S),N=n[w],C=t?t(N):N;p(new ce(C,N.node,D,null,E))},p=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<a.count;++m){const D=a.nextBitIsOne(),w=Math.pow(2,a.count-(m+1));D?f(w,ce.BLACK):(f(w,ce.BLACK),f(w,ce.RED))}return c},o=new oh(n.length),l=r(o);return new Ee(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li;const Et={};class We{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return b(Et&&ie,"ChildrenNode.ts has not been loaded"),Li=Li||new We({".priority":Et},{".priority":ie}),Li}get(e){const t=Rt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ee?t:null}hasIndex(e){return He(this.indexSet_,e.toString())}addIndex(e,t){b(e!==ct,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(M.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Bn(i,e.getCompare()):l=Et;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new We(c,u)}addToIndexes(e,t){const i=xn(this.indexes_,(s,r)=>{const o=Rt(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),s===Et)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(M.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Bn(l,o.getCompare())}else return Et;else{const l=t.get(e.name);let a=s;return l&&(a=a.remove(new M(e.name,l))),a.insert(e,e.node)}});return new We(i,this.indexSet_)}removeFromIndexes(e,t){const i=xn(this.indexes_,s=>{if(s===Et)return s;{const r=t.get(e.name);return r?s.remove(new M(e.name,r)):s}});return new We(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t;class O{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&gl(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $t||($t=new O(new Ee(ys),null,We.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$t}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?$t:t}}getChild(e){const t=U(e);return t===null?this:this.getImmediateChild(t).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(b(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new M(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?$t:this.priorityNode_;return new O(s,o,r)}}updateChild(e,t){const i=U(e);if(i===null)return t;{b(U(e)!==".priority"||Xe(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Z(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(ie,(o,l)=>{t[o]=l.val(e),i++,r&&O.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ml(this.getPriority().val())+":"),this.forEachChild(ie,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Vo(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new M(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new M(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new M(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,M.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===En?-1:0}withIndex(e){if(e===ct||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ct||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ie),s=t.getIterator(ie);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ct?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lh extends O{constructor(){super(new Ee(ys),O.EMPTY_NODE,We.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const En=new lh;Object.defineProperties(M,{MIN:{value:new M(_t,O.EMPTY_NODE)},MAX:{value:new M(Qe,En)}});pl.__EMPTY_NODE=O.EMPTY_NODE;ue.__childrenNodeConstructor=O;th(En);ih(En);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=!0;function he(n,e=null){if(n===null)return O.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ue(t,he(e))}if(!(n instanceof Array)&&ah){const t=[];let i=!1;if(Se(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=he(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),t.push(new M(o,a)))}}),t.length===0)return O.EMPTY_NODE;const r=Bn(t,eh,o=>o.name,ys);if(i){const o=Bn(t,ie.getCompare());return new O(r,he(e),new We({".priority":o},{".priority":ie}))}else return new O(r,he(e),We.Default)}else{let t=O.EMPTY_NODE;return Se(n,(i,s)=>{if(He(n,i)&&i.substring(0,1)!=="."){const r=he(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(he(e))}}nh(he);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Ci{constructor(e){super(),this.indexPath_=e,b(!j(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Mt(e.name,t.name):r}makePost(e,t){const i=he(e),s=O.EMPTY_NODE.updateChild(this.indexPath_,i);return new M(t,s)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,En);return new M(Qe,e)}toString(){return dl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends Ci{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Mt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,t){const i=he(e);return new M(t,i)}toString(){return".value"}}const vl=new uh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(n){return{type:"value",snapshotNode:n}}function fn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function _n(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function pn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function hh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(_n(t,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(fn(t,i)):o.trackChildChange(pn(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ie,(s,r)=>{t.hasChild(s)||i.trackChildChange(_n(s,r))}),t.isLeafNode()||t.forEachChild(ie,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(pn(s,r,o))}else i.trackChildChange(fn(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.indexedFilter_=new ws(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mn.getStartPost_(e),this.endPost_=mn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new M(t,i))||(i=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=O.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(O.EMPTY_NODE);const r=this;return t.forEachChild(ie,(o,l)=>{r.matches(new M(o,l))||(s=s.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.rangedFilter_=new mn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new M(t,i))||(i=O.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=O.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)s=s.updateImmediateChild(l.name,l.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(O.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,p)=>h(p,f)}else a=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let u=0,c=!1;for(;a.hasNext();){const h=a.getNext();!c&&l(r,h)<=0&&(c=!0),c&&u<this.limit_&&l(h,o)<=0?u++:s=s.updateImmediateChild(h.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new M(t,i),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(t)){const h=l.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===t||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,a);if(c&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(pn(t,i,h)),l.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(_n(t,h));const D=l.updateImmediateChild(t,O.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(fn(f.name,f.node)),D.updateImmediateChild(f.name,f.node)):D}}else return i.isEmpty()?e:c&&o(u,a)>=0?(r!=null&&(r.trackChildChange(_n(u.name,u.node)),r.trackChildChange(fn(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_t}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new As;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fh(n){return n.loadsAllData()?new ws(n.getIndex()):n.hasLimit()?new dh(n):new mn(n)}function _h(n,e,t){const i=n.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,t!=null?(i.startNameSet_=!0,i.indexStartName_=t):(i.startNameSet_=!1,i.indexStartName_=""),i}function ph(n,e,t){const i=n.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,t!==void 0?(i.endNameSet_=!0,i.indexEndName_=t):(i.endNameSet_=!1,i.indexEndName_=""),i}function mh(n,e){const t=n.copy();return t.index_=e,t}function Or(n){const e={};if(n.isDefault())return e;let t;return n.index_===ie?t="$priority":n.index_===vl?t="$value":n.index_===ct?t="$key":(b(n.index_ instanceof bs,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=de(t),n.startSet_&&(e.startAt=de(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+de(n.indexStartName_))),n.endSet_&&(e.endAt=de(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+de(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Lr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ie&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ul{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=vn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Hn.getListenId_(e,i),l={};this.listens_[o]=l;const a=Or(e._queryParams);this.restRequest_(r+".json",a,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(r,h,!1,i),Rt(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,t){const i=Hn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Or(e._queryParams),i=e._path.toString(),s=new pi;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xa(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=un(l.responseText)}catch{ye("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&ye("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return{value:null,children:new Map}}function El(n,e,t){if(j(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=U(e);n.children.has(i)||n.children.set(i,Un());const s=n.children.get(i);e=Z(e),El(s,e,t)}}function Xi(n,e,t){n.value!==null?t(e,n.value):Ch(n,(i,s)=>{const r=new Y(e.toString()+"/"+i);Xi(s,r,t)})}function Ch(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Se(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=10*1e3,vh=30*1e3,Eh=5*60*1e3;class yh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Dh(e);const i=Pr+(vh-Pr)*Math.random();Zt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Se(e,(s,r)=>{r>0&&He(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Zt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Eh))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Me||(Me={}));function yl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wl(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Me.ACK_USER_WRITE,this.source=yl()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Y(e));return new jn(V(),t,this.revert)}}else return b(U(this.path)===e,"operationForChild called for unrelated child."),new jn(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Me.OVERWRITE}operationForChild(e){return j(this.path)?new pt(this.source,V(),this.snap.getImmediateChild(e)):new pt(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Me.MERGE}operationForChild(e){if(j(this.path)){const t=this.children.subtree(new Y(e));return t.isEmpty()?null:t.value?new pt(this.source,V(),t.value):new gn(this.source,V(),t)}else return b(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gn(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const t=U(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wh(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(hh(o.childName,o.snapshotNode))}),zt(n,s,"child_removed",e,i,t),zt(n,s,"child_added",e,i,t),zt(n,s,"child_moved",r,i,t),zt(n,s,"child_changed",e,i,t),zt(n,s,"value",e,i,t),s}function zt(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,a)=>Sh(n,l,a)),o.forEach(l=>{const a=Ah(n,l,r);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,n.query_))})})}function Ah(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Sh(n,e,t){if(e.childName==null||t.childName==null)throw Lt("Should only compare child_ events.");const i=new M(e.childName,e.snapshotNode),s=new M(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n,e){return{eventCache:n,serverCache:e}}function Jt(n,e,t,i){return Di(new Ze(e,t,i),n.serverCache)}function Al(n,e,t,i){return Di(n.eventCache,new Ze(e,t,i))}function Wn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function mt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;const Th=()=>(Pi||(Pi=new Ee(uc)),Pi);class X{constructor(e,t=Th()){this.value=e,this.children=t}static fromObject(e){let t=new X(null);return Se(e,(i,s)=>{t=t.set(new Y(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:V(),value:this.value};if(j(e))return null;{const i=U(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Z(e),t);return r!=null?{path:oe(new Y(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const t=U(e),i=this.children.get(t);return i!==null?i.subtree(Z(e)):new X(null)}}set(e,t){if(j(e))return new X(t,this.children);{const i=U(e),r=(this.children.get(i)||new X(null)).set(Z(e),t),o=this.children.insert(i,r);return new X(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const t=U(e),i=this.children.get(t);if(i){const s=i.remove(Z(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new X(null):new X(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const t=U(e),i=this.children.get(t);return i?i.get(Z(e)):null}}setTree(e,t){if(j(e))return t;{const i=U(e),r=(this.children.get(i)||new X(null)).setTree(Z(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new X(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(oe(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,V(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(j(e))return null;{const r=U(e),o=this.children.get(r);return o?o.findOnPath_(Z(e),oe(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,V(),t)}foreachOnPath_(e,t,i){if(j(e))return this;{this.value&&i(t,this.value);const s=U(e),r=this.children.get(s);return r?r.foreachOnPath_(Z(e),oe(t,s),i):new X(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(oe(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.writeTree_=e}static empty(){return new Ne(new X(null))}}function en(n,e,t){if(j(e))return new Ne(new X(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=be(s,e);return r=r.updateChild(o,t),new Ne(n.writeTree_.set(s,r))}else{const s=new X(t),r=n.writeTree_.setTree(e,s);return new Ne(r)}}}function Mr(n,e,t){let i=n;return Se(t,(s,r)=>{i=en(i,oe(e,s),r)}),i}function Br(n,e){if(j(e))return Ne.empty();{const t=n.writeTree_.setTree(e,new X(null));return new Ne(t)}}function Zi(n,e){return gt(n,e)!=null}function gt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(be(t.path,e)):null}function Hr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ie,(i,s)=>{e.push(new M(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new M(i,s.value))}),e}function Ke(n,e){if(j(e))return n;{const t=gt(n,e);return t!=null?new Ne(new X(t)):new Ne(n.writeTree_.subtree(e))}}function Ji(n){return n.writeTree_.isEmpty()}function xt(n,e){return Sl(V(),n.writeTree_,e)}function Sl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Sl(oe(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(oe(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(n,e){return kl(e,n)}function Ih(n,e,t,i,s){b(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=en(n.visibleWrites,e,t)),n.lastWriteId=i}function Fh(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function kh(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);b(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Nh(l,i.path)?s=!1:ke(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return Rh(n),!0;if(i.snap)n.visibleWrites=Br(n.visibleWrites,i.path);else{const l=i.children;Se(l,a=>{n.visibleWrites=Br(n.visibleWrites,oe(i.path,a))})}return!0}else return!1}function Nh(n,e){if(n.snap)return ke(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ke(oe(n.path,t),e))return!0;return!1}function Rh(n){n.visibleWrites=Tl(n.allWrites,xh,V()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function xh(n){return n.visible}function Tl(n,e,t){let i=Ne.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)ke(t,o)?(l=be(t,o),i=en(i,l,r.snap)):ke(o,t)&&(l=be(o,t),i=en(i,V(),r.snap.getChild(l)));else if(r.children){if(ke(t,o))l=be(t,o),i=Mr(i,l,r.children);else if(ke(o,t))if(l=be(o,t),j(l))i=Mr(i,V(),r.children);else{const a=Rt(r.children,U(l));if(a){const u=a.getChild(Z(l));i=en(i,V(),u)}}}else throw Lt("WriteRecord should have .snap or .children")}}return i}function Il(n,e,t,i,s){if(!i&&!s){const r=gt(n.visibleWrites,e);if(r!=null)return r;{const o=Ke(n.visibleWrites,e);if(Ji(o))return t;if(t==null&&!Zi(o,V()))return null;{const l=t||O.EMPTY_NODE;return xt(o,l)}}}else{const r=Ke(n.visibleWrites,e);if(!s&&Ji(r))return t;if(!s&&t==null&&!Zi(r,V()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(ke(u.path,e)||ke(e,u.path))},l=Tl(n.allWrites,o,e),a=t||O.EMPTY_NODE;return xt(l,a)}}}function Oh(n,e,t){let i=O.EMPTY_NODE;const s=gt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ie,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ke(n.visibleWrites,e);return t.forEachChild(ie,(o,l)=>{const a=xt(Ke(r,new Y(o)),l);i=i.updateImmediateChild(o,a)}),Hr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ke(n.visibleWrites,e);return Hr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Lh(n,e,t,i,s){b(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=oe(e,t);if(Zi(n.visibleWrites,r))return null;{const o=Ke(n.visibleWrites,r);return Ji(o)?s.getChild(t):xt(o,s.getChild(t))}}function Ph(n,e,t,i){const s=oe(e,t),r=gt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ke(n.visibleWrites,s);return xt(o,i.getNode().getImmediateChild(t))}else return null}function Mh(n,e){return gt(n.visibleWrites,e)}function Bh(n,e,t,i,s,r,o){let l;const a=Ke(n.visibleWrites,e),u=gt(a,V());if(u!=null)l=u;else if(t!=null)l=xt(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let p=f.getNext();for(;p&&c.length<s;)h(p,i)!==0&&c.push(p),p=f.getNext();return c}else return[]}function Hh(){return{visibleWrites:Ne.empty(),allWrites:[],lastWriteId:-1}}function $n(n,e,t,i){return Il(n.writeTree,n.treePath,e,t,i)}function Ts(n,e){return Oh(n.writeTree,n.treePath,e)}function Ur(n,e,t,i){return Lh(n.writeTree,n.treePath,e,t,i)}function zn(n,e){return Mh(n.writeTree,oe(n.treePath,e))}function Uh(n,e,t,i,s,r){return Bh(n.writeTree,n.treePath,e,t,i,s,r)}function Is(n,e,t){return Ph(n.writeTree,n.treePath,e,t)}function Fl(n,e){return kl(oe(n.treePath,e),n.writeTree)}function kl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;b(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),b(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,pn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,_n(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,fn(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,pn(i,e.snapshotNode,s.oldSnap));else throw Lt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Nl=new Wh;class Fs{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ze(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Is(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mt(this.viewCache_),r=Uh(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n){return{filter:n}}function zh(n,e){b(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Vh(n,e,t,i,s){const r=new jh;let o,l;if(t.type===Me.OVERWRITE){const u=t;u.source.fromUser?o=es(n,e,u.path,u.snap,i,s,r):(b(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!j(u.path),o=Vn(n,e,u.path,u.snap,i,s,l,r))}else if(t.type===Me.MERGE){const u=t;u.source.fromUser?o=Gh(n,e,u.path,u.children,i,s,r):(b(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=ts(n,e,u.path,u.children,i,s,l,r))}else if(t.type===Me.ACK_USER_WRITE){const u=t;u.revert?o=Qh(n,e,u.path,i,s,r):o=Yh(n,e,u.path,u.affectedTree,i,s,r)}else if(t.type===Me.LISTEN_COMPLETE)o=Kh(n,e,t.path,i,r);else throw Lt("Unknown operation type: "+t.type);const a=r.getChanges();return qh(e,o,a),{viewCache:o,changes:a}}function qh(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Wn(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(ch(Wn(e)))}}function Rl(n,e,t,i,s,r){const o=e.eventCache;if(zn(i,t)!=null)return e;{let l,a;if(j(t))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=mt(e),c=u instanceof O?u:O.EMPTY_NODE,h=Ts(i,c);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const u=$n(i,mt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=U(t);if(u===".priority"){b(Xe(t)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const h=Ur(i,t,c,a);h!=null?l=n.filter.updatePriority(c,h):l=o.getNode()}else{const c=Z(t);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=Ur(i,t,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(u).updateChild(c,f):h=o.getNode().getImmediateChild(u)}else h=Is(i,u,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),u,h,c,s,r):l=o.getNode()}}return Jt(e,l,o.isFullyInitialized()||j(t),n.filter.filtersNodes())}}function Vn(n,e,t,i,s,r,o,l){const a=e.serverCache;let u;const c=o?n.filter:n.filter.getIndexedFilter();if(j(t))u=c.updateFullNode(a.getNode(),i,null);else if(c.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(t,i);u=c.updateFullNode(a.getNode(),p,null)}else{const p=U(t);if(!a.isCompleteForPath(t)&&Xe(t)>1)return e;const m=Z(t),w=a.getNode().getImmediateChild(p).updateChild(m,i);p===".priority"?u=c.updatePriority(a.getNode(),w):u=c.updateChild(a.getNode(),p,w,m,Nl,null)}const h=Al(e,u,a.isFullyInitialized()||j(t),c.filtersNodes()),f=new Fs(s,h,r);return Rl(n,h,t,s,f,l)}function es(n,e,t,i,s,r,o){const l=e.eventCache;let a,u;const c=new Fs(s,e,r);if(j(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),a=Jt(e,u,!0,n.filter.filtersNodes());else{const h=U(t);if(h===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),a=Jt(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=Z(t),p=l.getNode().getImmediateChild(h);let m;if(j(f))m=i;else{const D=c.getCompleteChild(h);D!=null?hl(f)===".priority"&&D.getChild(fl(f)).isEmpty()?m=D:m=D.updateChild(f,i):m=O.EMPTY_NODE}if(p.equals(m))a=e;else{const D=n.filter.updateChild(l.getNode(),h,m,f,c,o);a=Jt(e,D,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function jr(n,e){return n.eventCache.isCompleteForChild(e)}function Gh(n,e,t,i,s,r,o){let l=e;return i.foreach((a,u)=>{const c=oe(t,a);jr(e,U(c))&&(l=es(n,l,c,u,s,r,o))}),i.foreach((a,u)=>{const c=oe(t,a);jr(e,U(c))||(l=es(n,l,c,u,s,r,o))}),l}function Wr(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ts(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;j(t)?u=i:u=new X(null).setTree(t,i);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(c.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Wr(n,p,f);a=Vn(n,a,new Y(h),m,s,r,o,l)}}),u.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!c.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),D=Wr(n,m,f);a=Vn(n,a,new Y(h),D,s,r,o,l)}}),a}function Yh(n,e,t,i,s,r,o){if(zn(s,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(j(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Vn(n,e,t,a.getNode().getChild(t),s,r,l,o);if(j(t)){let u=new X(null);return a.getNode().forEachChild(ct,(c,h)=>{u=u.set(new Y(c),h)}),ts(n,e,t,u,s,r,l,o)}else return e}else{let u=new X(null);return i.foreach((c,h)=>{const f=oe(t,c);a.isCompleteForPath(f)&&(u=u.set(c,a.getNode().getChild(f)))}),ts(n,e,t,u,s,r,l,o)}}function Kh(n,e,t,i,s){const r=e.serverCache,o=Al(e,r.getNode(),r.isFullyInitialized()||j(t),r.isFiltered());return Rl(n,o,t,i,Nl,s)}function Qh(n,e,t,i,s,r){let o;if(zn(i,t)!=null)return e;{const l=new Fs(i,e,s),a=e.eventCache.getNode();let u;if(j(t)||U(t)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=$n(i,mt(e));else{const h=e.serverCache.getNode();b(h instanceof O,"serverChildren would be complete if leaf node"),c=Ts(i,h)}c=c,u=n.filter.updateFullNode(a,c,r)}else{const c=U(t);let h=Is(i,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=a.getImmediateChild(c)),h!=null?u=n.filter.updateChild(a,c,h,Z(t),l,r):e.eventCache.getNode().hasChild(c)?u=n.filter.updateChild(a,c,O.EMPTY_NODE,Z(t),l,r):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$n(i,mt(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||zn(i,V())!=null,Jt(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ws(i.getIndex()),r=fh(i);this.processor_=$h(r);const o=t.serverCache,l=t.eventCache,a=s.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(O.EMPTY_NODE,l.getNode(),null),c=new Ze(a,o.isFullyInitialized(),s.filtersNodes()),h=new Ze(u,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Di(h,c),this.eventGenerator_=new bh(this.query_)}get query(){return this.query_}}function Zh(n){return Wn(n.viewCache_)}function Jh(n,e){const t=mt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!j(e)&&!t.getImmediateChild(U(e)).isEmpty())?t.getChild(e):null}function $r(n,e,t,i){e.type===Me.MERGE&&e.source.queryId!==null&&(b(mt(n.viewCache_),"We should always have a full cache before handling merges"),b(Wn(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Vh(n.processor_,s,e,t,i);return zh(n.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ed(n,r.changes,r.viewCache.eventCache.getNode(),null)}function ed(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return wh(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr;class td{constructor(){this.views=new Map}}function nd(n){b(!zr,"__referenceConstructor has already been defined"),zr=n}function ks(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return b(r!=null,"SyncTree gave us an op for an invalid query."),$r(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat($r(o,e,t,i));return r}}function id(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=$n(t,s?i:null),a=!1;l?a=!0:i instanceof O?(l=Ts(t,i),a=!1):(l=O.EMPTY_NODE,a=!1);const u=Di(new Ze(l,a,!1),new Ze(i,s,!1));return new Xh(e,u)}return o}function Cn(n,e){let t=null;for(const i of n.views.values())t=t||Jh(i,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr;function sd(n){b(!Vr,"__referenceConstructor has already been defined"),Vr=n}class qr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=Hh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xl(n,e,t,i,s){return Ih(n.pendingWriteTree_,e,t,i,s),s?vi(n,new pt(yl(),e,t)):[]}function at(n,e,t=!1){const i=Fh(n.pendingWriteTree_,e);if(kh(n.pendingWriteTree_,e)){let r=new X(null);return i.snap!=null?r=r.set(V(),!0):Se(i.children,o=>{r=r.set(new Y(o),!0)}),vi(n,new jn(i.path,r,t))}else return[]}function yn(n,e,t){return vi(n,new pt(bl(),e,t))}function rd(n,e,t){const i=X.fromObject(t);return vi(n,new gn(bl(),e,i))}function od(n,e,t,i){const s=Pl(n,i);if(s!=null){const r=Ml(s),o=r.path,l=r.queryId,a=be(o,e),u=new pt(wl(l),a,t);return Bl(n,o,u)}else return[]}function ld(n,e,t,i){const s=Pl(n,i);if(s){const r=Ml(s),o=r.path,l=r.queryId,a=be(o,e),u=X.fromObject(t),c=new gn(wl(l),a,u);return Bl(n,o,c)}else return[]}function Ns(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=be(o,e),u=Cn(l,a);if(u)return u});return Il(s,e,r,t,!0)}function ad(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(u,c)=>{const h=be(u,t);i=i||Cn(c,h)});let s=n.syncPointTree_.get(t);s?i=i||Cn(s,V()):(s=new td,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new Ze(i,!0,!1):null,l=Ss(n.pendingWriteTree_,e._path),a=id(s,e,l,r?o.getNode():O.EMPTY_NODE,r);return Zh(a)}function vi(n,e){return Ol(e,n.syncPointTree_,null,Ss(n.pendingWriteTree_,V()))}function Ol(n,e,t,i){if(j(n.path))return Ll(n,e,t,i);{const s=e.get(V());t==null&&s!=null&&(t=Cn(s,V()));let r=[];const o=U(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const u=t?t.getImmediateChild(o):null,c=Fl(i,o);r=r.concat(Ol(l,a,u,c))}return s&&(r=r.concat(ks(s,n,i,t))),r}}function Ll(n,e,t,i){const s=e.get(V());t==null&&s!=null&&(t=Cn(s,V()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,u=Fl(i,o),c=n.operationForChild(o);c&&(r=r.concat(Ll(c,l,a,u)))}),s&&(r=r.concat(ks(s,n,i,t))),r}function Pl(n,e){return n.tagToQueryMap.get(e)}function Ml(n){const e=n.indexOf("$");return b(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Y(n.substr(0,e))}}function Bl(n,e,t){const i=n.syncPointTree_.get(e);b(i,"Missing sync point for query tag that we're tracking");const s=Ss(n.pendingWriteTree_,e);return ks(i,t,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Rs(t)}node(){return this.node_}}class xs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=oe(this.path_,e);return new xs(this.syncTree_,t)}node(){return Ns(this.syncTree_,this.path_)}}const ud=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Gr=function(n,e,t){if(!n||typeof n!="object")return n;if(b(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return cd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return hd(n[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},cd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:b(!1,"Unexpected server value: "+n)}},hd=function(n,e,t){n.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&b(!1,"Unexpected increment value: "+i);const s=e.node();if(b(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},dd=function(n,e,t,i){return Os(e,new xs(t,n),i)},Hl=function(n,e,t){return Os(n,new Rs(e),t)};function Os(n,e,t){const i=n.getPriority().val(),s=Gr(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Gr(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new ue(l,he(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ue(s))),o.forEachChild(ie,(l,a)=>{const u=Os(a,e.getImmediateChild(l),t);u!==a&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Ps(n,e){let t=e instanceof Y?e:new Y(e),i=n,s=U(t);for(;s!==null;){const r=Rt(i.node.children,s)||{children:{},childCount:0};i=new Ls(s,i,r),t=Z(t),s=U(t)}return i}function Ht(n){return n.node.value}function Ul(n,e){n.node.value=e,ns(n)}function jl(n){return n.node.childCount>0}function fd(n){return Ht(n)===void 0&&!jl(n)}function Ei(n,e){Se(n.node.children,(t,i)=>{e(new Ls(t,n,i))})}function Wl(n,e,t,i){t&&!i&&e(n),Ei(n,s=>{Wl(s,e,!0,i)}),t&&i&&e(n)}function _d(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function bn(n){return new Y(n.parent===null?n.name:bn(n.parent)+"/"+n.name)}function ns(n){n.parent!==null&&pd(n.parent,n.name,n)}function pd(n,e,t){const i=fd(t),s=He(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ns(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ns(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=/[\[\].#$\/\u0000-\u001F\u007F]/,gd=/[\[\].#$\u0000-\u001F\u007F]/,Mi=10*1024*1024,Ms=function(n){return typeof n=="string"&&n.length!==0&&!md.test(n)},$l=function(n){return typeof n=="string"&&n.length!==0&&!gd.test(n)},Cd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$l(n)},Yr=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ps(n)||n&&typeof n=="object"&&He(n,".sv")},yi=function(n,e,t,i){i&&e===void 0||Bs(mi(n,"value"),e,t)},Bs=function(n,e,t){const i=t instanceof Y?new Vc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+st(i));if(typeof e=="function")throw new Error(n+"contains a function "+st(i)+" with contents = "+e.toString());if(ps(e))throw new Error(n+"contains "+e.toString()+" "+st(i));if(typeof e=="string"&&e.length>Mi/3&&gi(e)>Mi)throw new Error(n+"contains a string greater than "+Mi+" utf8 bytes "+st(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Se(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ms(o)))throw new Error(n+" contains an invalid key ("+o+") "+st(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qc(i,o),Bs(n,l,i),Gc(i)}),s&&r)throw new Error(n+' contains ".value" child '+st(i)+" in addition to actual children.")}},Dd=function(n,e,t,i){if(!(i&&t===void 0)&&!Ms(t))throw new Error(mi(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Hs=function(n,e,t,i){if(!(i&&t===void 0)&&!$l(t))throw new Error(mi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vd=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Hs(n,e,t,i)},Ed=function(n,e){if(U(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},yd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ms(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Cd(t))throw new Error(mi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Us(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!vs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function wd(n,e,t){Us(n,t),zl(n,i=>vs(i,e))}function Ve(n,e,t){Us(n,t),zl(n,i=>ke(i,e)||ke(e,i))}function zl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Ad(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Ad(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();ut&&Ce("event: "+t.toString()),Bt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="repo_interrupt",Td=25;class Id{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Un(),this.transactionQueueTree_=new Ls,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Fd(n,e,t){if(n.stats_=Cs(n.repoInfo_),n.forceRestClient_||pc())n.server_=new Hn(n.repoInfo_,(i,s,r,o)=>{Kr(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Qr(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new $e(n.repoInfo_,e,(i,s,r,o)=>{Kr(n,i,s,r,o)},i=>{Qr(n,i)},i=>{Nd(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Ec(n.repoInfo_,()=>new yh(n.stats_,n.server_)),n.infoData_=new gh,n.infoSyncTree_=new qr({startListening:(i,s,r,o)=>{let l=[];const a=n.infoData_.getNode(i._path);return a.isEmpty()||(l=yn(n.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ws(n,"connected",!1),n.serverSyncTree_=new qr({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,a)=>{const u=o(l,a);Ve(n.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function kd(n){const t=n.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function js(n){return ud({timestamp:kd(n)})}function Kr(n,e,t,i,s){n.dataUpdateCount++;const r=new Y(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const a=xn(t,u=>he(u));o=ld(n.serverSyncTree_,r,a,s)}else{const a=he(t);o=od(n.serverSyncTree_,r,a,s)}else if(i){const a=xn(t,u=>he(u));o=rd(n.serverSyncTree_,r,a)}else{const a=he(t);o=yn(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=wi(n,r)),Ve(n.eventQueue_,l,o)}function Qr(n,e){Ws(n,"connected",e),e===!1&&Od(n)}function Nd(n,e){Se(e,(t,i)=>{Ws(n,t,i)})}function Ws(n,e,t){const i=new Y("/.info/"+e),s=he(t);n.infoData_.updateSnapshot(i,s);const r=yn(n.infoSyncTree_,i,s);Ve(n.eventQueue_,i,r)}function Vl(n){return n.nextWriteId_++}function Rd(n,e){const t=ad(n.serverSyncTree_,e);return t!=null?Promise.resolve(t):n.server_.get(e).then(i=>{const s=he(i).withIndex(e._queryParams.getIndex()),r=yn(n.serverSyncTree_,e._path,s);return wd(n.eventQueue_,e._path,r),Promise.resolve(s)},i=>(bi(n,"get for query "+de(e)+" failed: "+i),Promise.reject(new Error(i))))}function xd(n,e,t,i,s){bi(n,"set",{path:e.toString(),value:t,priority:i});const r=js(n),o=he(t,i),l=Ns(n.serverSyncTree_,e),a=Hl(o,l,r),u=Vl(n),c=xl(n.serverSyncTree_,e,a,u,!0);Us(n.eventQueue_,c),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const m=f==="ok";m||ye("set at "+e+" failed: "+f);const D=at(n.serverSyncTree_,u,!m);Ve(n.eventQueue_,e,D),Pd(n,s,f,p)});const h=Ql(n,e);wi(n,h),Ve(n.eventQueue_,h,[])}function Od(n){bi(n,"onDisconnectEvents");const e=js(n),t=Un();Xi(n.onDisconnect_,V(),(s,r)=>{const o=dd(s,r,n.serverSyncTree_,e);El(t,s,o)});let i=[];Xi(t,V(),(s,r)=>{i=i.concat(yn(n.serverSyncTree_,s,r));const o=Ql(n,s);wi(n,o)}),n.onDisconnect_=Un(),Ve(n.eventQueue_,V(),i)}function Ld(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Sd)}function bi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ce(t,...e)}function Pd(n,e,t,i){e&&Bt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function ql(n,e,t){return Ns(n.serverSyncTree_,e,t)||O.EMPTY_NODE}function $s(n,e=n.transactionQueueTree_){if(e||Ai(n,e),Ht(e)){const t=Yl(n,e);b(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Md(n,bn(e),t)}else jl(e)&&Ei(e,t=>{$s(n,t)})}function Md(n,e,t){const i=t.map(u=>u.currentWriteId),s=ql(n,e,i);let r=s;const o=s.hash();for(let u=0;u<t.length;u++){const c=t[u];b(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=be(e,c.path);r=r.updateChild(h,c.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,u=>{bi(n,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,c=c.concat(at(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Ai(n,Ps(n.transactionQueueTree_,e)),$s(n,n.transactionQueueTree_),Ve(n.eventQueue_,e,c);for(let f=0;f<h.length;f++)Bt(h[f])}else{if(u==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ye("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=u}wi(n,e)}},o)}function wi(n,e){const t=Gl(n,e),i=bn(t),s=Yl(n,t);return Bd(n,s,i),i}function Bd(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=be(t,a.path);let c=!1,h;if(b(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,h=a.abortReason,s=s.concat(at(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Td)c=!0,h="maxretry",s=s.concat(at(n.serverSyncTree_,a.currentWriteId,!0));else{const f=ql(n,a.path,o);a.currentInputSnapshot=f;const p=e[l].update(f.val());if(p!==void 0){Bs("transaction failed: Data returned ",p,a.path);let m=he(p);typeof p=="object"&&p!=null&&He(p,".priority")||(m=m.updatePriority(f.getPriority()));const w=a.currentWriteId,S=js(n),E=Hl(m,f,S);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=E,a.currentWriteId=Vl(n),o.splice(o.indexOf(w),1),s=s.concat(xl(n.serverSyncTree_,a.path,E,a.currentWriteId,a.applyLocally)),s=s.concat(at(n.serverSyncTree_,w,!0))}else c=!0,h="nodata",s=s.concat(at(n.serverSyncTree_,a.currentWriteId,!0))}Ve(n.eventQueue_,t,s),s=[],c&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ai(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)Bt(i[l]);$s(n,n.transactionQueueTree_)}function Gl(n,e){let t,i=n.transactionQueueTree_;for(t=U(e);t!==null&&Ht(i)===void 0;)i=Ps(i,t),e=Z(e),t=U(e);return i}function Yl(n,e){const t=[];return Kl(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Kl(n,e,t){const i=Ht(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ei(e,s=>{Kl(n,s,t)})}function Ai(n,e){const t=Ht(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Ul(e,t.length>0?t:void 0)}Ei(e,i=>{Ai(n,i)})}function Ql(n,e){const t=bn(Gl(n,e)),i=Ps(n.transactionQueueTree_,e);return _d(i,s=>{Bi(n,s)}),Bi(n,i),Wl(i,s=>{Bi(n,s)}),t}function Bi(n,e){const t=Ht(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(b(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(at(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ul(e,void 0):t.length=r+1,Ve(n.eventQueue_,bn(e),s);for(let o=0;o<i.length;o++)Bt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Ud(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ye(`Invalid query segment '${t}' in query '${n}'`)}return e}const Xr=function(n,e){const t=jd(n),i=t.namespace;t.domain==="firebase.com"&&ft(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||lc();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Cc(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new Y(t.pathString)}},jd=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(l=n.substring(0,u-1),n=n.substring(u+2));let c=n.indexOf("/");c===-1&&(c=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(c,h)),c<h&&(s=Hd(n.substring(c,h)));const f=Ud(n.substring(Math.min(n.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return j(this._path)?null:hl(this._path)}get ref(){return new tt(this._repo,this._path)}get _queryIdentifier(){const e=Lr(this._queryParams),t=ms(e);return t==="{}"?"default":t}get _queryObject(){return Lr(this._queryParams)}isEqual(e){if(e=Pt(e),!(e instanceof Ut))return!1;const t=this._repo===e._repo,i=vs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+zc(this._path)}}function Wd(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function zs(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===ct){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==_t)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==Qe)throw new Error(i);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===ie){if(e!=null&&!Yr(e)||t!=null&&!Yr(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(b(n.getIndex()instanceof bs||n.getIndex()===vl,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Xl(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class tt extends Ut{constructor(e,t){super(e,t,new As,!1)}get parent(){const e=fl(this._path);return e===null?null:new tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Y(e),i=is(this.ref,e);return new qn(this._node.getChild(t),i,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new qn(s,is(this.ref,i),ie)))}hasChild(e){const t=new Y(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ae(n,e){return n=Pt(n),n._checkNotDeleted("ref"),e!==void 0?is(n._root,e):n._root}function is(n,e){return n=Pt(n),U(n._path)===null?vd("child","path",e,!1):Hs("child","path",e,!1),new tt(n._repo,oe(n._path,e))}function Gn(n,e){n=Pt(n),Ed("set",n._path),yi("set",e,n._path,!1);const t=new pi;return xd(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Je(n){return n=Pt(n),Rd(n._repo,n).then(e=>new qn(e,new tt(n._repo,n._path),n._queryParams.getIndex()))}class Si{}class $d extends Si{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){yi("endAt",this._value,e._path,!0);const t=ph(e._queryParams,this._value,this._key);if(Xl(t),zs(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ut(e._repo,e._path,t,e._orderByCalled)}}class zd extends Si{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){yi("startAt",this._value,e._path,!0);const t=_h(e._queryParams,this._value,this._key);if(Xl(t),zs(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ut(e._repo,e._path,t,e._orderByCalled)}}class Vd extends Si{constructor(e){super(),this._path=e}_apply(e){Wd(e,"orderByChild");const t=new Y(this._path);if(j(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new bs(t),s=mh(e._queryParams,i);return zs(s),new Ut(e._repo,e._path,s,!0)}}function qd(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Hs("orderByChild","path",n,!1),new Vd(n)}class Gd extends Si{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(yi("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new $d(this._value,this._key)._apply(new zd(this._value,this._key)._apply(e))}}function Yd(n,e){return Dd("equalTo","key",e,!0),new Gd(n,e)}function Kd(n,...e){let t=Pt(n);for(const i of e)t=i._apply(t);return t}nd(tt);sd(tt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="FIREBASE_DATABASE_EMULATOR_HOST",ss={};let Xd=!1;function Zd(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Xr(r,s),l=o.repoInfo,a,u;typeof process!="undefined"&&process.env&&(u=process.env[Qd]),u?(a=!0,r=`http://${u}?ns=${l.namespace}`,o=Xr(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const c=s&&a?new Yi(Yi.OWNER):new gc(n.name,n.options,e);yd("Invalid Firebase Database URL",o),j(o.path)||ft("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ef(l,n,c,new mc(n.name,t));return new tf(h,n)}function Jd(n,e){const t=ss[e];(!t||t[n.key]!==n)&&ft(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Ld(n),delete t[n.key]}function ef(n,e,t,i){let s=ss[e.name];s||(s={},ss[e.name]=s);let r=s[n.toURLString()];return r&&ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Id(n,Xd,t,i),s[n.toURLString()]=r,r}class tf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Fd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tt(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Jd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ft("Cannot call "+e+" on a deleted database.")}}function Ct(n=Lu(),e){return ku(n,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(n){nc(xu),Ln(new cn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Zd(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),It(Cr,Dr,n),It(Cr,Dr,"esm2017")}$e.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};$e.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};nf();function Vs(n){this.j={},this.jr=[],this.jd=null,this.t=n}Vs.prototype={accepts:function(){return!!this.t},tt:function(e,t){if(t&&t.j)return this.j[e]=t,t;var i=t,s=this.j[e];if(s)return i&&(s.t=i),s;s=G();var r=Yn(this,e);return r?(Object.assign(s.j,r.j),s.jr.append(r.jr),s.jr=r.jd,s.t=i||r.t):s.t=i,this.j[e]=s,s}};var G=function(){return new Vs},R=function(e){return new Vs(e)},y=function(e,t,i){e.j[t]||(e.j[t]=i)},ae=function(e,t,i){e.jr.push([t,i])},Yn=function(e,t){var i=e.j[t];if(i)return i;for(var s=0;s<e.jr.length;s++){var r=e.jr[s][0],o=e.jr[s][1];if(r.test(t))return o}return e.jd},H=function(e,t,i){for(var s=0;s<t.length;s++)y(e,t[s],i)},sf=function(e,t){for(var i=0;i<t.length;i++){var s=t[i][0],r=t[i][1];y(e,s,r)}},nt=function(e,t,i,s){for(var r=0,o=t.length,l;r<o&&(l=e.j[t[r]]);)e=l,r++;if(r>=o)return[];for(;r<o-1;)l=s(),y(e,t[r],l),e=l,r++;y(e,t[o-1],i)},Ie="DOMAIN",Ue="LOCALHOST",Pe="TLD",we="NUM",Ot="PROTOCOL",qs="MAILTO",Zl="WS",Gs="NL",bt="OPENBRACE",tn="OPENBRACKET",nn="OPENANGLEBRACKET",sn="OPENPAREN",rt="CLOSEBRACE",wt="CLOSEBRACKET",At="CLOSEANGLEBRACKET",St="CLOSEPAREN",Kn="AMPERSAND",Qn="APOSTROPHE",Xn="ASTERISK",Tt="AT",Zn="BACKSLASH",Jn="BACKTICK",ei="CARET",rn="COLON",Ys="COMMA",ti="DOLLAR",Ge="DOT",ni="EQUALS",Ks="EXCLAMATION",ii="HYPHEN",si="PERCENT",ri="PIPE",oi="PLUS",li="POUND",ai="QUERY",Qs="QUOTE",Xs="SEMI",je="SLASH",ui="TILDE",ci="UNDERSCORE",hi="SYM",rf=Object.freeze({__proto__:null,DOMAIN:Ie,LOCALHOST:Ue,TLD:Pe,NUM:we,PROTOCOL:Ot,MAILTO:qs,WS:Zl,NL:Gs,OPENBRACE:bt,OPENBRACKET:tn,OPENANGLEBRACKET:nn,OPENPAREN:sn,CLOSEBRACE:rt,CLOSEBRACKET:wt,CLOSEANGLEBRACKET:At,CLOSEPAREN:St,AMPERSAND:Kn,APOSTROPHE:Qn,ASTERISK:Xn,AT:Tt,BACKSLASH:Zn,BACKTICK:Jn,CARET:ei,COLON:rn,COMMA:Ys,DOLLAR:ti,DOT:Ge,EQUALS:ni,EXCLAMATION:Ks,HYPHEN:ii,PERCENT:si,PIPE:ri,PLUS:oi,POUND:li,QUERY:ai,QUOTE:Qs,SEMI:Xs,SLASH:je,TILDE:ui,UNDERSCORE:ci,SYM:hi}),Zr="aaa aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am amazon americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars casa case cash casino cat catering catholic cba cbn cbre cbs cc cd center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cpa cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dog domains dot download drive dtv dubai duck dunlop dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate et etisalat eu eurovision eus events exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gay gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int international intuit investments io ipiranga iq ir irish is ismaili ist istanbul it itau itv iveco jaguar java jcb je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa lamborghini lamer lancaster lancia land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc llp loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile moda moe moi mom monash money monster mormon mortgage moscow moto motorcycles mov movie mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy spa space sport spot spreadbetting sr srl ss st stada staples star statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw verm\xF6gensberater-ctb verm\xF6gensberatung-pwb \u03B5\u03BB \u03B5\u03C5 \u0431\u0433 \u0431\u0435\u043B \u0434\u0435\u0442\u0438 \u0435\u044E \u043A\u0430\u0442\u043E\u043B\u0438\u043A \u043A\u043E\u043C \u049B\u0430\u0437 \u043C\u043A\u0434 \u043C\u043E\u043D \u043C\u043E\u0441\u043A\u0432\u0430 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0440\u0433 \u0440\u0443\u0441 \u0440\u0444 \u0441\u0430\u0439\u0442 \u0441\u0440\u0431 \u0443\u043A\u0440 \u10D2\u10D4 \u0570\u0561\u0575 \u05D9\u05E9\u05E8\u05D0\u05DC \u05E7\u05D5\u05DD \u0627\u0628\u0648\u0638\u0628\u064A \u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0627\u0631\u0627\u0645\u0643\u0648 \u0627\u0644\u0627\u0631\u062F\u0646 \u0627\u0644\u0628\u062D\u0631\u064A\u0646 \u0627\u0644\u062C\u0632\u0627\u0626\u0631 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0627\u0644\u0639\u0644\u064A\u0627\u0646 \u0627\u0644\u0645\u063A\u0631\u0628 \u0627\u0645\u0627\u0631\u0627\u062A \u0627\u06CC\u0631\u0627\u0646 \u0628\u0627\u0631\u062A \u0628\u0627\u0632\u0627\u0631 \u0628\u06BE\u0627\u0631\u062A \u0628\u064A\u062A\u0643 \u067E\u0627\u06A9\u0633\u062A\u0627\u0646 \u0680\u0627\u0631\u062A \u062A\u0648\u0646\u0633 \u0633\u0648\u062F\u0627\u0646 \u0633\u0648\u0631\u064A\u0629 \u0634\u0628\u0643\u0629 \u0639\u0631\u0627\u0642 \u0639\u0631\u0628 \u0639\u0645\u0627\u0646 \u0641\u0644\u0633\u0637\u064A\u0646 \u0642\u0637\u0631 \u0643\u0627\u062B\u0648\u0644\u064A\u0643 \u0643\u0648\u0645 \u0645\u0635\u0631 \u0645\u0644\u064A\u0633\u064A\u0627 \u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627 \u0645\u0648\u0642\u0639 \u0647\u0645\u0631\u0627\u0647 \u0915\u0949\u092E \u0928\u0947\u091F \u092D\u093E\u0930\u0924 \u092D\u093E\u0930\u0924\u092E\u094D \u092D\u093E\u0930\u094B\u0924 \u0938\u0902\u0917\u0920\u0928 \u09AC\u09BE\u0982\u09B2\u09BE \u09AD\u09BE\u09B0\u09A4 \u09AD\u09BE\u09F0\u09A4 \u0A2D\u0A3E\u0A30\u0A24 \u0AAD\u0ABE\u0AB0\u0AA4 \u0B2D\u0B3E\u0B30\u0B24 \u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE \u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8 \u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD \u0C2D\u0C3E\u0C30\u0C24\u0C4D \u0CAD\u0CBE\u0CB0\u0CA4 \u0D2D\u0D3E\u0D30\u0D24\u0D02 \u0DBD\u0D82\u0D9A\u0DCF \u0E04\u0E2D\u0E21 \u0E44\u0E17\u0E22 \u0EA5\u0EB2\u0EA7 \uB2F7\uB137 \uB2F7\uCEF4 \uC0BC\uC131 \uD55C\uAD6D \u30A2\u30DE\u30BE\u30F3 \u30B0\u30FC\u30B0\u30EB \u30AF\u30E9\u30A6\u30C9 \u30B3\u30E0 \u30B9\u30C8\u30A2 \u30BB\u30FC\u30EB \u30D5\u30A1\u30C3\u30B7\u30E7\u30F3 \u30DD\u30A4\u30F3\u30C8 \u307F\u3093\u306A \u4E16\u754C \u4E2D\u4FE1 \u4E2D\u56FD \u4E2D\u570B \u4E2D\u6587\u7F51 \u4E9A\u9A6C\u900A \u4F01\u4E1A \u4F5B\u5C71 \u4FE1\u606F \u5065\u5EB7 \u516B\u5366 \u516C\u53F8 \u516C\u76CA \u53F0\u6E7E \u53F0\u7063 \u5546\u57CE \u5546\u5E97 \u5546\u6807 \u5609\u91CC \u5609\u91CC\u5927\u9152\u5E97 \u5728\u7EBF \u5927\u4F17\u6C7D\u8F66 \u5927\u62FF \u5929\u4E3B\u6559 \u5A31\u4E50 \u5BB6\u96FB \u5E7F\u4E1C \u5FAE\u535A \u6148\u5584 \u6211\u7231\u4F60 \u624B\u673A \u62DB\u8058 \u653F\u52A1 \u653F\u5E9C \u65B0\u52A0\u5761 \u65B0\u95FB \u65F6\u5C1A \u66F8\u7C4D \u673A\u6784 \u6DE1\u9A6C\u9521 \u6E38\u620F \u6FB3\u9580 \u70B9\u770B \u79FB\u52A8 \u7EC4\u7EC7\u673A\u6784 \u7F51\u5740 \u7F51\u5E97 \u7F51\u7AD9 \u7F51\u7EDC \u8054\u901A \u8BFA\u57FA\u4E9A \u8C37\u6B4C \u8D2D\u7269 \u901A\u8CA9 \u96C6\u56E2 \u96FB\u8A0A\u76C8\u79D1 \u98DE\u5229\u6D66 \u98DF\u54C1 \u9910\u5385 \u9999\u683C\u91CC\u62C9 \u9999\u6E2F".split(" "),Vt=/(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/,qt=/(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEDD-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6])/,Gt=/\uFE0F/,Yt=/\d/,Jr=/\s/;function of(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=G(),t=R(we),i=R(Ie),s=G(),r=R(Zl),o=[[Yt,i],[Vt,i],[qt,i],[Gt,i]],l=function(){var C=R(Ie);return C.j={"-":s},C.jr=[].concat(o),C},a=function(C){var A=l();return A.t=C,A};sf(e,[["'",R(Qn)],["{",R(bt)],["[",R(tn)],["<",R(nn)],["(",R(sn)],["}",R(rt)],["]",R(wt)],[">",R(At)],[")",R(St)],["&",R(Kn)],["*",R(Xn)],["@",R(Tt)],["`",R(Jn)],["^",R(ei)],[":",R(rn)],[",",R(Ys)],["$",R(ti)],[".",R(Ge)],["=",R(ni)],["!",R(Ks)],["-",R(ii)],["%",R(si)],["|",R(ri)],["+",R(oi)],["#",R(li)],["?",R(ai)],['"',R(Qs)],["/",R(je)],[";",R(Xs)],["~",R(ui)],["_",R(ci)],["\\",R(Zn)]]),y(e,`
`,R(Gs)),ae(e,Jr,r),y(r,`
`,G()),ae(r,Jr,r);for(var u=0;u<Zr.length;u++)nt(e,Zr[u],a(Pe),l);var c=l(),h=l(),f=l(),p=l();nt(e,"file",c,l),nt(e,"ftp",h,l),nt(e,"http",f,l),nt(e,"mailto",p,l);var m=l(),D=R(Ot),w=R(qs);y(h,"s",m),y(h,":",D),y(f,"s",m),y(f,":",D),y(c,":",D),y(m,":",D),y(p,":",w);for(var S=l(),E=0;E<n.length;E++)nt(e,n[E],S,l);return y(S,":",D),nt(e,"localhost",a(Ue),l),ae(e,Yt,t),ae(e,Vt,i),ae(e,qt,i),ae(e,Gt,i),ae(t,Yt,t),ae(t,Vt,i),ae(t,qt,i),ae(t,Gt,i),y(t,"-",s),y(i,"-",s),y(s,"-",s),ae(i,Yt,i),ae(i,Vt,i),ae(i,qt,i),ae(i,Gt,i),ae(s,Yt,i),ae(s,Vt,i),ae(s,qt,i),ae(s,Gt,i),e.jd=R(hi),e}function lf(n,e){for(var t=af(e.replace(/[A-Z]/g,function(p){return p.toLowerCase()})),i=t.length,s=[],r=0,o=0;o<i;){for(var l=n,a=null,u=0,c=null,h=-1,f=-1;o<i&&(a=Yn(l,t[o]));)l=a,l.accepts()?(h=0,f=0,c=l):h>=0&&(h+=t[o].length,f++),u+=t[o].length,r+=t[o].length,o++;r-=h,o-=f,u-=h,s.push({t:c.t,v:e.substr(r-u,u),s:r-u,e:r})}return s}function af(n){for(var e=[],t=n.length,i=0;i<t;){var s=n.charCodeAt(i),r=void 0,o=s<55296||s>56319||i+1===t||(r=n.charCodeAt(i+1))<56320||r>57343?n[i]:n.slice(i,i+2);e.push(o),i+=o.length}return e}function Nn(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Nn=function(e){return typeof e}:Nn=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nn(n)}var pe={defaultProtocol:"http",events:null,format:eo,formatHref:eo,nl2br:!1,tagName:"a",target:null,rel:null,validate:!0,truncate:0,className:null,attributes:null,ignoreTags:[]};function Jl(n){n=n||{},this.defaultProtocol="defaultProtocol"in n?n.defaultProtocol:pe.defaultProtocol,this.events="events"in n?n.events:pe.events,this.format="format"in n?n.format:pe.format,this.formatHref="formatHref"in n?n.formatHref:pe.formatHref,this.nl2br="nl2br"in n?n.nl2br:pe.nl2br,this.tagName="tagName"in n?n.tagName:pe.tagName,this.target="target"in n?n.target:pe.target,this.rel="rel"in n?n.rel:pe.rel,this.validate="validate"in n?n.validate:pe.validate,this.truncate="truncate"in n?n.truncate:pe.truncate,this.className="className"in n?n.className:pe.className,this.attributes=n.attributes||pe.attributes,this.ignoreTags=[];for(var e=("ignoreTags"in n)?n.ignoreTags:pe.ignoreTags,t=0;t<e.length;t++)this.ignoreTags.push(e[t].toUpperCase())}Jl.prototype={resolve:function(e){var t=e.toHref(this.defaultProtocol);return{formatted:this.get("format",e.toString(),e),formattedHref:this.get("formatHref",t,e),tagName:this.get("tagName",t,e),className:this.get("className",t,e),target:this.get("target",t,e),rel:this.get("rel",t,e),events:this.getObject("events",t,e),attributes:this.getObject("attributes",t,e),truncate:this.get("truncate",t,e)}},check:function(e){return this.get("validate",e.toString(),e)},get:function(e,t,i){var s=this[e];if(!s)return s;var r;switch(Nn(s)){case"function":return s(t,i.t);case"object":return r=i.t in s?s[i.t]:pe[e],typeof r=="function"?r(t,i.t):r}return s},getObject:function(e,t,i){var s=this[e];return typeof s=="function"?s(t,i.t):s}};function eo(n){return n}function uf(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=Object.create(n.prototype);for(var s in t)i[s]=t[s];return i.constructor=e,e.prototype=i,e}function di(){}di.prototype={t:"token",isLink:!1,toString:function(){return this.v},toHref:function(){return this.toString()},startIndex:function(){return this.tk[0].s},endIndex:function(){return this.tk[this.tk.length-1].e},toObject:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:pe.defaultProtocol;return{type:this.t,value:this.v,isLink:this.isLink,href:this.toHref(e),start:this.startIndex(),end:this.endIndex()}}};function Dt(n,e){function t(i,s){this.t=n,this.v=i,this.tk=s}return uf(di,t,e),t}var ea=Dt("email",{isLink:!0}),rs=Dt("email",{isLink:!0,toHref:function(){return"mailto:"+this.toString()}}),os=Dt("text"),ta=Dt("nl"),qe=Dt("url",{isLink:!0,toHref:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:pe.defaultProtocol,t=this.tk,i=!1,s=!1,r=[],o=0;t[o].t===Ot;)i=!0,r.push(t[o].v),o++;for(;t[o].t===je;)s=!0,r.push(t[o].v),o++;for(;o<t.length;o++)r.push(t[o].v);return r=r.join(""),i||s||(r="".concat(e,"://").concat(r)),r},hasProtocol:function(){return this.tk[0].t===Ot}}),cf=Object.freeze({__proto__:null,MultiToken:di,Base:di,createTokenClass:Dt,MailtoEmail:ea,Email:rs,Text:os,Nl:ta,Url:qe});function hf(){var n=G(),e=G(),t=G(),i=G(),s=G(),r=G(),o=G(),l=R(qe),a=G(),u=R(qe),c=R(qe),h=G(),f=G(),p=G(),m=G(),D=G(),w=R(qe),S=R(qe),E=R(qe),N=R(qe),C=G(),A=G(),v=G(),F=G(),x=G(),L=G(),ee=R(rs),te=G(),fe=R(rs),z=R(ea),ne=G(),le=G(),re=G(),_e=G(),W=R(ta);y(n,Gs,W),y(n,Ot,e),y(n,qs,t),y(e,je,i),y(i,je,s),y(n,Pe,r),y(n,Ie,r),y(n,Ue,l),y(n,we,r),y(s,Pe,c),y(s,Ie,c),y(s,we,c),y(s,Ue,c),y(r,Ge,o),y(x,Ge,L),y(o,Pe,l),y(o,Ie,r),y(o,we,r),y(o,Ue,r),y(L,Pe,ee),y(L,Ie,x),y(L,we,x),y(L,Ue,x),y(l,Ge,o),y(ee,Ge,L),y(l,rn,a),y(l,je,c),y(a,we,u),y(u,je,c),y(ee,rn,te),y(te,we,fe);var $=[Kn,Xn,Tt,Zn,Jn,ei,ti,Ie,ni,ii,Ue,we,si,ri,oi,li,Ot,je,hi,ui,Pe,ci],P=[Qn,At,rt,wt,St,rn,Ys,Ge,Ks,nn,bt,tn,sn,ai,Qs,Xs];y(c,bt,f),y(c,tn,p),y(c,nn,m),y(c,sn,D),y(h,bt,f),y(h,tn,p),y(h,nn,m),y(h,sn,D),y(f,rt,c),y(p,wt,c),y(m,At,c),y(D,St,c),y(w,rt,c),y(S,wt,c),y(E,At,c),y(N,St,c),y(C,rt,c),y(A,wt,c),y(v,At,c),y(F,St,c),H(f,$,w),H(p,$,S),H(m,$,E),H(D,$,N),H(f,P,C),H(p,P,A),H(m,P,v),H(D,P,F),H(w,$,w),H(S,$,S),H(E,$,E),H(N,$,N),H(w,P,w),H(S,P,S),H(E,P,E),H(N,P,N),H(C,$,w),H(A,$,S),H(v,$,E),H(F,$,N),H(C,P,C),H(A,P,A),H(v,P,v),H(F,P,F),H(c,$,c),H(h,$,c),H(c,P,h),H(h,P,h),y(t,Pe,z),y(t,Ie,z),y(t,we,z),y(t,Ue,z),H(z,$,z),H(z,P,ne),H(ne,$,z),H(ne,P,ne);var q=[Kn,Qn,Xn,Zn,Jn,ei,rt,ti,Ie,ni,ii,we,bt,si,ri,oi,li,ai,je,hi,ui,Pe,ci];return H(r,q,le),y(r,Tt,re),H(l,q,le),y(l,Tt,re),H(o,q,le),H(le,q,le),y(le,Tt,re),y(le,Ge,_e),H(_e,q,le),y(re,Pe,x),y(re,Ie,x),y(re,we,x),y(re,Ue,ee),n}function df(n,e,t){for(var i=t.length,s=0,r=[],o=[];s<i;){for(var l=n,a=null,u=null,c=0,h=null,f=-1;s<i&&!(a=Yn(l,t[s].t));)o.push(t[s++]);for(;s<i&&(u=a||Yn(l,t[s].t));)a=null,l=u,l.accepts()?(f=0,h=l):f>=0&&f++,s++,c++;if(f<0)for(var p=s-c;p<s;p++)o.push(t[p]);else{o.length>0&&(r.push(Hi(os,e,o)),o=[]),s-=f,c-=f;var m=h.t,D=t.slice(s-c,s);r.push(Hi(m,e,D))}}return o.length>0&&r.push(Hi(os,e,o)),r}function Hi(n,e,t){var i=t[0].s,s=t[t.length-1].e,r=e.substr(i,s-i);return new n(r,t)}var to=typeof console!="undefined"&&console&&console.warn||function(){},me={scanner:null,parser:null,pluginQueue:[],customProtocols:[],initialized:!1};function ff(n,e){for(var t=0;t<me.pluginQueue.length;t++)if(n===me.pluginQueue[t][0]){to('linkifyjs: plugin "'.concat(n,'" already registered - will be overwritten')),me.pluginQueue[t]=[n,e];return}me.pluginQueue.push([n,e]),me.initialized&&to('linkifyjs: already initialized - will not register plugin "'.concat(n,'" until you manually call linkify.init(). To avoid this warning, please register all plugins before invoking linkify the first time.'))}function _f(){me.scanner={start:of(me.customProtocols),tokens:rf},me.parser={start:hf(),tokens:cf};for(var n={createTokenClass:Dt},e=0;e<me.pluginQueue.length;e++)me.pluginQueue[e][1]({scanner:me.scanner,parser:me.parser,utils:n});me.initialized=!0}function pf(n){return me.initialized||_f(),df(me.parser.start,n,lf(me.scanner.start,n))}function no(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qt(n){return n.replace(/"/g,"&quot;")}function mf(n){if(!n)return"";var e=[];for(var t in n){var i=n[t]+"";e.push("".concat(t,'="').concat(Qt(i),'"'))}return e.join(" ")}function ls(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e=new Jl(e);for(var t=pf(n),i=[],s=0;s<t.length;s++){var r=t[s];if(r.t==="nl"&&e.nl2br){i.push(`<br>
`);continue}else if(!r.isLink||!e.check(r)){i.push(no(r.toString()));continue}var o=e.resolve(r),l=o.formatted,a=o.formattedHref,u=o.tagName,c=o.className,h=o.target,f=o.rel,p=o.attributes,m=["<".concat(u,' href="').concat(Qt(a),'"')];c&&m.push(' class="'.concat(Qt(c),'"')),h&&m.push(' target="'.concat(Qt(h),'"')),f&&m.push(' rel="'.concat(Qt(f),'"')),p&&m.push(" ".concat(mf(p))),m.push(">".concat(no(l),"</").concat(u,">")),i.push(m.join(""))}return i.join("")}String.prototype.linkify||Object.defineProperty(String.prototype,"linkify",{writable:!1,value:function(e){return ls(this,e)}});var gf=function(e){var t=e.scanner,i=e.parser,s=e.utils,r=t.tokens,o=r.DOMAIN,l=r.LOCALHOST,a=r.TLD,u=r.NUM,c=r.SLASH,h=r.UNDERSCORE,f=r.DOT,p=r.AT,m=i.start,D=s.createTokenClass("mention",{isLink:!0,toHref:function(){return"/"+this.toString().substr(1)}}),w=m.tt(p),S=w.tt(h);S.tt(h,S),S.tt(f,S);var E=w.tt(o,D);w.tt(a,E),w.tt(l,E),w.tt(u,E),S.tt(o,E),S.tt(l,E),S.tt(a,E),S.tt(u,E),E.tt(o,E),E.tt(l,E),E.tt(a,E),E.tt(u,E),E.tt(h,E);var N=E.tt(c);E.tt(c,N),E.tt(f,N),E.tt(p,N);var C=N.tt(h);C.tt(h,C),N.tt(o,E),N.tt(l,E),N.tt(a,E),N.tt(u,E),C.tt(o,E),C.tt(l,E),C.tt(a,E),C.tt(u,E)};ff("mention",gf);function io(n,e,t){const i=n.slice();return i[8]=e[t],i}function Cf(n){let e;return{c(){e=g("div"),e.innerHTML='<img src="https://i.gifer.com/XVo6.gif" alt="loading" height="50px"/>',d(e,"class","sto"),d(e,"flex","center")},m(t,i){k(t,e,i)},p:B,d(t){t&&T(e)}}}function Df(n){let e,t,i,s,r=[],o=new Map,l=n[0];const a=u=>u[8].id;for(let u=0;u<l.length;u+=1){let c=io(n,l,u),h=a(c);o.set(h,r[u]=so(h,c))}return{c(){e=g("div"),t=g("h1"),t.textContent="\u0413\u043E\u043B\u043E\u0432\u043D\u0430",i=I(),s=g("div");for(let u=0;u<r.length;u+=1)r[u].c();d(t,"class","svelte-1k1nspj"),d(s,"flex","col-rev"),d(e,"class","wrapper")},m(u,c){k(u,e,c),_(e,t),_(e,i),_(e,s);for(let h=0;h<r.length;h+=1)r[h].m(s,null)},p(u,c){c&27&&(l=u[0],r=yo(r,c,a,1,u,l,o,s,Eo,so,null,io))},d(u){u&&T(e);for(let c=0;c<r.length;c+=1)r[c].d()}}}function vf(n){let e,t,i,s;return{c(){e=ve("svg"),t=ve("path"),d(t,"d","M11 19C-10.1988 6.1863 4.64026 -4.49179 10.9999 1.91508C17.3597 -4.49178 32.1988 6.18631 11 19Z"),d(t,"fill","#ffffff"),d(e,"width","22"),d(e,"height","19"),d(e,"viewBox","0 0 22 19"),d(e,"fill","none"),d(e,"xmlns","http://www.w3.org/2000/svg")},m(r,o){k(r,e,o),_(e,t),i||(s=se(e,"click",function(){fi((n[8].id,void 0))&&(n[8].id,void 0).apply(this,arguments)}),i=!0)},p(r,o){n=r},d(r){r&&T(e),i=!1,s()}}}function Ef(n){let e,t;return{c(){e=ve("svg"),t=ve("path"),d(t,"d","M11 19C-10.1988 6.1863 4.64026 -4.49179 10.9999 1.91508C17.3597 -4.49178 32.1988 6.18631 11 19Z"),d(t,"fill","orange"),d(e,"width","22"),d(e,"height","19"),d(e,"viewBox","0 0 22 19"),d(e,"fill","none"),d(e,"xmlns","http://www.w3.org/2000/svg")},m(i,s){k(i,e,s),_(e,t)},p:B,d(i){i&&T(e)}}}function yf(n){let e,t,i,s;return{c(){e=ve("svg"),t=ve("path"),d(t,"d","M11 19C-10.1988 6.1863 4.64026 -4.49179 10.9999 1.91508C17.3597 -4.49178 32.1988 6.18631 11 19Z"),d(t,"fill","#ff0000"),d(e,"width","22"),d(e,"height","19"),d(e,"viewBox","0 0 22 19"),d(e,"fill","none"),d(e,"xmlns","http://www.w3.org/2000/svg")},m(r,o){k(r,e,o),_(e,t),i||(s=se(e,"click",function(){fi((n[8].id,void 0))&&(n[8].id,void 0).apply(this,arguments)}),i=!0)},p(r,o){n=r},d(r){r&&T(e),i=!1,s()}}}function so(n,e){let t,i,s,r,o,l,a,u,c=e[1][e[8].user].name+"",h,f,p=e[8].tema+"",m,D,w,S=ls(e[8].textPost,e[4])+"",E,N,C,A,v,F,x=e[8].likeCount+ro+"",L,ee,te,fe,z=(oo(e[8].time)||"\u0434\u043E 01.06.2022")+"",ne,le;function re($,P){return P&1&&(A=null),A==null&&(A=!!$[8].likedUsers.includes($[3])),A?yf:localStorage.name?vf:Ef}let _e=re(e,-1),W=_e(e);return{key:n,first:null,c(){t=g("div"),i=g("div"),s=g("a"),r=g("img"),a=I(),u=g("h3"),h=J(c),f=J(", \u0422\u0435\u043C\u0430: "),m=J(p),D=I(),w=g("h5"),E=I(),N=g("div"),C=g("div"),W.c(),v=I(),F=g("h5"),L=J(x),te=I(),fe=g("h5"),ne=J(z),le=I(),Be(r.src,o=e[1][e[8].user].img)||d(r,"src",o),d(r,"alt","ava"),d(r,"height","35px"),d(r,"width","35px"),d(s,"href",l="#/user/"+e[8].user),d(u,"class","svelte-1k1nspj"),d(i,"class","postHead"),d(i,"flex","ai-c g10"),d(w,"class","postBody svelte-1k1nspj"),d(F,"id","likeCount"),d(F,"class","svelte-1k1nspj"),d(C,"flex","ai-c g5"),d(C,"id",ee=e[8].id),d(fe,"class","svelte-1k1nspj"),d(N,"flex","between"),d(N,"class","postFoot"),d(t,"class","post svelte-1k1nspj"),d(t,"flex","col"),this.first=t},m($,P){k($,t,P),_(t,i),_(i,s),_(s,r),_(i,a),_(i,u),_(u,h),_(u,f),_(u,m),_(t,D),_(t,w),w.innerHTML=S,_(t,E),_(t,N),_(N,C),W.m(C,null),_(C,v),_(C,F),_(F,L),_(N,te),_(N,fe),_(fe,ne),_(t,le)},p($,P){e=$,P&3&&!Be(r.src,o=e[1][e[8].user].img)&&d(r,"src",o),P&1&&l!==(l="#/user/"+e[8].user)&&d(s,"href",l),P&3&&c!==(c=e[1][e[8].user].name+"")&&De(h,c),P&1&&p!==(p=e[8].tema+"")&&De(m,p),P&1&&S!==(S=ls(e[8].textPost,e[4])+"")&&(w.innerHTML=S),_e===(_e=re(e,P))&&W?W.p(e,P):(W.d(1),W=_e(e),W&&(W.c(),W.m(C,v))),P&1&&x!==(x=e[8].likeCount+ro+"")&&De(L,x),P&1&&ee!==(ee=e[8].id)&&d(C,"id",ee),P&1&&z!==(z=(oo(e[8].time)||"\u0434\u043E 01.06.2022")+"")&&De(ne,z)},d($){$&&T(t),W.d()}}}function bf(n){let e;function t(r,o){return r[2]?Df:Cf}let i=t(n),s=i(n);return{c(){s.c(),e=et()},m(r,o){s.m(r,o),k(r,e,o)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:B,o:B,d(r){s.d(r),r&&T(e)}}}let ro=0;function oo(n){let e=String(n).replace(/(\d{4})(\d\d?)(\d\d?)(\d\d?)(\d\d?)(\d\d?)/,"$3.$2.$1 $4:$5");return e=="undefined"?void 0:e}function wf(n,e,t){const i=Ct();let s,r,o,l,a=localStorage.name;const u={defaultProtocol:"https",rel:"nofollow noreferrer noopener",formatHref:{mention:c=>`#/user/${c.substr(1)}`}};return Je(Ae(i)).then(c=>{s=c.val(),t(0,r=s.posts),t(1,o=s.users),t(2,l=!0)}),[r,o,l,a,u]}class Af extends Oe{constructor(e){super(),xe(this,e,wf,bf,Te,{})}}function lo(n,e,t){const i=n.slice();return i[3]=e[t][0],i[4]=e[t][1],i}function Sf(n){let e;return{c(){e=g("div"),e.innerHTML='<img src="https://i.gifer.com/XVo6.gif" alt="" height="50px" class="svelte-17kvqix"/>',In(e,"height","100%"),d(e,"flex","center")},m(t,i){k(t,e,i)},p:B,d(t){t&&T(e)}}}function Tf(n){let e,t,i,s,r,o=Object.entries(n[0]),l=[];for(let a=0;a<o.length;a+=1)l[a]=ao(lo(n,o,a));return{c(){e=g("div"),t=g("input"),i=I(),s=g("hr"),r=I();for(let a=0;a<l.length;a+=1)l[a].c();d(t,"type","search"),d(t,"class","findUser svelte-17kvqix"),d(t,"placeholder","\u041F\u043E\u0448\u0443\u043A..."),d(s,"noshade",""),d(s,"size","1"),d(s,"color","888888"),d(e,"class","wrapper")},m(a,u){k(a,e,u),_(e,t),_(e,i),_(e,s),_(e,r);for(let c=0;c<l.length;c+=1)l[c].m(e,null)},p(a,u){if(u&1){o=Object.entries(a[0]);let c;for(c=0;c<o.length;c+=1){const h=lo(a,o,c);l[c]?l[c].p(h,u):(l[c]=ao(h),l[c].c(),l[c].m(e,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=o.length}},d(a){a&&T(e),ha(l,a)}}}function ao(n){let e,t,i,s,r,o,l,a=n[4].name+"",u,c,h,f=n[4].bio+"",p,m,D;return{c(){e=g("a"),t=g("div"),i=g("img"),r=I(),o=g("div"),l=g("h3"),u=J(a),c=I(),h=g("h6"),p=J(f),m=I(),Be(i.src,s=n[4].img)||d(i,"src",s),d(i,"alt","ava"),d(i,"class","svelte-17kvqix"),d(l,"class","svelte-17kvqix"),d(h,"class","svelte-17kvqix"),d(o,"flex","col"),d(o,"class","svelte-17kvqix"),d(t,"class","user svelte-17kvqix"),d(t,"flex","row ai-c"),d(e,"href",D="#/user/"+n[4].login)},m(w,S){k(w,e,S),_(e,t),_(t,i),_(t,r),_(t,o),_(o,l),_(l,u),_(o,c),_(o,h),_(h,p),_(e,m)},p(w,S){S&1&&!Be(i.src,s=w[4].img)&&d(i,"src",s),S&1&&a!==(a=w[4].name+"")&&De(u,a),S&1&&f!==(f=w[4].bio+"")&&De(p,f),S&1&&D!==(D="#/user/"+w[4].login)&&d(e,"href",D)},d(w){w&&T(e)}}}function If(n){let e;function t(r,o){return r[1]?Tf:Sf}let i=t(n),s=i(n);return{c(){s.c(),e=et()},m(r,o){s.m(r,o),k(r,e,o)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:B,o:B,d(r){s.d(r),r&&T(e)}}}function Ff(n,e,t){const i=Ct();let s,r=!1;return Je(Ae(i,"users")).then(o=>{t(0,s=o.val()),t(1,r=!0)}),[s,r]}class kf extends Oe{constructor(e){super(),xe(this,e,Ff,If,Te,{})}}function Nf(n){let e,t,i,s,r,o,l,a,u,c,h,f,p,m,D,w,S,E,N,C,A;return{c(){e=g("div"),t=g("h1"),t.textContent="\u041D\u0430\u043F\u0438\u0448\u0438 \u0449\u043E \u043D\u0435\u0431\u0443\u0434\u044C \u0446\u0456\u043A\u0430\u0432\u0435\u043D\u044C\u043A\u043E\u0433\u043E",i=I(),s=g("textarea"),r=I(),o=g("select"),l=g("option"),l.textContent="\u0412\u0438\u0431\u0435\u0440\u0438 \u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0443...",a=g("option"),a.textContent="\u0406\u0433\u0440\u0438",u=g("option"),u.textContent="\u041C\u0443\u0437\u0438\u043A\u0430",c=g("option"),c.textContent="\u0410\u0440\u0442",h=g("option"),h.textContent="\u041A\u0456\u043D\u043E",f=g("option"),f.textContent="\u0410\u043D\u0456\u043C\u0435",p=g("option"),p.textContent="\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F",m=g("option"),m.textContent="\u0406\u043D\u0448\u0435",D=I(),w=g("button"),w.textContent="\u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0434\u043E\u043F\u0438\u0441",S=I(),E=ve("svg"),N=ve("path"),d(t,"text","center"),d(s,"rows","7"),d(s,"placeholder","\u041F\u0438\u0441\u0430\u0442\u0438 \u0442\u0443\u0442"),l.__value="\u041D\u0435\u043C\u0430\u0454",l.value=l.__value,a.__value="\u0406\u0433\u0440\u0438",a.value=a.__value,u.__value="\u041C\u0443\u0437\u0438\u043A\u0430",u.value=u.__value,c.__value="\u0410\u0440\u0442",c.value=c.__value,h.__value="\u041A\u0456\u043D\u043E",h.value=h.__value,f.__value="\u0410\u043D\u0456\u043C\u0435",f.value=f.__value,p.__value="\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F",p.value=p.__value,m.__value="\u0406\u043D\u0448\u0435",m.value=m.__value,d(o,"id","tematica"),n[1]===void 0&&ln(()=>n[4].call(o)),d(w,"color","orange"),d(N,"d","M19.4414 0.558671C18.6965 -0.186224 17.4887 -0.186224 16.7438 0.558671L10 7.30248L3.2562 0.558671C2.51129 -0.186224 1.30359 -0.186224 0.55868 0.558671C-0.186227 1.30356 -0.186227 2.51129 0.55868 3.25619L7.30252 10L0.55868 16.7438C-0.186227 17.4887 -0.186227 18.6964 0.55868 19.4413C1.30359 20.1862 2.51129 20.1862 3.2562 19.4413L10 12.6975L16.7438 19.4413C17.4887 20.1862 18.6965 20.1862 19.4413 19.4413C20.1862 18.6964 20.1862 17.4887 19.4413 16.7438L12.6976 10L19.4414 3.25619C20.1862 2.5113 20.1862 1.30358 19.4414 0.558671Z"),d(N,"fill","#808080"),d(E,"pointer",""),d(E,"width","20"),d(E,"height","20"),d(E,"viewBox","0 0 20 20"),d(E,"fill","none"),d(E,"xmlns","http://www.w3.org/2000/svg"),d(e,"class","over"),d(e,"flex","center")},m(v,F){k(v,e,F),_(e,t),_(e,i),_(e,s),ge(s,n[0]),_(e,r),_(e,o),_(o,l),_(o,a),_(o,u),_(o,c),_(o,h),_(o,f),_(o,p),_(o,m),Rn(o,n[1]),_(e,D),_(e,w),_(e,S),_(e,E),_(E,N),C||(A=[se(s,"input",n[3]),se(o,"change",n[4]),se(w,"click",n[2]),se(E,"click",na)],C=!0)},p(v,[F]){F&1&&ge(s,v[0]),F&2&&Rn(o,v[1])},i:B,o:B,d(v){v&&T(e),C=!1,Re(A)}}}function na(){window.history.back()}function Rf(n,e,t){const i=Ct();localStorage.name||(location.hash="#/",location.hash="#/login");let s=localStorage.name,r,o;function l(){r&&Je(Ae(i,"/postCount")).then(c=>{let h=c.val();h++,Gn(Ae(i,"/posts/"+h),{id:h,likeCount:0,likedUsers:[""],user:s,textPost:r,tema:o,time:new Date().toISOString().slice(0,-4).replace(/\D/g,"")}),Gn(Ae(i,"/postCount"),h),na(),localStorage.last=new Date().toISOString().slice(0,-4).replace(/\D/g,"")})}function a(){r=this.value,t(0,r)}function u(){o=go(this),t(1,o)}return[r,o,l,a,u]}class xf extends Oe{constructor(e){super(),xe(this,e,Rf,Nf,Te,{})}}function Of(n){let e;return{c(){e=g("div"),e.innerHTML='<h1 class="svelte-kc81py">B \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u043C\u0443 <br/> \u0442\u0443\u0442 \u0449\u043E\u0441\u044C \u0431\u0443\u0434\u0435</h1>',d(e,"class","sto"),d(e,"flex","center")},m(t,i){k(t,e,i)},p:B,i:B,o:B,d(t){t&&T(e)}}}class Lf extends Oe{constructor(e){super(),xe(this,e,null,Of,Te,{})}}function uo(n,e,t){const i=n.slice();return i[9]=e[t],i}function co(n){let e,t,i,s,r,o,l,a,u,c;return{c(){e=g("div"),t=g("div"),i=g("a"),i.innerHTML='<button color="orange">\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0432\u0430\u0442\u0438 \u043F\u0440\u043E\u0444\u0456\u043B\u044C</button>',s=I(),r=g("button"),r.textContent="\u0412\u0438\u0439\u0442\u0438 \u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443",o=I(),l=ve("svg"),a=ve("path"),d(i,"href","#/edit"),d(r,"color","red"),d(a,"d","M19.4414 0.558671C18.6965 -0.186224 17.4887 -0.186224 16.7438 0.558671L10 7.30248L3.2562 0.558671C2.51129 -0.186224 1.30359 -0.186224 0.55868 0.558671C-0.186227 1.30356 -0.186227 2.51129 0.55868 3.25619L7.30252 10L0.55868 16.7438C-0.186227 17.4887 -0.186227 18.6964 0.55868 19.4413C1.30359 20.1862 2.51129 20.1862 3.2562 19.4413L10 12.6975L16.7438 19.4413C17.4887 20.1862 18.6965 20.1862 19.4413 19.4413C20.1862 18.6964 20.1862 17.4887 19.4413 16.7438L12.6976 10L19.4414 3.25619C20.1862 2.5113 20.1862 1.30358 19.4414 0.558671Z"),d(a,"fill","#808080"),d(l,"pointer",""),d(l,"width","20"),d(l,"height","20"),d(l,"viewBox","0 0 20 20"),d(l,"fill","none"),d(l,"xmlns","http://www.w3.org/2000/svg"),d(t,"class","menu svelte-1flkn9e"),d(t,"flex","center"),d(e,"modal","")},m(h,f){k(h,e,f),_(e,t),_(t,i),_(t,s),_(t,r),_(t,o),_(t,l),_(l,a),u||(c=[se(r,"click",n[5]),se(l,"click",n[6])],u=!0)},p:B,d(h){h&&T(e),u=!1,Re(c)}}}function Pf(n){let e;return{c(){e=g("div"),e.innerHTML='<img src="https://i.gifer.com/XVo6.gif" alt="" height="50px"/>',d(e,"class","sto"),d(e,"flex","center")},m(t,i){k(t,e,i)},p:B,d(t){t&&T(e)}}}function Mf(n){let e;return{c(){e=g("div"),e.innerHTML=`<svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="38" cy="38" r="36.5" stroke="white" stroke-width="3"></circle><circle cx="24.8154" cy="31.8154" r="4.81544" fill="#D9D9D9"></circle><circle cx="50.5762" cy="31.8154" r="4.81544" fill="#D9D9D9"></circle><path d="M21.7227 52.4476C24.2876 50.337 31.7622 46.1836 37.947 46.1836C44.1319 46.1836 50.7354 50.337 53.5907 52.4476" stroke="white" stroke-width="3" stroke-linecap="round"></path></svg> 
        <h1 text="center">\u0442\u0430\u043A\u043E\u0433\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043D\u0435 \u0456\u0441\u043D\u0443\u0454 <br/> \u0430\u0431\u043E \u0432\u0456\u043D \u0431\u0443\u0432 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0438\u0439</h1> 
        <a style="font-size: 18px;" href="#/">\u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443</a>`,d(e,"class","sto"),d(e,"flex","center g20")},m(t,i){k(t,e,i)},p:B,d(t){t&&T(e)}}}function Bf(n){let e,t,i,s,r,o,l,a,u,c,h,f=n[2].name+"",p,m,D,w,S=(n[2].age||"\u043D\u0435\u0432\u0456\u0434\u043E\u043C\u043E")+"",E,N,C,A,v=(n[2].gen||"\u043D\u0435\u0432\u0456\u0434\u043E\u043C\u043E")+"",F,x,L,ee,te,fe=n[2].bio+"",z,ne,le,re,_e,W=n[0].name==localStorage.name&&ho(n);function $(Q,Le){return Q[1]?Uf:Hf}let P=$(n),q=P(n);return{c(){e=g("div"),t=g("div"),i=g("h1"),i.textContent="\u041F\u0440\u043E\u0444\u0456\u043B\u044C",s=I(),W&&W.c(),r=I(),o=g("div"),l=g("img"),u=I(),c=g("div"),h=g("h3"),p=J(f),m=I(),D=g("h3"),w=J("\u0412\u0456\u043A:   "),E=J(S),N=I(),C=g("h3"),A=J("\u0421\u0442\u0430\u0442\u044C: "),F=J(v),x=I(),L=g("h4"),L.textContent="\u041F\u0440\u043E \u043C\u0435\u043D\u0435:",ee=I(),te=g("h3"),z=J(fe),ne=I(),le=g("h4"),le.textContent="\u0414\u043E\u043F\u0438\u0441\u0438",re=I(),_e=g("div"),q.c(),d(t,"flex","between"),Be(l.src,a=n[2].img)||d(l,"src",a),d(l,"alt","ava"),d(l,"height","68px"),d(l,"width","68px"),d(l,"class","svelte-1flkn9e"),d(h,"class","svelte-1flkn9e"),d(D,"class","svelte-1flkn9e"),d(C,"class","svelte-1flkn9e"),d(c,"flex","col between"),d(c,"class","svelte-1flkn9e"),d(o,"flex","row ai-c"),d(o,"id","prop"),d(o,"class","svelte-1flkn9e"),d(te,"class","svelte-1flkn9e"),d(_e,"flex","col-rev"),d(_e,"class","svelte-1flkn9e"),d(e,"class","wrapper svelte-1flkn9e")},m(Q,Le){k(Q,e,Le),_(e,t),_(t,i),_(t,s),W&&W.m(t,null),_(e,r),_(e,o),_(o,l),_(o,u),_(o,c),_(c,h),_(h,p),_(c,m),_(c,D),_(D,w),_(D,E),_(c,N),_(c,C),_(C,A),_(C,F),_(e,x),_(e,L),_(e,ee),_(e,te),_(te,z),_(e,ne),_(e,le),_(e,re),_(e,_e),q.m(_e,null)},p(Q,Le){Q[0].name==localStorage.name?W?W.p(Q,Le):(W=ho(Q),W.c(),W.m(t,null)):W&&(W.d(1),W=null),Le&4&&!Be(l.src,a=Q[2].img)&&d(l,"src",a),Le&4&&f!==(f=Q[2].name+"")&&De(p,f),Le&4&&S!==(S=(Q[2].age||"\u043D\u0435\u0432\u0456\u0434\u043E\u043C\u043E")+"")&&De(E,S),Le&4&&v!==(v=(Q[2].gen||"\u043D\u0435\u0432\u0456\u0434\u043E\u043C\u043E")+"")&&De(F,v),Le&4&&fe!==(fe=Q[2].bio+"")&&De(z,fe),P===(P=$(Q))&&q?q.p(Q,Le):(q.d(1),q=P(Q),q&&(q.c(),q.m(_e,null)))},d(Q){Q&&T(e),W&&W.d(),q.d()}}}function ho(n){let e,t,i;return{c(){e=g("h1"),e.textContent="\u2022\u2022\u2022",d(e,"pointer",""),d(e,"class","points")},m(s,r){k(s,e,r),t||(i=se(e,"click",n[7]),t=!0)},p:B,d(s){s&&T(e),t=!1,i()}}}function Hf(n){let e;return{c(){e=g("div"),e.innerHTML='<h4 class="noposts svelte-1flkn9e" text="">\u0434\u043E\u043F\u0441\u0456\u0432 \u043D\u0435\u043C\u0430\u0454</h4>',d(e,"flex","center")},m(t,i){k(t,e,i)},p:B,d(t){t&&T(e)}}}function Uf(n){let e=[],t=new Map,i,s=Object.entries(n[1]);const r=o=>o[9][0];for(let o=0;o<s.length;o+=1){let l=uo(n,s,o),a=r(l);t.set(a,e[o]=fo(a,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();i=et()},m(o,l){for(let a=0;a<e.length;a+=1)e[a].m(o,l);k(o,i,l)},p(o,l){l&6&&(s=Object.entries(o[1]),e=yo(e,l,r,1,o,s,t,i.parentNode,Eo,fo,i,uo))},d(o){for(let l=0;l<e.length;l+=1)e[l].d(o);o&&T(i)}}}function fo(n,e){let t,i,s,r,o,l,a=e[2].name+"",u,c,h=e[9][1].tema+"",f,p,m,D=e[9][1].textPost+"",w,S,E,N,C,A,v,F,x=e[9][1].likeCount+"",L,ee,te,fe;return{key:n,first:null,c(){t=g("div"),i=g("div"),s=g("img"),o=I(),l=g("h3"),u=J(a),c=J(", \u0422\u0435\u043C\u0430: "),f=J(h),p=I(),m=g("h5"),w=J(D),S=I(),E=g("div"),N=g("div"),C=ve("svg"),A=ve("path"),v=I(),F=g("h5"),L=J(x),ee=I(),te=g("h5"),te.textContent="15.05.2022 23:54",fe=I(),Be(s.src,r=e[2].img)||d(s,"src",r),d(s,"alt","ava"),d(s,"height","35px"),d(s,"width","35px"),d(s,"class","svelte-1flkn9e"),d(l,"class","svelte-1flkn9e"),d(i,"class","postHead svelte-1flkn9e"),d(i,"flex","row ai-c"),d(m,"class","postBody svelte-1flkn9e"),d(A,"class","likes"),d(A,"d","M11 19C-10.1988 6.1863 4.64026 -4.49179 10.9999 1.91508C17.3597 -4.49178 32.1988 6.18631 11 19Z"),d(A,"fill","orange"),d(C,"width","22"),d(C,"height","19"),d(C,"viewBox","0 0 22 19"),d(C,"fill","none"),d(C,"xmlns","http://www.w3.org/2000/svg"),d(F,"id","likeCount"),d(F,"class","svelte-1flkn9e"),d(N,"flex",""),d(N,"class","svelte-1flkn9e"),d(te,"class","svelte-1flkn9e"),d(E,"flex","between ai-c"),d(E,"class","postFoot svelte-1flkn9e"),d(t,"class","post svelte-1flkn9e"),d(t,"flex","col"),this.first=t},m(z,ne){k(z,t,ne),_(t,i),_(i,s),_(i,o),_(i,l),_(l,u),_(l,c),_(l,f),_(t,p),_(t,m),_(m,w),_(t,S),_(t,E),_(E,N),_(N,C),_(C,A),_(N,v),_(N,F),_(F,L),_(E,ee),_(E,te),_(t,fe)},p(z,ne){e=z,ne&4&&!Be(s.src,r=e[2].img)&&d(s,"src",r),ne&4&&a!==(a=e[2].name+"")&&De(u,a),ne&2&&h!==(h=e[9][1].tema+"")&&De(f,h),ne&2&&D!==(D=e[9][1].textPost+"")&&De(w,D),ne&2&&x!==(x=e[9][1].likeCount+"")&&De(L,x)},d(z){z&&T(t)}}}function jf(n){let e,t,i=n[4]&&co(n);function s(l,a){return l[2]?Bf:l[3]?Mf:Pf}let r=s(n),o=r(n);return{c(){i&&i.c(),e=I(),o.c(),t=et()},m(l,a){i&&i.m(l,a),k(l,e,a),o.m(l,a),k(l,t,a)},p(l,[a]){l[4]?i?i.p(l,a):(i=co(l),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r===(r=s(l))&&o?o.p(l,a):(o.d(1),o=r(l),o&&(o.c(),o.m(t.parentNode,t)))},i:B,o:B,d(l){i&&i.d(l),l&&T(e),o.d(l),l&&T(t)}}}function Wf(n,e,t){let{params:i}=e;const s=Ct();let r,o,l,a;location.hash=="#/user/undefined"&&(location.hash="#/",location.hash="#/login"),Je(Ae(s,"users/"+i.name)).then(f=>{t(2,o=f.val()),o?Je(Kd(Ae(s,"posts/"),qd("user"),Yd(i.name))).then(p=>{t(1,r=p.val())}):t(3,l=!0)});const u=()=>{localStorage.name="",location.reload()},c=()=>{t(4,a=!1)},h=()=>{t(4,a=!0)};return n.$$set=f=>{"params"in f&&t(0,i=f.params)},[i,r,o,l,a,u,c,h]}class $f extends Oe{constructor(e){super(),xe(this,e,Wf,jf,Te,{params:0})}}function zf(n){let e,t,i=n[2].name+"",s;return{c(){e=g("h1"),t=J("\u041F\u0440\u0438\u0432\u0456\u0442, "),s=J(i)},m(r,o){k(r,e,o),_(e,t),_(e,s)},p(r,o){o&4&&i!==(i=r[2].name+"")&&De(s,i)},d(r){r&&T(e)}}}function Vf(n){let e,t,i,s,r,o,l,a,u,c,h;return{c(){e=g("h1"),e.innerHTML="\u041D\u0430\u043F\u0438\u0448\u0438 \u043B\u043E\u0433\u0456\u043D \u0442\u0430 \u043F\u043E\u0440\u043E\u043B\u044C <br/> \u0449\u043E\u0431 \u0443\u0432\u0456\u0439\u0442\u0438",t=I(),i=g("input"),s=I(),r=g("input"),o=I(),l=g("button"),l.textContent="\u0423\u0432\u0456\u0439\u0442\u0438",a=I(),u=g("a"),u.textContent="\u042F \u0449\u0435 \u043D\u0435 \u043C\u0430\u044E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443",d(e,"text",""),d(i,"type","text"),d(i,"placeholder","\u041B\u043E\u0433\u0456\u043D"),d(r,"type","password"),d(r,"placeholder","\u041F\u0430\u0440\u043E\u043B\u044C"),d(l,"color","orange"),d(u,"href","#/regist")},m(f,p){k(f,e,p),k(f,t,p),k(f,i,p),ge(i,n[0]),k(f,s,p),k(f,r,p),ge(r,n[1]),k(f,o,p),k(f,l,p),k(f,a,p),k(f,u,p),c||(h=[se(i,"input",n[5]),se(r,"input",n[6]),se(l,"click",n[4])],c=!0)},p(f,p){p&1&&i.value!==f[0]&&ge(i,f[0]),p&2&&r.value!==f[1]&&ge(r,f[1])},d(f){f&&T(e),f&&T(t),f&&T(i),f&&T(s),f&&T(r),f&&T(o),f&&T(l),f&&T(a),f&&T(u),c=!1,Re(h)}}}function qf(n){let e;function t(r,o){return r[3]?zf:Vf}let i=t(n),s=i(n);return{c(){e=g("div"),s.c(),d(e,"class","over"),d(e,"flex","center")},m(r,o){k(r,e,o),s.m(e,null)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e,null)))},i:B,o:B,d(r){r&&T(e),s.d()}}}function Gf(n,e,t){const i=Ct();let s,r,o,l;localStorage.name&&(location.hash="/");function a(){s&&r?Je(Ae(i,"users/"+s)).then(h=>{t(2,o=h.val()),o.pass==r?(t(3,l=!0),setTimeout(()=>{localStorage.name=s,location.hash="/"},1e3)):alert("\u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043B\u043E\u0433\u0456\u043D \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C")}).catch(()=>{alert("\u0442\u0430\u043A\u043E\u0433\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043D\u0435 \u0456\u0441\u043D\u0443\u0454")}):alert("\u043F\u043E\u043B\u044F \u043F\u0443\u0441\u0442\u0456")}function u(){s=this.value,t(0,s)}function c(){r=this.value,t(1,r)}return[s,r,o,l,a,u,c]}class Yf extends Oe{constructor(e){super(),xe(this,e,Gf,qf,Te,{})}}function Kf(n){let e;return{c(){e=g("div"),e.innerHTML='<img src="https://i.gifer.com/XVo6.gif" alt="" height="50px"/>',d(e,"class","sto"),d(e,"flex","center")},m(t,i){k(t,e,i)},p:B,d(t){t&&T(e)}}}function Qf(n){let e,t,i,s,r,o,l,a,u,c,h,f,p,m,D,w,S,E,N,C,A,v,F,x,L,ee,te,fe,z,ne,le,re,_e,W,$,P;return{c(){e=g("div"),t=g("div"),i=g("input"),s=I(),r=g("label"),o=g("img"),a=I(),u=g("h4"),u.textContent="\u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u043F\u0456\u043A\u0447\u0443",c=I(),h=g("div"),f=g("div"),p=g("h6"),p.textContent="\u0456\u043C'\u044F",m=I(),D=g("input"),w=I(),S=g("div"),E=g("h6"),E.textContent="\u0432\u0456\u043A",N=I(),C=g("input"),A=I(),v=g("div"),F=g("h6"),F.textContent="\u0441\u0442\u0430\u0442\u044C",x=I(),L=g("select"),ee=g("option"),ee.textContent="\u0427\u043E\u043B\u043E\u0432\u0456\u043A",te=g("option"),te.textContent="\u0416\u0456\u043D\u043A\u0430",fe=I(),z=g("div"),ne=g("h6"),ne.textContent="\u043F\u0440\u043E \u043C\u0435\u043D\u0435",le=I(),re=g("textarea"),_e=I(),W=g("button"),W.textContent="\u0437\u043C\u0456\u043D\u0438\u0442\u0438",d(i,"type","file"),d(i,"id","selectFileImg"),d(i,"accept","image/*"),In(i,"display","none"),Be(o.src,l=n[1])||d(o,"src",l),d(o,"alt","ava"),d(o,"width","100px"),d(o,"height","100px"),d(r,"for","selectFileImg"),d(t,"flex","center"),d(D,"type","text"),In(f,"flex","3"),d(C,"type","number"),d(C,"min","0"),In(S,"flex","1"),d(h,"flex","row g10"),ee.__value="\u0427\u043E\u043B\u043E\u0432\u0456\u043A",ee.value=ee.__value,d(ee,"class","svelte-1745fd3"),te.__value="\u0416\u0456\u043D\u043A\u0430",te.value=te.__value,d(te,"class","svelte-1745fd3"),n[4]===void 0&&ln(()=>n[9].call(L)),d(re,"rows","5"),re.value=n[3],d(W,"color","orange"),d(e,"class","wrapper")},m(q,Q){k(q,e,Q),_(e,t),_(t,i),_(t,s),_(t,r),_(r,o),_(r,a),_(r,u),_(e,c),_(e,h),_(h,f),_(f,p),_(f,m),_(f,D),ge(D,n[0]),_(h,w),_(h,S),_(S,E),_(S,N),_(S,C),ge(C,n[2]),_(e,A),_(e,v),_(v,F),_(v,x),_(v,L),_(L,ee),_(L,te),Rn(L,n[4]),_(e,fe),_(e,z),_(z,ne),_(z,le),_(z,re),_(e,_e),_(e,W),$||(P=[se(D,"input",n[7]),se(C,"input",n[8]),se(L,"change",n[9]),se(W,"click",n[6],{once:!0})],$=!0)},p(q,Q){Q&2&&!Be(o.src,l=q[1])&&d(o,"src",l),Q&1&&D.value!==q[0]&&ge(D,q[0]),Q&4&&mo(C.value)!==q[2]&&ge(C,q[2]),Q&16&&Rn(L,q[4]),Q&8&&(re.value=q[3])},d(q){q&&T(e),$=!1,Re(P)}}}function Xf(n){let e;function t(r,o){return r[5]?Qf:Kf}let i=t(n),s=i(n);return{c(){s.c(),e=et()},m(r,o){s.m(r,o),k(r,e,o)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:B,o:B,d(r){s.d(r),r&&T(e)}}}function Zf(n,e,t){const i=Ct();localStorage.name&&(location.hash="/");let s,r,o,l,a,u;r="https://anton99999.github.io/avatars/8.jpg",Je(Ae(i,"users/"+localStorage.name)).then(m=>{t(5,u=m.val()),t(1,r=u.img),t(0,s=u.name),t(2,o=u.age),t(4,a=u.gen),t(3,l=u.bio)});function c(){t(5,u.img=r,u),t(5,u.name=s,u),t(5,u.age=o,u),t(5,u.gen=a,u),t(5,u.bio=l,u),Gn(Ae(i,"users/"+localStorage.name),u),location.hash="/user/"+localStorage.name}function h(){s=this.value,t(0,s)}function f(){o=mo(this.value),t(2,o)}function p(){a=go(this),t(4,a)}return[s,r,o,l,a,u,c,h,f,p]}class Jf extends Oe{constructor(e){super(),xe(this,e,Zf,Xf,Te,{})}}function e_(n){let e,t,i=n[3].name+"",s;return{c(){e=g("h1"),t=J("\u041F\u0440\u0438\u0432\u0456\u0442, "),s=J(i)},m(r,o){k(r,e,o),_(e,t),_(e,s)},p(r,o){o&8&&i!==(i=r[3].name+"")&&De(s,i)},d(r){r&&T(e)}}}function t_(n){let e,t,i,s,r,o,l,a,u,c,h,f,p;return{c(){e=g("h1"),e.textContent="\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u043F\u043E\u043B\u044F, \u0449\u043E\u0431 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F",t=I(),i=g("input"),s=I(),r=g("input"),o=I(),l=g("input"),a=I(),u=g("button"),u.textContent="\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F",c=I(),h=g("a"),h.textContent="\u0412 \u043C\u0435\u043D\u0435 \u0432\u0436\u0435 \u0454 \u0430\u043A\u043A\u0430\u0443\u043D\u0442",d(e,"text",""),d(i,"type","email"),d(i,"placeholder","\u043F\u043E\u0448\u0442\u0430"),d(i,"autocomplete","email"),d(r,"type","text"),d(r,"placeholder","\u043B\u043E\u0433\u0456\u043D"),d(r,"autocomplete","name"),d(l,"type","password"),d(l,"placeholder","\u043F\u0430\u0440\u043E\u043B\u044C"),d(l,"autocomplete","new-password"),d(u,"color","orange"),d(h,"href","#/login")},m(m,D){k(m,e,D),k(m,t,D),k(m,i,D),ge(i,n[1]),k(m,s,D),k(m,r,D),ge(r,n[0]),k(m,o,D),k(m,l,D),ge(l,n[2]),k(m,a,D),k(m,u,D),k(m,c,D),k(m,h,D),f||(p=[se(i,"input",n[6]),se(r,"input",n[7]),se(l,"input",n[8]),se(u,"click",n[5])],f=!0)},p(m,D){D&2&&i.value!==m[1]&&ge(i,m[1]),D&1&&r.value!==m[0]&&ge(r,m[0]),D&4&&l.value!==m[2]&&ge(l,m[2])},d(m){m&&T(e),m&&T(t),m&&T(i),m&&T(s),m&&T(r),m&&T(o),m&&T(l),m&&T(a),m&&T(u),m&&T(c),m&&T(h),f=!1,Re(p)}}}function n_(n){let e;function t(r,o){return r[4]?e_:t_}let i=t(n),s=i(n);return{c(){e=g("div"),s.c(),d(e,"flex","center"),d(e,"class","over")},m(r,o){k(r,e,o),s.m(e,null)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e,null)))},i:B,o:B,d(r){r&&T(e),s.d()}}}let i_=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,s_=/^[a-z0-9]+$/,r_=/^[A-Za-z0-9\.\-\_\/]+$/;function o_(n,e,t){const i=Ct();let s,r,o,l,a,u;localStorage.name&&(location.hash="/");function c(){s&&r&&l?Je(Ae(i,"users/"+r)).then(m=>{t(3,a=m.val()),a?alert("\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0437 \u0442\u0430\u043A\u0438\u043C \u043B\u043E\u0433\u0456\u043D\u043E\u043C \u0432\u0436\u0435 \u0456\u0441\u043D\u0443\u0454"):Gn(Ae(i,"users/"+r),{name:r,email:o,login:r,img:"https://firebasestorage.googleapis.com/v0/b/test-f886d.appspot.com/o/profileImg%2Fdefault.jpg?alt=media",pass:l,age:"",gen:"",bio:"",countMyPost:0,countTotalLikes:0,time:new Date().toISOString().slice(0,-4).replace(/\D/g,"")}).then(()=>{t(4,u=!0),setTimeout(()=>{localStorage.name=r,location.hash="/"},1e3)})}):alert(`\u043F\u0440\u0430\u0432\u0438\u043B\u0430:
          \u043F\u043E\u0448\u0442\u0430 - \u043F\u0440\u0438\u043A\u043B\u0430\u0434 (test@mail.com);
          \u043B\u043E\u0433\u0456\u043D - \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0456 \u043B\u0430\u0442. \u043B\u0456\u0442\u0435\u0440\u0438 \u0442\u0430 \u0446\u0438\u0444\u0440\u0438;
          \u043F\u0430\u0440\u043E\u043B\u044C - \u043B\u0430\u0442. \u043B\u0456\u0442\u0435\u0440\u0438, \u0446\u0438\u0444\u0440\u0438 \u0442\u0430 ( . - / _ );`)}function h(){o=this.value,t(1,o)}function f(){r=this.value,t(0,r)}function p(){l=this.value,t(2,l)}return n.$$.update=()=>{n.$$.dirty&7&&(s=i_.test(o)&&s_.test(r)&&r_.test(l))},[r,o,l,a,u,c,h,f,p]}class l_ extends Oe{constructor(e){super(),xe(this,e,o_,n_,Te,{})}}function a_(n){let e,t,i,s,r,o,l,a,u,c,h,f,p,m,D,w,S,E,N,C,A;return o=new Zu({props:{routes:n[0]}}),{c(){e=g("link"),t=I(),i=g("header"),i.innerHTML='<svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4715 21.9842C29.0189 21.4228 29.2155 20.6936 29.2155 19.9739V10.6679C29.2155 9.97079 29.4219 9.4748 29.7921 9.08568C30.2294 8.64862 30.8589 8.30564 31.7578 8.11036C32.635 7.91988 33.6736 7.92573 34.8963 8.17438C35.2931 8.26453 35.7059 8.28922 36.1189 8.21358C36.5512 8.13444 36.9518 7.94848 37.2909 7.64965L37.2944 7.64654L37.2979 7.64342C37.7041 7.27983 37.9369 6.81159 38.0454 6.32208C38.1772 5.78831 38.1374 5.2321 37.8802 4.71418C37.6357 4.22176 37.2408 3.85569 36.8156 3.58116C35.9109 2.96169 34.6887 2.74518 33.3425 2.74518C31.883 2.74518 30.5209 3.09045 29.2799 3.7903C29.1089 3.88673 28.9424 3.98813 28.7806 4.09447C28.6897 3.95554 28.5821 3.82352 28.4555 3.70097C27.8999 3.1193 27.1482 2.9364 26.4432 2.9364C25.7216 2.9364 24.9904 3.13817 24.4308 3.70164C23.8713 4.26512 23.6709 5.0014 23.6709 5.72808V19.9739C23.6709 20.7055 23.8627 21.4601 24.4308 22.0322L24.4477 22.0491L24.4652 22.0653C25.0275 22.5882 25.7459 22.7656 26.4432 22.7656C27.155 22.7656 27.9143 22.5791 28.4715 21.9842Z" fill="#FFA500"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.4151 21.5577L41.4213 21.5617L41.4275 21.5656C42.8528 22.4564 44.455 22.8931 46.201 22.8931C47.9469 22.8931 49.5491 22.4564 50.9744 21.5656L50.9807 21.5617L50.9868 21.5577C51.1294 21.4661 51.2689 21.3713 51.4053 21.2733C51.5253 21.5226 51.6839 21.7565 51.8823 21.9706L51.9103 22.0008L51.9403 22.029C52.4939 22.5494 53.1814 22.7974 53.9232 22.7974C54.6645 22.7974 55.3596 22.5485 55.9039 22.0003C56.4526 21.4478 56.7271 20.7459 56.7271 19.9739V12.0805L56.6999 12.0687C56.5918 10.504 56.161 9.05435 55.3948 7.73906C54.5345 6.22585 53.3554 5.02499 51.8699 4.15463C50.3638 3.25071 48.6746 2.80892 46.8339 2.80892C44.9922 2.80892 43.2951 3.25113 41.7715 4.15161C40.2838 5.022 39.0941 6.22258 38.2123 7.7346L38.2087 7.74078L38.2052 7.74695C37.3339 9.28236 36.9091 10.9989 36.9091 12.8669C36.9091 14.7172 37.2943 16.42 38.0893 17.9484L38.0946 17.9586L38.1001 17.9686C38.9107 19.4573 40.018 20.6602 41.4151 21.5577ZM49.0928 17.0396C49.7546 16.6209 50.2739 16.066 50.6606 15.3574C51.0444 14.6334 51.2458 13.8117 51.2458 12.8669C51.2458 11.8947 51.0418 11.0773 50.6641 10.3829L50.6614 10.3777L50.6586 10.3725C50.2699 9.64092 49.7527 9.09287 49.1017 8.69956L49.0925 8.69399L49.0833 8.68818C48.4438 8.28571 47.7058 8.07357 46.8339 8.07357C45.9881 8.07357 45.244 8.28337 44.5734 8.69513L44.5661 8.69956C43.9118 9.09491 43.3804 9.64786 42.9698 10.387C42.5936 11.0805 42.3904 11.8966 42.3904 12.8669C42.3904 13.807 42.5899 14.6253 42.9698 15.3466C43.3771 16.0592 43.908 16.6164 44.5693 17.036C45.2386 17.4272 45.9848 17.6284 46.8339 17.6284C47.711 17.6284 48.4529 17.424 49.0928 17.0396Z" fill="#FFA500"></path><path d="M72.9505 22.0008L72.9802 22.029C73.5341 22.5494 74.2212 22.7974 74.9631 22.7974C75.7044 22.7974 76.3993 22.5485 76.9436 22.0003C77.4928 21.4478 77.767 20.746 77.767 19.9739V12.1339C77.767 10.2227 77.4018 8.52376 76.6063 7.09305C75.8465 5.68879 74.7755 4.60418 73.4027 3.87401C72.0709 3.1333 70.5766 2.77705 68.9501 2.77705C67.3765 2.77705 65.9219 3.12695 64.6125 3.84834C64.4879 3.91699 64.3657 3.98814 64.2458 4.06178C64.164 3.94739 64.0716 3.8377 63.9682 3.73351C63.4131 3.17491 62.7016 2.9364 61.9555 2.9364C61.2142 2.9364 60.5265 3.18448 59.9726 3.70482L59.9577 3.71891L59.9435 3.73351C59.3886 4.29212 59.1517 5.00905 59.1517 5.75994V19.9739C59.1517 20.7208 59.3981 21.4131 59.9149 21.9706L59.9429 22.0008L59.9726 22.029C60.5265 22.5494 61.2142 22.7974 61.9555 22.7974C62.7016 22.7974 63.4131 22.5589 63.9682 22.0003L63.9825 21.9857L63.9967 21.9706C64.5131 21.4131 64.7594 20.7208 64.7594 19.9739V10.9866C64.7594 10.4303 64.904 9.98762 65.1711 9.6115L65.1765 9.60342L65.1824 9.59533C65.4811 9.15859 65.8916 8.79889 66.4437 8.52073C66.9791 8.25114 67.5961 8.10544 68.3171 8.10544C69.1304 8.10544 69.7926 8.2648 70.3363 8.54644L70.3542 8.55572L70.3726 8.56435C70.9039 8.81717 71.3287 9.20759 71.6565 9.77374C71.9617 10.3001 72.1592 11.0602 72.1592 12.1339V19.9739C72.1592 20.7208 72.4055 21.4131 72.9225 21.9706L72.9505 22.0008Z" fill="#FFA500"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M84.2857 21.5925L84.2958 21.599L84.3065 21.6053C85.7349 22.4734 87.3549 22.8931 89.1302 22.8931C90.7984 22.8931 92.3173 22.4634 93.6469 21.5792L93.6535 21.575L93.66 21.5706C93.7672 21.4972 93.8724 21.4218 93.9756 21.3442C93.8718 21.7663 93.7299 22.1399 93.5553 22.4696C93.1466 23.2414 92.6159 23.7885 91.9662 24.1555L91.9609 24.1586L91.9549 24.1618C91.2993 24.5417 90.5765 24.7354 89.7632 24.7354C88.8131 24.7354 88.0064 24.5612 87.3204 24.2409C86.6166 23.9125 86.049 23.4639 85.5998 22.8938C85.1703 22.3296 84.5843 21.9681 83.8944 21.8278C83.1457 21.6707 82.4351 21.8494 81.8239 22.2595L81.8173 22.2642L81.8102 22.2691C81.239 22.6645 80.8428 23.2257 80.6899 23.9208L80.6828 23.9521L80.6774 23.9837C80.5507 24.7498 80.7857 25.4491 81.2224 26.024L81.2295 26.0333L81.2367 26.0425C82.2599 27.3364 83.5182 28.3271 85.0008 29.0015C86.4697 29.6694 88.0409 30 89.7001 30C91.6176 30 93.3553 29.5509 94.8719 28.6168C96.382 27.6995 97.5642 26.4492 98.4028 24.8831C99.2446 23.3326 99.6563 21.6131 99.6563 19.7508V11.9949L99.6258 11.9849C99.5147 10.4085 99.0991 8.96446 98.3562 7.67612C97.5141 6.15769 96.3395 4.96321 94.8463 4.11337C93.3384 3.23377 91.6326 2.80892 89.7632 2.80892C87.8754 2.80892 86.1589 3.23246 84.6486 4.11335C83.1519 4.96516 81.9658 6.16224 81.1028 7.6832L81.0998 7.68865C80.2461 9.21137 79.8386 10.95 79.8386 12.8669C79.8386 14.7544 80.2217 16.4795 81.0189 18.0122L81.0225 18.0191C81.8114 19.5122 82.9007 20.7117 84.2857 21.5925ZM93.5934 15.3828C93.9694 14.6916 94.1752 13.8645 94.1752 12.8669C94.1752 11.8693 93.9694 11.0423 93.5934 10.351L93.5856 10.3363L93.5779 10.3213C93.2114 9.59976 92.7087 9.05812 92.0626 8.66769C91.4242 8.282 90.6699 8.07357 89.7632 8.07357C88.8565 8.07357 88.1022 8.282 87.4638 8.66769C86.8129 9.061 86.2953 9.60905 85.9069 10.3407L85.9039 10.3459L85.9015 10.351C85.5255 11.0423 85.3197 11.8693 85.3197 12.8669C85.3197 13.8645 85.5255 14.6916 85.9015 15.3828C86.2882 16.0938 86.8058 16.6368 87.4638 17.0343C88.1022 17.42 88.8565 17.6284 89.7632 17.6284C90.6699 17.6284 91.4242 17.42 92.0626 17.0343C92.7158 16.6396 93.2186 16.103 93.5833 15.4023L93.588 15.3925L93.5934 15.3828Z" fill="#FFA500"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M102.497 18.0605L102.502 18.0702C103.391 19.5701 104.609 20.7582 106.137 21.6238L106.147 21.6291L106.157 21.6344C107.722 22.4832 109.481 22.8931 111.404 22.8931C112.521 22.8931 113.661 22.6856 114.819 22.2898C115.994 21.8953 117.02 21.3699 117.868 20.6933C118.466 20.2282 118.874 19.5473 118.827 18.6963C118.785 17.916 118.39 17.2858 117.857 16.8127L117.848 16.8045L117.838 16.7964C117.326 16.3599 116.707 16.1655 116.056 16.1944C115.433 16.2016 114.864 16.4137 114.372 16.7768L114.367 16.7806L114.362 16.7845C114.065 17.0087 113.625 17.2445 113.005 17.4726C112.446 17.6656 111.914 17.7559 111.404 17.7559C110.382 17.7559 109.523 17.5318 108.796 17.1155C108.047 16.6872 107.473 16.115 107.053 15.3879C107.014 15.3199 106.976 15.2508 106.941 15.1806H117.354C118.034 15.1806 118.683 14.9666 119.206 14.4803L119.224 14.4641L119.24 14.4471C119.746 13.938 120 13.2896 120 12.5801C120 12.0589 119.972 11.5512 119.915 11.0576L119.791 10.2346C119.618 9.31216 119.335 8.4441 118.936 7.63575C118.228 6.13744 117.177 4.94918 115.794 4.10174C114.393 3.22225 112.755 2.80892 110.93 2.80892C109.08 2.80892 107.393 3.23457 105.905 4.11626C104.426 4.97116 103.261 6.17217 102.421 7.69578L102.417 7.70153C101.59 9.22179 101.195 10.9557 101.195 12.8669C101.195 14.7716 101.617 16.5107 102.491 18.0506L102.497 18.0605ZM106.984 10.2346H114.359C114.328 10.1594 114.294 10.0857 114.259 10.0135L114.257 10.0082L114.254 10.0028C113.941 9.33928 113.512 8.84341 112.967 8.48227C112.457 8.14516 111.798 7.94608 110.93 7.94608C109.91 7.94608 109.102 8.16874 108.457 8.56186C107.82 8.96329 107.332 9.51136 106.984 10.2346Z" fill="#FFA500"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4113 22.7656C16.1613 22.7656 20.8226 18.0717 20.8226 12.2814C20.8226 6.49119 16.1613 1.79728 10.4113 1.79728C4.6613 1.79728 0 6.49119 0 12.2814C0 18.0717 4.6613 22.7656 10.4113 22.7656ZM10.4113 17.9728C13.5327 17.9728 16.0631 15.4247 16.0631 12.2814C16.0631 9.13815 13.5327 6.59003 10.4113 6.59003C7.28987 6.59003 4.75945 9.13815 4.75945 12.2814C4.75945 15.4247 7.28987 17.9728 10.4113 17.9728Z" fill="#FFA500"></path><path d="M10.7088 5.72172C10.7088 2.5617 13.3317 0 16.5672 0H21.8789V0.915475C21.8789 4.07549 19.256 6.63718 16.0204 6.63718H10.7088V5.72172Z" fill="#2DDF00"></path></svg>',s=I(),r=g("main"),an(o.$$.fragment),l=I(),a=g("footer"),u=g("a"),u.innerHTML='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8689 9.51317C19.1949 9.29789 19.5741 9.20472 19.944 9.22371C20.313 9.20126 20.6924 9.29045 21.02 9.50185L32.1935 16.7126C32.9649 17.2104 33.157 18.1973 32.6225 18.9169C32.0881 19.6366 31.0295 19.8164 30.2581 19.3186L30.1824 19.2697L30.232 28.6127C30.2382 29.7794 29.229 30.7306 27.9777 30.7372L22.3139 30.7673L22.2634 21.2613L17.7323 21.2854L17.7828 30.7914L12.119 30.8215C10.8678 30.8282 9.84845 29.8878 9.84224 28.7211L9.79264 19.3899L9.73567 19.4276C8.96963 19.9335 7.90921 19.765 7.36715 19.0511C6.82508 18.3372 7.00665 17.3483 7.77269 16.8423L18.8689 9.51317ZM10.9215 18.6443L10.975 28.7151C10.9781 29.2984 11.4878 29.7686 12.1134 29.7653L16.6445 29.7412L16.5995 21.2914C16.5964 20.7081 17.1011 20.2325 17.7267 20.2291L22.2578 20.2051C22.8834 20.2017 23.393 20.6719 23.3961 21.2553L23.4411 29.7051L27.9721 29.681C28.5977 29.6777 29.1024 29.2021 29.0993 28.6187L29.0457 18.5361L19.9612 12.6736L10.9215 18.6443Z" fill="white"></path></svg>',c=I(),h=g("a"),h.innerHTML='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.2966 21.8979C27.018 19.429 27.7521 15.3087 25.8435 11.9917C23.6471 8.17458 18.7826 6.86672 14.9783 9.07056C11.174 11.2744 9.87054 16.1554 12.0669 19.9726C14.0327 23.3889 18.1357 24.7953 21.703 23.473L26.1718 31.2394C26.5903 31.9667 27.5171 32.2159 28.242 31.796C28.9669 31.3761 29.2152 30.4461 28.7967 29.7188L24.2966 21.8979ZM24.9685 12.4986C26.8859 15.8309 25.7481 20.0919 22.427 22.0158C19.106 23.9397 14.8593 22.798 12.9419 19.4657C11.0245 16.1334 12.1624 11.8724 15.4834 9.9485C18.8045 8.0246 23.0511 9.16633 24.9685 12.4986Z" fill="white"></path></svg>',f=I(),p=g("a"),p.innerHTML='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="#FFA500"></rect><path d="M20 11C19.1716 11 18.5 11.6716 18.5 12.5V18H13C12.1716 18 11.5 18.6716 11.5 19.5C11.5 20.3284 12.1716 21 13 21H18.5V26.5C18.5 27.3284 19.1716 28 20 28C20.8284 28 21.5 27.3284 21.5 26.5V21H27C27.8284 21 28.5 20.3284 28.5 19.5C28.5 18.6716 27.8284 18 27 18H21.5V12.5C21.5 11.6716 20.8284 11 20 11Z" fill="#111111"></path></svg>',m=I(),D=g("a"),D.innerHTML='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0001 31.5002C26.3514 31.5002 31.5002 26.3514 31.5002 20.0001C31.5002 13.6488 26.3514 8.5 20.0001 8.5C13.6488 8.5 8.5 13.6488 8.5 20.0001C8.5 26.3514 13.6488 31.5002 20.0001 31.5002Z" stroke="white"></path><circle cx="14.4994" cy="17.2503" r="1.83335" fill="white"></circle><circle cx="20.4222" cy="17.2503" r="1.83335" fill="white"></circle><circle cx="20.4222" cy="23.1471" r="1.83335" fill="white"></circle><circle cx="26.3451" cy="17.2503" r="1.83335" fill="white"></circle><circle cx="26.3451" cy="23.1993" r="1.83335" fill="white"></circle><circle cx="14.4994" cy="23.1471" r="1.83335" fill="white"></circle></svg>',w=I(),S=g("a"),E=ve("svg"),N=ve("path"),C=ve("rect"),d(e,"rel","stylesheet"),d(e,"href","/public/css/orange.css"),d(i,"flex","center"),d(i,"class","svelte-1yqrxkf"),d(r,"class","svelte-1yqrxkf"),d(u,"href","#/"),d(u,"class","svelte-1yqrxkf"),d(h,"href","#/find"),d(h,"class","svelte-1yqrxkf"),d(p,"href","#/add"),d(p,"class","svelte-1yqrxkf"),d(D,"href","#/more"),d(D,"class","svelte-1yqrxkf"),d(N,"d","M10.3389 29.0902C10.3389 24.5576 14.0132 20.8833 18.5458 20.8833H21.2546C25.7871 20.8833 29.4615 24.5576 29.4615 29.0902C29.4615 30.4169 28.3859 31.4925 27.0592 31.4925H12.7412C11.4144 31.4925 10.3389 30.4169 10.3389 29.0902Z"),d(N,"stroke","white"),d(C,"x","15.9824"),d(C,"y","9.5"),d(C,"width","7.83523"),d(C,"height","7.83523"),d(C,"rx","3.91762"),d(C,"stroke","white"),d(C,"stroke-width","3"),d(E,"width","40"),d(E,"height","40"),d(E,"viewBox","0 0 40 40"),d(E,"fill","none"),d(E,"xmlns","http://www.w3.org/2000/svg"),d(S,"href","#/user/"+localStorage.name),d(S,"class","svelte-1yqrxkf"),d(a,"flex","between ai-c"),d(a,"class","svelte-1yqrxkf")},m(v,F){_(document.head,e),k(v,t,F),k(v,i,F),k(v,s,F),k(v,r,F),kt(o,r,null),k(v,l,F),k(v,a,F),_(a,u),_(a,c),_(a,h),_(a,f),_(a,p),_(a,m),_(a,D),_(a,w),_(a,S),_(S,E),_(E,N),_(E,C),A=!0},p:B,i(v){A||(ze(o.$$.fragment,v),A=!0)},o(v){ht(o.$$.fragment,v),A=!1},d(v){T(e),v&&T(t),v&&T(i),v&&T(s),v&&T(r),Nt(o),v&&T(l),v&&T(a)}}}function u_(n){return _a(()=>{Ou({apiKey:"AIzaSyBMsehRdFlZkPgVzD27A3_NCz-1nA4SuY8",authDomain:"test-f886d.firebaseapp.com",databaseURL:"https://test-f886d-default-rtdb.europe-west1.firebasedatabase.app",projectId:"test-f886d",storageBucket:"gs://test-f886d.appspot.com",messagingSenderId:"560596790548",appId:"1:560596790548:web:fadcd34c3ce8cbb3e42601"})}),[{"/":Af,"/user/:name":$f,"/find":kf,"/more":Lf,"/add":xf,"/login":Yf,"/edit":Jf,"/regist":l_,"*":tc}]}class c_ extends Oe{constructor(e){super(),xe(this,e,u_,a_,Te,{})}}new c_({target:document.body});
