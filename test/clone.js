import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import tag from '../lib/tag';
import html from '../lib/html';
import clone from '../lib/clone';

test('creates a deep copy of an element', t => {
  const scope = fragment(`
    <div><span></span></div>
  `);

  const element = find(scope, 'div');
  const copy = clone(element);

  t.not(copy, element);
  t.is(tag(copy), 'div');
  t.is(html(copy), '<span></span>');
  t.end();
});
