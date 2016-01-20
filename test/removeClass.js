import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import removeClass from '../lib/removeClass';

test('removes a class from an element', t => {
  const scope = fragment(`
    <div class="foo bar"></div>
  `);

  const element = find(scope, 'div');

  removeClass(element, 'foo');
  t.is(element.className, 'bar');

  removeClass(element, 'bar');
  t.is(element.className, '');
  t.end();
});
