parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"exUX":[function(require,module,exports) {
module.exports="JSPotify/jiggly.3696f71d.mp3";
},{}],"g1vh":[function(require,module,exports) {
module.exports="JSPotify/mario.13a700c8.mp3";
},{}],"hJ4R":[function(require,module,exports) {
module.exports="JSPotify/totakeke.21e19000.mp3";
},{}],"ckOi":[function(require,module,exports) {
module.exports={jiggly:require("./jiggly.mp3"),mario:require("./mario.mp3"),totakeke:require("./totakeke.mp3")};
},{"./jiggly.mp3":"exUX","./mario.mp3":"g1vh","./totakeke.mp3":"hJ4R"}],"XJ4V":[function(require,module,exports) {
module.exports="JSPotify/jiggly-cover.d9e8dbc3.png";
},{}],"ODtk":[function(require,module,exports) {
module.exports="JSPotify/mario-cover.78db95c1.png";
},{}],"KrzP":[function(require,module,exports) {
module.exports="JSPotify/totakeke-cover.4e6bdc31.png";
},{}],"QXLk":[function(require,module,exports) {
module.exports={jiggly:require("./jiggly-cover.png"),mario:require("./mario-cover.png"),totakeke:require("./totakeke-cover.png")};
},{"./jiggly-cover.png":"XJ4V","./mario-cover.png":"ODtk","./totakeke-cover.png":"KrzP"}],"fGiE":[function(require,module,exports) {
module.exports="JSPotify/jiggly-disk.6905c29a.png";
},{}],"x7Vb":[function(require,module,exports) {
module.exports="JSPotify/mario-disk.6258c2a7.png";
},{}],"a4WF":[function(require,module,exports) {
module.exports="JSPotify/totakeke-disk.3fd62e05.png";
},{}],"EjFF":[function(require,module,exports) {
module.exports={jiggly:require("./jiggly-disk.png"),mario:require("./mario-disk.png"),totakeke:require("./totakeke-disk.png")};
},{"./jiggly-disk.png":"fGiE","./mario-disk.png":"x7Vb","./totakeke-disk.png":"a4WF"}],"pKdB":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function t(a,i){e(this,t),this.className=a,this.domEl=document.querySelector(".".concat(a)),this.play=!1,this.disk=this.domEl.querySelector(".vinyl"),this.hole=this.disk.querySelector(".hole"),this.audio=document.querySelector("#".concat(a,"-audio"));var o=document.createElement("source");o.setAttribute("src","".concat(i)),o.setAttribute("type","audio/mp3"),this.audio.appendChild(o),this.hole.style.animationPlayState="paused",this.hole.style.animation="rotate360 2s infinite linear",null!==this.domEl&&this.domEl.addEventListener("click",this),document.addEventListener("keydown",this),this.audio.loop=!0}return a(t,[{key:"playSong",value:function(e){e.ctrlKey?this.audio.muted=!this.audio.muted:(this.play?(this.disk.classList.remove("open"),this.hole.style.animationPlayState="paused",this.audio.pause()):(this.disk.classList.add("open"),this.hole.style.animationPlayState="running",this.audio.play()),this.play=!this.play)}},{key:"keydownHandler",value:function(e){switch(e){case"ArrowUp":this.audio.volume<1&&(this.audio.volume+=.02);break;case"ArrowDown":console.log("down"),this.audio.volume>.02&&(this.audio.volume-=.02);break;case"ArrowRight":this.audio.playbackRate<1.8&&(this.audio.playbackRate+=.01),console.log(this.audio.playbackRate);break;case"ArrowLeft":this.audio.playbackRate>.5&&(this.audio.playbackRate-=.01),console.log(this.audio.playbackRate)}}},{key:"handleEvent",value:function(e){switch(e.type){case"click":this.playSong(e);break;case"keydown":this.keydownHandler(e.key)}}}]),t}(),o=i;exports.default=o;
},{}],"ERFn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./Song"));function t(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function t(n){s(this,t);var o=Object.keys(n),r=Object.values(n);for(var a in this.songs=[],o)this.songs.push(new e.default(o[a],r[a]))},o=n;exports.default=o;
},{"./Song":"pKdB"}],"QvaY":[function(require,module,exports) {
"use strict";var e=t(require("../assets/mp3/*.mp3")),a=t(require("../assets/img/*-cover.png")),n=t(require("../assets/img/*-disk.png")),r=t(require("./Player"));function t(e){return e&&e.__esModule?e:{default:e}}var d=Object.keys(e.default),l=Object.values(a.default),c=Object.values(n.default),i=["#be0577","#55a159","#fdc407"];function o(e){var a=document.createElement("div");if(e instanceof Array)for(var n in e)a.className+=" "+e[n];else a.className=e;return a}for(var u=0,s=0,p=d;s<p.length;s++){var f=p[s];document.body.innerHTML+='<div class="item '.concat(f,' flex">');var m=document.querySelector(".".concat(f)),v=m.appendChild(o(["cover"]));v.style.backgroundImage="url(".concat(l[u],")"),(v=(v=m.appendChild(o(["vinyl","flex"]))).appendChild(o(["label","flex"]))).appendChild(o("outerLine")),v.appendChild(o("innerLine")),(v=v.appendChild(o("hole"))).style.backgroundImage="url(".concat(c[u],")"),v.style.boxShadow="0px 0px 25px ".concat(i[u]),document.body.innerHTML+='<audio id="'.concat(f,'-audio">'),document.body.innerHTML+="<br><br>",u++}var b=new r.default(e.default);
},{"../assets/mp3/*.mp3":"ckOi","../assets/img/*-cover.png":"QXLk","../assets/img/*-disk.png":"EjFF","./Player":"ERFn"}]},{},["QvaY"], null)
//# sourceMappingURL=JSPotify/js.d77ae405.js.map