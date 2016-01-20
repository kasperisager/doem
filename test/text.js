import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import text from '../lib/text';

test('gets the text content of an element', t => {
  const scope = fragment(`
    <div>foo <span>bar</span></div>
  `);

  const element = find(scope, 'div');

  t.is(text(element), 'foo bar');
  t.end();
});
