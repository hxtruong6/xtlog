const {
  l, i, w, e,
} = require('./log');

// l('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz' } }, true);
// i('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz' } });
// w('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz' } });
// e('truong', [1, 2, 3], 100, { a: 123, b: { b1: 'xyz', b2: { b3: [1, 2, 3], b31: 'gdfg' } } });

exports.l = l;
exports.i = i;
exports.w = w;
exports.e = e;
