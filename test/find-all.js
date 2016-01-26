import test from 'tape';
import fragment from '../lib/fragment';
import findAll from '../lib/find-all';

test('queries all elements by a selector', t => {
  const scope = fragment(`
    <div>
      <span id=1 class=foo></span>
      <span id=2 class=foo></span>
      <span id=3 class=bar></span>
    </div>
  `);

  const elements = findAll(scope, 'div span.foo');

  t.is(elements.length, 2);

  const [one, two] = elements;

  t.is(one.id, '1');
  t.is(two.id, '2');
  t.end();
});

test('returns an empty result if no matches are found', t => {
  const scope = fragment(`
    <div class=foo></div>
  `);

  const elements = findAll(scope, '.bar');

  t.ok(elements);
  t.is(elements.length, 0);
  t.end();
});
