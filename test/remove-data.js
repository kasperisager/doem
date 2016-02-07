import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import data from '../lib/data';
import removeData from '../lib/remove-data';

test('removes a data attribute from an element', t => {
  const scope = fragment(`
    <div data-foo=bar></div>
  `);

  const element = find(scope, 'div');

  t.is(data(element, 'foo'), 'bar');
  removeData(element, 'foo');
  t.is(data(element, 'foo'), null);
  t.end();
});
