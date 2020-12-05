const xtlog = require('.');
const {
  l, i, w, e,
} = require('.');

l('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz' } }, true);
i('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz' } });
w('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz' } });
e('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz', b2: { b3: [1, 2, 3], b31: 'gdfg' } } });

console.log('NOT APLLy');
console.log('abc');
xtlog.apply();
console.log('abc');
xtlog.i('def', 123);
console.warn('ijk', 456, false);
xtlog.e('lmn', 789, true, { key1: 321, key2: { key2_1: 'xyz', key2_2: 56 } });
