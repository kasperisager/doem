import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {html} from '../lib/html';
import {append} from '../lib/append';

test('inserts content at the end of an element', t => {
  const scope = fragment(`
    <div><span>foo</span></div>
  `);

  const div = find(scope, 'div');
  const span = find(scope, 'span');

  append(span, 'bar');
  t.is(html(div), '<span>foobar</span>');
  t.end();
});
