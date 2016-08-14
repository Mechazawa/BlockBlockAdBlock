// ==UserScript==
// @name        blockblockadblock
// @namespace   Mechazawa
// @include     https://blockadblock.com/*
// @include     https://mindgamer.com/*
// @version     1
// @grant       none
// @run-at      document-start
// ==/UserScript==



// This is very dirty and should not be used
// I've found a more reliable vuln that I'll be exploiting soon
(function(window) {
    var windowKeysDefault = Object.keys(window);
    var suspects = {};

    window.getSuspects = function() { return suspects;}

    document.addEventListener('DOMContentLoaded', function() {
        var windowKeysSuspect = Object.keys(window)
            .filter(function(x){return windowKeysDefault.indexOf(x) === -1 && x.length == 12;});

        for(var i = 0; i < windowKeysSuspect.length; i++) {
            var suspectName = windowKeysSuspect[i];
            var suspect = window[suspectName];
            var suspectKeys = Object.keys(suspect);
            var found = false;


            suspects[suspectName] = suspect;

            for(var ii in suspectKeys) {
                found = suspect[suspectKeys[ii]].toSource().indexOf('aW5zLmFkc2J5Z29vZ2xl') !== -1;
                if(found) break;
            }

            if(found) {
                console.log('Found BlockAdBlock with name ' + suspectName);
                delete window[suspectName];
            }
        }
    });
})(window);