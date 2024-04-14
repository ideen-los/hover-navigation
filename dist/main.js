/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Inter Tight", sans-serif;
  letter-spacing: 0.3px;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
}

/*######################################################################
  Wrapper for the UI items
#######################################################################*/
.ui-interactions-dropdown-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 100vh;
  flex-shrink: 0;
}

.ui-interactions-mobile-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 100vh;
  width: 100%;
  max-width: 1000px;
  flex-shrink: 0;
  overflow: hidden;
  background-color: cornflowerblue;
}

/*######################################################################
  Dropdown menu CSS
#######################################################################*/
header.dropdown-menu-header {
  display: flex;
  justify-content: center;
}

.nav {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
}

.dropdown-menu-wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  width: 100%;
  color: #bbb;
}

.dropdown-menu-item {
  margin: 0;
  padding: 0;
  list-style: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-5px);
  }
}
.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

.fade-out {
  opacity: 1;
  animation: fadeOut 0.3s ease forwards;
}

.dropdown-content {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  max-height: 0;
  margin: -55px 0 0;
  padding: 0;
  font-size: 1rem;
  list-style: none;
  visibility: hidden;
  opacity: 0;
  z-index: -1;
  cursor: default;
  background-color: #16161a;
}
.dropdown-content li {
  max-width: 500px;
  padding: 0.5rem 2rem;
  margin: 0 auto;
  font-weight: bold;
  opacity: 0;
}
.dropdown-content li a {
  text-decoration: none;
  color: #ddd;
  transition: all 0.3s ease;
}
.dropdown-content li a:hover {
  color: #fff;
}

.visible .dropdown-content {
  max-height: 50vh;
  visibility: visible;
  opacity: 1;
  padding: 5.5rem 0 5rem;
  transition: all 0.25s ease-out 0.2s;
}

.is-active .dropdown-content {
  max-height: 50vh;
  visibility: visible;
  opacity: 1;
  padding: 5.5rem 0 5rem;
  transition: none;
}
.is-active .dropdown-content li {
  opacity: 1;
}

.hidden .dropdown-content {
  max-height: 0;
  padding: 0;
  visibility: hidden;
  opacity: 0;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: all 0.2s ease-in 0.1s, opacity 0.2s ease 0.2s;
}
.hidden .dropdown-content li {
  opacity: 0;
  animation: fadeOut 0.2s ease forwards;
}

.dropdown-trigger {
  padding: 1.3rem 2rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 1s ease;
}
.dropdown-trigger:hover {
  color: #eee;
}

.disable-interaction,
.disable-interaction li {
  pointer-events: none;
}

#content1 {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
#content1 img {
  height: 100%;
  object-fit: cover;
  max-width: 100%;
}

.dropdown-menu-backdrop {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  z-index: 0;
}
.dropdown-menu-backdrop.menu-is-active {
  opacity: 1;
  transition: opacity 0.3s ease-in-out 0.2s;
}
.dropdown-menu-backdrop.menu-is-inactive {
  transition: opacity 0.3s ease 0.15s;
}

/*######################################################################
  Mobile menu CSS
#######################################################################*/
#content2 img {
  max-width: 100%;
}

.burger-wrapper {
  position: absolute;
  top: 30px;
  right: 40px;
  margin: auto;
  width: 40px;
  height: 32px;
  cursor: pointer;
  z-index: 2;
}
.burger-wrapper .hamburger {
  background: #ffc003;
  width: 40px;
  height: 4px;
  position: relative;
  transition: background 10ms 250ms ease;
  transform: translateY(16px);
}
.burger-wrapper .hamburger:before, .burger-wrapper .hamburger:after {
  transition: top 250ms 300ms ease, transform 250ms ease, background 250ms 300ms;
  position: absolute;
  background: #ffc003;
  width: 40px;
  height: 4px;
  content: "";
}
.burger-wrapper .hamburger:before {
  top: -12px;
}
.burger-wrapper .hamburger:after {
  top: 12px;
}

.menu-trigger:checked ~ .burger-wrapper .hamburger {
  background: transparent;
}
.menu-trigger:checked ~ .burger-wrapper .hamburger:after, .menu-trigger:checked ~ .burger-wrapper .hamburger:before {
  transition: top 250ms ease, transform 250ms 300ms ease, background 250ms 300ms;
  top: 0;
}
.menu-trigger:checked ~ .burger-wrapper .hamburger:before {
  transform: rotate(45deg);
  background: #fff;
}
.menu-trigger:checked ~ .burger-wrapper .hamburger:after {
  transform: rotate(-45deg);
  background: #fff;
}

.hamburger-hidden {
  display: none;
}

#flyout-menu {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  padding: 6rem 0 0 6rem;
  width: 900px;
  max-width: 80%;
  height: 100%;
  z-index: 1;
  background-color: #e6b353;
  box-shadow: rgba(0, 0, 0, 0.2) -18px 0 50px -10px;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
}
#flyout-menu.toggled {
  transform: translateX(0);
}

.hamburger-menu-item {
  margin: 3rem 0 0;
  max-width: 82%;
  list-style: none;
  color: #fff;
  opacity: 0;
  animation: fadeOut 0.45s ease forwards;
  cursor: pointer;
}

.toggled .hamburger-menu-item {
  animation: fadeIn 0.6s ease forwards;
}
.toggled .hamburger-menu-item:nth-child(1) {
  animation-delay: 0.32s;
}
.toggled .hamburger-menu-item:nth-child(2) {
  animation-delay: 0.42s;
}
.toggled .hamburger-menu-item:nth-child(3) {
  animation-delay: 0.52s;
}
.toggled .hamburger-menu-item:nth-child(4) {
  animation-delay: 0.62s;
}
.toggled .hamburger-menu-item:nth-child(5) {
  animation-delay: 0.72s;
}

.hamburger-menu-item.dropdown:after {
  content: "▼";
  color: #ffecc8;
  position: absolute;
  right: 0;
  top: 19px;
  width: 10px;
  height: 10px;
}

.hamburger-content {
  visibility: hidden;
  height: 0;
  opacity: 0;
  list-style: none;
  font-size: 0.8em;
}
.hamburger-content li {
  padding: 0.5em 0 0;
}
.hamburger-content li a {
  color: #fff;
  text-decoration: none;
}

.is-active .hamburger-content {
  padding: 1rem 0 0;
  visibility: visible;
  height: auto;
  opacity: 1;
}

.hamburger-trigger {
  font-size: 2rem;
}

.dropdown .hamburger-trigger > span {
  display: block;
  padding: 0 0 10px;
  border-bottom: 1px solid #eeca86;
}

#menu-backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s 0.3s;
}
#menu-backdrop.show {
  opacity: 1;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$menu-width: 500px;\n$menu-max-height: 50vh;\n$menu-background-color: #16161a;\n$nav-items-color: #bbb;\n$nav-items-hover-color: #eee;\n$menu-items-color: #ddd;\n$menu-items-hover-color: #fff;\n$menu-content-padding: 5.5rem 0 5rem;\n\n@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap');\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n\n  font-family: 'Inter Tight', sans-serif;\n  letter-spacing: 0.3px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #000;\n}\n\n/*######################################################################\n  Wrapper for the UI items\n#######################################################################*/\n\n.ui-interactions-dropdown-menu {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  flex-basis: 100vh;\n  flex-shrink: 0;\n}\n\n.ui-interactions-mobile-menu {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  flex-basis: 100vh;\n  width: 100%;\n  max-width: 1000px;\n  flex-shrink: 0;\n\n  overflow: hidden;\n  background-color: cornflowerblue;\n}\n\n/*######################################################################\n  Dropdown menu CSS\n#######################################################################*/\n\nheader.dropdown-menu-header {\n  display: flex;\n  justify-content: center;\n}\n\n.nav {\n  position: relative;\n  display: flex;\n  justify-content: center;\n\n  width: 100%;\n\n  z-index: 1;\n}\n\n.dropdown-menu-wrapper {\n  display: flex;\n  justify-content: space-between;\n\n  max-width: $menu-width;\n  width: 100%;\n\n  color: $nav-items-color;\n}\n\n.dropdown-menu-item {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-3px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n}\n\n.fade-in {\n  opacity: 0;\n  animation: fadeIn 0.5s ease-out forwards;\n}\n.fade-out {\n  opacity: 1;\n  animation: fadeOut 0.3s ease forwards;\n}\n\n.dropdown-content {\n  position: absolute;\n  left: 0;\n  top: 100%;\n\n  width: 100%;\n  max-height: 0;\n  margin: -55px 0 0;\n  padding: 0;\n\n  font-size: 1rem;\n  list-style: none;\n  visibility: hidden;\n  opacity: 0;\n  z-index: -1;\n\n  cursor: default;\n  background-color: $menu-background-color;\n\n  li {\n    max-width: $menu-width;\n\n    padding: 0.5rem 2rem;\n    margin: 0 auto;\n\n    font-weight: bold;\n    opacity: 0;\n\n    a {\n      text-decoration: none;\n      color: $menu-items-color;\n\n      transition: all 0.3s ease;\n\n      &:hover {\n        color: $menu-items-hover-color;\n      }\n    }\n  }\n}\n\n.visible .dropdown-content {\n  max-height: $menu-max-height;\n  visibility: visible;\n  opacity: 1;\n  padding: $menu-content-padding;\n  transition: all 0.25s ease-out 0.2s;\n}\n\n.is-active .dropdown-content {\n  max-height: $menu-max-height;\n  visibility: visible;\n  opacity: 1;\n  padding: $menu-content-padding;\n  transition: none;\n\n  li {\n    opacity: 1;\n  }\n}\n\n.hidden .dropdown-content {\n  max-height: 0;\n  padding: 0;\n\n  visibility: hidden;\n  opacity: 0;\n\n  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;\n  transition: all 0.2s ease-in 0.1s, opacity 0.2s ease 0.2s;\n\n  li {\n    opacity: 0;\n    animation: fadeOut 0.2s ease forwards;\n  }\n}\n\n.dropdown-trigger {\n  padding: 1.3rem 2rem 1rem;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 1s ease;\n\n  &:hover {\n    color: $nav-items-hover-color;\n  }\n}\n\n.disable-interaction,\n.disable-interaction li {\n  pointer-events: none;\n}\n\n#content1 {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    height: 100%;\n    object-fit: cover;\n    max-width: 100%;\n  }\n}\n\n.dropdown-menu-backdrop {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(20px);\n  z-index: 0;\n\n  &.menu-is-active {\n    opacity: 1;\n    transition: opacity 0.3s ease-in-out 0.2s;\n  }\n  &.menu-is-inactive {\n    transition: opacity 0.3s ease 0.15s;\n  }\n}\n\n/*######################################################################\n  Mobile menu CSS\n#######################################################################*/\n\n#content2 {\n  img {\n    max-width: 100%;\n  }\n}\n\n$s: 4px;\n\n.burger-wrapper {\n  position: absolute;\n  top: 30px;\n  right: 40px;\n  margin: auto;\n  width: $s * 10;\n  height: $s * 8;\n\n  cursor: pointer;\n  z-index: 2;\n\n  .hamburger {\n    background: #ffc003;\n    width: $s * 10;\n    height: $s;\n    position: relative;\n    transition: background 10ms 250ms ease;\n    transform: translateY($s * 4);\n\n    &:before,\n    &:after {\n      transition: top 250ms 300ms ease, transform 250ms ease, background 250ms 300ms;\n      position: absolute;\n      background: #ffc003;\n      width: $s * 10;\n      height: $s;\n      content: '';\n    }\n\n    &:before {\n      top: $s * -3;\n    }\n\n    &:after {\n      top: $s * 3;\n    }\n  }\n}\n\n.menu-trigger:checked {\n  ~ .burger-wrapper {\n    .hamburger {\n      background: transparent;\n      &:after,\n      &:before {\n        transition: top 250ms ease, transform 250ms 300ms ease, background 250ms 300ms;\n        top: 0;\n      }\n      &:before {\n        transform: rotate(45deg);\n        background: #fff;\n      }\n      &:after {\n        transform: rotate(-45deg);\n        background: #fff;\n      }\n    }\n  }\n}\n\n.hamburger-hidden {\n  display: none;\n}\n\n#flyout-menu {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translateX(100%);\n\n  padding: 6rem 0 0 6rem;\n  width: 900px;\n  max-width: 80%;\n  height: 100%;\n\n  z-index: 1;\n  background-color: #e6b353;\n  box-shadow: rgba(0, 0, 0, 0.2) -18px 0 50px -10px;\n\n  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1) 0.3s;\n  &.toggled {\n    transform: translateX(0);\n  }\n}\n\n.hamburger-menu-item {\n  margin: 3rem 0 0;\n  max-width: 82%;\n\n  list-style: none;\n  color: #fff;\n  opacity: 0;\n  animation: fadeOut 0.45s ease forwards;\n  cursor: pointer;\n}\n\n.toggled .hamburger-menu-item {\n  animation: fadeIn 0.6s ease forwards;\n\n  @for $i from 1 through 5 {\n    &:nth-child(#{$i}) {\n      animation-delay: 0.22s + (0.1s * $i);\n    }\n  }\n}\n\n.hamburger-menu-item.dropdown {\n  &:after {\n    content: '▼';\n    color: #ffecc8;\n    position: absolute;\n    right: 0;\n    top: 19px;\n    width: 10px;\n    height: 10px;\n  }\n}\n\n.hamburger-content {\n  visibility: hidden;\n  height: 0;\n  opacity: 0;\n\n  list-style: none;\n  font-size: 0.8em;\n\n  li {\n    padding: 0.5em 0 0;\n\n    a {\n      color: #fff;\n      text-decoration: none;\n    }\n  }\n}\n\n.is-active .hamburger-content {\n  padding: 1rem 0 0;\n  visibility: visible;\n  height: auto;\n  opacity: 1;\n}\n\n.hamburger-trigger {\n  font-size: 2rem;\n}\n\n.dropdown .hamburger-trigger > span {\n  display: block;\n  padding: 0 0 10px;\n  border-bottom: 1px solid #eeca86;\n}\n\n#menu-backdrop {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  z-index: 0;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n\n  transition: opacity 0.3s 0.3s;\n\n  &.show {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dropdown-menu.js":
/*!******************************!*\
  !*** ./src/dropdown-menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   triggerDropdown: () => (/* binding */ triggerDropdown)
/* harmony export */ });
const triggerDropdown = function triggerDropdown() {
  const navs = document.querySelectorAll('.nav');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu-item');
  const menuBackdrop = document.querySelector('.dropdown-menu-backdrop');
  let menuIsActive = false;

  dropdownMenus.forEach((menu) => {
    menu.addEventListener('mouseenter', (event) => {
      const isExpanded = menu.getAttribute('aria-expanded') === 'true';
      const menuContent = menu.querySelector('.dropdown-content');
      const menuItems = menuContent.querySelectorAll('li');

      // Sets all menus aria-expanded attribute to false
      dropdownMenus.forEach((menu) => {
        menu.setAttribute('aria-expanded', false);
      });

      // Sets the active menu's aria-expanded attribute to true
      menu.setAttribute('aria-expanded', !isExpanded);

      if (!menuIsActive) {
        dropdownMenus.forEach((menu) => {
          menu.classList.remove('visible');
          menu.classList.remove('hidden');
          menu.classList.remove('is-active');
        });

        menu.classList.add('visible');
        menuBackdrop.classList.add('menu-is-active');
        menuIsActive = true;

        menuItems.forEach((item, index) => {
          item.style.animation = '';

          setTimeout(() => {
            setTimeout(() => {
              item.classList.add('fade-in');
              // Ensure animation only plays forwards to keep element visible after animation
              item.style.animationFillMode = 'forwards';
            }, index * 40);
          }, 320);
        });
      } else {
        dropdownMenus.forEach((menu) => {
          menu.classList.remove('visible');
          menu.classList.remove('hidden');
          menu.classList.remove('is-active');
        });

        menu.classList.toggle('is-active');
      }
    });
  });

  navs.forEach((nav) => {
    nav.addEventListener('mouseleave', (event) => {
      dropdownMenus.forEach((menu) => {
        if (nav.contains(menu)) {
          const menuContent = menu.querySelector('.dropdown-content');
          const menuItems = menuContent.querySelectorAll('li');
          const itemCount = menuItems.length; // Get the total number of items

          menu.classList.add('disable-interaction'); // Disable interactions
          menu.classList.remove('visible');
          menu.classList.add('hidden');
          menu.classList.remove('is-active');
          menu.setAttribute('aria-expanded', false);

          menuItems.forEach((item, index) => {
            item.style.animation = '';

            setTimeout(() => {
              // Set timeout to remove the classes after all animations are complete
              setTimeout(() => {
                item.classList.remove('fade-out');
                item.classList.remove('fade-in');
                item.style.animationFillMode = '';

                // Start of modifications
                if (index === itemCount - 1) {
                  // Check if it's the last item
                  setTimeout(() => {
                    menu.classList.remove('disable-interaction'); // Re-enable interactions
                  }, 100);
                }
              }, 100);
            }, 30);
          });
        }
      });

      menuBackdrop.classList.remove('menu-is-active');
      menuBackdrop.classList.add('menu-is-inactive');
      setTimeout(() => {
        menuBackdrop.classList.remove('menu-is-inactive');
      }, 350);

      menuIsActive = false;
    });
  });
};


/***/ }),

/***/ "./src/mobile-menu.js":
/*!****************************!*\
  !*** ./src/mobile-menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   triggerFlyoutMenu: () => (/* binding */ triggerFlyoutMenu),
/* harmony export */   triggerMobileDropdown: () => (/* binding */ triggerMobileDropdown)
/* harmony export */ });
const triggerFlyoutMenu = function triggerFlyoutMenu() {
  const hamburger = document.querySelector('#togglenav');
  const flyout = document.querySelector('#flyout-menu');
  const backdrop = document.querySelector('#menu-backdrop');

  hamburger.addEventListener('change', () => {
    if (hamburger.checked) {
      if (!flyout.classList.contains('toggled')) {
        flyout.classList.add('toggled');
        backdrop.classList.add('show');
      }
    } else {
      flyout.classList.remove('toggled');
      backdrop.classList.remove('show');
    }
  });
};

const triggerMobileDropdown = function triggerMobileDropdown() {
  const dropdowns = document.querySelectorAll('.hamburger-menu-item.dropdown');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
      if (!dropdown.classList.contains('is-active')) {
        dropdowns.forEach((dropdown) => {
          if (dropdown.classList.contains('is-active')) {
            dropdown.classList.remove('is-active');
          }
        });
        dropdown.classList.add('is-active');
      } else {
        dropdown.classList.remove('is-active');
      }
    });
  });
};


/***/ }),

/***/ "./src/img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg":
/*!********************************************************!*\
  !*** ./src/img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1044ac32bab27e83cc48.jpg";

/***/ }),

/***/ "./src/img/sourav-ek-pm0O5YpXeAo-unsplash.jpg":
/*!****************************************************!*\
  !*** ./src/img/sourav-ek-pm0O5YpXeAo-unsplash.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6214f2d825c32c9b1d53.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _img_ales_nesetril_Im7lZjxeLhg_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg */ "./src/img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg");
/* harmony import */ var _img_sourav_ek_pm0O5YpXeAo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/sourav-ek-pm0O5YpXeAo-unsplash.jpg */ "./src/img/sourav-ek-pm0O5YpXeAo-unsplash.jpg");
/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-menu */ "./src/dropdown-menu.js");
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu */ "./src/mobile-menu.js");






(0,_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.triggerDropdown)();
const content1 = document.getElementById('content1');
const img1 = new Image();
img1.src = _img_ales_nesetril_Im7lZjxeLhg_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__;
content1.appendChild(img1);

(0,_mobile_menu__WEBPACK_IMPORTED_MODULE_4__.triggerFlyoutMenu)();
(0,_mobile_menu__WEBPACK_IMPORTED_MODULE_4__.triggerMobileDropdown)();
const content2 = document.getElementById('content2');
const img2 = new Image();
img2.src = _img_sourav_ek_pm0O5YpXeAo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__;
content2.appendChild(img2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdJQUFnSSx5QkFBeUI7QUFDeko7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLFFBQVEsTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLGFBQWEsT0FBTyxNQUFNLFlBQVksWUFBWSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksUUFBUSxNQUFNLGFBQWEsYUFBYSxVQUFVLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxhQUFhLFVBQVUsYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFFBQVEsT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSw2Q0FBNkMseUJBQXlCLGtDQUFrQyx5QkFBeUIsK0JBQStCLDBCQUEwQixnQ0FBZ0MsdUNBQXVDLDJGQUEyRiwwQkFBMEIsT0FBTywyQkFBMkIsR0FBRyxpQkFBaUIsY0FBYyxlQUFlLGlCQUFpQiw2Q0FBNkMsMEJBQTBCLEdBQUcsVUFBVSxrQkFBa0IsMkJBQTJCLHdCQUF3QiwyQkFBMkIsR0FBRyx1TkFBdU4sdUJBQXVCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLG1CQUFtQixHQUFHLGtDQUFrQyx1QkFBdUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0JBQWdCLHNCQUFzQixtQkFBbUIsdUJBQXVCLHFDQUFxQyxHQUFHLDZNQUE2TSxrQkFBa0IsNEJBQTRCLEdBQUcsVUFBVSx1QkFBdUIsa0JBQWtCLDRCQUE0QixrQkFBa0IsaUJBQWlCLEdBQUcsNEJBQTRCLGtCQUFrQixtQ0FBbUMsNkJBQTZCLGdCQUFnQiw4QkFBOEIsR0FBRyx5QkFBeUIsY0FBYyxlQUFlLHFCQUFxQixHQUFHLHVCQUF1QixVQUFVLGlCQUFpQixrQ0FBa0MsS0FBSyxRQUFRLGlCQUFpQiwrQkFBK0IsS0FBSyxHQUFHLHNCQUFzQixVQUFVLGlCQUFpQiwrQkFBK0IsS0FBSyxRQUFRLGlCQUFpQixrQ0FBa0MsS0FBSyxHQUFHLGNBQWMsZUFBZSw2Q0FBNkMsR0FBRyxhQUFhLGVBQWUsMENBQTBDLEdBQUcsdUJBQXVCLHVCQUF1QixZQUFZLGNBQWMsa0JBQWtCLGtCQUFrQixzQkFBc0IsZUFBZSxzQkFBc0IscUJBQXFCLHVCQUF1QixlQUFlLGdCQUFnQixzQkFBc0IsNkNBQTZDLFVBQVUsNkJBQTZCLDZCQUE2QixxQkFBcUIsMEJBQTBCLGlCQUFpQixXQUFXLDhCQUE4QixpQ0FBaUMsb0NBQW9DLG1CQUFtQix5Q0FBeUMsU0FBUyxPQUFPLEtBQUssR0FBRyxnQ0FBZ0MsaUNBQWlDLHdCQUF3QixlQUFlLG1DQUFtQyx3Q0FBd0MsR0FBRyxrQ0FBa0MsaUNBQWlDLHdCQUF3QixlQUFlLG1DQUFtQyxxQkFBcUIsVUFBVSxpQkFBaUIsS0FBSyxHQUFHLCtCQUErQixrQkFBa0IsZUFBZSx5QkFBeUIsZUFBZSw0REFBNEQsOERBQThELFVBQVUsaUJBQWlCLDRDQUE0QyxLQUFLLEdBQUcsdUJBQXVCLDhCQUE4QixzQkFBc0Isb0JBQW9CLDRCQUE0QixlQUFlLG9DQUFvQyxLQUFLLEdBQUcsb0RBQW9ELHlCQUF5QixHQUFHLGVBQWUsa0JBQWtCLGlCQUFpQix3QkFBd0IsNEJBQTRCLFdBQVcsbUJBQW1CLHdCQUF3QixzQkFBc0IsS0FBSyxHQUFHLDZCQUE2QixvQkFBb0IsV0FBVyxnQkFBZ0IsaUJBQWlCLGlCQUFpQix5Q0FBeUMsZ0NBQWdDLGVBQWUsd0JBQXdCLGlCQUFpQixnREFBZ0QsS0FBSyx3QkFBd0IsMENBQTBDLEtBQUssR0FBRyx5TEFBeUwsU0FBUyxzQkFBc0IsS0FBSyxHQUFHLFlBQVkscUJBQXFCLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsbUJBQW1CLG1CQUFtQixzQkFBc0IsZUFBZSxrQkFBa0IsMEJBQTBCLHFCQUFxQixpQkFBaUIseUJBQXlCLDZDQUE2QyxvQ0FBb0MsZ0NBQWdDLHVGQUF1RiwyQkFBMkIsNEJBQTRCLHVCQUF1QixtQkFBbUIsb0JBQW9CLE9BQU8sa0JBQWtCLHFCQUFxQixPQUFPLGlCQUFpQixvQkFBb0IsT0FBTyxLQUFLLEdBQUcsMkJBQTJCLHVCQUF1QixrQkFBa0IsZ0NBQWdDLGtDQUFrQyx5RkFBeUYsaUJBQWlCLFNBQVMsa0JBQWtCLG1DQUFtQywyQkFBMkIsU0FBUyxpQkFBaUIsb0NBQW9DLDJCQUEyQixTQUFTLE9BQU8sS0FBSyxHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxrQkFBa0IsdUJBQXVCLFdBQVcsYUFBYSxnQ0FBZ0MsNkJBQTZCLGlCQUFpQixtQkFBbUIsaUJBQWlCLGlCQUFpQiw4QkFBOEIsc0RBQXNELHFFQUFxRSxlQUFlLCtCQUErQixLQUFLLEdBQUcsMEJBQTBCLHFCQUFxQixtQkFBbUIsdUJBQXVCLGdCQUFnQixlQUFlLDJDQUEyQyxvQkFBb0IsR0FBRyxtQ0FBbUMseUNBQXlDLGdDQUFnQyxvQkFBb0IsR0FBRyxHQUFHLDZDQUE2QyxPQUFPLEtBQUssR0FBRyxtQ0FBbUMsYUFBYSxtQkFBbUIscUJBQXFCLHlCQUF5QixlQUFlLGdCQUFnQixrQkFBa0IsbUJBQW1CLEtBQUssR0FBRyx3QkFBd0IsdUJBQXVCLGNBQWMsZUFBZSx1QkFBdUIscUJBQXFCLFVBQVUseUJBQXlCLFdBQVcsb0JBQW9CLDhCQUE4QixPQUFPLEtBQUssR0FBRyxtQ0FBbUMsc0JBQXNCLHdCQUF3QixpQkFBaUIsZUFBZSxHQUFHLHdCQUF3QixvQkFBb0IsR0FBRyx5Q0FBeUMsbUJBQW1CLHNCQUFzQixxQ0FBcUMsR0FBRyxvQkFBb0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGVBQWUseUNBQXlDLG9DQUFvQyxjQUFjLGlCQUFpQixLQUFLLEdBQUcscUJBQXFCO0FBQzk2VTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzdYMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLDRIQUFPLFVBQVUsNEhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QyxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEUsbUJBQW1CO0FBQ25CO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3VEO0FBQ0o7QUFDdkI7QUFDdUI7O0FBRXpFLCtEQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVcsd0VBQWlCO0FBQzVCOztBQUVBLCtEQUFpQjtBQUNqQixtRUFBcUI7QUFDckI7QUFDQTtBQUNBLFdBQVcsb0VBQWlCO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy8uL3NyYy9kcm9wZG93bi1tZW51LmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zLy4vc3JjL21vYmlsZS1tZW51LmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmFjdGlvbnMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcitUaWdodDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyIFRpZ2h0XCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICBXcmFwcGVyIGZvciB0aGUgVUkgaXRlbXNcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cbi51aS1pbnRlcmFjdGlvbnMtZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1iYXNpczogMTAwdmg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udWktaW50ZXJhY3Rpb25zLW1vYmlsZS1tZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWJhc2lzOiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG5cbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICBEcm9wZG93biBtZW51IENTU1xuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xuaGVhZGVyLmRyb3Bkb3duLW1lbnUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cblxuLmRyb3Bkb3duLW1lbnUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjYmJiO1xufVxuXG4uZHJvcGRvd24tbWVudS1pdGVtIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICB9XG59XG4uZmFkZS1pbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi5mYWRlLW91dCB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbjogZmFkZU91dCAwLjNzIGVhc2UgZm9yd2FyZHM7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBtYXJnaW46IC01NXB4IDAgMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MWE7XG59XG4uZHJvcGRvd24tY29udGVudCBsaSB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDA7XG59XG4uZHJvcGRvd24tY29udGVudCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2RkZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5kcm9wZG93bi1jb250ZW50IGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnZpc2libGUgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiA1MHZoO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiA1LjVyZW0gMCA1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1vdXQgMC4ycztcbn1cblxuLmlzLWFjdGl2ZSAuZHJvcGRvd24tY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDUuNXJlbSAwIDVyZW07XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG4uaXMtYWN0aXZlIC5kcm9wZG93bi1jb250ZW50IGxpIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhpZGRlbiAuZHJvcGRvd24tY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgYm94LXNoYWRvdzogcmdiYSgxNywgMTIsIDQ2LCAwLjE1KSAwcHggNDhweCAxMDBweCAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4gMC4xcywgb3BhY2l0eSAwLjJzIGVhc2UgMC4ycztcbn1cbi5oaWRkZW4gLmRyb3Bkb3duLWNvbnRlbnQgbGkge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVPdXQgMC4ycyBlYXNlIGZvcndhcmRzO1xufVxuXG4uZHJvcGRvd24tdHJpZ2dlciB7XG4gIHBhZGRpbmc6IDEuM3JlbSAycmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xufVxuLmRyb3Bkb3duLXRyaWdnZXI6aG92ZXIge1xuICBjb2xvcjogI2VlZTtcbn1cblxuLmRpc2FibGUtaW50ZXJhY3Rpb24sXG4uZGlzYWJsZS1pbnRlcmFjdGlvbiBsaSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jY29udGVudDEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI2NvbnRlbnQxIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmRyb3Bkb3duLW1lbnUtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIHotaW5kZXg6IDA7XG59XG4uZHJvcGRvd24tbWVudS1iYWNrZHJvcC5tZW51LWlzLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dCAwLjJzO1xufVxuLmRyb3Bkb3duLW1lbnUtYmFja2Ryb3AubWVudS1pcy1pbmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDAuMTVzO1xufVxuXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiAgTW9iaWxlIG1lbnUgQ1NTXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXG4jY29udGVudDIgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uYnVyZ2VyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyO1xufVxuLmJ1cmdlci13cmFwcGVyIC5oYW1idXJnZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZjMDAzO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxMG1zIDI1MG1zIGVhc2U7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNnB4KTtcbn1cbi5idXJnZXItd3JhcHBlciAuaGFtYnVyZ2VyOmJlZm9yZSwgLmJ1cmdlci13cmFwcGVyIC5oYW1idXJnZXI6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiB0b3AgMjUwbXMgMzAwbXMgZWFzZSwgdHJhbnNmb3JtIDI1MG1zIGVhc2UsIGJhY2tncm91bmQgMjUwbXMgMzAwbXM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmYzAwMztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNHB4O1xuICBjb250ZW50OiBcIlwiO1xufVxuLmJ1cmdlci13cmFwcGVyIC5oYW1idXJnZXI6YmVmb3JlIHtcbiAgdG9wOiAtMTJweDtcbn1cbi5idXJnZXItd3JhcHBlciAuaGFtYnVyZ2VyOmFmdGVyIHtcbiAgdG9wOiAxMnB4O1xufVxuXG4ubWVudS10cmlnZ2VyOmNoZWNrZWQgfiAuYnVyZ2VyLXdyYXBwZXIgLmhhbWJ1cmdlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1lbnUtdHJpZ2dlcjpjaGVja2VkIH4gLmJ1cmdlci13cmFwcGVyIC5oYW1idXJnZXI6YWZ0ZXIsIC5tZW51LXRyaWdnZXI6Y2hlY2tlZCB+IC5idXJnZXItd3JhcHBlciAuaGFtYnVyZ2VyOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IHRvcCAyNTBtcyBlYXNlLCB0cmFuc2Zvcm0gMjUwbXMgMzAwbXMgZWFzZSwgYmFja2dyb3VuZCAyNTBtcyAzMDBtcztcbiAgdG9wOiAwO1xufVxuLm1lbnUtdHJpZ2dlcjpjaGVja2VkIH4gLmJ1cmdlci13cmFwcGVyIC5oYW1idXJnZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm1lbnUtdHJpZ2dlcjpjaGVja2VkIH4gLmJ1cmdlci13cmFwcGVyIC5oYW1idXJnZXI6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uaGFtYnVyZ2VyLWhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNmbHlvdXQtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICBwYWRkaW5nOiA2cmVtIDAgMCA2cmVtO1xuICB3aWR0aDogOTAwcHg7XG4gIG1heC13aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmIzNTM7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAtMThweCAwIDUwcHggLTEwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKSAwLjNzO1xufVxuI2ZseW91dC1tZW51LnRvZ2dsZWQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5oYW1idXJnZXItbWVudS1pdGVtIHtcbiAgbWFyZ2luOiAzcmVtIDAgMDtcbiAgbWF4LXdpZHRoOiA4MiU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVPdXQgMC40NXMgZWFzZSBmb3J3YXJkcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9nZ2xlZCAuaGFtYnVyZ2VyLW1lbnUtaXRlbSB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNnMgZWFzZSBmb3J3YXJkcztcbn1cbi50b2dnbGVkIC5oYW1idXJnZXItbWVudS1pdGVtOm50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zMnM7XG59XG4udG9nZ2xlZCAuaGFtYnVyZ2VyLW1lbnUtaXRlbTpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNDJzO1xufVxuLnRvZ2dsZWQgLmhhbWJ1cmdlci1tZW51LWl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjUycztcbn1cbi50b2dnbGVkIC5oYW1idXJnZXItbWVudS1pdGVtOm50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42MnM7XG59XG4udG9nZ2xlZCAuaGFtYnVyZ2VyLW1lbnUtaXRlbTpudGgtY2hpbGQoNSkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNzJzO1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUtaXRlbS5kcm9wZG93bjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pa8XCI7XG4gIGNvbG9yOiAjZmZlY2M4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDE5cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5oYW1idXJnZXItY29udGVudCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLmhhbWJ1cmdlci1jb250ZW50IGxpIHtcbiAgcGFkZGluZzogMC41ZW0gMCAwO1xufVxuLmhhbWJ1cmdlci1jb250ZW50IGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaXMtYWN0aXZlIC5oYW1idXJnZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDFyZW0gMCAwO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5oYW1idXJnZXItdHJpZ2dlciB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmRyb3Bkb3duIC5oYW1idXJnZXItdHJpZ2dlciA+IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAwIDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVjYTg2O1xufVxuXG4jbWVudS1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgMC4zcztcbn1cbiNtZW51LWJhY2tkcm9wLnNob3cge1xuICBvcGFjaXR5OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBV2hCO0VBQ0Usc0JBQUE7QUFSRjs7QUFXQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFFQSxzQ0FBQTtFQUNBLHFCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBVEY7O0FBWUE7O3dFQUFBO0FBSUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtBQVhGOztBQWNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLGdDQUFBO0FBYkY7O0FBZ0JBOzt3RUFBQTtBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBZEY7O0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBRUEsVUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFFQSxnQkFsRlc7RUFtRlgsV0FBQTtFQUVBLFdBbEZnQjtBQWdFbEI7O0FBcUJBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWxCRjs7QUFxQkE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQWxCRjtFQW9CQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQWxCRjtBQUNGO0FBb0JBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Es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QUEwREk7RUFDRSxzQkFBQTtBQXhETjtBQXVESTtFQUNFLHNCQUFBO0FBckROO0FBb0RJO0VBQ0Usc0JBQUE7QUFsRE47QUFpREk7RUFDRSxzQkFBQTtBQS9DTjtBQThDSTtFQUNFLHNCQUFBO0FBNUNOOztBQWtERTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBL0NKOztBQW1EQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FBakRGO0FBbURFO0VBQ0Usa0JBQUE7QUFqREo7QUFtREk7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFqRE47O0FBc0RBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBbkRGOztBQXNEQTtFQUNFLGVBQUE7QUFuREY7O0FBc0RBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFuREY7O0FBc0RBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFFQSw2QkFBQTtBQXJERjtBQXVERTtFQUNFLFVBQUE7QUFyREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJG1lbnUtd2lkdGg6IDUwMHB4O1xcbiRtZW51LW1heC1oZWlnaHQ6IDUwdmg7XFxuJG1lbnUtYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxYTtcXG4kbmF2LWl0ZW1zLWNvbG9yOiAjYmJiO1xcbiRuYXYtaXRlbXMtaG92ZXItY29sb3I6ICNlZWU7XFxuJG1lbnUtaXRlbXMtY29sb3I6ICNkZGQ7XFxuJG1lbnUtaXRlbXMtaG92ZXItY29sb3I6ICNmZmY7XFxuJG1lbnUtY29udGVudC1wYWRkaW5nOiA1LjVyZW0gMCA1cmVtO1xcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyK1RpZ2h0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXIgVGlnaHQnLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcbiAgV3JhcHBlciBmb3IgdGhlIFVJIGl0ZW1zXFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xcblxcbi51aS1pbnRlcmFjdGlvbnMtZHJvcGRvd24tbWVudSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIGZsZXgtYmFzaXM6IDEwMHZoO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi51aS1pbnRlcmFjdGlvbnMtbW9iaWxlLW1lbnUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBmbGV4LWJhc2lzOiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBmbGV4LXNocmluazogMDtcXG5cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG59XFxuXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXFxuICBEcm9wZG93biBtZW51IENTU1xcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cXG5cXG5oZWFkZXIuZHJvcGRvd24tbWVudS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgbWF4LXdpZHRoOiAkbWVudS13aWR0aDtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgY29sb3I6ICRuYXYtaXRlbXMtY29sb3I7XFxufVxcblxcbi5kcm9wZG93bi1tZW51LWl0ZW0ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIH1cXG59XFxuXFxuLmZhZGUtaW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcbi5mYWRlLW91dCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuM3MgZWFzZSBmb3J3YXJkcztcXG59XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMTAwJTtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG1hcmdpbjogLTU1cHggMCAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogLTE7XFxuXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1iYWNrZ3JvdW5kLWNvbG9yO1xcblxcbiAgbGkge1xcbiAgICBtYXgtd2lkdGg6ICRtZW51LXdpZHRoO1xcblxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBvcGFjaXR5OiAwO1xcblxcbiAgICBhIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6ICRtZW51LWl0ZW1zLWNvbG9yO1xcblxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogJG1lbnUtaXRlbXMtaG92ZXItY29sb3I7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi52aXNpYmxlIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6ICRtZW51LW1heC1oZWlnaHQ7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBhZGRpbmc6ICRtZW51LWNvbnRlbnQtcGFkZGluZztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLW91dCAwLjJzO1xcbn1cXG5cXG4uaXMtYWN0aXZlIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6ICRtZW51LW1heC1oZWlnaHQ7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBhZGRpbmc6ICRtZW51LWNvbnRlbnQtcGFkZGluZztcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxuXFxuICBsaSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5oaWRkZW4gLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcblxcbiAgYm94LXNoYWRvdzogcmdiYSgxNywgMTIsIDQ2LCAwLjE1KSAwcHggNDhweCAxMDBweCAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluIDAuMXMsIG9wYWNpdHkgMC4ycyBlYXNlIDAuMnM7XFxuXFxuICBsaSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbjogZmFkZU91dCAwLjJzIGVhc2UgZm9yd2FyZHM7XFxuICB9XFxufVxcblxcbi5kcm9wZG93bi10cmlnZ2VyIHtcXG4gIHBhZGRpbmc6IDEuM3JlbSAycmVtIDFyZW07XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAkbmF2LWl0ZW1zLWhvdmVyLWNvbG9yO1xcbiAgfVxcbn1cXG5cXG4uZGlzYWJsZS1pbnRlcmFjdGlvbixcXG4uZGlzYWJsZS1pbnRlcmFjdGlvbiBsaSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBpbWcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5kcm9wZG93bi1tZW51LWJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgb3BhY2l0eTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG4gIHotaW5kZXg6IDA7XFxuXFxuICAmLm1lbnUtaXMtYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0IDAuMnM7XFxuICB9XFxuICAmLm1lbnUtaXMtaW5hY3RpdmUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSAwLjE1cztcXG4gIH1cXG59XFxuXFxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXFxuICBNb2JpbGUgbWVudSBDU1NcXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXFxuXFxuI2NvbnRlbnQyIHtcXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuJHM6IDRweDtcXG5cXG4uYnVyZ2VyLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMHB4O1xcbiAgcmlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogJHMgKiAxMDtcXG4gIGhlaWdodDogJHMgKiA4O1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIC5oYW1idXJnZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZjMDAzO1xcbiAgICB3aWR0aDogJHMgKiAxMDtcXG4gICAgaGVpZ2h0OiAkcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDEwbXMgMjUwbXMgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCRzICogNCk7XFxuXFxuICAgICY6YmVmb3JlLFxcbiAgICAmOmFmdGVyIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMjUwbXMgMzAwbXMgZWFzZSwgdHJhbnNmb3JtIDI1MG1zIGVhc2UsIGJhY2tncm91bmQgMjUwbXMgMzAwbXM7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmMwMDM7XFxuICAgICAgd2lkdGg6ICRzICogMTA7XFxuICAgICAgaGVpZ2h0OiAkcztcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgfVxcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgdG9wOiAkcyAqIC0zO1xcbiAgICB9XFxuXFxuICAgICY6YWZ0ZXIge1xcbiAgICAgIHRvcDogJHMgKiAzO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5tZW51LXRyaWdnZXI6Y2hlY2tlZCB7XFxuICB+IC5idXJnZXItd3JhcHBlciB7XFxuICAgIC5oYW1idXJnZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICY6YWZ0ZXIsXFxuICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDI1MG1zIGVhc2UsIHRyYW5zZm9ybSAyNTBtcyAzMDBtcyBlYXNlLCBiYWNrZ3JvdW5kIDI1MG1zIDMwMG1zO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgIH1cXG4gICAgICAmOmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIH1cXG4gICAgICAmOmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaGFtYnVyZ2VyLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jZmx5b3V0LW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuXFxuICBwYWRkaW5nOiA2cmVtIDAgMCA2cmVtO1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2YjM1MztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAtMThweCAwIDUwcHggLTEwcHg7XFxuXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSkgMC4zcztcXG4gICYudG9nZ2xlZCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuLmhhbWJ1cmdlci1tZW51LWl0ZW0ge1xcbiAgbWFyZ2luOiAzcmVtIDAgMDtcXG4gIG1heC13aWR0aDogODIlO1xcblxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogZmFkZU91dCAwLjQ1cyBlYXNlIGZvcndhcmRzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9nZ2xlZCAuaGFtYnVyZ2VyLW1lbnUtaXRlbSB7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjZzIGVhc2UgZm9yd2FyZHM7XFxuXFxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDUge1xcbiAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4yMnMgKyAoMC4xcyAqICRpKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uaGFtYnVyZ2VyLW1lbnUtaXRlbS5kcm9wZG93biB7XFxuICAmOmFmdGVyIHtcXG4gICAgY29udGVudDogJ+KWvCc7XFxuICAgIGNvbG9yOiAjZmZlY2M4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDE5cHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICB9XFxufVxcblxcbi5oYW1idXJnZXItY29udGVudCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBoZWlnaHQ6IDA7XFxuICBvcGFjaXR5OiAwO1xcblxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuXFxuICBsaSB7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAgMDtcXG5cXG4gICAgYSB7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5pcy1hY3RpdmUgLmhhbWJ1cmdlci1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDFyZW0gMCAwO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5oYW1idXJnZXItdHJpZ2dlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kcm9wZG93biAuaGFtYnVyZ2VyLXRyaWdnZXIgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMCAwIDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlY2E4NjtcXG59XFxuXFxuI21lbnUtYmFja2Ryb3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICB6LWluZGV4OiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyAwLjNzO1xcblxcbiAgJi5zaG93IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgdHJpZ2dlckRyb3Bkb3duID0gZnVuY3Rpb24gdHJpZ2dlckRyb3Bkb3duKCkge1xuICBjb25zdCBuYXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdicpO1xuICBjb25zdCBkcm9wZG93bk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLW1lbnUtaXRlbScpO1xuICBjb25zdCBtZW51QmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tbWVudS1iYWNrZHJvcCcpO1xuICBsZXQgbWVudUlzQWN0aXZlID0gZmFsc2U7XG5cbiAgZHJvcGRvd25NZW51cy5mb3JFYWNoKChtZW51KSA9PiB7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBpc0V4cGFuZGVkID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xuICAgICAgY29uc3QgbWVudUNvbnRlbnQgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250ZW50Jyk7XG4gICAgICBjb25zdCBtZW51SXRlbXMgPSBtZW51Q29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuXG4gICAgICAvLyBTZXRzIGFsbCBtZW51cyBhcmlhLWV4cGFuZGVkIGF0dHJpYnV0ZSB0byBmYWxzZVxuICAgICAgZHJvcGRvd25NZW51cy5mb3JFYWNoKChtZW51KSA9PiB7XG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFNldHMgdGhlIGFjdGl2ZSBtZW51J3MgYXJpYS1leHBhbmRlZCBhdHRyaWJ1dGUgdG8gdHJ1ZVxuICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAhaXNFeHBhbmRlZCk7XG5cbiAgICAgIGlmICghbWVudUlzQWN0aXZlKSB7XG4gICAgICAgIGRyb3Bkb3duTWVudXMuZm9yRWFjaCgobWVudSkgPT4ge1xuICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIG1lbnVCYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdtZW51LWlzLWFjdGl2ZScpO1xuICAgICAgICBtZW51SXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGl0ZW0uc3R5bGUuYW5pbWF0aW9uID0gJyc7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcbiAgICAgICAgICAgICAgLy8gRW5zdXJlIGFuaW1hdGlvbiBvbmx5IHBsYXlzIGZvcndhcmRzIHRvIGtlZXAgZWxlbWVudCB2aXNpYmxlIGFmdGVyIGFuaW1hdGlvblxuICAgICAgICAgICAgICBpdGVtLnN0eWxlLmFuaW1hdGlvbkZpbGxNb2RlID0gJ2ZvcndhcmRzJztcbiAgICAgICAgICAgIH0sIGluZGV4ICogNDApO1xuICAgICAgICAgIH0sIDMyMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJvcGRvd25NZW51cy5mb3JFYWNoKChtZW51KSA9PiB7XG4gICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBuYXZzLmZvckVhY2goKG5hdikgPT4ge1xuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGV2ZW50KSA9PiB7XG4gICAgICBkcm9wZG93bk1lbnVzLmZvckVhY2goKG1lbnUpID0+IHtcbiAgICAgICAgaWYgKG5hdi5jb250YWlucyhtZW51KSkge1xuICAgICAgICAgIGNvbnN0IG1lbnVDb250ZW50ID0gbWVudS5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tY29udGVudCcpO1xuICAgICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IG1lbnVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgICAgICAgY29uc3QgaXRlbUNvdW50ID0gbWVudUl0ZW1zLmxlbmd0aDsgLy8gR2V0IHRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXNcblxuICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZS1pbnRlcmFjdGlvbicpOyAvLyBEaXNhYmxlIGludGVyYWN0aW9uc1xuICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgICAgICAgIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5hbmltYXRpb24gPSAnJztcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIFNldCB0aW1lb3V0IHRvIHJlbW92ZSB0aGUgY2xhc3NlcyBhZnRlciBhbGwgYW5pbWF0aW9ucyBhcmUgY29tcGxldGVcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLW91dCcpO1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1pbicpO1xuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuYW5pbWF0aW9uRmlsbE1vZGUgPSAnJztcblxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IG9mIG1vZGlmaWNhdGlvbnNcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGl0ZW1Db3VudCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgdGhlIGxhc3QgaXRlbVxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1pbnRlcmFjdGlvbicpOyAvLyBSZS1lbmFibGUgaW50ZXJhY3Rpb25zXG4gICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0sIDMwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG1lbnVCYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWlzLWFjdGl2ZScpO1xuICAgICAgbWVudUJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXMtaW5hY3RpdmUnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtZW51QmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pcy1pbmFjdGl2ZScpO1xuICAgICAgfSwgMzUwKTtcblxuICAgICAgbWVudUlzQWN0aXZlID0gZmFsc2U7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCB0cmlnZ2VyRmx5b3V0TWVudSA9IGZ1bmN0aW9uIHRyaWdnZXJGbHlvdXRNZW51KCkge1xuICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlbmF2Jyk7XG4gIGNvbnN0IGZseW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmbHlvdXQtbWVudScpO1xuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWJhY2tkcm9wJyk7XG5cbiAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAoaGFtYnVyZ2VyLmNoZWNrZWQpIHtcbiAgICAgIGlmICghZmx5b3V0LmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlZCcpKSB7XG4gICAgICAgIGZseW91dC5jbGFzc0xpc3QuYWRkKCd0b2dnbGVkJyk7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmx5b3V0LmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZWQnKTtcbiAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyaWdnZXJNb2JpbGVEcm9wZG93biA9IGZ1bmN0aW9uIHRyaWdnZXJNb2JpbGVEcm9wZG93bigpIHtcbiAgY29uc3QgZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhbWJ1cmdlci1tZW51LWl0ZW0uZHJvcGRvd24nKTtcblxuICBkcm9wZG93bnMuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICBkcm9wZG93bnMuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICAgICAgICBpZiAoZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgcGxhY2Vob2xkZXJJbWFnZTEgZnJvbSAnLi9pbWcvYWxlcy1uZXNldHJpbC1JbTdsWmp4ZUxoZy11bnNwbGFzaC5qcGcnO1xuaW1wb3J0IHBsYWNlaG9sZGVySW1hZ2UyIGZyb20gJy4vaW1nL3NvdXJhdi1lay1wbTBPNVlwWGVBby11bnNwbGFzaC5qcGcnO1xuaW1wb3J0IHsgdHJpZ2dlckRyb3Bkb3duIH0gZnJvbSAnLi9kcm9wZG93bi1tZW51JztcbmltcG9ydCB7IHRyaWdnZXJGbHlvdXRNZW51LCB0cmlnZ2VyTW9iaWxlRHJvcGRvd24gfSBmcm9tICcuL21vYmlsZS1tZW51JztcblxudHJpZ2dlckRyb3Bkb3duKCk7XG5jb25zdCBjb250ZW50MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50MScpO1xuY29uc3QgaW1nMSA9IG5ldyBJbWFnZSgpO1xuaW1nMS5zcmMgPSBwbGFjZWhvbGRlckltYWdlMTtcbmNvbnRlbnQxLmFwcGVuZENoaWxkKGltZzEpO1xuXG50cmlnZ2VyRmx5b3V0TWVudSgpO1xudHJpZ2dlck1vYmlsZURyb3Bkb3duKCk7XG5jb25zdCBjb250ZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50MicpO1xuY29uc3QgaW1nMiA9IG5ldyBJbWFnZSgpO1xuaW1nMi5zcmMgPSBwbGFjZWhvbGRlckltYWdlMjtcbmNvbnRlbnQyLmFwcGVuZENoaWxkKGltZzIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9