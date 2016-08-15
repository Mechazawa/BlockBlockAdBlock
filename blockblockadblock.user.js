// ==UserScript==
// @name        blockblockadblock
// @description Blocks BlockAdBlock.js from running
// @namespace   Mechazawa
// @author      Mechazawa
// @include     *
// @version     4
// @license     Unlicense
// @updateURL   https://github.com/Mechazawa/BlockBlockAdBlock/raw/master/BlockBlockAdBlock.user.js
// @run-at      document-start
// @grant       none
// ==/UserScript==



// I have a bunch more ways of detecting it in case this method ever gets blocked
(function(window) {
    var windowKeysDefault = Object.keys(window);
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    var pivot = 'Ly93d3cuZ29vZ2xlLmNvbS9hZHNlbnNlL3N0YXJ0L2ltYWdlcy9mYXZpY29uLmljbw==';

    document.addEventListener('DOMContentLoaded', function() {
        var windowKeysSuspect = Object.keys(window)
            .filter(function(x){return windowKeysDefault.indexOf(x) === -1 && x.length == 12;});

        for(var i = 0; i < windowKeysSuspect.length; i++) {
            var suspectName = windowKeysSuspect[i];

            if(isFirefox) {
                var suspect = window[suspectName];
                var suspectKeys = Object.keys(suspect);
                var found = false;

                for (var ii in suspectKeys) {
                    var source = suspect[suspectKeys[ii]].toSource();
                    found = source.indexOf(pivot) !== -1;

                    if (found) break;
                }
            } else {
                found = /\D\d\D/.exec(suspectName) !== null;
            }

            if(found) {
                console.log('Found BlockAdBlock with name ' + suspectName);
                delete window[suspectName];
            }
        }
    });
})(window);
