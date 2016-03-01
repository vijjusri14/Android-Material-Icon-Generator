!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var e={},o={},i={},r={}.hasOwnProperty,s="components/",n=function(t,e){var o=0;e&&(0===e.indexOf(s)&&(o=s.length),e.indexOf("/",o)>0&&(e=e.substring(o,e.indexOf("/",o))));var r=i[t+"/index.js"]||i[e+"/deps/"+t+"/index.js"];return r?s+r.substring(0,r.length-".js".length):t},a=/^\.\.?(\/|$)/,l=function(t,e){for(var o,i=[],r=(a.test(e)?t+"/"+e:e).split("/"),s=0,n=r.length;n>s;s++)o=r[s],".."===o?i.pop():"."!==o&&""!==o&&i.push(o);return i.join("/")},c=function(t){return t.split("/").slice(0,-1).join("/")},h=function(e){return function(o){var i=l(c(e),o);return t.require(i,e)}},u=function(t,e){var i={id:t,exports:{}};return o[t]=i,e(i.exports,h(t),i),i.exports},f=function(t,i){var s=l(t,".");if(null==i&&(i="/"),s=n(t,i),r.call(o,s))return o[s].exports;if(r.call(e,s))return u(s,e[s]);var a=l(s,"./index");if(r.call(o,a))return o[a].exports;if(r.call(e,a))return u(a,e[a]);throw new Error('Cannot find module "'+t+'" from "'+i+'"')};f.alias=function(t,e){i[e]=t},f.register=f.define=function(t,o){if("object"==typeof t)for(var i in t)r.call(t,i)&&(e[i]=t[i]);else e[t]=o},f.list=function(){var t=[];for(var o in e)r.call(e,o)&&t.push(o);return t},f.brunch=!0,f._cache=o,t.require=f}}();var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(t){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.jade=t()}}(function(){return function t(e,o,i){function r(n,a){if(!o[n]){if(!e[n]){var l="function"==typeof require&&require;if(!a&&l)return l(n,!0);if(s)return s(n,!0);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}var h=o[n]={exports:{}};e[n][0].call(h.exports,function(t){var o=e[n][1][t];return r(o?o:t)},h,h.exports,t,e,o,i)}return o[n].exports}for(var s="function"==typeof require&&require,n=0;n<i.length;n++)r(i[n]);return r}({1:[function(t,e,o){"use strict";function i(t){return null!=t&&""!==t}function r(t){return(Array.isArray(t)?t.map(r):t&&"object"===("undefined"==typeof t?"undefined":_typeof(t))?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(i).join(" ")}function s(t){return a[t]||t}function n(t){var e=String(t).replace(l,s);return e===""+t?t:e}o.merge=function c(t,e){if(1===arguments.length){for(var o=t[0],r=1;r<t.length;r++)o=c(o,t[r]);return o}var s=t["class"],n=e["class"];(s||n)&&(s=s||[],n=n||[],Array.isArray(s)||(s=[s]),Array.isArray(n)||(n=[n]),t["class"]=s.concat(n).filter(i));for(var a in e)"class"!=a&&(t[a]=e[a]);return t},o.joinClasses=r,o.cls=function(t,e){for(var i=[],s=0;s<t.length;s++)e&&e[s]?i.push(o.escape(r([t[s]]))):i.push(r(t[s]));var n=r(i);return n.length?' class="'+n+'"':""},o.style=function(t){return t&&"object"===("undefined"==typeof t?"undefined":_typeof(t))?Object.keys(t).map(function(e){return e+":"+t[e]}).join(";"):t},o.attr=function(t,e,i,r){return"style"===t&&(e=o.style(e)),"boolean"==typeof e||null==e?e?" "+(r?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof e?(-1!==JSON.stringify(e).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),e&&"function"==typeof e.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+t+"='"+JSON.stringify(e).replace(/'/g,"&apos;")+"'"):i?(e&&"function"==typeof e.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+o.escape(e)+'"'):(e&&"function"==typeof e.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+e+'"')},o.attrs=function(t,e){var i=[],s=Object.keys(t);if(s.length)for(var n=0;n<s.length;++n){var a=s[n],l=t[a];"class"==a?(l=r(l))&&i.push(" "+a+'="'+l+'"'):i.push(o.attr(a,l,!1,e))}return i.join("")};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},l=/[&<>"]/g;o.escape=n,o.rethrow=function h(e,o,i,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&o||r))throw e.message+=" on line "+i,e;try{r=r||t("fs").readFileSync(o,"utf8")}catch(s){h(e,null,i)}var n=3,a=r.split("\n"),l=Math.max(i-n,0),c=Math.min(a.length,i+n),n=a.slice(l,c).map(function(t,e){var o=e+l+1;return(o==i?"  > ":"    ")+o+"| "+t}).join("\n");throw e.path=o,e.message=(o||"Jade")+":"+i+"\n"+n+"\n\n"+e.message,e},o.DebugItem=function(t,e){this.lineno=t,this.filename=e}},{fs:2}],2:[function(t,e,o){},{}]},{},[1])(1)}),!function(t){"use strict";"object"==typeof exports?module.exports=t(window.jQuery):"function"==typeof define&&define.amd?define(["jquery"],t):window.jQuery&&!window.jQuery.fn.colorpicker&&t(window.jQuery)}(function(t){"use strict";var e=function(e,o){this.value={h:0,s:0,b:0,a:1},this.origFormat=null,o&&t.extend(this.colors,o),e&&(void 0!==e.toLowerCase?(e+="",this.setColor(e)):void 0!==e.h&&(this.value=e))};e.prototype={constructor:e,colors:{aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32",transparent:"transparent"},_sanitizeNumber:function(t){return"number"==typeof t?t:isNaN(t)||null===t||""===t||void 0===t?1:void 0!==t.toLowerCase?parseFloat(t):1},isTransparent:function(t){return t?(t=t.toLowerCase().trim(),"transparent"===t||t.match(/#?00000000/)||t.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/)):!1},rgbaIsTransparent:function(t){return 0===t.r&&0===t.g&&0===t.b&&0===t.a},setColor:function(t){t=t.toLowerCase().trim(),t&&(this.isTransparent(t)?this.value={h:0,s:0,b:0,a:0}:this.value=this.stringToHSB(t)||{h:0,s:0,b:0,a:1})},stringToHSB:function(e){e=e.toLowerCase();var o;"undefined"!=typeof this.colors[e]&&(e=this.colors[e],o="alias");var i=this,r=!1;return t.each(this.stringParsers,function(t,s){var n=s.re.exec(e),a=n&&s.parse.apply(i,[n]),l=o||s.format||"rgba";return a?(r=l.match(/hsla?/)?i.RGBtoHSB.apply(i,i.HSLtoRGB.apply(i,a)):i.RGBtoHSB.apply(i,a),i.origFormat=l,!1):!0}),r},setHue:function(t){this.value.h=1-t},setSaturation:function(t){this.value.s=t},setBrightness:function(t){this.value.b=1-t},setAlpha:function(t){this.value.a=parseInt(100*(1-t),10)/100},toRGB:function(t,e,o,i){t||(t=this.value.h,e=this.value.s,o=this.value.b),t*=360;var r,s,n,a,l;return t=t%360/60,l=o*e,a=l*(1-Math.abs(t%2-1)),r=s=n=o-l,t=~~t,r+=[l,a,0,0,a,l][t],s+=[a,l,l,a,0,0][t],n+=[0,0,a,l,l,a][t],{r:Math.round(255*r),g:Math.round(255*s),b:Math.round(255*n),a:i||this.value.a}},toHex:function(t,e,o,i){var r=this.toRGB(t,e,o,i);return this.rgbaIsTransparent(r)?"transparent":"#"+(1<<24|parseInt(r.r)<<16|parseInt(r.g)<<8|parseInt(r.b)).toString(16).substr(1)},toHSL:function(t,e,o,i){t=t||this.value.h,e=e||this.value.s,o=o||this.value.b,i=i||this.value.a;var r=t,s=(2-e)*o,n=e*o;return n/=s>0&&1>=s?s:2-s,s/=2,n>1&&(n=1),{h:isNaN(r)?0:r,s:isNaN(n)?0:n,l:isNaN(s)?0:s,a:isNaN(i)?0:i}},toAlias:function(t,e,o,i){var r=this.toHex(t,e,o,i);for(var s in this.colors)if(this.colors[s]===r)return s;return!1},RGBtoHSB:function(t,e,o,i){t/=255,e/=255,o/=255;var r,s,n,a;return n=Math.max(t,e,o),a=n-Math.min(t,e,o),r=0===a?null:n===t?(e-o)/a:n===e?(o-t)/a+2:(t-e)/a+4,r=(r+360)%6*60/360,s=0===a?0:a/n,{h:this._sanitizeNumber(r),s:s,b:n,a:this._sanitizeNumber(i)}},HueToRGB:function(t,e,o){return 0>o?o+=1:o>1&&(o-=1),1>6*o?t+(e-t)*o*6:1>2*o?e:2>3*o?t+(e-t)*(2/3-o)*6:t},HSLtoRGB:function(t,e,o,i){0>e&&(e=0);var r;r=.5>=o?o*(1+e):o+e-o*e;var s=2*o-r,n=t+1/3,a=t,l=t-1/3,c=Math.round(255*this.HueToRGB(s,r,n)),h=Math.round(255*this.HueToRGB(s,r,a)),u=Math.round(255*this.HueToRGB(s,r,l));return[c,h,u,this._sanitizeNumber(i)]},toString:function(t){t=t||"rgba";var e=!1;switch(t){case"rgb":return e=this.toRGB(),this.rgbaIsTransparent(e)?"transparent":"rgb("+e.r+","+e.g+","+e.b+")";case"rgba":return e=this.toRGB(),"rgba("+e.r+","+e.g+","+e.b+","+e.a+")";case"hsl":return e=this.toHSL(),"hsl("+Math.round(360*e.h)+","+Math.round(100*e.s)+"%,"+Math.round(100*e.l)+"%)";case"hsla":return e=this.toHSL(),"hsla("+Math.round(360*e.h)+","+Math.round(100*e.s)+"%,"+Math.round(100*e.l)+"%,"+e.a+")";case"hex":return this.toHex();case"alias":return this.toAlias()||this.toHex();default:return e}},stringParsers:[{re:/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,format:"rgb",parse:function(t){return[t[1],t[2],t[3],1]}},{re:/rgb\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:"rgb",parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],1]}},{re:/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:"hsl",parse:function(t){return[t[1]/360,t[2]/100,t[3]/100,t[4]]}},{re:/hsla\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"hsla",parse:function(t){return[t[1]/360,t[2]/100,t[3]/100,t[4]]}},{re:/#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,format:"hex",parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),1]}},{re:/#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,format:"hex",parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),1]}}],colorNameToHex:function(t){return"undefined"!=typeof this.colors[t.toLowerCase()]?this.colors[t.toLowerCase()]:!1}};var o={horizontal:!1,inline:!1,color:!1,format:!1,input:"input",container:!1,component:".add-on, .input-group-addon",sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setAlpha"}},slidersHorz:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:100,maxTop:0,callLeft:"setHue",callTop:!1},alpha:{maxLeft:100,maxTop:0,callLeft:"setAlpha",callTop:!1}},template:'<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',align:"right",customClass:null,colorSelectors:null},i=function(i,r){if(this.element=t(i).addClass("colorpicker-element"),this.options=t.extend(!0,{},o,this.element.data(),r),this.component=this.options.component,this.component=this.component!==!1?this.element.find(this.component):!1,this.component&&0===this.component.length&&(this.component=!1),this.container=this.options.container===!0?this.element:this.options.container,this.container=this.container!==!1?t(this.container):!1,this.input=this.element.is("input")?this.element:this.options.input?this.element.find(this.options.input):!1,this.input&&0===this.input.length&&(this.input=!1),this.color=new e(this.options.color!==!1?this.options.color:this.getValue(),this.options.colorSelectors),this.format=this.options.format!==!1?this.options.format:this.color.origFormat,this.options.color!==!1&&(this.updateInput(this.color),this.updateData(this.color)),this.picker=t(this.options.template),this.options.customClass&&this.picker.addClass(this.options.customClass),this.options.inline?this.picker.addClass("colorpicker-inline colorpicker-visible"):this.picker.addClass("colorpicker-hidden"),this.options.horizontal&&this.picker.addClass("colorpicker-horizontal"),("rgba"===this.format||"hsla"===this.format||this.options.format===!1)&&this.picker.addClass("colorpicker-with-alpha"),"right"===this.options.align&&this.picker.addClass("colorpicker-right"),this.options.inline===!0&&this.picker.addClass("colorpicker-no-arrow"),this.options.colorSelectors){var s=this;t.each(this.options.colorSelectors,function(e,o){var i=t("<i />").css("background-color",o).data("class",e);i.click(function(){s.setValue(t(this).css("background-color"))}),s.picker.find(".colorpicker-selectors").append(i)}),this.picker.find(".colorpicker-selectors").show()}this.picker.on("mousedown.colorpicker touchstart.colorpicker",t.proxy(this.mousedown,this)),this.picker.appendTo(this.container?this.container:t("body")),this.input!==!1&&(this.input.on({"keyup.colorpicker":t.proxy(this.keyup,this)}),this.input.on({"change.colorpicker":t.proxy(this.change,this)}),this.component===!1&&this.element.on({"focus.colorpicker":t.proxy(this.show,this)}),this.options.inline===!1&&this.element.on({"focusout.colorpicker":t.proxy(this.hide,this)})),this.component!==!1&&this.component.on({"click.colorpicker":t.proxy(this.show,this)}),this.input===!1&&this.component===!1&&this.element.on({"click.colorpicker":t.proxy(this.show,this)}),this.input!==!1&&this.component!==!1&&"color"===this.input.attr("type")&&this.input.on({"click.colorpicker":t.proxy(this.show,this),"focus.colorpicker":t.proxy(this.show,this)}),this.update(),t(t.proxy(function(){this.element.trigger("create")},this))};i.Color=e,i.prototype={constructor:i,destroy:function(){this.picker.remove(),this.element.removeData("colorpicker").off(".colorpicker"),this.input!==!1&&this.input.off(".colorpicker"),this.component!==!1&&this.component.off(".colorpicker"),this.element.removeClass("colorpicker-element"),this.element.trigger({type:"destroy"})},reposition:function(){if(this.options.inline!==!1||this.options.container)return!1;var t=this.container&&this.container[0]!==document.body?"position":"offset",e=this.component||this.element,o=e[t]();"right"===this.options.align&&(o.left-=this.picker.outerWidth()-e.outerWidth()),this.picker.css({top:o.top+e.outerHeight(),left:o.left})},show:function(e){return this.isDisabled()?!1:(this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"),this.reposition(),t(window).on("resize.colorpicker",t.proxy(this.reposition,this)),!e||this.hasInput()&&"color"!==this.input.attr("type")||e.stopPropagation&&e.preventDefault&&(e.stopPropagation(),e.preventDefault()),this.options.inline===!1&&t(window.document).on({"mousedown.colorpicker":t.proxy(this.hide,this)}),void this.element.trigger({type:"showPicker",color:this.color}))},hide:function(){this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"),t(window).off("resize.colorpicker",this.reposition),t(document).off({"mousedown.colorpicker":this.hide}),this.update(),this.element.trigger({type:"hidePicker",color:this.color})},updateData:function(t){return t=t||this.color.toString(this.format),this.element.data("color",t),t},updateInput:function(t){if(t=t||this.color.toString(this.format),this.input!==!1){if(this.options.colorSelectors){var o=new e(t,this.options.colorSelectors),i=o.toAlias();"undefined"!=typeof this.options.colorSelectors[i]&&(t=i)}this.input.prop("value",t)}return t},updatePicker:function(t){void 0!==t&&(this.color=new e(t,this.options.colorSelectors));var o=this.options.horizontal===!1?this.options.sliders:this.options.slidersHorz,i=this.picker.find("i");return 0!==i.length?(this.options.horizontal===!1?(o=this.options.sliders,i.eq(1).css("top",o.hue.maxTop*(1-this.color.value.h)).end().eq(2).css("top",o.alpha.maxTop*(1-this.color.value.a))):(o=this.options.slidersHorz,i.eq(1).css("left",o.hue.maxLeft*(1-this.color.value.h)).end().eq(2).css("left",o.alpha.maxLeft*(1-this.color.value.a))),i.eq(0).css({top:o.saturation.maxTop-this.color.value.b*o.saturation.maxTop,left:this.color.value.s*o.saturation.maxLeft}),this.picker.find(".colorpicker-saturation").css("backgroundColor",this.color.toHex(this.color.value.h,1,1,1)),this.picker.find(".colorpicker-alpha").css("backgroundColor",this.color.toHex()),this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor",this.color.toString(this.format)),t):void 0},updateComponent:function(t){if(t=t||this.color.toString(this.format),this.component!==!1){var e=this.component.find("i").eq(0);e.length>0?e.css({backgroundColor:t}):this.component.css({backgroundColor:t})}return t},update:function(t){var e;return(this.getValue(!1)!==!1||t===!0)&&(e=this.updateComponent(),this.updateInput(e),this.updateData(e),this.updatePicker()),e},setValue:function(t){this.color=new e(t,this.options.colorSelectors),this.update(!0),this.element.trigger({type:"changeColor",color:this.color,value:t})},getValue:function(t){t=void 0===t?"#000000":t;var e;return e=this.hasInput()?this.input.val():this.element.data("color"),(void 0===e||""===e||null===e)&&(e=t),e},hasInput:function(){return this.input!==!1},isDisabled:function(){return this.hasInput()?this.input.prop("disabled")===!0:!1},disable:function(){return this.hasInput()?(this.input.prop("disabled",!0),this.element.trigger({type:"disable",color:this.color,value:this.getValue()}),!0):!1},enable:function(){return this.hasInput()?(this.input.prop("disabled",!1),this.element.trigger({type:"enable",color:this.color,value:this.getValue()}),!0):!1},currentSlider:null,mousePointer:{left:0,top:0},mousedown:function(e){e.pageX||e.pageY||!e.originalEvent||(e.pageX=e.originalEvent.touches[0].pageX,e.pageY=e.originalEvent.touches[0].pageY),e.stopPropagation(),e.preventDefault();var o=t(e.target),i=o.closest("div"),r=this.options.horizontal?this.options.slidersHorz:this.options.sliders;if(!i.is(".colorpicker")){if(i.is(".colorpicker-saturation"))this.currentSlider=t.extend({},r.saturation);else if(i.is(".colorpicker-hue"))this.currentSlider=t.extend({},r.hue);else{if(!i.is(".colorpicker-alpha"))return!1;this.currentSlider=t.extend({},r.alpha)}var s=i.offset();this.currentSlider.guide=i.find("i")[0].style,this.currentSlider.left=e.pageX-s.left,this.currentSlider.top=e.pageY-s.top,this.mousePointer={left:e.pageX,top:e.pageY},t(document).on({"mousemove.colorpicker":t.proxy(this.mousemove,this),"touchmove.colorpicker":t.proxy(this.mousemove,this),"mouseup.colorpicker":t.proxy(this.mouseup,this),"touchend.colorpicker":t.proxy(this.mouseup,this)}).trigger("mousemove")}return!1},mousemove:function(t){t.pageX||t.pageY||!t.originalEvent||(t.pageX=t.originalEvent.touches[0].pageX,t.pageY=t.originalEvent.touches[0].pageY),t.stopPropagation(),t.preventDefault();var e=Math.max(0,Math.min(this.currentSlider.maxLeft,this.currentSlider.left+((t.pageX||this.mousePointer.left)-this.mousePointer.left))),o=Math.max(0,Math.min(this.currentSlider.maxTop,this.currentSlider.top+((t.pageY||this.mousePointer.top)-this.mousePointer.top)));return this.currentSlider.guide.left=e+"px",this.currentSlider.guide.top=o+"px",this.currentSlider.callLeft&&this.color[this.currentSlider.callLeft].call(this.color,e/this.currentSlider.maxLeft),this.currentSlider.callTop&&this.color[this.currentSlider.callTop].call(this.color,o/this.currentSlider.maxTop),"setAlpha"===this.currentSlider.callTop&&this.options.format===!1&&(1!==this.color.value.a?(this.format="rgba",this.color.origFormat="rgba"):(this.format="hex",this.color.origFormat="hex")),this.update(!0),this.element.trigger({type:"changeColor",color:this.color}),!1},mouseup:function(e){return e.stopPropagation(),e.preventDefault(),t(document).off({"mousemove.colorpicker":this.mousemove,"touchmove.colorpicker":this.mousemove,"mouseup.colorpicker":this.mouseup,"touchend.colorpicker":this.mouseup}),!1},change:function(t){this.keyup(t)},keyup:function(t){38===t.keyCode?(this.color.value.a<1&&(this.color.value.a=Math.round(100*(this.color.value.a+.01))/100),this.update(!0)):40===t.keyCode?(this.color.value.a>0&&(this.color.value.a=Math.round(100*(this.color.value.a-.01))/100),this.update(!0)):(this.color=new e(this.input.val(),this.options.colorSelectors),this.color.origFormat&&this.options.format===!1&&(this.format=this.color.origFormat),this.getValue(!1)!==!1&&(this.updateData(),this.updateComponent(),this.updatePicker())),this.element.trigger({type:"changeColor",color:this.color,value:this.input.val()})}},t.colorpicker=i,t.fn.colorpicker=function(e){var o,r=arguments,s=this.each(function(){var s=t(this),n=s.data("colorpicker"),a="object"==typeof e?e:{};n||"string"==typeof e?"string"==typeof e&&(o=n[e].apply(n,Array.prototype.slice.call(r,1))):s.data("colorpicker",new i(this,a))});return"getValue"===e?o:s},t.fn.colorpicker.constructor=i}),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),r=i.data("bs.toggle"),s="object"==typeof e&&e;r||i.data("bs.toggle",r=new o(this,s)),"string"==typeof e&&r[e]&&r[e]()})}var o=function(e,o){this.$element=t(e),this.options=t.extend({},this.defaults(),o),this.render()};o.VERSION="2.2.0",o.DEFAULTS={on:"On",off:"Off",onstyle:"primary",offstyle:"default",size:"normal",style:"",width:null,height:null},o.prototype.defaults=function(){return{on:this.$element.attr("data-on")||o.DEFAULTS.on,off:this.$element.attr("data-off")||o.DEFAULTS.off,onstyle:this.$element.attr("data-onstyle")||o.DEFAULTS.onstyle,offstyle:this.$element.attr("data-offstyle")||o.DEFAULTS.offstyle,size:this.$element.attr("data-size")||o.DEFAULTS.size,style:this.$element.attr("data-style")||o.DEFAULTS.style,width:this.$element.attr("data-width")||o.DEFAULTS.width,height:this.$element.attr("data-height")||o.DEFAULTS.height}},o.prototype.render=function(){this._onstyle="btn-"+this.options.onstyle,this._offstyle="btn-"+this.options.offstyle;var e="large"===this.options.size?"btn-lg":"small"===this.options.size?"btn-sm":"mini"===this.options.size?"btn-xs":"",o=t('<label class="btn">').html(this.options.on).addClass(this._onstyle+" "+e),i=t('<label class="btn">').html(this.options.off).addClass(this._offstyle+" "+e+" active"),r=t('<span class="toggle-handle btn btn-default">').addClass(e),s=t('<div class="toggle-group">').append(o,i,r),n=t('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop("checked")?this._onstyle:this._offstyle+" off").addClass(e).addClass(this.options.style);this.$element.wrap(n),t.extend(this,{$toggle:this.$element.parent(),$toggleOn:o,$toggleOff:i,$toggleGroup:s}),this.$toggle.append(s);var a=this.options.width||Math.max(o.outerWidth(),i.outerWidth())+r.outerWidth()/2,l=this.options.height||Math.max(o.outerHeight(),i.outerHeight());o.addClass("toggle-on"),i.addClass("toggle-off"),this.$toggle.css({width:a,height:l}),this.options.height&&(o.css("line-height",o.height()+"px"),i.css("line-height",i.height()+"px")),this.update(!0),this.trigger(!0)},o.prototype.toggle=function(){this.$element.prop("checked")?this.off():this.on()},o.prototype.on=function(t){return this.$element.prop("disabled")?!1:(this.$toggle.removeClass(this._offstyle+" off").addClass(this._onstyle),this.$element.prop("checked",!0),void(t||this.trigger()))},o.prototype.off=function(t){return this.$element.prop("disabled")?!1:(this.$toggle.removeClass(this._onstyle).addClass(this._offstyle+" off"),this.$element.prop("checked",!1),void(t||this.trigger()))},o.prototype.enable=function(){this.$toggle.removeAttr("disabled"),this.$element.prop("disabled",!1)},o.prototype.disable=function(){this.$toggle.attr("disabled","disabled"),this.$element.prop("disabled",!0)},o.prototype.update=function(t){this.$element.prop("disabled")?this.disable():this.enable(),this.$element.prop("checked")?this.on(t):this.off(t)},o.prototype.trigger=function(e){this.$element.off("change.bs.toggle"),e||this.$element.change(),this.$element.on("change.bs.toggle",t.proxy(function(){this.update()},this))},o.prototype.destroy=function(){this.$element.off("change.bs.toggle"),this.$toggleGroup.remove(),this.$element.removeData("bs.toggle"),this.$element.unwrap()};var i=t.fn.bootstrapToggle;t.fn.bootstrapToggle=e,t.fn.bootstrapToggle.Constructor=o,t.fn.toggle.noConflict=function(){return t.fn.bootstrapToggle=i,this},t(function(){t("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle()}),t(document).on("click.bs.toggle","div[data-toggle^=toggle]",function(e){var o=t(this).find("input[type=checkbox]");o.bootstrapToggle("toggle"),e.preventDefault()})}(jQuery);