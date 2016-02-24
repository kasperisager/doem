import test from 'tape';
import fragment from '../lib/fragment';
import findAll from '../lib/find-all';

test('queries all elements by a selector', t => {
  const scope = fragment(`
    <div>
      <span id=foo class=foo></span>
      <span id=bar class=foo></span>
      <span id=baz class=bar></span>
    </div>
  `);

  const elements = findAll(scope, 'div span.foo');

  t.is(elements.length, 2);

  const [one, two] = elements;

  t.is(one.id, 'foo');
  t.is(two.id, 'bar');
  t.end();
});

test('queries all elements by ID', t => {
  const scope = fragment(`
    <div id=foo class=bar></div>
    <div id=foo class=baz></div>
  `);

  const elements = findAll(scope, '#foo');

  t.is(elements.length, 2);

  const [one, two] = elements;

  t.is(one.className, 'bar');
  t.is(two.className, 'baz');
  t.end();
});

test('queries all elements by plain tags', t => {
  const scope = fragment(`
    <div class=foo></div>
    <div class=bar></div>
  `);

  const elements = findAll(scope, 'div');

  t.is(elements.length, 2);

  const [one, two] = elements;

  t.is(one.className, 'foo');
  t.is(two.className, 'bar');
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
