import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import remove from '../lib/remove';

test('removes an element from its context', t => {
  const scope = fragment(`
    <div>
      <span></span>
    </div>
  `);

  const element = find(scope, 'span');
  t.ok(element);

  remove(element);

  t.is(find(scope, 'span'), null);
  t.end();
});

test('throws when removing an element without a parent', t => {
  const scope = fragment('');

  t.notOk(scope.parentNode);
  t.throws(() => remove(scope));
  t.end();
});
