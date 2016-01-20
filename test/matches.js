import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import matches from '../lib/matches';

test('checks if an element matches a selector', t => {
  const scope = fragment(`
    <div class="foo"><span class="bar"></span></div>
  `);

  const element = find(scope, '.bar');

  t.true(matches(element, '.foo .bar'));
  t.false(matches(element, '.baz'));
  t.end();
});
