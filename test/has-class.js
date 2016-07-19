import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {hasClass} from '../lib/has-class';

test('checks if an element has a class', t => {
  const scope = fragment(`
    <div class="foo bar"></div>
  `);

  const element = find(scope, 'div');

  t.true(hasClass(element, 'foo'));
  t.true(hasClass(element, 'bar'));
  t.false(hasClass(element, 'baz'));
  t.end();
});
