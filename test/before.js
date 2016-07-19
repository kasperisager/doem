import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {html} from '../lib/html';
import {before} from '../lib/before';

test('inserts content before an element', t => {
  const scope = fragment(`
    <div><span>foo</span></div>
  `);

  const div = find(scope, 'div');
  const span = find(scope, 'span');

  before(span, 'bar');
  t.is(html(div), 'bar<span>foo</span>');
  t.end();
});
