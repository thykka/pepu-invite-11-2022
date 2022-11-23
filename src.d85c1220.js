parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"HHr8":[function(require,module,exports) {
"use strict";function t(t){return i(t)||n(t)||o(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function i(t){if(Array.isArray(t))return a(t)}function r(t,e){return c(t)||l(t,e)||o(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function l(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,s=[],o=!0,a=!1;try{for(n=n.call(t);!(o=(i=n.next()).done)&&(s.push(i.value),!e||s.length!==e);o=!0);}catch(l){a=!0,r=l}finally{try{o||null==n.return||n.return()}finally{if(a)throw r}}return s}}function c(t){if(Array.isArray(t))return t}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Snowflake=void 0;var p=Math.random,d=Math.floor,y=function(t,e,n){return(1-n)*t+n*e},g=function(){function t(e){h(this,t),this.container=document.body,this.canvas=document.createElement("canvas"),this.scale=6,this.lastUpdate=0,Object.assign(this,e),this.scale=d(Math.log(this.container.offsetWidth*this.container.offsetHeight/3)-4),this.width=this.container.offsetWidth/this.scale,this.height=this.container.offsetHeight/this.scale,this.rows=d(this.height),this.columns=d(this.width),this.cellSize=this.width/this.columns,this.stepIndex=0,this.maxSteps=2*Math.min(this.columns,this.rows),this.initCanvas(),this.cells=this.initCells(),this.step()}return f(t,[{key:"initCanvas",value:function(){this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.dataset.snowflake="",this.container.appendChild(this.canvas),this.ctx.globalCompositeOperation="source-over"}},{key:"initCells",value:function(){for(var t=this,e=[],n=Array.from({length:p()*p()*5},function(){return[p()*t.columns,p()*t.rows].map(d)}),i=0,s=function(s){for(var o=function(o){var a=n.some(function(t){var e=r(t,2),n=e[0],i=e[1];return o===n&&s===i});e.push(t.initCell(o,s,i++,a))},a=0;a<t.columns;a++)o(a)},o=0;o<this.rows;o++)s(o);return e.forEach(function(n){n.ngh=t.getNeighbors(n,e)}),e}},{key:"initCell",value:function(t,e,n,i){return{x:t,y:e,i:n,ice:i,ngh:[],ngi:this.getNeighborIndexes(t,e),frz:!1}}},{key:"getNeighbors",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.cells;return t.ngi.map(function(t){return e[t]})}},{key:"step",value:function(){var t=this,e=performance.now();e-this.lastUpdate>50&&(this.updateCells(),this.drawCells(this.stepIndex/this.maxSteps),this.lastUpdate=e),this.stepIndex<this.maxSteps?(requestAnimationFrame(function(){t.step()}),this.stepIndex++):(this.stepIndex=0,this.cells=this.initCells(),this.step())}},{key:"updateCells",value:function(){this.cells.forEach(function(t){t.ice||1===t.ngh.filter(function(t){return t.ice}).length&&(t.frz=!0)}),this.cells.forEach(function(t){t.frz&&(t.ice=!0,t.frz=!1)})}},{key:"drawCells",value:function(t){var e=this;this.ctx.fillStyle="hsl(0, 0%, 15%)",this.ctx.globalAlpha=.0625,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalAlpha=1,this.ctx.fillStyle="hsl(".concat(y(160,250,t*t*t),", ").concat(y(100,40,t*(2-t)),"%, ").concat(y(50,10,t*(2-t)),"%)"),this.cells.forEach(function(t){p()<6e-5&&(t.ice=!0),t.ice&&e.ctx.fillRect(t.x,t.y,1,1)})}},{key:"getNeighborIndexes",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.columns,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.rows,o=[];return e%2?o.push([1,0],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1]):o.push([1,0],[1,-1],[0,-1],[-1,0],[0,1],[1,1]),o.map(function(n){var i=r(n,2),s=i[0],o=i[1];return[t+s,e+o]}).filter(function(t){var e=r(t,2),n=e[0],o=e[1];return n>=0&&n<i&&o>=0&&o<s}).map(function(t){var e=r(t,2),s=e[0],o=e[1];return n.xyToIdx(s,o,i)}).sort()}},{key:"xyToIdx",value:function(t,e,n){return t+e*n}}]),t}();exports.Snowflake=g;var v=[{args:[0,0,4,4],expect:[1,4,5]},{args:[1,0,4,4],expect:[0,2,5,6]},{args:[2,0,4,4],expect:[1,3,6,7]},{args:[3,0,4,4],expect:[2,7]},{args:[0,1,4,4],expect:[0,5,8]},{args:[1,1,4,4],expect:[0,1,4,6,8,9]},{args:[3,3,4,4],expect:[10,11,14]}];v.forEach(function(e,n){var i,r=(i=g.prototype).getNeighborIndexes.apply(i,t(e.args));r.join(" ")!==e.expect.join(" ")&&console.error("Test "+(n+1)+" FAIL: expected "+e.args+" to result "+e.expect+" - got "+r)});
},{}],"D8el":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var r,a,o=this&&this.__classPrivateFieldGet||function(e,t,i,r){if("a"===i&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Spritesheet=void 0;var s=function(){function t(i){var s=this;e(this,t),r.add(this),this.cellWidth=0,this.cellHeight=0,this.image=i.image,this.rows=i.rows,this.cols=i.cols,this.image.complete?o(this,r,"m",a).call(this):this.image.addEventListener("load",function(){o(s,r,"m",a).call(s)})}return i(t,[{key:"drawSprite",value:function(e,t,i,r){var a=this.cellWidth,o=this.cellHeight,s=e%this.rows*a,n=Math.floor(e/this.rows)*a;r.drawImage(this.image,s,n,a,o,0|t,0|i,a,o)}}]),t}();exports.Spritesheet=s,r=new WeakSet,a=function(){this.cellWidth=Math.floor(this.image.width/this.cols),this.cellHeight=Math.floor(this.image.height/this.rows)};
},{}],"p1hd":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Scroller=void 0;var r=require("./spritesheet"),h=Math.PI,s=Math.round,n=Math.cos,a=function(){function e(i,h){var n,a,o,l;t(this,e),this.startTime=0,this.container=i.container,this.letters=i.message.split(""),this.font=new r.Spritesheet(h),this.letterWidth=null!==(n=i.letterWidth)&&void 0!==n?n:this.font.cellWidth,this.letterHeight=null!==(a=i.letterHeight)&&void 0!==a?a:this.font.cellHeight,this.canvas=document.createElement("canvas"),this.canvas.dataset.scroller="",this.width=null!==(o=i.width)&&void 0!==o?o:this.container.offsetWidth,this.height=null!==(l=i.height)&&void 0!==l?l:this.container.offsetHeight,this.canvas.width=s(this.width),this.canvas.height=s(this.height),this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.draw()}return i(e,[{key:"draw",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.startTime||(this.startTime=e);var i=(e-this.startTime)/1e3,r=this.canvas,a=r.width,o=r.height,l=this.letters.length,c=(l+2)*this.letterWidth,d=l/5,u=(o-this.letterHeight)/2;this.ctx.clearRect(-.5,-.5,a,o),this.letters.forEach(function(e,r){var o=a+r*t.letterWidth-i/d%1*(c+a);if(!(o<-t.letterWidth||o>=a)){var l=n(2.5*i+r/-10*h)*u+u;t.font.drawSprite(e.charCodeAt(0),s(o),s(l),t.ctx)}}),requestAnimationFrame(function(e){return t.draw(e)})}}]),e}();exports.Scroller=a;
},{"./spritesheet":"D8el"}],"JJ2e":[function(require,module,exports) {
"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Snow=void 0;var i=Math.random,a=Math.floor,r=Math.cos,o=Math.sin,s=Math.min,h=Math.max,c=function(t){return t[a(i()*t.length)]},l=function(t,n){return t[a(s(1,h(n,0))*t.length)]},u=function(){function n(e){t(this,n),this.flakes=[],this.amount=42,this.w=window.innerWidth,this.h=window.innerHeight,this.pad=8,this.chars="⋅·•+*❅❄❆".split(""),this.container=e,this.container.classList.add("snow"),this.w=this.container.offsetWidth,this.h=this.container.offsetHeight,this.init();var i=document.createElement("style");i.innerHTML="\n    .flake {\n      display: inline-block; position: absolute; top: -1em; left: 0;\n      font-family: 'Arial'; font-size: 12px; z-index: 9001;\n    }\n    ",document.head.appendChild(i),window.addEventListener("resize",this.handleResize.bind(this))}return e(n,[{key:"init",value:function(){var t=this;this.flakes=Array.from({length:this.amount},function(){var n=document.createElement("span");return n.classList.add("flake"),n.innerText=c(t.chars),t.container.appendChild(n),{x:i()*t.w,y:i()*t.h,z:i(),el:n}}),this.update()}},{key:"handleResize",value:function(){this.w=window.innerWidth,this.h=window.innerHeight}},{key:"update",value:function(){var t=this,n=performance.now()/1e3,e=this.w,a=this.h,o=this.pad,s=this.amount,h=this.chars;this.flakes.forEach(function(t,c){var u=r(n*t.z)/2;t.y+=1+u,t.el.innerHTML=l(h,u+.5),t.y>=a+o&&(t.x=i()*e,t.y-=a+2*o,t.z=i()),t.x+=r(n*t.z+2*c/s)/2+.25,t.x<-o&&(t.x+=e),t.x>e&&(t.x-=e),t.el.style.transform="translate(calc(".concat(t.x,"px - 50%), ").concat(t.y,"px)")}),requestAnimationFrame(function(){return t.update()})}}]),n}();exports.Snow=u;
},{}],"B6dB":[function(require,module,exports) {
"use strict";function e(e,r){return i(e)||o(e,r)||n(e,r)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}function i(e){if(Array.isArray(e))return e}Object.defineProperty(exports,"__esModule",{value:!0}),require("./styles.css");var a=require("./snowflake"),l=require("./scroller"),u=require("./snow"),c=document.getElementById("play"),d=document.getElementById("app"),s=document.getElementById("font");function f(){var e=new Date,t="25.";return 2022===e.getFullYear()&&10===e.getMonth()?(24===e.getDate()&&(t="HUOMENNA"),23===e.getDate()&&(t="YLIHUOMENNA")):t+="11.",t}function y(){c.classList.add("hidden"),d.classList.remove("hidden"),new u.Snow(d),new a.Snowflake({container:d});var t=e(window.innerWidth>window.innerHeight?[256,96]:[128,64],2),n=t[0],r=t[1];new l.Scroller({container:d,message:["HEI SINÄ!","ÄLÄ JÄÄDY!",[f(),"PIKKUJOULU-PEPU"].join(" "),"...MUTTA MISSÄ SUN ARVAT!?","X_X","TIEDÄT MITÄ TEHDÄ...","MOBILEPAY:040 414 7489","Ã Ã Ã Â"].reduce(function(e,t,n,r){return e+(n<r.length?"      ".concat(["$","^","~"][n%3],"      "):"")+t}),letterWidth:10,width:n,height:r},{image:s,rows:16,cols:16})}var m=document.querySelector("audio");window.addEventListener("click",function(){m.paused?(y(),m.muted=!1,m.play()):m.muted=!m.muted});
},{"./styles.css":"D9Nj","./snowflake":"HHr8","./scroller":"p1hd","./snow":"JJ2e"}]},{},["B6dB"], null)
//# sourceMappingURL=/pepu-invite-11-2022/src.d85c1220.js.map
