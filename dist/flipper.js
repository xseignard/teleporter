var Flipper=function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={exports:{},id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),o=i(2),l=i(3),c=s(l),Flipper=function(){function Flipper(t){r(this,Flipper);var e=(0,o.constructorArgument)(t);return e?(Object.assign(this,e),this.element=document.querySelector(this.selector),this.element?void(this.dimensionsClass&&this.setModificationStyles(this.getRect(),this.getRect(this.dimensionsClass))):void console.error("Flipper.js: No element found with the selector '"+this.selector+"'")):void console.error("Flipper.js: No valid argument passed to the constructor 'Flipper'")}return a(Flipper,[{key:"getRect",value:function(t){var e=void 0;return"string"==typeof t&&t.length>0?(this.element.classList.add(t),e=this.element.getBoundingClientRect(),this.element.classList.remove(t)):e=this.element.getBoundingClientRect(),e}},{key:"setModificationStyles",value:function(t,e){Object.assign(this.element.style,{width:e.width+"px",height:e.height+"px"});var i=this.element.getBoundingClientRect();Object.assign(this.element.style,{marginLeft:t.left-i.left+"px",marginRight:t.right-i.right+"px",marginTop:t.top-i.top+"px",marginBottom:t.bottom-i.bottom+"px"});var s=this.element.getBoundingClientRect();Object.assign(this.element.style,{transform:(0,c["default"])(t,s)})}},{key:"resetModificationStyles",value:function(){Object.assign(this.element.style,{width:null,height:null,transform:null,marginLeft:null,marginRight:null,marginTop:null,marginBottom:null})}},{key:"setDimensionsClass",value:function(t){return"string"!=typeof t?void console.error("Flipper.js: No valid argument passed to method 'setDimensionClass'"):(this.dimensionsClass=t,this.resetModificationStyles(),void this.setModificationStyles(this.getRect(),this.getRect(this.dimensionsClass)))}},{key:"setTransitStepsRects",value:function(){var t=this;this.transit.steps.forEach(function(e){e.rect=t.getRect(e["class"])})}},{key:"setTransitDimensionsRect",value:function(){var t=void 0,e=void 0;if(this.dimensionsClass){var i=this.getRect(this.dimensionsClass);t=i.width,e=i.height}else{var s=this.transit.steps.map(function(t){return t.rect.width}),r=this.transit.steps.map(function(t){return t.rect.height});t=Math.max.apply(Math,n(s)),e=Math.max.apply(Math,n(r))}this.transit.dimensionsRect={left:this.transit.steps[0].rect.left,top:this.transit.steps[0].rect.top,width:t,height:e}}},{key:"animate",value:function(t){var e=this,i=Object.assign({},this.animation,this.transit.steps[t+1].animation);this.element.style.transform=(0,c["default"])(this.transit.steps[t+1].rect,this.transit.dimensionsRect),this.transit.player=this.element.animate([{transform:(0,c["default"])(this.transit.steps[t].rect,this.transit.dimensionsRect)},{transform:(0,c["default"])(this.transit.steps[t+1].rect,this.transit.dimensionsRect)}],{duration:i.duration,easing:i.easing}),this.transit.player.addEventListener("finish",function(){e.transit.player.removeEventListener("finish"),t<e.transit.steps.length-2?e.animate(t+1):e.transit.resolve()})}},{key:"transition",value:function(t){var e=this,i=(0,o.transitionArgument)(t);return i?(this.transit&&this.transit.player&&this.transit.player.cancel(),this.resetModificationStyles(),this.transit={steps:i},this.setTransitStepsRects(),this.setTransitDimensionsRect(),this.setModificationStyles(this.transit.steps[0].rect,this.transit.dimensionsRect),this.animate(0),new Promise(function(t,i){Object.assign(e.transit,{resolve:t,reject:i})})):void console.error("Flipper.js: No valid argument passed to method 'transition'")}}]),Flipper}();e["default"]=Flipper,t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){var e=void 0,i={animation:{duration:1e3,easing:"linear"}};if("string"==typeof t)e=Object.assign({},i,{selector:t});else if("object"==typeof t&&"string"==typeof t.selector){var s={selector:t.selector};if("string"==typeof t.dimensionsClass&&(s.dimensionsClass=t.dimensionsClass),"object"==typeof t.animation){var n={};"number"==typeof t.animation.duration&&(n.duration=t.animation.duration),"string"==typeof t.animation.easing&&(n.easing=t.animation.easing),Object.keys(n).length>0&&(s.animation=n)}e=Object.assign({},i,s)}return e};e.constructorArgument=i;var s=function(t){var e=void 0;if("string"==typeof t)e=[{"class":""},{"class":t}];else if("object"==typeof t)if("string"==typeof t["class"])e=[{"class":""},t];else if(Array.isArray(t)){e=[],1===t.length&&e.push({"class":""});for(var i=0;i<t.length;i++)if("string"==typeof t[i])e.push({"class":t[i]});else{if("object"!=typeof t[i]||"string"!=typeof t[i]["class"]){e=void 0;break}e.push(t[i])}}return e};e.transitionArgument=s},function(t,e){"use strict";function i(t,e){var i=t.width/e.width,s=t.height/e.height,n=t.left-e.left+(t.width-e.width)/2,r=t.top-e.top+(t.height-e.height)/2;return"\n		translateX("+n+"px)\n		translateY("+r+"px)\n		scaleX("+i+")\n		scaleY("+s+")\n	"}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i,t.exports=e["default"]}]);