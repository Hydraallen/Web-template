!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,(()=>(()=>{"use strict";var e={737:(e,t)=>{
/*
 * HSBasePlugin
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */
Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,n){this.el=e,this.options=t,this.events=n,this.el=e,this.options=t,this.events={}}return e.prototype.createCollection=function(e,t){var n;e.push({id:(null===(n=null==t?void 0:t.el)||void 0===n?void 0:n.id)||e.length+1,element:t})},e.prototype.fireEvent=function(e,t){if(void 0===t&&(t=null),this.events.hasOwnProperty(e))return this.events[e](t)},e.prototype.on=function(e,t){this.events[e]=t},e}();t.default=n},557:function(e,t,n){var o,i=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t,n){var o=e.call(this,t,n)||this,i=t.getAttribute("data-hs-theme-switch"),a=i?JSON.parse(i):{},c=r(r({},a),n);return o.theme=(null==c?void 0:c.theme)||localStorage.getItem("hs_theme")||"default",o.themeSet=["dark","light","default"],o.init(),o}return i(t,e),t.prototype.init=function(){this.createCollection(window.$hsThemeSwitchCollection,this),"default"!==this.theme&&this.setAppearance()},t.prototype.setResetStyles=function(){var e=document.createElement("style");return e.innerText="*{transition: unset !important;}",e.setAttribute("data-hs-appearance-onload-styles",""),document.head.appendChild(e),e},t.prototype.setAppearance=function(e,t,n){void 0===e&&(e=this.theme),void 0===t&&(t=!0),void 0===n&&(n=!0);var o=this.setResetStyles(),i=document.querySelector("html");t&&localStorage.setItem("hs_theme",e),"auto"===e&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"default"),i.classList.remove("dark","default","auto"),i.classList.add(e),setTimeout((function(){return o.remove()})),n&&window.dispatchEvent(new CustomEvent("on-hs-appearance-change",{detail:e}))},t.getInstance=function(e){var t=window.$hsThemeSwitchCollection.find((function(t){return t.element.el===("string"==typeof e?document.querySelector(e):e)}));return t?t.element:null},t.autoInit=function(){window.$hsThemeSwitchCollection||(window.$hsThemeSwitchCollection=[]),document.querySelectorAll("[data-hs-theme-switch]:not(.--prevent-on-load-init)").forEach((function(e){if(!window.$hsThemeSwitchCollection.find((function(t){var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))){var n=new t(e);n.el.checked="dark"===n.theme,n.el.addEventListener("change",(function(e){n.setAppearance(e.target.checked?"dark":"default")}))}})),document.querySelectorAll("[data-hs-theme-click-value]:not(.--prevent-on-load-init)").forEach((function(e){var n=e.getAttribute("data-hs-theme-click-value"),o=new t(e);o.el.addEventListener("click",(function(){return o.setAppearance(n)}))}))},t}(n(737).default);window.addEventListener("load",(function(){a.autoInit()})),window.$hsThemeSwitchCollection&&window.addEventListener("on-hs-appearance-change",(function(e){window.$hsThemeSwitchCollection.forEach((function(t){t.element.el.checked="dark"===e.detail}))})),"undefined"!=typeof window&&(window.HSThemeSwitch=a),t.default=a}},t={};var n=function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(557);return n})()));