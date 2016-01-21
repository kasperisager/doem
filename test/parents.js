import test from 'tape';
import fragment from '../lib/fragment';
import find from '../lib/find';
import parents from '../lib/parents';

test('gets the parents of an element', t => {
  const scope = fragment(`
    <div id=foo>
      <div id=bar>
        <span></span>
      </div>
    </div>
  `);

  const element = find(scope, 'span');

  const _parents = parents(element);

  t.is(_parents.length, 2);
  t.is(_parents[0].id, 'bar');
  t.is(_parents[1].id, 'foo');
  t.end();
});
