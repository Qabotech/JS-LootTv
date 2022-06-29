// ==UserScript==
// @name         loot.tv
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://loot.tv/rewardedtv
// @icon         https://www.google.com/s2/favicons?sz=64&domain=loot.tv
// @grant        none
// ==/UserScript==




setInterval(function() {

let el = document.querySelector(".rewardedtv_playButtonWrapper__JPHsP")

el.click();

}, 5 * 1000);

setInterval(function() {
  location.reload()
}, 20 * 1000);

setInterval(function() {
  document.querySelector('video').defaultPlaybackRate = 3.0;
}, 1000);

