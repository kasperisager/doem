import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import html from '../lib/html';
import unwrap from '../lib/unwrap';

test('removes the parent of an element', t => {
  const scope = fragment(`
    <div><i><b></b><s></s></i></div>
  `);

  const div = find(scope, 'div');
  const b = find(scope, 'b');

  unwrap(b);
  t.is(html(div), '<b></b><s></s>');
  t.end();
});
