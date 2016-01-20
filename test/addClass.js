import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import addClass from '../lib/addClass';

test('adds a class to an element', t => {
  const scope = fragment(`
    <div></div>
  `);

  const element = find(scope, 'div');

  addClass(element, 'foo');
  t.is(element.className, 'foo');

  addClass(element, 'bar');
  t.is(element.className, 'foo bar');
  t.end();
});
