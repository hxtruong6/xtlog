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
## Previous
![xtlog terminal](https://user-images.githubusercontent.com/24609363/101238506-54b53480-3713-11eb-8da2-02d7338050f7.png)

# Roadmap 

| Status   |  Feature            | Description |
| -------  | --------------------| ----------- |
| &#9745;  |  Use `l`,`i`,`w`,`e` to log | `l`,`i`,`w`,`e` alter for `console.log/info/warn/error` |
| &#9745;  |  Make global log style | Apply `console.log` has same style with `xtlog` |
| &#9744;  |  Log with name file | log to console and display which file is logged |
| &#9744;  |  Write to file      | save file when logging      |
| &#9744;  |  Lelve log          | config level show log       |
