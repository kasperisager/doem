import test from 'tape';
import {fragment} from '../lib/fragment';
import {find} from '../lib/find';
import {html} from '../lib/html';
import {replace} from '../lib/replace';

test('replaces an element with content', t => {
  const scope = fragment(`
    <div><b></b><s></s></div>
  `);

  const div = find(scope, 'div');
  const b = find(scope, 'b');

  replace(b, '<i></i>');
  t.is(html(div), '<i></i><s></s>');
  t.end();
});

test('throws when replacing an element without a parent', t => {
  const scope = fragment('');

  t.notOk(scope.parentNode);
  t.throws(() => replace(scope, '<div></div>'));
  t.end();
});
