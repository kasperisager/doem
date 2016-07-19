import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {html} from '../lib/html';
import {after} from '../lib/after';

test('inserts content after an element', t => {
  const scope = fragment(`
    <div><span>foo</span></div>
  `);

  const div = find(scope, 'div');
  const span = find(scope, 'span');

  after(span, 'bar');
  t.is(html(div), '<span>foo</span>bar');
  t.end();
});
