// ==UserScript==
// @name        blockblockadblock
// @description Blocks BlockAdBlock.js from running
// @namespace   Mechazawa
// @author      Mechazawa
// @include     *
// @version     2
// @license     Unlicense
// @updateURL   https://github.com/Mechazawa/BlockBlockAdBlock/raw/master/blockblockadblock.user.js
// @run-at      document-start
// @grant       none
// ==/UserScript==



// This is very dirty and should not be used
// I've found a more reliable vuln that I'll be exploiting soon
(function(window) {
    var windowKeysDefault = Object.keys(window);
    var suspects = {};

    var pivot = 'Ly93d3cuZ29vZ2xlLmNvbS9hZHNlbnNlL3N0YXJ0L2ltYWdlcy9mYXZpY29uLmljbw=='

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
                var source = suspect[suspectKeys[ii]].toSource();

                found = source.indexOf(pivot) !== -1;
                if(found) break;
            }

            if(found) {
                console.log('Found BlockAdBlock with name ' + suspectName);
                delete window[suspectName];
            }
        }
    });
})(window);