(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(t,n,e){"use strict";e(23);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(c){var i=r();return function(){var t,n,e,r,o=l(c);return n=i?(t=l(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),e=this,!(r=n)||"object"!==u(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}}function a(t){var r="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return o(t,arguments,l(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,t)})(t)}function o(t,n,e){return(o=r()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(o,a(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <div class="lds-roller">\n            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>\n        </div>'}}])&&c(t.prototype,n),e&&c(t,e),o}();customElements.define("loading-indicator",s)},,,,function(t,n,e){"use strict";function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return fetch(t,{method:"get",mode:"cors",headers:{Authorization:"token 53d2436fb9b92aad41f61ca9800acbff2066a4ca"}})}var i="https://api.github.com/users/luthfi11",r=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,r;return n=t,r=[{key:"getUser",value:function(){return c(i).then(function(t){return t.json()}).then(function(t){if(t)return Promise.resolve(t)})}},{key:"getAllRepository",value:function(){return c("".concat(i,"/repos")).then(function(t){return t.json()}).then(function(t){if(t)return Promise.resolve(t)})}}],(e=null)&&o(n.prototype,e),r&&o(n,r),t}();n.a=r},,,,,function(t,n){function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(c){var i=r();return function(){var t,n,e,r,o=l(c);return n=i?(t=l(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),e=this,!(r=n)||"object"!==u(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}}function a(t){var r="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return o(t,arguments,l(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,t)})(t)}function o(t,n,e){return(o=r()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(o,a(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <div class="jumbotron">\n        <img class="lazyload user-pict" data-src="./images/user.png" alt="Luthfi"/>\n        <h1 class="jumbotron-title"><b>LUTHFI</b> ALFARISI</h1>\n        <h2 class="jumbotron-subtitle">Google Certified Associate Android Developer</h2>\n        <b>Bandung, West Java, Indonesia</b>\n        <br><br><br>\n        <a href="mailto:luthfialfarizi98@gmail.com" class="mail-button">Contact Me</a>\n        \n        <ul>\n           <li>\n            <a href="https://www.linkedin.com/in/luthfi-alfarisi/" target="_blank" rel="noopener">\n                <img src="./images/icon/linkedin.png" alt="Linkedin">\n            </a>\n           </li>\n           <li>\n            <a href="https://www.github.com/luthfi11" target="_blank" rel="noopener">\n                <img src="./images/icon/github.svg" alt="Github">\n            </a>\n           </li>\n           <li>\n            <a href="https://www.medium.com/@luthfi11" target="_blank" rel="noopener">\n                <img src="./images/icon/medium.webp" alt="Medium">\n            </a>\n           </li>\n        </ul>\n    </div>',document.querySelector(".jumbotron").style.backgroundImage="linear-gradient(to bottom, rgba(0, 0, 0, 0.75), #111111), url('./images/cover.jpg')"}}])&&c(t.prototype,n),e&&c(t,e),o}();customElements.define("header-cover",e)},,,,,,,,function(t,n){function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(c){var i=r();return function(){var t,n,e,r,o=l(c);return n=i?(t=l(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),e=this,!(r=n)||"object"!==u(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}}function a(t){var r="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return o(t,arguments,l(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,t)})(t)}function o(t,n,e){return(o=r()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(o,a(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var n="";this._education.forEach(function(t){n+='<div class="box box-edu" style="padding: 12px">\n                            <img class="lazyload edu" data-src="'.concat(t.logo,'" alt="').concat(t.name,'" />\n                            <p>\n                                <b>').concat(t.name,"</b><br><br>\n                                ").concat(t.major," - ").concat(t.degree,"<br>\n                                <small>").concat(t.period,"</small>\n                            </p>\n                           </div>")}),this.innerHTML=n}},{key:"education",set:function(t){this._education=t}}])&&c(t.prototype,n),e&&c(t,e),o}();customElements.define("education-section",e)},function(t,n){function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(c){var i=r();return function(){var t,n,e,r,o=l(c);return n=i?(t=l(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),e=this,!(r=n)||"object"!==u(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}}function a(t){var r="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return o(t,arguments,l(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,t)})(t)}function o(t,n,e){return(o=r()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(o,a(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var n="";this._education.forEach(function(t){n+='<div class="box box-edu" style="padding: 12px">\n                            <img class="lazyload circle-img" data-src="'.concat(t.logo,'" alt="').concat(t.name,'"/>\n                            <p>\n                                <b>').concat(t.name,"</b><br><br>\n                                ").concat(t.course,"<br>\n                                <small>").concat(t.period,"</small>\n                            </p>\n                           </div>")}),this.innerHTML=n}},{key:"education",set:function(t){this._education=t}}])&&c(t.prototype,n),e&&c(t,e),o}();customElements.define("oeducation-section",e)},function(t,n){function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(c){var i=r();return function(){var t,n,e,r,o=l(c);return n=i?(t=l(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),e=this,!(r=n)||"object"!==u(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}}function a(t){var r="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return o(t,arguments,l(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,t)})(t)}function o(t,n,e){return(o=r()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(o,a(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var n="";this._experience.forEach(function(t){n+='<div class="box box-exp">\n                            <div class="logo-bg"><img class="lazyload img-exp" data-src="'.concat(t.logo,'" alt="').concat(t.company,'"/></div>\n                            <p>\n                                <b>').concat(t.position,"</b><br>\n                                ").concat(t.company,"<br>\n                                <small>").concat(t.period,"<br><br>\n                                ").concat(t.job_description,"</small>\n                            </p>\n                            </div>")}),this.innerHTML=n}},{key:"experience",set:function(t){this._experience=t}}])&&c(t.prototype,n),e&&c(t,e),o}();customElements.define("experience-section",e)},,,function(t,n){function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(c){var i=r();return function(){var t,n,e,r,o=l(c);return n=i?(t=l(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),e=this,!(r=n)||"object"!==u(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}}function a(t){var r="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return o(t,arguments,l(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,t)})(t)}function o(t,n,e){return(o=r()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(o,a(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var e="";this._skills.forEach(function(t){var n="";t.list.forEach(function(t){n+="<li>".concat(t,"</li>")}),e+='<div class="horizontal-box">\n                            <div class="box-cover">\n                                <img class="lazyload" data-src="'.concat(t.icon,'" alt="').concat(t.name,'" />\n                                <b>').concat(t.name,'</b>\n                            </div>\n                            <div class="content">\n                                <ul>\n                                    ').concat(n,"\n                                </ul>\n                            </div>\n                           </div>")}),this.innerHTML=e}},{key:"skills",set:function(t){this._skills=t}}])&&c(t.prototype,n),e&&c(t,e),o}();customElements.define("skills-section",e)},function(t,n){function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(c){var i=r();return function(){var t,n,e,r,o=l(c);return n=i?(t=l(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),e=this,!(r=n)||"object"!==u(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}}function a(t){var r="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return o(t,arguments,l(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,t)})(t)}function o(t,n,e){return(o=r()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(o,a(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var n="";this._certificates.forEach(function(t){n+='<a href="'.concat(t.link,'" rel="noopener" target="_blank">\n                            <div class="panel">\n                                <div class="panel-header"><b>').concat(t.course,'</b></div> \n                                <div class="panel-body"><img class="lazyload" data-src="').concat(t.icon,'" alt="').concat(t.publisher,'">').concat(t.publisher,"<br><small>").concat(t.time,"</small></div>\n                             </div></a>")}),this.innerHTML=n}},{key:"certificates",set:function(t){this._certificates=t}}])&&c(t.prototype,n),e&&c(t,e),o}();customElements.define("certificate-section",e)},function(t,n){function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(c){var i=r();return function(){var t,n,e,r,o=l(c);return n=i?(t=l(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),e=this,!(r=n)||"object"!==u(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}}function a(t){var r="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return o(t,arguments,l(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,t)})(t)}function o(t,n,e){return(o=r()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var e=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(o,a(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var n="";this._achievements.forEach(function(t){n+='<a href="'.concat(t.link,'" target="_blank" rel="noopener"><div class="box">\n                                <img class="lazyload" data-src="').concat(t.image,'" alt="').concat(t.event,'" />\n                                <div class="body">\n                                    <b>').concat(t.rank,"</b><br><br>\n                                    ").concat(t.event,"<br>\n                                    <small>").concat(t.time,"</small><br><br>\n                                    ").concat(t.description,"\n                                </div>\n                             </div></a>")}),this.innerHTML=n}},{key:"achievements",set:function(t){this._achievements=t}}])&&c(t.prototype,n),e&&c(t,e),o}();customElements.define("achievement-section",e)},function(t,n,e){"use strict";e(29);var u=e(10);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(c){var i=r();return function(){var t,n,e,r,o=s(c);return n=i?(t=s(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),e=this,!(r=n)||"object"!==a(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}}function f(t){var r="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return o(t,arguments,s(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l(e,t)})(t)}function o(t,n,e){return(o=r()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,f(HTMLElement));var t,n,e,r=i(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var r="",o=[],c=[],i=[];this._portfolios.forEach(function(n){var t="";void 0!==n.playstore&&(t='<a href="'.concat(n.playstore,'" class="detail-link" rel="noopener" target="_blank">\n                            <img class="lazyload mini-icon" data-src="/images/icon/playstore.png" alt="Playstore"/>\n                         </a>'));var e="";n.screenshot.forEach(function(t){e+='<img class="lazyload" data-src="'.concat(t,'" alt="').concat(n.app_name,'" />')}),r+='<div class="box-flat">\n                                <b>'.concat(n.app_name," (").concat(n.year,')</b><br><br>\n                                <div class="ellipse">').concat(n.description,'</div> \n                                <div class="column-2">\n                                    <button class="detail-link bordered" id="btn-').concat(n.app_name,'">See Details</button>\n                                    ').concat(t,'\n                                </div> \n                           </div>\n\n                            <div id="modal-').concat(n.app_name,'" class="modal">\n                              <div class="modal-content">\n                                <span id="close-').concat(n.app_name,'" class="close">x</span>\n                                <div class="modal-title">').concat(n.app_name,"</div>\n                                <p>Release Year : ").concat(n.year,"<br><br>").concat(n.description,'</p>\n                                <div style="text-align: center">\n                                    ').concat(t,'<br>\n                                    <a href="').concat(n.github,'" class="detail-link bordered" target="_blank" rel="noopener" style="margin-top: 8px; font-size: 14px">\n                                        View Code on Github\n                                    </a>\n                                </div> \n                                <div class="scroll-image">\n                                    ').concat(e,"\n                                </div>\n                              </div>\n                            </div>"),o.push("modal-".concat(n.app_name)),c.push("btn-".concat(n.app_name)),i.push("close-".concat(n.app_name))}),this.innerHTML=r;for(var t=0;t<o.length;t++)Object(u.a)(o[t],c[t],i[t])}},{key:"portfolios",set:function(t){this._portfolios=t}}])&&c(t.prototype,n),e&&c(t,e),o}();customElements.define("portfolio-section",p)},,,function(t,n,e){"use strict";e.r(n);e(11),e(12);var c=e(4);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(c){var i=r();return function(){var t,n,e,r,o=s(c);return n=i?(t=s(this).constructor,Reflect.construct(o,arguments,t)):o.apply(this,arguments),e=this,!(r=n)||"object"!==u(r)&&"function"!=typeof r?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}}function f(t){var r="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return o(t,arguments,s(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l(e,t)})(t)}function o(t,n,e){return(o=r()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,f(HTMLElement));var t,n,e,r=a(o);function o(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return t=o,(n=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var e=this;switch(this.innerHTML='\n        <nav id="drawer">\n            <ul>\n                <li><a href="#/profile" id="tab-profile">Profile</a></li>\n                <li><a href="#/portfolio" id="tab-portfolio">Portfolio</a></li>\n                <li><a href="#/skills" id="tab-skills">Skills & Certificate</a></li>\n                <li><a href="#/achievement" id="tab-achievement">Achievement</a></li>\n            </ul>\n        </nav>\n        <button id="hamburger">☰</button>',c.a.parseActiveUrlWithCombiner()){case"/profile":this.querySelector("#tab-profile").classList.add("active");break;case"/portfolio":this.querySelector("#tab-portfolio").classList.add("active");break;case"/skills":this.querySelector("#tab-skills").classList.add("active");break;case"/achievement":this.querySelector("#tab-achievement").classList.add("active");break;default:this.querySelector("#tab-profile").classList.add("active")}this.querySelectorAll("nav li a").forEach(function(t){t.addEventListener("click",function(t){var n=e.querySelectorAll(".active");0<n.length&&n[0].classList.remove("active"),t.target.classList.add("active")})})}}])&&i(t.prototype,n),e&&i(t,e),o}();customElements.define("app-bar",p);e(13),e(14),e(16),e(18),e(6),e(19);var y=e(9),b=e(8);function d(t,n,e,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void e(t)}u.done?n(a):Promise.resolve(a).then(r,o)}function h(u){return function(){var t=this,i=arguments;return new Promise(function(n,e){var r=u.apply(t,i);function o(t){d(r,n,e,o,c,"next",t)}function c(t){d(r,n,e,o,c,"throw",t)}o(void 0)})}}document.addEventListener("DOMContentLoaded",h(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Object(y.a)(),t.next=3,b.a.renderPage();case 3:case"end":return t.stop()}},t)}))),window.addEventListener("hashchange",h(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.renderPage();case 2:case"end":return t.stop()}},t)})))}]]);