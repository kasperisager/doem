import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {attr} from '../lib/attr';

test('gets the value of an attribute', t => {
  const scope = fragment(`
    <div key=value></div>
  `);

  const element = find(scope, 'div');

  t.is(attr(element, 'key'), 'value');
  t.end();
});

test('sets the value of an attribute', t => {
  const scope = fragment(`
    <div foo bar=bar></div>
  `);

  const element = find(scope, 'div');

  attr(element, 'key', 'value');
  t.is(attr(element, 'key'), 'value');
  t.end();
});
