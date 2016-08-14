// ==UserScript==
// @name        blockblockadblock
// @namespace   Mechazawa
// @include     https://blockadblock.com/*
// @version     1
// @grant       none
// @run-at      document-start
// ==/UserScript==


(function(window) {
    var windowKeysDefault = Object.keys(window);
    var windowKeysOdd = [];

    document.addEventListener('DOMContentLoaded', function() {
        var windowKeysOdd = Object.keys(window).filter(function(x){return windowKeysDefault.indexOf(x) === -1 && x.length == 12;});

        console.log(windowKeysOdd);
        delete window[windowKeysOdd[0]];
    });
})(window);