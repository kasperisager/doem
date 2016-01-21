import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import closest from '../lib/closest';

test('gets the closest ascending element matching a selector', t => {
  const scope = fragment(`
    <div id=1 class=foo>
      <div id=2 class=foo>
        <div id=3 class=bar>
          <span></span>
        </div>
      </div>
    </div>
  `);

  const element = find(scope, 'span');

  t.is(closest(element, '.foo').id, '2');
  t.end();
});

test('returns null if no match is found', t => {
  const scope = fragment(`
    <div class=foo></div>
  `);

  const element = find(scope, '.foo');

  t.is(closest(element, '.bar'), null);
  t.end();
});
