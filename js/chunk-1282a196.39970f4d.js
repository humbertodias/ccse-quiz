(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1282a196"],{"0790":function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return s});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function o(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,a)}u((r=r.apply(e,t||[])).next())})}function s(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}},"140b":function(e,t,n){"use strict";n.r(t),n.d(t,"IonNav",function(){return v}),n.d(t,"IonNavPop",function(){return m}),n.d(t,"IonNavPush",function(){return g}),n.d(t,"IonNavSetRoot",function(){return b});var r=n("0790"),i=n("7018"),o=(n("26f2"),n("8d3d")),s=n("6b0b"),a=n("e9b2"),u=1,c=2,l=3,d=function(){function e(e,t){this.component=e,this.params=t,this.state=u}return e.prototype.init=function(e){return r["a"](this,void 0,void 0,function(){var t;return r["c"](this,function(n){switch(n.label){case 0:return this.state=c,this.element?[3,2]:(t=this,[4,Object(o["a"])(this.delegate,e,this.component,["ion-page","ion-page-invisible"],this.params)]);case 1:t.element=n.sent(),n.label=2;case 2:return[2]}})})},e.prototype._destroy=function(){var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=l},e}();function h(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var r=e.params;if(r===n)return!0;if(!r&&!n)return!0;if(!r||!n)return!1;var i=Object.keys(r),o=Object.keys(n);if(i.length!==o.length)return!1;for(var s=0,a=i;s<a.length;s++){var u=a[s];if(r[u]!==n[u])return!1}return!0}function p(e,t){return e?e instanceof d?e:new d(e,t):null}function f(e){return e.map(function(e){return e instanceof d?e:"page"in e?p(e.page,e.params):p(e,void 0)}).filter(function(e){return null!==e})}var v=function(){function e(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return r["a"](this,void 0,void 0,function(){var e;return r["c"](this,function(t){switch(t.label){case 0:return this.rootChanged(),e=this,[4,n.e("chunk-3f819a4b").then(n.bind(null,"6f88"))];case 1:return e.gesture=t.sent().createSwipeBackGesture(this.el,this.queue,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}})})},e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(a["b"])(n.element,s["e"]),n._destroy()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0},e.prototype.push=function(e,t,n,r){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},r)},e.prototype.insert=function(e,t,n,r,i){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:r},i)},e.prototype.insertPages=function(e,t,n,r){return this.queueTrns({insertStart:e,insertViews:t,opts:n},r)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var r={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(r.removeView=e,r.removeStart=1):"number"==typeof e&&(r.removeStart=e+1),this.queueTrns(r,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,r){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},r)},e.prototype.setRoot=function(e,t,n,r){return this.setPages([{page:e,params:t}],n,r)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var i,o=this,s=this.getActiveSync();if(h(s,e,t))return Promise.resolve({changed:!1,element:s.element});var a,u=new Promise(function(e){return i=e}),c={updateURL:!1,viewIsReady:function(e){var t,n=new Promise(function(e){return t=e});return i({changed:!0,element:e,markVisible:function(){return r["a"](o,void 0,void 0,function(){return r["c"](this,function(e){switch(e.label){case 0:return t(),[4,a];case 1:return e.sent(),[2]}})})}}),n}};if("root"===n)a=this.setRoot(e,t,c);else{var l=this.views.find(function(n){return h(n,e,t)});l?a=this.popTo(l,Object.assign({},c,{direction:"back"})):"forward"===n?a=this.push(e,t,c):"back"===n&&(a=this.setRoot(e,t,Object.assign({},c,{direction:"back",animated:!0})))}return u},e.prototype.getRouteId=function(){return r["a"](this,void 0,void 0,function(){var e;return r["c"](this,function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]})})},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=this.win.document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return r["a"](this,void 0,void 0,function(){var t,n,i,o;return r["c"](this,function(r){switch(r.label){case 0:if(r.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&n.state===u?[4,n.init(this.el)]:[3,2];case 1:r.sent(),r.label=2;case 2:return this.postViewInit(n,t,e),(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t?[4,this.transition(n,t,e)]:[3,4];case 3:return i=r.sent(),[3,5];case 4:i={hasCompleted:!0,requiresTransition:!1},r.label=5;case 5:return this.success(i,e),this.ionNavDidChange.emit(),[3,7];case 6:return o=r.sent(),this.failed(o,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var r=e.insertViews;if(r){var i=f(r);if(0===i.length)throw new Error("invalid views to insert");for(var o=0,s=i;o<s.length;o++){var a=s[o];a.delegate=e.opts.delegate;var u=a.nav;if(u&&u!==this)throw new Error("inserted view was already inserted");if(a.state===l)throw new Error("inserted view was already destroyed")}e.insertViews=i}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var r=e.removeStart;if(void 0!==r)for(var i=this.views,o=r+e.removeCount,s=i.length-1;s>=0;s--){var a=i[s];if((s<r||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){var r,i=n.opts,o=n.insertViews,u=n.removeStart,c=n.removeCount;if(void 0!==u&&void 0!==c){r=[];for(var l=0;l<c;l++)(b=this.views[l+u])&&b!==e&&b!==t&&r.push(b);i.direction=i.direction||"back"}if(0===this.views.length+(void 0!==o?o.length:0)-(void 0!==c?c:0))throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){for(var d=n.insertStart,h=0,p=o;h<p.length;h++)this.insertViewAt(b=p[h],d),d++;n.enteringRequiresTransition&&(i.direction=i.direction||"forward")}if(r&&r.length>0){for(var f=0,v=r;f<v.length;f++)Object(a["b"])((b=v[f]).element,s["a"]),Object(a["b"])(b.element,s["d"]),Object(a["b"])(b.element,s["e"]);for(var m=0,g=r;m<g.length;m++){var b;this.destroyView(b=g[m])}}},e.prototype.transition=function(e,t,n){return r["a"](this,void 0,void 0,function(){var i,o,s,u,c,l,d=this;return r["c"](this,function(r){switch(r.label){case 0:return o=(i=n.opts).progressAnimation?function(e){return d.sbAni=e}:void 0,s=e.element,u=t&&t.element,c=Object.assign({mode:this.mode,showGoBack:this.canGoBackSync(e),queue:this.queue,window:this.win,baseEl:this.el,animationBuilder:this.animation||i.animationBuilder||this.config.get("navAnimation"),progressCallback:o,animated:this.animated&&this.config.getBoolean("animated",!0),enteringEl:s,leavingEl:u},i),[4,Object(a["c"])(c)];case 1:return l=r.sent().hasCompleted,[2,this.transitionFinish(l,e,t,i)]}})})},e.prototype.transitionFinish=function(e,t,n,r){var i=e?t:n;return i&&this.cleanup(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:r.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,r=n.indexOf(e);r>-1?n.splice(t,0,n.splice(r,1)[0]):(e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){var t=this.views,n=t.indexOf(e);n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),r=t.length-1;r>=0;r--){var i=t[r],o=i.element;r>n?(Object(a["b"])(o,s["e"]),this.destroyView(i)):r<n&&Object(a["d"])(o,!0)}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()},e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},e.prototype.onEnd=function(e,t,n){this.sbAni&&this.sbAni.progressEnd(e,t,n)},e.prototype.render=function(){return Object(i["b"])("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!1,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-nav-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),e}(),m=function(){function e(){}return e.prototype.pop=function(){var e=this.el.closest("ion-nav");e&&e.pop({skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-pop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"pop"}]},enumerable:!0,configurable:!0}),e}(),g=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.push(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-push"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}(),b=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.setRoot(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-set-root"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}()},"26f2":function(e,t,n){"use strict";function r(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)}function i(e){return!!e.shadowRoot&&!!e.attachShadow}function o(e){var t=e.closest("ion-item");return t?t.querySelector("ion-label"):null}function s(e,t,n,r,o){if(e||i(t)){var s=t.querySelector("input.aux-input");s||((s=t.ownerDocument.createElement("input")).type="hidden",s.classList.add("aux-input"),t.appendChild(s)),s.disabled=o,s.name=n,s.value=r||""}}function a(e,t,n){return Math.max(e,Math.min(t,n))}function u(e){return e.timeStamp||Date.now()}function c(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}}function l(e,t){var n="rtl"===e.document.dir;switch(t){case"start":return n;case"end":return!n;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(e,t){var n=e._original||e;return{_original:e,emit:h(n.emit.bind(n),t)}}function h(e,t){var n;return void 0===t&&(t=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout.apply(void 0,[e,t].concat(r))}}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return s}),n.d(t,"f",function(){return d}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return a}),n.d(t,"i",function(){return h}),n.d(t,"j",function(){return c})},"8d3d":function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var r=n("0790");function i(e,t,n,i,o){return r["a"](this,void 0,void 0,function(){var s;return r["c"](this,function(r){switch(r.label){case 0:if(e)return[2,e.attachViewToDom(t,n,o,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,i&&i.forEach(function(e){return s.classList.add(e)}),o&&Object.assign(s,o),t.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,s]}})})}function o(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},e9b2:function(e,t,n){"use strict";n.d(t,"a",function(){return S}),n.d(t,"b",function(){return y}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return k});var r=n("0790"),i=n("6b0b"),o=function(){return n.e("chunk-2d213698").then(n.bind(null,"ad21"))},s=function(){return n.e("chunk-2d0b9a61").then(n.bind(null,"349c"))};function a(e){return new Promise(function(t,n){e.queue.write(function(){u(e),c(e).then(function(n){n.animation&&n.animation.destroy(),l(e),t(n)},function(t){l(e),n(t)})})})}function u(e){var t=e.enteringEl,n=e.leavingEl;P(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),k(t,!1),n&&k(n,!1)}function c(e){return r["a"](this,void 0,void 0,function(){var t;return r["c"](this,function(n){switch(n.label){case 0:return[4,d(e)];case 1:return[2,(t=n.sent())?h(t,e):p(e)]}})})}function l(e){var t=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")}function d(e){return r["a"](this,void 0,void 0,function(){var t;return r["c"](this,function(n){switch(n.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,o()]:[2,void 0];case 1:return t=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,s()];case 3:t=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,t]}})})}function h(e,t){return r["a"](this,void 0,void 0,function(){var i;return r["c"](this,function(r){switch(r.label){case 0:return[4,f(t,!0)];case 1:return r.sent(),[4,n.e("chunk-2d0bd9a3").then(n.bind(null,"2d61")).then(function(n){return n.create(e,t.baseEl,t)})];case 2:return i=r.sent(),g(t.enteringEl,t.leavingEl),[4,m(i,t)];case 3:return r.sent(),t.progressCallback&&t.progressCallback(void 0),i.hasCompleted&&b(t.enteringEl,t.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function p(e){return r["a"](this,void 0,void 0,function(){var t,n;return r["c"](this,function(r){switch(r.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,f(e,!1)];case 1:return r.sent(),g(t,n),b(t,n),[2,{hasCompleted:!0}]}})})}function f(e,t){return r["a"](this,void 0,void 0,function(){var n;return r["c"](this,function(r){switch(r.label){case 0:return n=(void 0!==e.deepWait?e.deepWait:t)?[S(e.enteringEl),S(e.leavingEl)]:[w(e.enteringEl),w(e.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,v(e.viewIsReady,e.enteringEl)];case 2:return r.sent(),[2]}})})}function v(e,t){return r["a"](this,void 0,void 0,function(){return r["c"](this,function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function m(e,t){var n=t.progressCallback,r=new Promise(function(t){return e.onFinish(t)});return n?(e.progressStart(),n(e)):e.play(),r}function g(e,t){y(t,i["a"]),y(e,i["b"])}function b(e,t){y(e,i["c"]),y(t,i["d"])}function y(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}}function w(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function S(e){return r["a"](this,void 0,void 0,function(){var t;return r["c"](this,function(n){switch(n.label){case 0:return(t=e)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(S))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}function k(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}function P(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")}}}]);
//# sourceMappingURL=chunk-1282a196.39970f4d.js.map