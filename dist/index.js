!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,n=e=>"function"==typeof e&&i.has(e),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},a={},l={},d=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${d}--\x3e`,h=new RegExp(`${d}|${c}`),p="$lit$";class u{constructor(e,t){this.parts=[],this.element=t;const r=[],i=[],n=document.createTreeWalker(t.content,133,null,!1);let o=0,s=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=n.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let i=0;for(let e=0;e<r;e++)f(t[e].name,p)&&i++;for(;i-- >0;){const t=l[a],r=g.exec(t)[2],i=r.toLowerCase()+p,n=e.getAttribute(i);e.removeAttribute(i);const o=n.split(h);this.parts.push({type:"attribute",index:s,name:r,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(d)>=0){const i=e.parentNode,n=t.split(h),o=n.length-1;for(let t=0;t<o;t++){let r,o=n[t];if(""===o)r=y();else{const e=g.exec(o);null!==e&&f(e[2],p)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-p.length)+e[3]),r=document.createTextNode(o)}i.insertBefore(r,e),this.parts.push({type:"node",index:++s})}""===n[o]?(i.insertBefore(y(),e),r.push(e)):e.data=n[o],a+=o}}else if(8===e.nodeType)if(e.data===d){const t=e.parentNode;null!==e.previousSibling&&s!==o||(s++,t.insertBefore(y(),e)),o=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(r.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(d,t+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=i.pop()}for(const e of r)e.parentNode.removeChild(e)}}const f=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},m=e=>-1!==e.index,y=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let n,s=0,a=0,l=i.nextNode();for(;s<r.length;)if(n=r[s],m(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));s++}else this.__parts.push(void 0),s++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class w{constructor(e,t,r,i){this.strings=e,this.values=t,this.type=r,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let i=0;i<e;i++){const e=this.strings[i],n=e.lastIndexOf("\x3c!--");r=(n>-1||r)&&-1===e.indexOf("--\x3e",n+1);const o=g.exec(e);t+=null===o?e+(r?d:c):e.substr(0,o.index)+o[1]+o[2]+p+o[3]+d}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const b=e=>null===e||!("object"==typeof e||"function"==typeof e),k=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class _{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let i=0;i<t;i++){r+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(b(e)||!k(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||b(e)&&e===this.value||(this.value=e,n(e)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(y()),this.endNode=e.appendChild(y())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=y()),e.__insert(this.endNode=y())}insertAfterPart(e){e.__insert(this.startNode=y()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(b(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):k(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const r=new v(t,e.processor,this.options),i=r._clone();r.update(e.values),this.__commitNode(i),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,i=0;for(const n of e)void 0===(r=t[i])&&(r=new C(this.options),t.push(r),0===i?r.appendIntoPart(this):r.insertAfterPart(t[i-1])),r.setValue(n),r.commit(),i++;i<t.length&&(t.length=i,this.clear(r&&r.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class x extends _{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends S{}let T=!1;try{const e={get capture(){return T=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class A{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=O(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const O=e=>e&&(T?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D=new class{handleAttributeExpressions(e,t,r,i){const n=t[0];return"."===n?new x(e,t.slice(1),r).parts:"@"===n?[new A(e,t.slice(1),i.eventContext)]:"?"===n?[new E(e,t.slice(1),r)]:new _(e,t,r).parts}handleTextExpression(e){return new C(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function j(e){let t=N.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},N.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const i=e.strings.join(d);return void 0===(r=t.keyString.get(i))&&(r=new u(e,e.getTemplateElement()),t.keyString.set(i,r)),t.stringsArray.set(e.strings,r),r}const N=new Map,z=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const F=(e,...t)=>new w(e,t,"html",D),B=133;function V(e,t){const{element:{content:r},parts:i}=e,n=document.createTreeWalker(r,B,null,!1);let o=M(i),s=i[o],a=-1,l=0;const d=[];let c=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==s&&s.index===a;)s.index=null!==c?-1:s.index-l,s=i[o=M(i,o)]}d.forEach(e=>e.parentNode.removeChild(e))}const R=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,B,null,!1);for(;r.nextNode();)t++;return t},M=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(m(t))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const G=(e,t)=>`${e}--${t}`;let W=!0;void 0===window.ShadyCSS?W=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),W=!1);const U=e=>t=>{const r=G(t.type,e);let i=N.get(r);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},N.set(r,i));let n=i.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(d);if(void 0===(n=i.keyString.get(o))){const r=t.getTemplateElement();W&&window.ShadyCSS.prepareTemplateDom(r,e),n=new u(t,r),i.keyString.set(o,n)}return i.stringsArray.set(t.strings,n),n},I=["html","svg"],$=new Set,q=(e,t,r)=>{$.add(r);const i=e.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(t.element,r);const o=document.createElement("style");for(let e=0;e<n;e++){const t=i[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{I.forEach(t=>{const r=N.get(G(t,e));void 0!==r&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),V(e,r)})})})(r);const s=t.element.content;!function(e,t,r=null){const{element:{content:i},parts:n}=e;if(null==r)return void i.appendChild(t);const o=document.createTreeWalker(i,B,null,!1);let s=M(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===r&&(a=R(t),r.parentNode.insertBefore(t,r));-1!==s&&n[s].index===l;){if(a>0){for(;-1!==s;)n[s].index+=a,s=M(n,s);return}s=M(n,s)}}(t,o,s.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,r);const a=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)e.insertBefore(a.cloneNode(!0),e.firstChild);else{s.insertBefore(o,s.firstChild);const e=new Set;e.add(o),V(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=(e,t)=>e;const L={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},H=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:H},Y=Promise.resolve(!0),K=1,Z=4,Q=8,X=16,ee=32;class te extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const i=this._attributeNameForProperty(r,t);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){const i=this[e];this[r]=t,this._requestUpdate(e,i)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=H){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,i=t.converter||L,n="function"==typeof i?i:i.fromAttribute;return n?n(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,i=t.converter;return(i&&i.toAttribute||L.toAttribute)(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ee,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=J){const i=this.constructor,n=i._attributeNameForProperty(e,r);if(void 0!==n){const e=i._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=this._updateState|Q,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=this._updateState&~Q}}_attributeToProperty(e,t){if(this._updateState&Q)return;const r=this.constructor,i=r._attributeToPropertyMap.get(e);if(void 0!==i){const e=r._classProperties.get(i)||J;this._updateState=this._updateState|X,this[i]=r._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~X}}_requestUpdate(e,t){let r=!0;if(void 0!==e){const i=this.constructor,n=i._classProperties.get(e)||J;i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Z;const r=this._updatePromise;this._updatePromise=new Promise((r,i)=>{e=r,t=i});try{await r}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ee}get _hasRequestedUpdate(){return this._updateState&Z}get hasUpdated(){return this._updateState&K}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Z}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}te.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const re=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),ie=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}}:Object.assign({},t,{finisher(r){r.createProperty(t.key,e)}}),ne=(e,t,r)=>{t.constructor.createProperty(r,e)};function oe(e){return(t,r)=>void 0!==r?ne(e,t,r):ie(e,t)}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol();class le{constructor(e,t){if(t!==ae)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(se?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const de=(e,...t)=>{const r=t.reduce((t,r,i)=>t+(e=>{if(e instanceof le)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[i+1],e[0]);return new le(r,ae)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");const ce=e=>e.flat?e.flat(1/0):function e(t,r=[]){for(let i=0,n=t.length;i<n;i++){const n=t[i];Array.isArray(n)?e(n,r):r.push(n)}return r}(e);class he extends te{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ce(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof w&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}function pe(e){var t,r=ge(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function ue(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function fe(e){return e.decorators&&e.decorators.length}function me(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function ye(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function ge(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function ve(e,t,r){return(ve="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=we(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function we(e){return(we=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}he.finalized=!0,he.render=(e,t,r)=>{const i=r.scopeName,n=z.has(t),o=W&&11===t.nodeType&&!!t.host&&e instanceof w,a=o&&!$.has(i),l=a?document.createDocumentFragment():t;if(((e,t,r)=>{let i=z.get(t);void 0===i&&(s(t,t.firstChild),z.set(t,i=new C(Object.assign({templateFactory:j},r))),i.appendInto(t)),i.setValue(e),i.commit()})(e,l,Object.assign({templateFactory:U(i)},r)),a){const e=z.get(l);z.delete(l),e.value instanceof v&&q(l,e.value.template,i),s(t,t.firstChild),t.appendChild(l),z.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)};!function(e,t,r,i){var n=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,n)},this),e.forEach(function(e){if(!fe(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);r.push.apply(r,d)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=ge(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=ye(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=ye(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t(function(e){n.initializeInstanceElements(e,a.elements)},r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(me(o.descriptor)||me(n.descriptor)){if(fe(o)||fe(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(fe(o)){if(fe(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}ue(o,n)}else t.push(o)}return t}(s.d.map(pe)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([re("ww-intro")],function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"method",key:"connectedCallback",value:function(){ve(we(r.prototype),"connectedCallback",this).call(this),document.body.style.overflow="hidden"}},{kind:"method",key:"disconnectedCallback",value:function(){ve(we(r.prototype),"disconnectedCallback",this).call(this),document.body.style.overflow="initial"}},{kind:"get",static:!0,key:"styles",value:function(){return de`
      .intro-dialogue {
        z-index: 5;
        background: rgba(32, 32, 32, .99);
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: opacity 0.4s;
      }
      p, h1 {
        margin: 0;
      }
      h1.main {
        font-size: 4rem;
      }
      h1.pretitle {
        font-weight: 400;
      }
      p {
        font-size: 1.25rem;
      }
      button {
        font-size: 1.25rem;
        padding: 1rem;
        box-sizing: border-box;
        display: block;
        height: 4rem;
        border-radius: 2rem;
        background: transparent;
        border: 0;
        margin-top: 5rem;
        cursor: pointer;
        min-width: 8rem;
        border: white solid 2px;
        color: white;
        font-family: 'Spectral', serif;
        transition: background 0.4s, color 0.4s;
      }
      button:hover {
        background: white;
        color: #222;
      }
    `}},{kind:"method",key:"closeDialogue",value:function(){this.shadowRoot.querySelector(".intro-dialogue").style.opacity="0",setTimeout(()=>{this.parentElement.removeChild(this)},400)}},{kind:"method",key:"render",value:function(){return F`
      <div class="intro-dialogue">
        <h1 class="pretitle"><i>Timeline of</i></h1>
        <h1 class="main">Canada's Involvement in WW1</h1>
        <p><i>Adelaide, Aishwarya, Emmett, Iliad, James</i></p>
        <button @click=${()=>this.closeDialogue()}>View</button>
      </div>
    `}}]}},he);function be(e){var t,r=Ee(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function ke(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _e(e){return e.decorators&&e.decorators.length}function Se(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Ce(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function Ee(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}!function(e,t,r,i){var n=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,n)},this),e.forEach(function(e){if(!_e(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);r.push.apply(r,d)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=Ee(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=Ce(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Ce(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t(function(e){n.initializeInstanceElements(e,a.elements)},r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(Se(o.descriptor)||Se(n.descriptor)){if(_e(o)||_e(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(_e(o)){if(_e(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}ke(o,n)}else t.push(o)}return t}(s.d.map(be)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([re("ww-timeline")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[oe({type:Date})],key:"start",value:()=>new Date(1900,0,0)},{kind:"field",decorators:[oe({type:Date})],key:"end",value:()=>new Date(2e3,0,0)},{kind:"field",decorators:[oe({type:Array})],key:"items",value:()=>[]},{kind:"get",static:!0,key:"styles",value:function(){return de`
      :host {
        transition: opacity 0.6s;
        transition-delay: 0.2s;
      }
      :host([fade-out]) {
        opacity: 0;
        transition-delay: 0s;
      }
      .timeline-container {
        position: absolute;
        height: 100%;
        width: 100%;
        max-width: 2048px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .timeline-events {
        position: relative;
      }
      .timeline-event {
        position: absolute;
        display: inline;
        transform: translate(-50%);
        top: 4rem;
      }
      .timeline-event p {
        margin: -0.5rem;
        padding: 1rem;
        background: white; /* #b71c1c */
        color: #222;
        border-radius: 1rem;
        z-index: 1;
        text-align: center;
        box-shadow: 0px 3px 6px rgba(127, 127, 127, 0.5);
        transition: transform 0.2s, box-shadow 0.2s;
        max-width: 180px;
        cursor: pointer;
      }
      .timeline-event p:hover {
        transform: scale(1.3);
        box-shadow: 0px 6px 6px rgba(127, 127, 127, 0.5);
      }
      .date {
        font-size: 0.75rem;
      }
      .timeline-event::after {
        content: "";
        position: absolute;
        display: inline-block;
        height: 3.5rem;
        width: 1rem;
        top: -4rem;
        background: white;
        left: calc(50% - 0.5rem);
        z-index: -1;
      }
      .timeline-event:nth-child(2n) {
        transform: translate(-50%);
        top: auto;
        bottom: 4rem;
        z-index: 1; /* Render shadow after pseudo child of elements below on timeline */
      }
      .timeline-event:nth-child(2n)::after {
        top: auto;
        bottom: -4rem;
      }
      .timeline {
        width: 2048px;
        height: 1rem;
        background: white;
      }
      img {
        position: relative;
        display: block;
        width: 180px;
        border-radius: 1rem;
      }
      @media (max-width: 2048px) {
        .timeline-container {
          margin: 0 8rem;
        }
      }
    `}},{kind:"method",key:"render",value:function(){let e=this.start.getTime(),t=this.end.getTime()-e;return F`
      <div class="timeline-container">
        <div class="timeline-events">
          ${this.items.map(r=>{let i=(r.date.getTime()-e)/t;return F`
            <div class="timeline-event" style="left: ${2048*i}px">
              <p @click=${()=>{let e=document.createElement("ww-dialogue");e.event=r,document.body.appendChild(e)}}>
                <img src="${r.image}" width="180" /><br>
                ${r.title}<br>
                <i class="date">${r.date.getUTCFullYear()}/${r.date.getUTCMonth()+1}/${r.date.getUTCDate()}</i>
              </p>
            </div>
          `})}
          <div class="timeline"></div>
        </div>
      </div>
    `}}]}},he);function xe(e){var t,r=De(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function Pe(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Te(e){return e.decorators&&e.decorators.length}function Ae(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function Oe(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function De(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function je(e,t,r){return(je="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ne(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function Ne(e){return(Ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(i){t.forEach(function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,n)},this),e.forEach(function(e){if(!Te(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)},this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);r.push.apply(r,d)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=De(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=Oe(e,"finisher"),i=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:i}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=Oe(e,"finisher"),i=this.toElementDescriptors(e.elements);return{elements:i,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t(function(e){n.initializeInstanceElements(e,a.elements)},r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(Ae(o.descriptor)||Ae(n.descriptor)){if(Te(o)||Te(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Te(o)){if(Te(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}Pe(o,n)}else t.push(o)}return t}(s.d.map(xe)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([re("ww-dialogue")],function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[oe({type:Object})],key:"event",value:void 0},{kind:"get",static:!0,key:"styles",value:function(){return de`
      @keyframes open {
        0% {
          opacity: 0;
          transform: translateY(100%);
        }
      }
      .dialogue-box {
        box-sizing: border-box;
        background-color: #333;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        overflow-y: auto;
        overflow-x: hidden;
        animation: open 0.8s;
        transition: opacity 0.8s, transform 0.8s;
      }
      .header-img {
        position: absolute;
        width: 100%;
        height: 66%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
      }
      .header-img::after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, #333);
      }
      .content {
        width: calc(100% - 2rem);
        margin: auto;
        max-width: 720px;
        position: relative;
        top: 66%;
        font-size: 1.25rem;
      }
      .body {
        text-align: justify;
        margin-bottom: 2rem;
      }
      .title {
        font-size: 4rem;
        position: absolute;
        left: 1rem;
        bottom: 1rem;
        z-index: 2;
      }
      .close-button {
        position: fixed;
        top: 1rem;
        left: 1rem;
        box-sizing: border-box;
        height: 4rem;
        width: 4rem;
        padding: 0.5rem;
        background: #333;
        border-radius: 2rem;
        z-index: 4;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background 0.2s;
      }
      .close-button:hover {
        background: #555;
      }
      .close-button img {
        height: 100%;
      }
      .body-image {
        float: right;
        width: 33%;
        margin: 1rem;
      }
    `}},{kind:"method",key:"connectedCallback",value:function(){je(Ne(r.prototype),"connectedCallback",this).call(this),document.body.style.overflow="hidden",this.parentElement.querySelector("ww-timeline").setAttribute("fade-out",!0)}},{kind:"method",key:"disconnectedCallback",value:function(){je(Ne(r.prototype),"disconnectedCallback",this).call(this),document.body.style.overflow="initial"}},{kind:"method",key:"closeDialogue",value:function(){this.shadowRoot.querySelector(".dialogue-box").style.opacity="0",this.shadowRoot.querySelector(".dialogue-box").style.transform="translateY(100%)",this.parentElement.querySelector("ww-timeline").removeAttribute("fade-out"),setTimeout(()=>{this.parentElement.removeChild(this)},800)}},{kind:"method",key:"render",value:function(){return F`
      <style>
        .header-img {
          background: url(${this.event.image});
        }
      </style>
      <div class="dialogue-box">
        <a class="close-button" @click=${()=>this.closeDialogue()}>
          <img src="./img/close.svg" width="32" />
        </a>
        <header class="header-img">
          <h1 class="title">${this.event.title}</h1>
        </header>
        <article class="content">
          ${this.event.body_image?F`<img class="body-image" src="${this.event.body_image}" />`:""}
          <p class="body">${this.event.body}</p>
        </article>
      </div>
    `}}]}},he);const ze=document.querySelector("ww-timeline");ze.start=new Date(1914,6,28),ze.end=new Date(1918,10,11),ze.items=[{title:"Canada's Entry",date:new Date(1914,6,28),image:"./img/war.jpg",body:"At the time, Canada’s foreign affairs was handled by the british government, and so when the UK went to war, so did the rest of the British Empire, including Canada. At first, WW1 united Anglophone and Francophone Canadians, but that changed with conscription in 1917. Anglophone Canadians were generally on board with the idea, and supported fighting for the crown, but Francophones were not so happy about it. By the time conscription actually started in 1918, though, the war was almost over and only a very small number of conscripts ever made it to France. The lasting impact of conscription, however, was another divide between Anglophone and Francophone Canadians, and a feeling of betrayal in Francophone Canadians."},{title:"The Second Battle of Ypres",date:new Date(1915,3,22),image:"./img/ypres.jpg",body:"On 22 April, two Canadian brigades were in the front lines, with a third in reserve. At 5 p.m., the Germans released gas against the French 45th Division to the Canadians’ left. An enormous green-yellow gas cloud, several kilometres long, drifted towards the French lines. When it rolled over their positions, French troops suffering from their eyes and throats burning from the chlorine. Most of the gas missed the Canadians, but the French retreat had exposed the Canadian’s left flank, and potentially threatened the Allied position. General Alderson’s units shifted positions to cover the gap, but the German gas attack had torn a huge hole, several kilometres wide, in the Allied line. From 22 April to 25 April, the Canadians fought to defend this exposed position. Outnumbered, outgunned, and outflanked, on the 24th they faced a second, this time direct, chlorine gas attack. The Canadians counterattacked to stall the German advance, and then slowly gave ground, buying precious time for British troops to be rushed forward."},{title:"Battle St. Eloi Craters",date:new Date(1916,2,27),image:"./img/eloi.jpg",body_image:"./img/eloi2.jpg",body:"The battle of St. Eloi Craters was fought from March 27th to April 16th in 1916. The battle involved the Canadian Second Division, and was the first battle many young Canadian soldiers fought. The purpose of the battle was for the British and Canadians to take back Belgian land, and weaken German defences. At the time of the battle, mine warfare was crucial for victories. British forces had planted many bombs in trenches and tunnels in the fields near the Belgian town of St. Eloi. These bombs created “craters”, which were used to gain land and advance towards the enemy. Later, the “craters” became filled with water and made seeking cover in their shelter extremely difficult. On April 4th, 1916, the Canadians relieved the exhausted British soldiers  from their positions and joined the battle. The Canadians found that there was a shortage of supplies, such as helmets, defense positions and machine guns. They were also unclear about their roles and the enemy’s position. On April 6th the Germans lead a large attack on the main road, and were able to recapture all the ground they had lost in the battle. The Canadians continued to fight but were unable to make progress in regaining land. The Germans attacked Canadians with tear gas, machine guns and rifles. The battle of St. Eloi was extremely dangerous, as communication was limited and heavy rainfall made fighting much more difficult. The battle ended on April 16th 1916 with 1370 Canadian casualties, and the Germans having control over the battlefield. "},{title:"Battle Mount Sorrel",date:new Date(1916,5,2),image:"./img/sorrel.jpg",body:"The battle of Mount Sorrel went from June second to the thirteenth in 1916 and cost over 8000 casualties. The Canadian Corps held the southern part of the Ypres Salient in the summer of 1916. The Germans wanted to secure the last remaining highgrounds still in British hands and sought to divert allied resources from the large offensive that was being prepared in  the Somme region. The morning of June 2nd hundreds were killed when the Germans bombarded the third Canadian division including the division’s commander. Canadian positions were captured by German infantry on Mount Sorrel and two surrounding hills. On June 3rd Canadians failed a counterattack. Three days later the Germans blew up four mines under Canadian positions, capturing the village of Hooge. Sir Julian Byng, a Candian Corps commander, recaptured a large amount of stolen land with heavy artillery bombardment. Careful planning and concentrated artillery bombardment worked over the Germans entrenched defense. After losing the first two phases of the battle, the Canadians achieved final victory."},{title:"The Battle of the Somme",date:new Date(1916,10,18),image:"./img/somme.jpg",body:"The Somme was one of the war’s longest attritional campaigns, and remains a source of great historical controversy. Critics suggest that ineffective British commanders ordered their soldiers forward in costly and relentless attacks, giving them neither proper weapons nor effective tactics to break through the enemy trenches. Other historians suggest barely anything else could have been done at this stage in the war to achieve victory, and that the attrition of German troops along the Somme eased enough pressure from the French at Verdun to ensure the Allied front did not collapse in 1916. French demands for help forced the British to attack before they were ready. Without enough heavy artillery or shells to suppress enemy fire, the British suffered many casualties."},{title:"Vimy Ridge",date:new Date(1917,3,9),image:"./img/vimy.jpg",body:"The Battle of Vimy Ridge took place in the Nord-Pas-de-Calais region of France. Four Canadian divisions assaulted the ridge in the early morning of April 9th 1917 which was the first time all four divisions attacked together. Over 15000 Canadian infantry overran the Germans along the front. 3598 Canadians were killed and another 7000 were injured during the attack. Engineers dug tunnels from the rear to the front of the ridge to bring men forward safely for the attack. The infantry was able to keep moving forward under heavy fire and even when officers died due to the bravery of the men and a well strategized plan. The infantry was given specialist roles like machine gunners, rifle men and grenade throwers which helped provide a strong battlefront. The battle lasted three days, many lives were lost, but Canada came out victorious. The capture of Vimy was a great achievement, Canada also fought as a united front for the first time which was a huge step forward. "},{title:"Battle of Hill 70",date:new Date(1917,7,15),image:"./img/hill70.jpg",body_image:"./img/map.jpg",body:"The Battle of Hill 70 took place from August 15th to the 25th in 1917 near the city of Lens. The battle was an attack on the German-controlled town of Lens by the Britsh and Canadians. The goal of the attack was to eliminate the German stronghold in Lens and to weaken their overall defences. The battle was started when Douglas Haig (a senior Britsh officer), ordered Arthur Currie (young commander of the Canadian Corps) to launch an assault on Lens in France. Currie felt that directly attacking the city would cause many casualties, as the German defences on the  city were quite strong. Currie decided to capture the high ground north of the city as a way to orchestrate surprise attacks and set up Candian defences near the city. On August 21 and 23 the Canadians began to move towards the city, and the Germans launched 21 counter attacks to take back the hill. The battle that took place was brutal, as poison gas was used against the Canadians. 9,200 Canadians were lost in battle, and 25,000 German soldiers were killed. The Canadians did not completely achieve their goal of depleting German power in Lens, but the battle was a crucial point for the Canadian military. The hill the Canadians claimed was later named Hill 70, because it rose 70 meters above sea level."},{title:"Battle of Passchendaele",date:new Date(1917,10,10),image:"./img/passchendaele.jpeg",body:"The Battle of Passchendaele was fought during the First World War from July 31 to November 10  1917. The battle took place on the Ypres salient located on the western front of Belgium. German and Allied armies had been deadlocked at Ypres for three years. On July 31, the British began a new offensive, attempting to break through German lines by capturing a ridge near the ruined village of Passchendaele. After British, Australian and New Zealand troops launched failed assaults, the Canadian Corps which consisted of roughly 100,000 members  joined the battle on October 26. On November 6 the Canadians successfully captured the ridge, despite heavy rain and shelling that turned the battlefield into a quagmire. Nearly 16,000 Canadians were killed or wounded during the confrontation. The Battle of Passchendaele did nothing to help the Allied effort and became a symbol of the senseless slaughter of the First World War."},{title:"Defense of the German Offensives",date:new Date(1918,2,21),image:"./img/spring.jpg",body:"On 21 March 1918, the German offensive began. Lead by specially trained german ‘storm troopers’, they used heavy gas and artillery to penetrate the allied lines. The attack devastated two British armies and thousands of stunned Allied troops. The attack later hit Belgian, British, French, and American forces at strategic points from the English Channel to the Marne River, east of Paris. The Canadians were not directly affected, but many divisions of troops were pulled away temporarily to plug holes in the Allied line. The 2nd Division fought with British units for several months. The Canadian Motor Machine Gun Brigade, commanded by Brigadier-General Raymond Brutinel, fought along the British front offering important fire support from its armoured cars. The Canadian Cavalry Brigade also fought to slow the German advance. In one fierce action, Lieutenant Gordon Flowerdew was awarded the Victoria Cross. The German offensives of 1918 failed to defeat the Allied armies in the West. Germany’s own loss of 800,000 killed, or wounded from March to July exhausted its manpower reserves. It caused suffering casualties to its elite ‘storm troopers’ and assault divisions. The Canadian Corps escaped from the Germans’ offensive, but Sir Douglas Haig would lead a strategic counterattack. This offensive, launched in August against German forces badly weakened by the spring fighting, would be called the Hundred Days campaign."},{title:"More Independent Canada",date:new Date(1918,10,11),image:"./img/victory.jpg",body:"Post-World War 1, Canada felt a great sense of pride for all that it did during the war, especially during Vimy Ridge, but also deep sorrow for the people who were lost. This confidence, combined with the sorrow, and a new prime minister, William Lyon Mackenzie King, caused Canada to do something unprecedented: Say no to Britain. Before and during WW1, Canada would always do exactly as told by the British Government, but starting with the Chanak Affair in 1922, Canada refused to enter battle with the British Government. Prime Minister King insisted it should be up to the Canadian Parliament, not the British Parliament, when Canada enters battle. The Canadian Parliament agreed. From then on, including World War 2, Canada has had the ability to decide for itself when to enter battle. Without Canada’s newfound confidence and sorrow from their contributions in WW1, this important independence may not have happened for a while longer."}]}]);