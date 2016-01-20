import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import contains from '../lib/contains';

test('checks if an element is a descendant of another element', t => {
  const scope = fragment(`
    <div class=foo>
      <div class=bar>
        <div class=baz></div>
      </div>
    </div>
    <span></span>
  `);

  const foo = find(scope, '.foo');
  const bar = find(scope, '.bar');
  const baz = find(scope, '.baz');
  const span = find(scope, 'span');

  t.true(contains(foo, bar));
  t.true(contains(foo, baz));
  t.false(contains(foo, span));
  t.end();
});
