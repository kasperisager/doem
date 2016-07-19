import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {html} from '../lib/html';
import {prepend} from '../lib/prepend';

test('inserts content at the beginning of an element', t => {
  const scope = fragment(`
    <div><span>foo</span></div>
  `);

  const div = find(scope, 'div');
  const span = find(scope, 'span');

  prepend(span, 'bar');
  t.is(html(div), '<span>barfoo</span>');
  t.end();
});
