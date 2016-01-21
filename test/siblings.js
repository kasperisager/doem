import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import siblings from '../lib/siblings';

test('gets the siblings of an element', t => {
  const scope = fragment(`
    <div class=foo></div>
    <div class=bar></div>
    <div class=baz>
      <span></span>
    </div>
  `);

  const foo = find(scope, '.foo');
  const bar = find(scope, '.bar');
  const baz = find(scope, '.baz');

  const _siblings = siblings(bar);

  t.is(_siblings.length, 2);
  t.is(_siblings[0], foo);
  t.is(_siblings[1], baz);
  t.end();
});

test('can filter by a selector', t => {
  const scope = fragment(`
    <div class=foo></div>
    <div></div>
    <div class=bar></div>
  `);

  const foo = find(scope, '.foo');
  const bar = find(scope, '.bar');

  const _siblings = siblings(foo, '.bar');

  t.is(_siblings.length, 1);
  t.is(_siblings[0], bar);
  t.end();
});

test('throws when getting the siblings of an element without a parent', t => {
  const scope = fragment('');

  t.notOk(scope.parentNode);
  t.throws(() => siblings(scope));
  t.end();
});
