!function(p){function n(n){for(var r,o,i=n[0],e=n[1],t=n[2],a=0,d=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(g,o)&&g[o]&&d.push(g[o][0]),g[o]=0;for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(p[r]=e[r]);for(b&&b(n);d.length;)d.shift()();return x.push.apply(x,t||[]),l()}function l(){for(var n,r=0;r<x.length;r++){for(var o=x[r],i=!0,e=1;e<o.length;e++){var t=o[e];0!==g[t]&&(i=!1)}i&&(x.splice(r--,1),n=a(a.s=o[0]))}return n}var o={},g={3:0},x=[];function a(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return p[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=p,a.c=o,a.d=function(n,r,o){a.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:o})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(r,n){if(1&n&&(r=a(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var i in r)a.d(o,i,function(n){return r[n]}.bind(null,i));return o},a.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(r,"a",r),r},a.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},a.p="";var r=window.webpackJsonp=window.webpackJsonp||[],i=r.push.bind(r);r.push=n,r=r.slice();for(var e=0;e<r.length;e++)n(r[e]);var b=i;x.push([31,4,2,0,1]),l()}([,,,,,,,,,,,,,,function(n,r,o){var i=o(1),e=o(15);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.i,e,""]]);var t={insert:"head",singleton:!1};i(e,t);n.exports=e.locals||{}},function(n,r,o){(r=o(2)(!1)).push([n.i,"* {\n    box-sizing: border-box;\n}\n\nhtml, body, main {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    background: #111111;\n    color: white;\n}\n\nmain {\n    margin-top: 65px;\n}\n\nmain h1, main h2, main h3 {\n    text-align: center;\n    margin-top: 40px;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    font-family: \"Segoe UI Light\", sans-serif;\n    display: block;\n}\n\na {\n    text-decoration: none;\n}\n\nsmall {\n    color: #CCC;\n}\n\nimg {\n    display: block;\n}\n\nnav {\n    width: 100%;\n    padding-top: 0;\n    margin-top: 0;\n    margin-bottom: 34px;\n    position: relative;\n    text-align: center;\n}\n\nnav ul {\n    list-style-type: none;\n    padding: 0;\n}\n\nnav li {\n    padding: 24px 0;\n    margin: 16px 0 0;\n    text-align: left;\n}\n\nnav li:hover {\n    background: darkblue;\n    border-radius: 0;\n}\n\nnav .active {\n    border-bottom: 2px dodgerblue solid;\n}\n\nnav a {\n    text-decoration: none;\n    font-size: 20px;\n    color: white;\n    padding: 15px 20px;\n}\n\napp-bar {\n    background: #222;\n    width: 100%;\n    display: block;\n    padding-bottom: 12px;\n    padding-top: 10px;\n}\n\n.main-title {\n    text-decoration: none;\n    font-weight: bold;\n    color: black;\n    position: absolute;\n    top: 10px;\n    right: 15px;\n    font-size: 26px;\n}\n\n.jumbotron {\n    width: 100%;\n    height: 680px;\n    text-align: center;\n    background-repeat: no-repeat;\n    background-position: left;\n    background-size: cover;\n    padding-top: 100px;\n}\n\n.jumbotron img.user-pict {\n    width: 150px;\n    height: 150px;\n    margin: 0 auto 4px;\n    border: 2px solid #333333;\n    border-radius: 50%;\n}\n\n.jumbotron-title {\n    font-size: 50px;\n    line-height: 1;\n    margin: 10px 0 20px 0;\n    font-weight: 100;\n    letter-spacing: 0;\n}\n\n.jumbotron b {\n    color: darkgrey;\n}\n\n.jumbotron-title b {\n    font-family: \"Segoe UI\", sans-serif;\n    color: dodgerblue;\n}\n\n.jumbotron-subtitle {\n    font-size: 16px;\n    margin: 0 0 4px;\n    letter-spacing: 1px;\n}\n\n.jumbotron ul {\n    list-style-type: none;\n    padding-left: 0;\n    display: block;\n}\n\n.jumbotron li {\n    display: inline-block;\n    margin: 30px 16px 16px;\n    border: 2px #FFF solid;\n    border-radius: 50%;\n}\n\n.jumbotron li:hover {\n    border-color: dodgerblue;\n}\n\n.jumbotron li img:hover {\n    background: dodgerblue;\n}\n\n.jumbotron li img {\n    width: 50px;\n    background: white;\n    border-radius: 50%;\n}\n\n.mail-button {\n    text-decoration: none;\n    padding: 16px 60px;\n    background: dodgerblue;\n    border-radius: 25px;\n    color: #FFFFFF;\n    margin-top: 10px;\n    font-weight: 800;\n}\n\n.mail-button:hover {\n    background: darkblue;\n}\n\n.circle-img {\n    border-radius: 6px;\n}\n\n.circle-img-always {\n    border-radius: 50%;\n}\n\n.sticky {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    padding-top: 10px;\n    padding-bottom: 12px;\n    background: #222;\n    z-index: 1;\n}\n\n.sticky + main {\n    margin-top: 100px;\n}\n\n.wrapper {\n    margin: 20px 5%;\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n}\n\n.box {\n    border-radius: 6px;\n    background: #333;\n    margin: 10px;\n}\n\n.box img {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    display: block;\n}\n\n.box p {\n    padding: 12px;\n    text-align: center;\n}\n\n.box .logo-bg {\n    background: yellow;\n    border-bottom-left-radius: 0;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n    height: 250px;\n    width: 100%;\n}\n\n.box .edu {\n    width: 50%;\n    height: auto;\n    margin: 0 auto;\n}\n\n.box .img-exp {\n    margin-left: 0;\n    height: 100%;\n    border-radius: 6px 6px 0 0;\n}\n\n.horizontal-box {\n    border-radius: 6px;\n    background: #333;\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr 1.3fr;\n}\n\n.horizontal-box img {\n    width: 100px;\n    height: 100px;\n    margin: 10px auto 0;\n    object-fit: contain;\n    display: block;\n}\n\n.horizontal-box .content {\n    padding: 10px;\n}\n\n.horizontal-box .content ul {\n    list-style: square;\n}\n\n.horizontal-box .content ul li:before {\n    content: '';\n}\n\n.box-cover {\n    background: black;\n    width: 100%;\n    border-top-right-radius: 6px;\n    border-top-left-radius: 6px;\n    border: 1px #333 solid;\n    text-align: center;\n    font-size: 18px;\n    padding-bottom: 16px;\n}\n\n.panel {\n    border-radius: 6px;\n    background: #333;\n    margin: 10px;\n    text-align: center;\n    color: #FFFFFF;\n}\n\n.panel:hover {\n    background: #444;\n}\n\n.panel-header {\n    background: #000;\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n    border-bottom: 1px #222 solid;\n    padding: 12px;\n}\n\n.panel-body {\n    padding: 12px;\n    text-align: right;\n}\n\n.panel-body img {\n    width: 45px;\n    float: left;\n    border-radius: 50%;\n}\n\n.highlight {\n    text-align: center;\n    margin-bottom: 50px;\n}\n\n.highlight-link {\n    color: #FFFFFF;\n    font-weight: 700;\n    font-size: 14px;\n    background: dodgerblue;\n    border-radius: 25px;\n    padding: 10px 20px;\n}\n\n.highlight-link-default {\n    font-size: 20px;\n    color: #FFFFFF;\n}\n\n.highlight-link-default:hover {\n    color: dodgerblue;\n}\n\n.highlight-link:hover {\n    background: darkblue;\n}\n\n.highlight img {\n    width: 180px;\n    margin: 0 auto 10px;\n}\n\n.wrapper-one {\n    margin: 20px 5%;\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-row-gap: 10px;\n    text-align: center;\n}\n\n.wrapper-three {\n    margin: 20px 5%;\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-row-gap: 20px;\n    grid-column-gap: 20px;\n}\n\n.box-flat {\n    border-radius: 6px;\n    background: #333;\n    padding: 12px;\n}\n\n.box-flat .box-body {\n    height: 140px;\n}\n.box-flat .box-footer {\n    font-size: 14px;\n    font-weight: bold;\n    text-align: right;\n}\n\n.box-flat:hover {\n    background: #444;\n}\n\na .box-flat {\n    color: #FFFFFF;\n}\n\n.body b {\n    font-size: 20px;\n    margin-bottom: 10px;\n}\n\n.wrapper-one .box img {\n    width: 100%;\n    height: 220px;\n    object-fit: cover;\n    margin-left: 0;\n    border-radius: 6px 6px 0 0;\n}\n.wrapper-one .body {\n    padding: 10px;\n}\n\n.wrapper-one a {\n    color: #FFFFFF;\n}\n\n.wrapper-one .box:hover {\n    background: #555;\n}\n\n.ellipse {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n\n.margin-20 {\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;\n}\n\n.column-2 {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin-top: 26px;\n    align-items: center;\n    justify-items: right;\n}\n\n.mini-icon {\n    width: 120px;\n}\n\n.detail-link {\n    color: #FFFFFF;\n    font-weight: 500;\n    display: inline-block;\n    border: 0;\n}\n\n.bordered {\n    background: dodgerblue;\n    border-radius: 25px;\n    padding: 8px 16px 6px;\n    justify-self: left;\n}\n\n.bordered:hover {\n    background: darkblue;\n    cursor: pointer;\n}\n\n::-webkit-scrollbar {\n    width: 12px;\n}\n\n::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 2px grey;\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: dodgerblue;\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: darkblue;\n}\n\n@media screen and (min-width: 650px) {\n    main {\n        margin-top: 150px;\n    }\n\n    nav li {\n        padding: 24px 0;\n        display: inline;\n        margin: 2px;\n    }\n\n    nav a {\n        font-size: 18px;\n    }\n\n    app-bar {\n        background: none;\n        width: auto;\n        display: block;\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .jumbotron {\n        background-position: center;\n    }\n\n    .jumbotron-title {\n        font-size: 60px;\n        margin: 0;\n        font-weight: 100;\n        letter-spacing: 2px;\n    }\n\n    .jumbotron img.user-pict {\n        width: 200px;\n        height: 200px;\n    }\n\n    .jumbotron li {\n        display: inline-block;\n        margin: 50px;\n        border: 2px #FFF solid;\n        border-radius: 50%;\n    }\n\n    .jumbotron-subtitle {\n        font-size: 20px;\n    }\n\n    .wrapper {\n        margin: 20px 5%;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .wrapper-three {\n        margin: 20px 5%;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-row-gap: 20px;\n        grid-column-gap: 20px;\n    }\n\n    .wrapper-one {\n        margin: 20px 10%;\n        text-align: left;\n    }\n\n    .wrapper-one .box img {\n        width: 250px;\n        height: 100%;\n        margin-left: 0;\n        border-radius: 6px 0 0 6px;\n    }\n\n    .box {\n        border-radius: 6px;\n        background: #333;\n        margin: 10px;\n        display: grid;\n        grid-template-columns: 1fr 2fr;\n        grid-column-gap: 16px;\n    }\n\n    .box img {\n        width: 100%;\n        height: auto;\n        margin-left: 10px;\n        object-fit: cover;\n        display: block;\n    }\n\n    .box p {\n        padding: 0 0 0 14px;\n        text-align: left;\n    }\n\n    .box .logo-bg {\n        background: yellow;\n        border-bottom-left-radius: 0;\n        border-top-right-radius: 6px;\n        border-top-left-radius: 6px;\n        height: 220px;\n        width: 100%;\n    }\n\n    .box-exp {\n        display: block;\n    }\n\n    .box-edu {\n        display: block;\n    }\n\n    .box-edu img {\n        width: 100px;\n        margin: 0 auto;\n    }\n\n    .circle-img {\n        border-radius: 50%;\n    }\n\n    .panel-body {\n        padding: 12px;\n    }\n\n    .panel-body img {\n        width: 45px;\n        position: absolute;\n        border-radius: 50%;\n    }\n\n    .horizontal-box .content {\n        padding: 0;\n    }\n\n\n    .sticky {\n        padding-bottom: 0;\n    }\n}\n\n@media screen and (min-width: 1100px) {\n    main {\n        margin-top: 150px;\n    }\n\n    nav li {\n        padding: 24px 0;\n        display: inline;\n        margin: 20px;\n    }\n\n    nav a {\n        font-size: 20px;\n    }\n\n    app-bar {\n        background: none;\n        width: auto;\n        display: block;\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .jumbotron {\n        background-position: center;\n    }\n\n    .jumbotron-title {\n        font-size: 60px;\n        margin: 0;\n        font-weight: 100;\n        letter-spacing: 2px;\n    }\n\n    .jumbotron img.user-pict {\n        width: 200px;\n        height: 200px;\n    }\n\n    .jumbotron li {\n        display: inline-block;\n        margin: 50px;\n        border: 2px #FFF solid;\n        border-radius: 50%;\n    }\n\n    .jumbotron-subtitle {\n        font-size: 20px;\n    }\n\n    .wrapper {\n        margin: 20px 8%;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .wrapper-three {\n        margin: 20px 15%;\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        grid-row-gap: 20px;\n        grid-column-gap: 20px;\n    }\n\n    .box .img-exp {\n        border-radius: 6px 0 0 6px;\n    }\n\n    .wrapper-one {\n        margin: 20px 20%;\n        text-align: left;\n        display: grid;\n        grid-template-columns: repeat(1, 1fr);\n        grid-row-gap: 10px;\n    }\n\n    .wrapper-one .box img {\n        width: 360px;\n        min-height: 220px;\n        margin-left: 0;\n        border-radius: 6px 0 0 6px;\n    }\n\n    .box {\n        border-radius: 6px;\n        background: #333;\n        margin: 10px;\n        display: grid;\n        grid-template-columns: 1fr 3fr;\n        grid-column-gap: 16px;\n    }\n\n    .box img {\n        width: 100%;\n        height: auto;\n        margin-left: 10px;\n        object-fit: cover;\n        display: block;\n    }\n\n    .box p {\n        padding: 0 0 0 14px;\n        text-align: left;\n    }\n\n    .box .logo-bg {\n        background: yellow;\n        border-bottom-left-radius: 6px;\n        border-top-left-radius: 6px;\n        border-top-right-radius: 0;\n        height: 100%;\n        width: 100%;\n    }\n\n    .box .edu {\n        width: 100%;\n        height: auto;\n    }\n\n    .circle-img {\n        border-radius: 50%;\n    }\n\n    .panel-body {\n        padding: 12px;\n    }\n\n    .panel-body img {\n        width: 45px;\n        position: absolute;\n        border-radius: 50%;\n    }\n\n    .horizontal-box .content {\n        padding: 0;\n    }\n\n    .horizontal-box .content ul {\n        list-style: none;\n    }\n\n    .horizontal-box .content ul li:before {\n        content: '✓ ';\n    }\n\n    .sticky {\n        padding-bottom: 0;\n    }\n}\n\n@media screen and (min-width: 1300px) {\n    .wrapper {\n        margin: 20px 15%;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .box .img-exp {\n        border-radius: 6px 0 0 6px;\n    }\n}\n",""]),n.exports=r},function(n,r,o){var i=o(1),e=o(17);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.i,e,""]]);var t={insert:"head",singleton:!1};i(e,t);n.exports=e.locals||{}},function(n,r,o){(r=o(2)(!1)).push([n.i,"#drawer {\r\n    width: 250px;\r\n    position: absolute;\r\n    margin-top: -9px;\r\n    transform: translate(-250px, 0);\r\n    transition: transform 0.3s ease-in-out;\r\n    background-color: #111;\r\n    border-bottom-right-radius: 6px;\r\n}\r\n\r\n#drawer.open {\r\n    transform: translate(0, 0)\r\n}\r\n\r\n#drawer li {\r\n    padding: 16px 0;\r\n}\r\n\r\n#drawer li:hover {\r\n    background: darkblue;\r\n    border-radius: 4px;\r\n}\r\n\r\n#drawer a {\r\n    text-decoration: none;\r\n    color: white;\r\n    padding: 15px 20px;\r\n}\r\n\r\n#drawer .drawer-title {\r\n    font-size: 26px;\r\n    padding: 18px 0;\r\n}\r\n\r\n#hamburger {\r\n    font-size: 32px;\r\n    text-decoration: none;\r\n    margin-left: 12px;\r\n    border: 0;\r\n    background: transparent;\r\n    color: white;\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n    #drawer {\r\n        width: 100%;\r\n        padding-top: 0;\r\n        margin-top: 0;\r\n        position: relative;\r\n        background: none;\r\n        transform: translate(0, 0);\r\n    }\r\n\r\n    #drawer li {\r\n        padding: 24px 0;\r\n        display: inline;\r\n    }\r\n\r\n    #drawer li:hover {\r\n        background: darkblue;\r\n        border-radius: 0;\r\n    }\r\n\r\n    #drawer a {\r\n        padding: 24px 20px;\r\n    }\r\n\r\n    #hamburger {\r\n        display: none;\r\n    }\r\n}\r\n",""]),n.exports=r},,,,,,function(n,r,o){var i=o(1),e=o(24);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.i,e,""]]);var t={insert:"head",singleton:!1};i(e,t);n.exports=e.locals||{}},function(n,r,o){(r=o(2)(!1)).push([n.i,'loading-indicator {\r\n    display: block;\r\n    text-align: center;\r\n}\r\n.lds-roller {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n}\r\n.lds-roller div {\r\n    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    transform-origin: 40px 40px;\r\n}\r\n.lds-roller div:after {\r\n    content: " ";\r\n    display: block;\r\n    position: absolute;\r\n    width: 7px;\r\n    height: 7px;\r\n    border-radius: 50%;\r\n    background: dodgerblue;\r\n    margin: -4px 0 0 -4px;\r\n}\r\n.lds-roller div:nth-child(1) {\r\n    animation-delay: -0.036s;\r\n}\r\n.lds-roller div:nth-child(1):after {\r\n    top: 63px;\r\n    left: 63px;\r\n}\r\n.lds-roller div:nth-child(2) {\r\n    animation-delay: -0.072s;\r\n}\r\n.lds-roller div:nth-child(2):after {\r\n    top: 68px;\r\n    left: 56px;\r\n}\r\n.lds-roller div:nth-child(3) {\r\n    animation-delay: -0.108s;\r\n}\r\n.lds-roller div:nth-child(3):after {\r\n    top: 71px;\r\n    left: 48px;\r\n}\r\n.lds-roller div:nth-child(4) {\r\n    animation-delay: -0.144s;\r\n}\r\n.lds-roller div:nth-child(4):after {\r\n    top: 72px;\r\n    left: 40px;\r\n}\r\n.lds-roller div:nth-child(5) {\r\n    animation-delay: -0.18s;\r\n}\r\n.lds-roller div:nth-child(5):after {\r\n    top: 71px;\r\n    left: 32px;\r\n}\r\n.lds-roller div:nth-child(6) {\r\n    animation-delay: -0.216s;\r\n}\r\n.lds-roller div:nth-child(6):after {\r\n    top: 68px;\r\n    left: 24px;\r\n}\r\n.lds-roller div:nth-child(7) {\r\n    animation-delay: -0.252s;\r\n}\r\n.lds-roller div:nth-child(7):after {\r\n    top: 63px;\r\n    left: 17px;\r\n}\r\n.lds-roller div:nth-child(8) {\r\n    animation-delay: -0.288s;\r\n}\r\n.lds-roller div:nth-child(8):after {\r\n    top: 56px;\r\n    left: 12px;\r\n}\r\n@keyframes lds-roller {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n',""]),n.exports=r},,,,,function(n,r,o){var i=o(1),e=o(30);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.i,e,""]]);var t={insert:"head",singleton:!1};i(e,t);n.exports=e.locals||{}},function(n,r,o){(r=o(2)(!1)).push([n.i,".modal {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.modal-content {\r\n    background-color: #333333;\r\n    margin: 5% auto;\r\n    padding: 20px;\r\n    border-radius: 6px;\r\n    border: 1px solid #555;\r\n    width: 90%;\r\n}\r\n\r\n.modal-content p {\r\n    font-size: 15px;\r\n}\r\n\r\n.modal-title {\r\n    text-align: center;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n}\r\n\r\n.close {\r\n    color: #EEE;\r\n    float: right;\r\n    font-size: 28px;\r\n    padding: 0 12px 8px;\r\n    margin-top: -21px;\r\n    border-top-right-radius: 6px;\r\n    border-bottom-left-radius: 6px;\r\n    margin-right: -21px;\r\n    font-weight: bold;\r\n    background: dodgerblue;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    background: darkblue;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.scroll-image {\r\n    width: 100%;\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n    margin-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\ndiv.scroll-image img {\r\n    height: 420px;\r\n    display: inline-block;\r\n    border-radius: 6px;\r\n    margin-right: 10px;\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n    .modal-content {\r\n        background-color: #333333;\r\n        margin: 15% auto;\r\n        padding: 20px;\r\n        border-radius: 6px;\r\n        border: 1px solid #555;\r\n        width: 80%;\r\n    }\r\n\r\n    div.scroll-image img {\r\n        height: 460px;\r\n        display: inline-block;\r\n        border-radius: 6px;\r\n        margin-right: 10px;\r\n    }\r\n}\r\n",""]),n.exports=r}]);