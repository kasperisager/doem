import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {children} from '../lib/children';

test('gets all the direct descendants of an element', t => {
  const scope = fragment(`
    <div class=foo>
      <div class=bar>
        <span></span>
      </div>
      <div class=baz></div>
    </div>
  `);

  const foo = find(scope, '.foo');
  const bar = find(scope, '.bar');
  const baz = find(scope, '.baz');

  const _children = children(foo);

  t.is(_children.length, 2);
  t.is(_children[0], bar);
  t.is(_children[1], baz);
  t.end();
});
