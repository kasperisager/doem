import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import html from '../lib/html';
import empty from '../lib/empty';

test('removes all children of an element', t => {
  const scope = fragment(`
    <div>foo <span>bar</span></div>
  `);

  const element = find(scope, 'div');
  t.ok(html(element));

  empty(element);
  t.is(html(element), '');
  t.end();
});
