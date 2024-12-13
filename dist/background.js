/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.js ***!
  \**************************************/
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message);
  sendResponse("From the background script");
});
/******/ })()
;
//# sourceMappingURL=background.js.map