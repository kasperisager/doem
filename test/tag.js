import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {tag} from '../lib/tag';

test('gets the tag name of an element', t => {
  const scope = fragment(`
    <div class=foo></div>
    <span class=bar></span>
    <h3 class=baz></h3>
  `);

  const foo = find(scope, '.foo');
  const bar = find(scope, '.bar');
  const baz = find(scope, '.baz');

  t.is(tag(foo), 'div');
  t.is(tag(bar), 'span');
  t.is(tag(baz), 'h3');
  t.end();
});
