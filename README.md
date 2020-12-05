# XTLOG

## Install
`npm install xtlog --save`

## Using
```js
const {l, i, w, e} = require('xtlog');

l('This is log: ', 'ab', 123, [4, 5, 6], true, { c: 'de', f: 78 });
i('This is info: ', 'ab', 123, [4, 5, 6], true, { c: 'de', f: 78 });
w('This is warn: ', 'ab', 123, [4, 5, 6], true, { c: 'de', f: 78 });
e('This is error: ', 'ab', 123, [4, 5, 6], true, { c: 'de', f: 78 });
```

If you want to overide `console.log`:
```js
require('xtlog').apply();
```

# Roadmap 
|Feature| Description|
|Log with name file| log to console and display which file is logged
|Write to file| save file when logging|
|Lelve log| config level show log|
