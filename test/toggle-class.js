import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import toggleClass from '../lib/toggle-class';

test('adds or removes a class from an element based on presence', t => {
  const scope = fragment(`
    <div></div>
  `);

  const element = find(scope, 'div');

  toggleClass(element, 'foo');
  t.is(element.className, 'foo');

  toggleClass(element, 'foo');
  t.is(element.className, '');
  t.end();
});
