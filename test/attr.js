import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import attr from '../lib/attr';

test('gets the value of string attributes', t => {
  const scope = fragment(`
    <div key=value></div>
  `);

  const element = find(scope, 'div');

  t.is(attr(element, 'key'), 'value');
  t.end();
});

test('gets false when an attribute does not exist', t => {
  const scope = fragment(`
    <div></div>
  `);

  const element = find(scope, 'div');

  t.is(attr(element, 'key'), false);
  t.end();
});

test('gets the value of boolean attributes as booleans', t => {
  const scope = fragment(`
    <div foo bar=bar></div>
  `);

  const element = find(scope, 'div');

  t.true(attr(element, 'foo'));
  t.true(attr(element, 'bar'));
  t.end();
});

test('sets the value of a string attribute', t => {
  const scope = fragment(`
    <div foo bar=bar></div>
  `);

  const element = find(scope, 'div');

  attr(element, 'key', 'value');
  t.is(attr(element, 'key'), 'value');
  t.end();
});

test('sets the value of a boolean attribute', t => {
  const scope = fragment(`
    <div></div>
  `);

  const element = find(scope, 'div');

  attr(element, 'boolean', true);
  t.true(attr(element, 'boolean'));

  attr(element, 'boolean', false);
  t.false(attr(element, 'boolean'));
  t.end();
});
