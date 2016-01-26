import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import attr from '../lib/attr';
import removeAttr from '../lib/removeAttr';

test('removes an attribute from an element', t => {
  const document = fragment(`
    <div key=value></div>
  `);

  const element = find(document, 'div');

  t.is(attr(element, 'key'), 'value');
  removeAttr(element, 'key');
  t.is(attr(element, 'key'), null);
  t.end();
});
