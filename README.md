BlockBlockAdBlock
=================

This simple userscript will block BlockAdBlock from running. Just install it using [Tampermonkey][tampermonkey] 
(chrome) or [Greasemonkey][greasemonkey] (Firefox) by clicking [here][raw]. You can try it out on 
[the BlockAdblock website][blockadblock]. [It's kinda like a trace buster buster][tracebusterbuster].

Also check out [FuckFuckAdBlock][FuckFuckAdBlock].

## Unreliable in chrome and safari
This is due to the fact that the `.toSource()` method in those browsers is terrible and they should be ashamed. Instead
I'm using a method that is not as reliable.

## This script will only counter [BlockAdBlock.js][blockadblock] and is not a general purpose anti-anti-adblocker


[blockadblock]: https://blockadblock.com
[tracebusterbuster]: http://www.youtube.com/watch?v=Iw3G80bplTg
[tampermonkey]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
[greasemonkey]: https://addons.mozilla.org/nl/firefox/addon/greasemonkey/
[raw]: https://github.com/Mechazawa/BlockBlockAdBlock/raw/master/blockblockadblock.user.js
[fuckfuckadblock]: https://github.com/Mechazawa/FuckFuckAdBlock
