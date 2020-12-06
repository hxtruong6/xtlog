const xtlog = require('.');
const {
  l, i, w, e,
} = require('.');

// l('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz' } }, true);
// i('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz' } });
// w('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz' } });
// e('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz', b2: { b3: [1, 2, 3], b31: 'gdfg' } } });

// console.log('NOT APLLy');
// console.log('abc');
// xtlog.apply();
// console.log('abc');
// xtlog.i('def', 123);
// console.warn('ijk', 456, false);
xtlog.i('This is text for logging', 12345, true, [-11, -22, 33, 44], { key1: 321, key2: { key2_1: 'xyz', key2_2: 56789, key3: ["abc", 123, false], key4: "text_text" } });
