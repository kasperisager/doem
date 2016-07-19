import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {next} from '../lib/next';

test('gets the succeeding sibling of an element', t => {
  const scope = fragment(`
    <div id=foo></div>
    <div id=bar></div>
  `);

  const foo = find(scope, '#foo');

  t.is(next(foo).id, 'bar');
  t.end();
});

test('returns null if no match is found', t => {
  const scope = fragment(`
    <div id=foo></div>
  `);

  const foo = find(scope, '#foo');

  t.is(next(foo), null);
  t.end();
});
