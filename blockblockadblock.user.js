// ==UserScript==
// @name        blockblockadblock
// @namespace   Mechazawa
// @include     https://blockadblock.com/*
// @version     1
// @grant       none
// @run-at      document-start
// ==/UserScript==



// This is very dirty and should not be used
// I've found a more reliable vuln that I'll be exploiting soon
(function(window) {
    var windowKeysDefault = Object.keys(window);

    document.addEventListener('DOMContentLoaded', function() {
        var windowKeysSuspect = Object.keys(window)
            .filter(function(x){return windowKeysDefault.indexOf(x) === -1 && x.length == 12;})
            .filter(function(x){return /\D\d\D/.exec(x) !== null;});

        for(var i = 0; i < windowKeysSuspect.length; i++) {
            delete window[windowKeysSuspect[i]];
        }

        console.log("Found and deleted suspect keys: " + windowKeysSuspect.join(','));
    });
})(window);