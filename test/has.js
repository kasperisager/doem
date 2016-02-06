import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import has from '../lib/has';

test('checks if an element has a descendant matching a selector', t => {
  const document = fragment(`
    <div class=foo>
      <div class=bar>
        <div class=baz></div>
      </div>
    </div>
  `);

  const foo = find(document, '.foo');
  const bar = find(document, '.bar');

  t.true(has(foo, '.bar'));
  t.true(has(foo, '.baz'));
  t.false(has(bar, '.foo'));
  t.end();
});
