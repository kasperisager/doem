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

test('queries an element by ID', t => {
  const scope = fragment(`
    <div id=foo class=bar></div>
    <div id=foo class=baz></div>
  `);

  const element = find(scope, '#foo');

  t.is(element.className, 'bar');
  t.end();
});

test('queries an element by class', t => {
  const scope = fragment(`
    <div id=bar class=foo></div>
    <div id=baz class=foo></div>
  `);

  const element = find(scope, '.foo');

  t.is(element.id, 'bar');
  t.end();
});

test('queries an element by plain tag', t => {
  const scope = fragment(`
    <div class=foo></div>
    <div class=bar></div>
  `);

  const element = find(scope, 'div');

  t.is(element.className, 'foo');
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
