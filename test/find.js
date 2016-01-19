import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';

test('queries an element by a selector', t => {
  const scope = fragment(`
    <div>
      <span id=foo class=bar></span>
    </div>
  `);

  const element = find(scope, 'div span#foo.bar');

  t.is(element.id, 'foo');
  t.end();
});

test('returns null if no match is found', t => {
  const scope = fragment(`
    <div class=foo></div>
  `);

  const element = find(scope, '.bar');

  t.is(element, null);
  t.end();
});
