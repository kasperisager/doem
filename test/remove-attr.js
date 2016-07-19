import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {attr} from '../lib/attr';
import {removeAttr} from '../lib/remove-attr';

test('removes an attribute from an element', t => {
  const scope = fragment(`
    <div key=value></div>
  `);

  const element = find(scope, 'div');

  t.is(attr(element, 'key'), 'value');
  removeAttr(element, 'key');
  t.is(attr(element, 'key'), null);
  t.end();
});
