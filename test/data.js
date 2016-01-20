import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import data from '../lib/data';

test('gets the value of a data attribute', t => {
  const scope = fragment(`
    <div data-foo=bar></div>
  `);

  const element = find(scope, 'div');

  t.is(data(element, 'foo'), 'bar');
  t.end();
});

test('sets the value of a data attribute', t => {
  const scope = fragment(`
    <div></div>
  `);

  const element = find(scope, 'div');

  data(element, 'foo', 'bar');
  t.is(data(element, 'foo'), 'bar');
  t.end();
});
