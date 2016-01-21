import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import parent from '../lib/parent';

test('gets the parent of an element', t => {
  const scope = fragment(`
    <div id=foo>
      <div id=bar></div>
    </div>
  `);

  const bar = find(scope, '#bar');

  t.is(parent(bar).id, 'foo');
  t.end();
});

test('returns null if no match is found', t => {
  const scope = fragment(`
    <div id=foo></div>
  `);

  const foo = find(scope, '#foo');

  t.is(parent(foo), null);
  t.end();
});
