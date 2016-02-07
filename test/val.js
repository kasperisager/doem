import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import val from '../lib/val';

test('gets the value of an element', t => {
  const scope = fragment(`
    <input class=foo value=foo>
    <input class=bar>
  `);

  const foo = find(scope, '.foo');
  const bar = find(scope, '.bar');

  t.is(val(foo), 'foo');
  t.is(val(bar), '');
  t.end();
});

test('sets the value of an element', t => {
  const scope = fragment(`
    <input class=foo value=foo>
    <input class=bar>
  `);

  const foo = find(scope, '.foo');
  const bar = find(scope, '.bar');

  val(foo, 'baz');
  val(bar, 'bar');

  t.is(val(foo), 'baz');
  t.is(val(bar), 'bar');
  t.end();
});
