import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import prev from '../lib/prev';

test('gets the preceeding sibling of an element', t => {
  const scope = fragment(`
    <div id=foo></div>
    <div id=bar></div>
  `);

  const bar = find(scope, '#bar');

  t.is(prev(bar).id, 'foo');
  t.end();
});

test('can filter by a selector', t => {
  const scope = fragment(`
    <div id=foo></div>
    <div id=bar></div>
  `);

  const bar = find(scope, '#bar');

  t.is(prev(bar, '#foo').id, 'foo');
  t.end();
});

test('returns null if no match is found', t => {
  const scope = fragment(`
    <div id=foo></div>
    <div id=bar></div>
  `);

  const foo = find(scope, '#foo');
  const bar = find(scope, '#bar');

  t.is(prev(foo), null);
  t.is(prev(bar, '#bar'), null);
  t.end();
});
